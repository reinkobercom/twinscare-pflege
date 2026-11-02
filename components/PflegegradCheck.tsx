"use client";

import { useState } from "react";

const fragen = [
  {
    frage: "Wie selbstständig ist die Person im Alltag?",
    optionen: [
      "Weitgehend selbstständig",
      "Braucht bei manchen Dingen Hilfe",
      "Braucht jeden Tag viel Hilfe",
      "Ist fast vollständig auf Hilfe angewiesen",
    ],
  },
  {
    frage: "Gibt es Vergesslichkeit oder Probleme mit der Orientierung?",
    optionen: ["Nein", "Manchmal", "Häufig"],
  },
  {
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

export default function PflegegradCheck() {
  const [antworten, setAntworten] = useState<number[]>([]);
  const schritt = antworten.length;
  const fertig = schritt === fragen.length;
  const hatPflegegrad = antworten[2] === 2;

  return (
    <div className="check-card" aria-live="polite">
      <div className="check-progress">
        <span>{fertig ? "Ihre erste Einschätzung" : `Frage ${schritt + 1} von ${fragen.length}`}</span>
        <span>dauert 30 Sekunden</span>
      </div>
      <div className="check-bar" aria-hidden>
        <span style={{ width: `${(schritt / fragen.length) * 100}%` }} />
      </div>

      {!fertig ? (
        <fieldset>
          <legend>{fragen[schritt].frage}</legend>
          <div className="check-options">
            {fragen[schritt].optionen.map((o, i) => (
              <button key={o} type="button" className="check-option" onClick={() => setAntworten([...antworten, i])}>
                {o}
              </button>
            ))}
          </div>
          {schritt > 0 && (
            <button type="button" className="check-back" onClick={() => setAntworten(antworten.slice(0, -1))}>
              Zurück zur vorigen Frage
            </button>
          )}
        </fieldset>
      ) : (
        <div className="check-result">
          {hatPflegegrad ? (
            <>
              <h3 style={{ color: "#fff", fontSize: "var(--step-2)" }}>Sie haben schon einen Pflegegrad</h3>
              <p>
                Viele Familien nutzen nicht alle Leistungen, die ihnen zustehen – etwa den Entlastungsbetrag von 131 € im
                Monat oder die Verhinderungspflege. Wir rechnen das gern mit Ihnen durch.
              </p>
            </>
          ) : (
            <>
              <h3 style={{ color: "#fff", fontSize: "var(--step-2)" }}>Möglich ist {einschaetzung(antworten)}</h3>
              <p>
                Das ist eine grobe Orientierung. Den genauen Pflegegrad legt der Medizinische Dienst fest. Wir bereiten
                Sie kostenlos auf die Begutachtung vor.
              </p>
            </>
          )}
          <a className="btn btn-light" href="/pflege-anfragen/">
            Kostenlose Beratung anfragen
          </a>
          <div>
            <button type="button" className="check-back" onClick={() => setAntworten([])}>
              Noch einmal starten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
