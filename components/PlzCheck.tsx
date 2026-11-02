"use client";

import { useState } from "react";

// Postleitzahlen aus dem Einsatzgebiet (Vertrag § 5)
const plzOrte: Record<string, string> = {
  "21029": "Bergedorf",
  "21031": "Bergedorf und Lohbrügge",
  "21033": "Bergedorf und Lohbrügge",
  "21035": "Bergedorf",
  "21039": "Bergedorf",
  "22115": "Lohbrügge und Billstedt",
  "22111": "Billstedt und Horn",
  "22113": "Billstedt, Horn und Oststeinbek",
  "22117": "Billstedt",
  "22119": "Billstedt und Horn",
  "22043": "Jenfeld",
  "22045": "Jenfeld",
  "21509": "Glinde",
  "21465": "Reinbek und Wentorf",
};

export default function PlzCheck() {
  const [plz, setPlz] = useState("");
  const clean = plz.replace(/\D/g, "").slice(0, 5);
  const ort = clean.length === 5 ? plzOrte[clean] : undefined;

  return (
    <div className="plz-check">
      <label htmlFor="plz">Fahren wir auch zu Ihnen?</label>
      <input
        id="plz"
        inputMode="numeric"
        autoComplete="postal-code"
        placeholder="Ihre Postleitzahl"
        value={clean}
        onChange={(e) => setPlz(e.target.value)}
      />
      <p className="plz-result" aria-live="polite">
        {clean.length === 5 &&
          (ort ? (
            <>
              <strong style={{ color: "var(--good)" }}>Ja, {clean} gehört zu unserem Einsatzgebiet</strong> ({ort}).
            </>
          ) : (
            <>Diese Postleitzahl liegt außerhalb unseres festen Gebiets. Rufen Sie uns trotzdem an – oft finden wir eine Lösung.</>
          ))}
      </p>
    </div>
  );
}
