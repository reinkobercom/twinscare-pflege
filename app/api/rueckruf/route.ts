import { NextResponse } from "next/server";
import { Resend } from "resend";

// Benötigte Umgebungsvariablen in Vercel:
// RESEND_API_KEY  – API-Key aus Resend
// MAIL_FROM       – verifizierter Absender, z. B. "TwinsCare Website <website@twinscare-pflegedienst.de>"
// MAIL_TO         – Empfänger der Anfragen, z. B. "info@twinscare-pflegedienst.de"

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Honeypot: Bots füllen das versteckte Feld aus
  if (typeof body.firma === "string" && body.firma.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const telefon = String(body.telefon ?? "").trim().slice(0, 40);
  const zeit = String(body.zeit ?? "Egal").trim().slice(0, 30);
  const einwilligung = body.einwilligung === "on" || body.einwilligung === true;

  if (!name || telefon.replace(/\D/g, "").length < 6) {
    return NextResponse.json({ error: "Bitte geben Sie Ihren Namen und eine Telefonnummer an." }, { status: 422 });
  }
  if (!einwilligung) {
    return NextResponse.json({ error: "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu." }, { status: 422 });
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
    subject: `Rückrufwunsch von ${name}`,
    text: `Neuer Rückrufwunsch über die Website\n\nName: ${name}\nTelefon: ${telefon}\nErreichbar: ${zeit}\nQuelle: Startseite, Rückruf-Formular\n`,
    html: `<h2>Neuer Rückrufwunsch über die Website</h2>
<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:15px">
<tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
<tr><td><b>Telefon</b></td><td><a href="tel:${esc(telefon.replace(/\s/g, ""))}">${esc(telefon)}</a></td></tr>
<tr><td><b>Erreichbar</b></td><td>${esc(zeit)}</td></tr>
<tr><td><b>Quelle</b></td><td>Startseite, Rückruf-Formular</td></tr>
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
