"use client";

import { useState } from "react";
import { Check } from "./Icons";
import { sendeAnfrage, fehlertext } from "@/lib/lead";

type Status = "idle" | "sending" | "sent" | "error";

export default function RueckrufForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    setError("");
    try {
      await sendeAnfrage({ ...data, typ: "rueckruf" });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(fehlertext(err));
    }
  }

  if (status === "sent") {
    return (
      <div className="callback form-success" role="status">
        <Check width={40} height={40} style={{ color: "var(--good)" }} />
        <h3>Danke, wir rufen Sie an</h3>
        <p>Wir melden uns zur gewünschten Zeit, spätestens am nächsten Werktag.</p>
      </div>
    );
  }

  return (
    <form className="callback" onSubmit={onSubmit} noValidate={false}>
      <h3>Rückruf anfordern</h3>
      <p>Wir rufen Sie zurück und besprechen alles Weitere – kostenlos und unverbindlich.</p>

      <div className="field">
        <label htmlFor="rr-name">Ihr Name</label>
        <input id="rr-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="rr-tel">Telefonnummer</label>
        <input id="rr-tel" name="telefon" type="tel" autoComplete="tel" inputMode="tel" required />
      </div>
      <fieldset className="field">
        <legend>Wann passt es Ihnen?</legend>
        <div className="chips">
          {["Vormittags", "Mittags", "Nachmittags", "Egal"].map((z, i) => (
            <label key={z}>
              <input type="radio" name="zeit" value={z} defaultChecked={i === 3} />
              <span>{z}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <input className="hp" type="text" name="firma" tabIndex={-1} autoComplete="off" aria-hidden />
      <label className="consent">
        <input type="checkbox" name="einwilligung" required />
        <span>
          Ich bin einverstanden, dass TwinsCare meine Angaben zur Bearbeitung meiner Anfrage verwendet. Mehr dazu in der{" "}
          <a href="/datenschutz/">Datenschutzerklärung</a>.
        </span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Wird gesendet …" : "Rückruf anfordern"}
      </button>
      {status === "error" && (
        <p className="form-msg error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
