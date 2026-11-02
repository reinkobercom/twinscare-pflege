"use client";

import { useState } from "react";
import { sendeAnfrage, fehlertext } from "@/lib/lead";

const fragen = [
  {
    key: "selbststaendigkeit",
    frage: "Wie selbstständig ist die Person im Alltag?",
    optionen: [
      "Weitgehend selbstständig",
      "Braucht bei manchen Dingen Hilfe",
      "Braucht jeden Tag viel Hilfe",
      "Ist fast vollständig auf Hilfe angewiesen",
    ],
  },
  {
    key: "orientierung",
    frage: "Gibt es Vergesslichkeit oder Probleme mit der Orientierung?",
    optionen: ["Nein", "Manchmal", "Häufig"],
  },
  {
    key: "pflegegrad",
    frage: "Gibt es schon einen Pflegegrad?",
    optionen: ["Nein, noch nicht", "Der Antrag läuft", "Ja, es gibt einen Pflegegrad"],
  },
];

function einschaetzung(a: number[]) {
  const score = a[0] * 2 + a[1];
  if (score <= 1) return "Pflegegrad 1";
  if (score <= 3) return "Pflegegrad 1 bis 2";
  if (score <= 5) return "Pflegegrad 2 bis 3";
  if (score <= 7) return "Pflegegrad 3 bis 4";
  return "Pflegegrad 4 bis 5";
}

type Status = "fragen" | "kontakt" | "sending" | "ergebnis";

export default function PflegegradCheck() {
  const [antworten, setAntworten] = useState<number[]>([]);
  const [status, setStatus] = useState<Status>("fragen");
  const [error, setError] = useState("");
  const schritt = antworten.length;
  const gesamt = fragen.length + 1; // drei Fragen plus Kontaktschritt
  const hatPflegegrad = antworten[2] === 2;
  const ergebnis = einschaetzung(antworten);

  function antworte(i: number) {
    const neu = [...antworten, i];
    setAntworten(neu);
    if (neu.length === fragen.length) setStatus("kontakt");
  }

  function zurueck() {
    setError("");
    setStatus("fragen");
    setAntworten(antworten.slice(0, -1));
  }

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    setError("");
    try {
      await sendeAnfrage({
        ...form,
        typ: "pflegegrad",
        selbststaendigkeit: fragen[0].optionen[antworten[0]],
        orientierung: fragen[1].optionen[antworten[1]],
        pflegegrad: fragen[2].optionen[antworten[2]],
        einschaetzung: hatPflegegrad ? "Pflegegrad vorhanden" : ergebnis,
      });
      setStatus("ergebnis");
    } catch (err) {
      setStatus("kontakt");
      setError(fehlertext(err));
    }
  }

  const fortschritt = status === "ergebnis" ? gesamt : Math.min(schritt, gesamt);
  const label =
    status === "ergebnis"
      ? "Ihre erste Einschätzung"
      : status === "fragen"
        ? `Schritt ${schritt + 1} von ${gesamt}`
        : `Schritt ${gesamt} von ${gesamt}`;

  return (
    <div className="check-card" aria-live="polite">
      <div className="check-progress">
        <span>{label}</span>
        <span>dauert 1 Minute</span>
      </div>
      <div className="check-bar" aria-hidden>
        <span style={{ width: `${(fortschritt / gesamt) * 100}%` }} />
      </div>

      {status === "fragen" && (
        <fieldset>
          <legend>{fragen[schritt].frage}</legend>
          <div className="check-options">
            {fragen[schritt].optionen.map((o, i) => (
              <button key={o} type="button" className="check-option" onClick={() => antworte(i)}>
                {o}
              </button>
            ))}
          </div>
          {schritt > 0 && (
            <button type="button" className="check-back" onClick={zurueck}>
              Zurück zur vorigen Frage
            </button>
          )}
        </fieldset>
      )}

      {(status === "kontakt" || status === "sending") && (
        <form className="check-form" onSubmit={absenden}>
          <h3 className="check-title">Wohin dürfen wir Ihr Ergebnis senden?</h3>
          <p className="check-sub">
            Sie sehen die Einschätzung sofort. Eine Pflegeberaterin ruft Sie zusätzlich kostenlos an und erklärt, welche
            Leistungen Ihnen zustehen.
          </p>
          <div className="check-fields">
            <div className="cfield cfield-wide">
              <label htmlFor="pg-name">Ihr Name</label>
              <input id="pg-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="cfield">
              <label htmlFor="pg-plz">Postleitzahl</label>
              <input id="pg-plz" name="plz" type="text" inputMode="numeric" pattern="\d{5}" maxLength={5} autoComplete="postal-code" required />
            </div>
            <div className="cfield">
              <label htmlFor="pg-tel">Telefon</label>
              <input id="pg-tel" name="telefon" type="tel" inputMode="tel" autoComplete="tel" required />
            </div>
            <div className="cfield cfield-wide">
              <label htmlFor="pg-mail">E-Mail</label>
              <input id="pg-mail" name="email" type="email" autoComplete="email" required />
            </div>
          </div>
          <input className="hp" type="text" name="firma" tabIndex={-1} autoComplete="off" aria-hidden />
          <label className="check-consent">
            <input type="checkbox" name="einwilligung" required />
            <span>
              Ich bin einverstanden, dass TwinsCare meine Kontaktdaten verwendet, um mir das Ergebnis zu senden und mich
              zu beraten. Mehr in der <a href="/datenschutz/">Datenschutzerklärung</a>.
            </span>
          </label>
          <label className="check-consent">
            <input type="checkbox" name="gesundheitsdaten" required />
            <span>
              Ich willige ein, dass meine Angaben zur Pflegesituation (Gesundheitsdaten nach Art. 9 DSGVO) dafür
              verarbeitet werden. Widerruf jederzeit möglich.
            </span>
          </label>
          <button className="btn btn-call check-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Wird gesendet …" : "Ergebnis anzeigen"}
          </button>
          {error && (
            <p className="check-error" role="alert">
              {error}
            </p>
          )}
          <button type="button" className="check-back" onClick={zurueck}>
            Zurück zur vorigen Frage
          </button>
        </form>
      )}

      {status === "ergebnis" && (
        <div className="check-result">
          {hatPflegegrad ? (
            <>
              <h3 className="check-title">Sie haben schon einen Pflegegrad</h3>
              <p>
                Viele Familien nutzen nicht alle Leistungen, die ihnen zustehen – etwa den Entlastungsbetrag von 131 € im
                Monat oder die Verhinderungspflege. Wir rufen Sie an und rechnen das gemeinsam durch.
              </p>
            </>
          ) : (
            <>
              <h3 className="check-title">Möglich ist {ergebnis}</h3>
              <p>
                Das ist eine grobe Orientierung. Den genauen Pflegegrad legt der Medizinische Dienst fest. Wir melden uns
                bei Ihnen und bereiten Sie kostenlos auf die Begutachtung vor.
              </p>
            </>
          )}
          <p className="check-done">Danke, Ihre Angaben sind bei uns angekommen.</p>
        </div>
      )}
    </div>
  );
}
