"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  hatEinwilligungsTools,
  hatMarketing,
  hatStatistik,
  leseConsent,
  seitenaufruf,
  speichereConsent,
  wendeConsentAn,
} from "@/lib/tracking";

// Cookie-Banner: gleichwertige Buttons „Alle akzeptieren“ und „Nur notwendige“, Einstellungen je Kategorie.
// Erscheint nur, wenn mindestens ein einwilligungspflichtiges Tool konfiguriert ist.
export default function ConsentBanner() {
  const pathname = usePathname();
  const [offen, setOffen] = useState(false);
  const [details, setDetails] = useState(false);
  const [statistik, setStatistik] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!hatEinwilligungsTools) return;
    const c = leseConsent();
    if (c) {
      wendeConsentAn(c);
      setStatistik(c.statistik);
      setMarketing(c.marketing);
    } else setOffen(true);
    const oeffnen = () => {
      const akt = leseConsent();
      setStatistik(!!akt?.statistik);
      setMarketing(!!akt?.marketing);
      setDetails(true);
      setOffen(true);
    };
    window.addEventListener("tc:cookie-einstellungen", oeffnen);
    return () => window.removeEventListener("tc:cookie-einstellungen", oeffnen);
  }, []);

  useEffect(() => {
    seitenaufruf();
  }, [pathname]);

  if (!hatEinwilligungsTools || !offen) return null;

  const speichern = (s: boolean, m: boolean) => {
    speichereConsent(s, m);
    setOffen(false);
    setDetails(false);
  };

  return (
    <div className="consent" role="dialog" aria-modal="false" aria-labelledby="consent-titel">
      <div className="consent-inner">
        <h2 id="consent-titel">Ihre Privatsphäre</h2>
        <p>
          Wir möchten mit Ihrer Einwilligung messen, wie unsere Website genutzt wird
          {hatMarketing ? ", und den Erfolg unserer Anzeigen bei Google und Meta auswerten sowie Anzeigen für Besucher dieser Website ausspielen (Remarketing)" : ""}
          . Dabei werden Daten auch in die USA übermittelt. Sie können Ihre Auswahl jederzeit über „Cookie-Einstellungen“ im
          Fußbereich ändern. Mehr in der <a href="/datenschutz/">Datenschutzerklärung</a>.
        </p>

        {details && (
          <div className="consent-optionen">
            <label className="consent-opt">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Notwendig</strong>
                <small>Speichert Ihre Auswahl. Immer aktiv.</small>
              </span>
            </label>
            {hatStatistik && (
              <label className="consent-opt">
                <input type="checkbox" checked={statistik} onChange={(e) => setStatistik(e.target.checked)} />
                <span>
                  <strong>Statistik</strong>
                  <small>Google Analytics 4: Reichweitenmessung und Nutzungsanalyse.</small>
                </span>
              </label>
            )}
            {hatMarketing && (
              <label className="consent-opt">
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
                <span>
                  <strong>Marketing</strong>
                  <small>Google Ads und Meta Pixel: Erfolgsmessung von Anzeigen und Remarketing.</small>
                </span>
              </label>
            )}
          </div>
        )}

        <div className="consent-actions">
          <button type="button" className="btn btn-primary" onClick={() => speichern(hatStatistik, hatMarketing)}>
            Alle akzeptieren
          </button>
          <button type="button" className="btn btn-primary" onClick={() => speichern(false, false)}>
            Nur notwendige
          </button>
          {details ? (
            <button type="button" className="btn btn-ghost" onClick={() => speichern(statistik, marketing)}>
              Auswahl speichern
            </button>
          ) : (
            <button type="button" className="btn btn-ghost" onClick={() => setDetails(true)}>
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
