import { NextResponse } from "next/server";
import { Resend } from "resend";

// Eine Route für alle Anfragen der Website (Rückruf, Pflegegrad-Rechner, später Anfrage-Funnel).
// Benötigte Umgebungsvariablen in Vercel:
// RESEND_API_KEY  – API-Key aus Resend
// MAIL_FROM       – verifizierter Absender, z. B. "TwinsCare Website <website@twinscare-pflegedienst.de>"
// MAIL_TO         – Empfänger der Anfragen, mehrere mit Komma getrennt

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const str = (v: unknown, max = 200) => String(v ?? "").trim().slice(0, max);
const yes = (v: unknown) => v === "on" || v === true || v === "true";

type Feld = [label: string, wert: string];

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: Bots füllen das versteckte Feld aus
  if (str(b.firma) !== "") return NextResponse.json({ ok: true });

  const typ = str(b.typ, 30);
  const name = str(b.name, 120);
  const telefon = str(b.telefon, 40);
  const email = str(b.email, 160);
  const plz = str(b.plz, 10);

  if (!name || telefon.replace(/\D/g, "").length < 6) {
    return NextResponse.json({ error: "Bitte geben Sie Ihren Namen und eine Telefonnummer an." }, { status: 422 });
  }
  if (!yes(b.einwilligung)) {
    return NextResponse.json({ error: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." }, { status: 422 });
  }

  let betreff: string;
  const felder: Feld[] = [
    ["Name", name],
    ["Telefon", telefon],
  ];

  if (typ === "pflegegrad") {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse an." }, { status: 422 });
    }
    if (!/^\d{5}$/.test(plz)) {
      return NextResponse.json({ error: "Bitte geben Sie eine fünfstellige Postleitzahl an." }, { status: 422 });
    }
    if (!yes(b.gesundheitsdaten)) {
      return NextResponse.json(
        { error: "Bitte stimmen Sie der Verarbeitung der Angaben zur Pflegesituation zu." },
        { status: 422 }
      );
    }
    betreff = `Pflegegrad-Rechner: ${name} (${plz})`;
    felder.push(
      ["E-Mail", email],
      ["PLZ", plz],
      ["Selbstständigkeit", str(b.selbststaendigkeit)],
      ["Vergesslichkeit / Orientierung", str(b.orientierung)],
      ["Pflegegrad vorhanden", str(b.pflegegrad)],
      ["Angezeigte Einschätzung", str(b.einschaetzung)],
      ["Quelle", "Startseite, Pflegegrad-Rechner"]
    );
    const details = str(b.details, 4000);
    if (details) felder.splice(felder.length - 1, 0, ["Antworten im Rechner", details]);
    if (str(b.quelle)) felder[felder.length - 1] = ["Quelle", str(b.quelle)];
  } else if (typ === "anfrage") {
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Bitte prüfen Sie Ihre E-Mail-Adresse." }, { status: 422 });
    }
    if (!yes(b.gesundheitsdaten)) {
      return NextResponse.json(
        { error: "Bitte stimmen Sie der Verarbeitung der Angaben zur Pflegesituation zu." },
        { status: 422 }
      );
    }
    betreff = `Pflegeanfrage: ${name}${plz ? ` (${plz})` : ""}`;
    felder.push(
      ["E-Mail", email || "–"],
      ["Für wen", str(b.fuerWen)],
      ["Gewünschte Hilfe", str(b.hilfe, 400)],
      ["Pflegegrad", str(b.pflegegrad)],
      ["PLZ / Ort", `${plz} ${str(b.ort, 80)}`.trim()],
      ["Gewünschter Beginn", str(b.beginn)],
      ["Wohnsituation", str(b.wohnsituation)],
      ["Rückruf", str(b.zeit, 30) || "Egal"],
      ["Nachricht", str(b.nachricht, 2000) || "–"],
      ["Quelle", str(b.quelle, 120) || "Anfrage-Formular"]
    );
  } else if (typ === "rueckruf") {
    betreff = `Rückrufwunsch: ${name}`;
    felder.push(["Erreichbar", str(b.zeit, 30) || "Egal"], ["Quelle", str(b.quelle, 120) || "Rückruf-Formular"]);
  } else {
    return NextResponse.json({ error: "Unbekannter Anfragetyp." }, { status: 400 });
  }

  const { RESEND_API_KEY, MAIL_FROM, MAIL_TO } = process.env;
  if (!RESEND_API_KEY || !MAIL_FROM || !MAIL_TO) {
    console.error("Resend ist nicht konfiguriert (RESEND_API_KEY, MAIL_FROM, MAIL_TO).");
    return NextResponse.json(
      { error: "Das Formular ist gerade nicht erreichbar. Bitte rufen Sie uns direkt an." },
      { status: 503 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: MAIL_FROM,
    to: MAIL_TO.split(",").map((s) => s.trim()),
    replyTo: email || undefined,
    subject: betreff,
    text: `${betreff}\n\n${felder.map(([k, v]) => `${k}: ${v}`).join("\n")}\n`,
    html: `<h2 style="font-family:Arial,sans-serif;color:#123765">${esc(betreff)}</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">
${felder.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v)}</td></tr>`).join("\n")}
</table>`,
  });

  if (error) {
    console.error("Resend-Fehler:", error);
    return NextResponse.json(
      { error: "Die Nachricht wurde nicht gesendet. Bitte rufen Sie uns direkt an." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
