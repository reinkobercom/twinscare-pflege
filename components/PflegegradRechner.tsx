"use client";

import { useState } from "react";
import { sendeAnfrage, fehlertext } from "@/lib/lead";

// Vereinfachte Orientierung an den sechs Modulen der Begutachtung (NBA). Keine verbindliche Einstufung.
const SKALA = ["Selbstständig", "Überwiegend selbstständig", "Überwiegend unselbstständig", "Unselbstständig"];
const HAEUFIG = ["Nie", "Selten", "Häufig", "Täglich"];

type Frage = { modul: number; frage: string; optionen: string[] };
const module = [
  { name: "Mobilität", gewicht: 10 },
  { name: "Geistige Fähigkeiten und Verhalten", gewicht: 15 },
  { name: "Selbstversorgung", gewicht: 40 },
  { name: "Umgang mit Krankheit und Therapie", gewicht: 20 },
  { name: "Alltagsleben und soziale Kontakte", gewicht: 15 },
];
const fragen: Frage[] = [
  { modul: 0, frage: "Wie gut kann sich die Person in der Wohnung fortbewegen?", optionen: SKALA },
  { modul: 0, frage: "Wie gut gelingt das Treppensteigen?", optionen: SKALA },
  { modul: 1, frage: "Wie gut erkennt die Person Angehörige und weiß, welcher Tag ist?", optionen: SKALA },
  { modul: 1, frage: "Gibt es Unruhe in der Nacht, Ängste oder abwehrendes Verhalten?", optionen: HAEUFIG },
  { modul: 2, frage: "Wie selbstständig gelingt Waschen und Duschen?", optionen: SKALA },
  { modul: 2, frage: "Wie selbstständig gelingt das An- und Auskleiden?", optionen: SKALA },
  { modul: 2, frage: "Wie selbstständig gelingt Essen und Trinken?", optionen: SKALA },
  { modul: 2, frage: "Wie selbstständig gelingt der Toilettengang?", optionen: SKALA },
  { modul: 3, frage: "Braucht die Person Hilfe bei Medikamenten, Insulin oder Verbänden?", optionen: HAEUFIG },
  { modul: 3, frage: "Braucht die Person Begleitung zu Arztbesuchen oder Therapien?", optionen: HAEUFIG },
  { modul: 4, frage: "Wie selbstständig gestaltet die Person ihren Tagesablauf?", optionen: SKALA },
  { modul: 4, frage: "Wie selbstständig hält die Person Kontakt zu anderen Menschen?", optionen: SKALA },
];

const leistungen: Record<number, { geld: string; sach: string }> = {
  1: { geld: "–", sach: "–" },
  2: { geld: "347 €", sach: "796 €" },
  3: { geld: "599 €", sach: "1.497 €" },
  4: { geld: "800 €", sach: "1.859 €" },
  5: { geld: "990 €", sach: "2.299 €" },
};

function auswerten(a: number[]) {
  let punkte = 0;
  module.forEach((m, i) => {
    const werte = fragen.map((f, j) => (f.modul === i ? a[j] : null)).filter((x): x is number => x !== null);
    const anteil = werte.reduce((s, x) => s + x, 0) / (werte.length * 3);
    punkte += anteil * m.gewicht;
  });
  punkte = Math.round(punkte * 10) / 10;
  const grad = punkte >= 90 ? 5 : punkte >= 70 ? 4 : punkte >= 47.5 ? 3 : punkte >= 27 ? 2 : punkte >= 12.5 ? 1 : 0;
  return { punkte, grad };
}

export default function PflegegradRechner() {
  const [a, setA] = useState<number[]>([]);
  const [phase, setPhase] = useState<"fragen" | "kontakt" | "ergebnis">("fragen");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const i = a.length;
  const gesamt = fragen.length + 1;
  const { punkte, grad } = auswerten(a);

  function antworte(w: number) {
    const neu = [...a, w];
    setA(neu);
    if (neu.length === fragen.length) setPhase("kontakt");
  }

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    setSending(true);
    setError("");
    try {
      await sendeAnfrage({
        ...form,
        typ: "pflegegrad",
        quelle: "Pflegegrad-Rechner /pflegegrad-rechner/",
        selbststaendigkeit: `Selbstversorgung: ${a.slice(4, 8).map((x) => SKALA[x]).join(" / ")}`,
        orientierung: `${SKALA[a[2]]}; Unruhe/Verhalten: ${HAEUFIG[a[3]]}`,
        pflegegrad: "siehe Antworten",
        einschaetzung: grad ? `Pflegegrad ${grad} (${punkte} Punkte)` : `unter Pflegegrad 1 (${punkte} Punkte)`,
        details: fragen.map((f, j) => `${f.frage} – ${f.optionen[a[j]]}`).join("\n"),
      });
      setPhase("ergebnis");
    } catch (err) {
      setError(fehlertext(err));
    } finally {
      setSending(false);
    }
  }

  const fortschritt = phase === "ergebnis" ? gesamt : Math.min(i, gesamt);

  return (
    <div className="check-card rechner" aria-live="polite">
      <div className="check-progress">
        <span>
          {phase === "fragen" ? `${module[fragen[i].modul].name} · Frage ${i + 1} von ${fragen.length}` : phase === "kontakt" ? "Fast geschafft" : "Ihre Einschätzung"}
        </span>
        <span>ca. 3 Minuten</span>
      </div>
      <div className="check-bar" aria-hidden>
        <span style={{ width: `${(fortschritt / gesamt) * 100}%` }} />
      </div>

      {phase === "fragen" && (
        <fieldset>
          <legend>{fragen[i].frage}</legend>
          <div className="check-options">
            {fragen[i].optionen.map((o, w) => (
              <button key={o} type="button" className="check-option" onClick={() => antworte(w)}>
                {o}
              </button>
            ))}
          </div>
          {i > 0 && (
            <button type="button" className="check-back" onClick={() => setA(a.slice(0, -1))}>
              Zurück zur vorigen Frage
            </button>
          )}
        </fieldset>
      )}

      {phase === "kontakt" && (
        <form className="check-form" onSubmit={absenden}>
          <h3 className="check-title">Wohin dürfen wir Ihre Auswertung senden?</h3>
          <p className="check-sub">
            Sie sehen das Ergebnis sofort. Eine Pflegeberaterin ruft Sie kostenlos an und bespricht mit Ihnen den Antrag.
          </p>
          <div className="check-fields">
            <div className="cfield cfield-wide">
              <label htmlFor="r-name">Ihr Name</label>
              <input id="r-name" name="name" autoComplete="name" required />
            </div>
            <div className="cfield">
              <label htmlFor="r-plz">Postleitzahl</label>
              <input id="r-plz" name="plz" inputMode="numeric" pattern="\d{5}" maxLength={5} autoComplete="postal-code" required />
            </div>
            <div className="cfield">
              <label htmlFor="r-tel">Telefon</label>
              <input id="r-tel" name="telefon" type="tel" inputMode="tel" autoComplete="tel" required />
            </div>
            <div className="cfield cfield-wide">
              <label htmlFor="r-mail">E-Mail</label>
              <input id="r-mail" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <input className="hp" type="text" name="firma" tabIndex={-1} autoComplete="off" aria-hidden />
          <label className="check-consent">
            <input type="checkbox" name="einwilligung" required />
            <span>
              Ich bin einverstanden, dass TwinsCare meine Kontaktdaten verwendet, um mir die Auswertung zu senden und mich zu
              beraten. Mehr in der <a href="/datenschutz/">Datenschutzerklärung</a>.
            </span>
          </label>
          <label className="check-consent">
            <input type="checkbox" name="gesundheitsdaten" required />
            <span>
              Ich willige ein, dass meine Angaben zur Pflegesituation (Gesundheitsdaten nach Art. 9 DSGVO) dafür verarbeitet
              werden. Widerruf jederzeit möglich.
            </span>
          </label>
          <button className="btn btn-call check-submit" type="submit" disabled={sending}>
            {sending ? "Wird gesendet …" : "Auswertung anzeigen"}
          </button>
          {error && (
            <p className="check-error" role="alert">
              {error}
            </p>
          )}
          <button type="button" className="check-back" onClick={() => { setPhase("fragen"); setA(a.slice(0, -1)); }}>
            Zurück zur vorigen Frage
          </button>
        </form>
      )}

      {phase === "ergebnis" && (
        <div className="check-result">
          <h3 className="check-title">
            {grad ? `Möglich ist Pflegegrad ${grad}` : "Ein Pflegegrad ist eher unwahrscheinlich"}
          </h3>
          <p>
            Ihre Antworten ergeben rund <strong>{punkte} von 100 Punkten</strong>. Das ist eine Orientierung – den Pflegegrad
            legt der Medizinische Dienst bei der Begutachtung fest.
          </p>
          {grad >= 1 && (
            <div className="rechner-leistungen">
              <div>
                <span>Pflegegeld im Monat</span>
                <strong>{leistungen[grad].geld}</strong>
              </div>
              <div>
                <span>Pflegesachleistung im Monat</span>
                <strong>{leistungen[grad].sach}</strong>
              </div>
              <div>
                <span>Entlastungsbetrag im Monat</span>
                <strong>131 €</strong>
              </div>
            </div>
          )}
          <p className="check-done">Danke, Ihre Angaben sind bei uns angekommen. Wir melden uns bei Ihnen.</p>
          <button type="button" className="check-back" onClick={() => { setA([]); setPhase("fragen"); }}>
            Neu berechnen
          </button>
        </div>
      )}
    </div>
  );
}
