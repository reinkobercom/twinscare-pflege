"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendeAnfrage, fehlertext } from "@/lib/lead";

const fuerWenOptionen = ["Mutter oder Vater", "Partnerin oder Partner", "Mich selbst", "Eine andere Person"];
const hilfeOptionen = [
  "Grundpflege (Waschen, Anziehen)",
  "Behandlungspflege (Medikamente, Verbände)",
  "Verhinderungspflege",
  "Hilfe im Haushalt und Alltag",
  "Beratung zum Pflegegrad",
  "Pflege nach dem Krankenhaus",
  "Ich bin unsicher",
];
const pflegegradOptionen = ["Noch keiner", "Antrag läuft", "Pflegegrad 1", "Pflegegrad 2", "Pflegegrad 3", "Pflegegrad 4", "Pflegegrad 5"];
const beginnOptionen = ["So schnell wie möglich", "In den nächsten 2 Wochen", "In einem Monat oder später", "Ich möchte mich erst informieren"];
const wohnOptionen = ["Lebt allein", "Lebt mit Partner/in", "Lebt bei Angehörigen", "Noch im Krankenhaus oder in der Reha"];

type Daten = Record<string, string | string[]>;

export default function AnfrageFunnel() {
  const router = useRouter();
  const [schritt, setSchritt] = useState(0);
  const [daten, setDaten] = useState<Daten>({ hilfe: [] });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setDaten((d) => ({ ...d, [k]: v }));
  const toggle = (v: string) =>
    setDaten((d) => {
      const arr = (d.hilfe as string[]) || [];
      return { ...d, hilfe: arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v] };
    });

  const schritt1ok = !!daten.fuerWen && (daten.hilfe as string[]).length > 0;
  const schritt2ok = !!daten.pflegegrad && /^\d{5}$/.test(String(daten.plz || "")) && !!daten.beginn;

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    setSending(true);
    setError("");
    try {
      await sendeAnfrage({
        ...daten,
        ...form,
        hilfe: (daten.hilfe as string[]).join(", "),
        typ: "anfrage",
        quelle: "Anfrage-Formular /pflege-anfragen/",
      });
      router.push("/danke/");
    } catch (err) {
      setError(fehlertext(err));
      setSending(false);
    }
  }

  const Choice = ({ name, value, multi }: { name: string; value: string; multi?: boolean }) => {
    const active = multi ? (daten.hilfe as string[]).includes(value) : daten[name] === value;
    return (
      <button
        type="button"
        className={`choice${active ? " is-active" : ""}`}
        aria-pressed={active}
        onClick={() => (multi ? toggle(value) : set(name, value))}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="funnel">
      <ol className="funnel-steps" aria-label="Fortschritt">
        {["Situation", "Details", "Kontakt"].map((t, i) => (
          <li key={t} className={i === schritt ? "is-current" : i < schritt ? "is-done" : ""}>
            <span>{i + 1}</span> {t}
          </li>
        ))}
      </ol>

      {schritt === 0 && (
        <div className="funnel-body">
          <fieldset>
            <legend>Für wen suchen Sie Unterstützung?</legend>
            <div className="choices">
              {fuerWenOptionen.map((o) => (
                <Choice key={o} name="fuerWen" value={o} />
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Wobei brauchen Sie Hilfe? Mehrfachauswahl möglich.</legend>
            <div className="choices">
              {hilfeOptionen.map((o) => (
                <Choice key={o} name="hilfe" value={o} multi />
              ))}
            </div>
          </fieldset>
          <div className="funnel-nav">
            <button type="button" className="btn btn-primary" disabled={!schritt1ok} onClick={() => setSchritt(1)}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {schritt === 1 && (
        <div className="funnel-body">
          <fieldset>
            <legend>Gibt es schon einen Pflegegrad?</legend>
            <div className="choices">
              {pflegegradOptionen.map((o) => (
                <Choice key={o} name="pflegegrad" value={o} />
              ))}
            </div>
          </fieldset>
          <div className="check-fields funnel-fields">
            <div className="cfield">
              <label htmlFor="f-plz">Postleitzahl</label>
              <input
                id="f-plz"
                inputMode="numeric"
                maxLength={5}
                autoComplete="postal-code"
                value={String(daten.plz || "")}
                onChange={(e) => set("plz", e.target.value.replace(/\D/g, ""))}
              />
            </div>
            <div className="cfield">
              <label htmlFor="f-ort">Ort oder Stadtteil</label>
              <input id="f-ort" autoComplete="address-level2" value={String(daten.ort || "")} onChange={(e) => set("ort", e.target.value)} />
            </div>
          </div>
          <fieldset>
            <legend>Ab wann wird Hilfe gebraucht?</legend>
            <div className="choices">
              {beginnOptionen.map((o) => (
                <Choice key={o} name="beginn" value={o} />
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Wie ist die Wohnsituation? (optional)</legend>
            <div className="choices">
              {wohnOptionen.map((o) => (
                <Choice key={o} name="wohnsituation" value={o} />
              ))}
            </div>
          </fieldset>
          <div className="funnel-nav">
            <button type="button" className="btn btn-ghost" onClick={() => setSchritt(0)}>
              Zurück
            </button>
            <button type="button" className="btn btn-primary" disabled={!schritt2ok} onClick={() => setSchritt(2)}>
              Weiter
            </button>
          </div>
        </div>
      )}

      {schritt === 2 && (
        <form className="funnel-body" onSubmit={absenden}>
          <div className="check-fields funnel-fields">
            <div className="cfield cfield-wide">
              <label htmlFor="f-name">Ihr Name</label>
              <input id="f-name" name="name" autoComplete="name" required />
            </div>
            <div className="cfield">
              <label htmlFor="f-tel">Telefon</label>
              <input id="f-tel" name="telefon" type="tel" inputMode="tel" autoComplete="tel" required />
            </div>
            <div className="cfield">
              <label htmlFor="f-mail">E-Mail (optional)</label>
              <input id="f-mail" name="email" type="email" autoComplete="email" />
            </div>
          </div>
          <fieldset>
            <legend>Wann erreichen wir Sie am besten?</legend>
            <div className="chips">
              {["Vormittags", "Mittags", "Nachmittags", "Egal"].map((z, i) => (
                <label key={z}>
                  <input type="radio" name="zeit" value={z} defaultChecked={i === 3} />
                  <span>{z}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="cfield cfield-wide">
            <label htmlFor="f-msg">Möchten Sie uns noch etwas mitteilen? (optional)</label>
            <textarea id="f-msg" name="nachricht" rows={4} />
          </div>
          <input className="hp" type="text" name="firma" tabIndex={-1} autoComplete="off" aria-hidden />
          <label className="consent">
            <input type="checkbox" name="einwilligung" required />
            <span>
              Ich bin einverstanden, dass TwinsCare meine Kontaktdaten zur Bearbeitung meiner Anfrage verwendet. Mehr in der{" "}
              <a href="/datenschutz/">Datenschutzerklärung</a>.
            </span>
          </label>
          <label className="consent">
            <input type="checkbox" name="gesundheitsdaten" required />
            <span>
              Ich willige ein, dass meine Angaben zur Pflegesituation (Gesundheitsdaten nach Art. 9 DSGVO) dafür verarbeitet
              werden. Die Einwilligung kann ich jederzeit widerrufen.
            </span>
          </label>
          <div className="funnel-nav">
            <button type="button" className="btn btn-ghost" onClick={() => setSchritt(1)}>
              Zurück
            </button>
            <button type="submit" className="btn btn-call" disabled={sending}>
              {sending ? "Wird gesendet …" : "Anfrage absenden"}
            </button>
          </div>
          {error && (
            <p className="form-msg error" role="alert">
              {error}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
