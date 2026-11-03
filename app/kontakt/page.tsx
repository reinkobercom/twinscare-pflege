import type { Metadata } from "next";
import { site } from "@/lib/site";
import RueckrufForm from "@/components/RueckrufForm";
import { Breadcrumbs, JsonLd, breadcrumbSchema } from "@/components/content";
import { Phone, Whatsapp, Pin, Clock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt – TwinsCare Pflegedienst Bergedorf",
  description:
    "So erreichen Sie TwinsCare: E-Mail, Anfrageformular und unser Büro in der Bergedorfer Straße 85, 21033 Hamburg-Bergedorf. Rückruf direkt online anfordern.",
  alternates: { canonical: "/kontakt/" },
};

const crumbs = [{ href: "/kontakt/", label: "Kontakt" }];

export default function KontaktPage() {
  return (
    <main id="inhalt" className="page-hero" style={{ borderBottom: 0 }}>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <div className="funnel-layout">
          <div>
            <h1>Kontakt</h1>
            <p className="page-lead">Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei. Wir nehmen uns Zeit für Ihre Fragen.</p>
            <ul className="contact-list">
              {site.phoneHref && (
                <li>
                  <Phone />
                  <div>
                    <strong>Telefon</strong>
                    <a href={site.phoneHref}>{site.phoneDisplay}</a>
                  </div>
                </li>
              )}
              {site.whatsappHref && (
                <li>
                  <Whatsapp />
                  <div>
                    <strong>WhatsApp</strong>
                    <a href={site.whatsappHref}>Nachricht schreiben</a>
                  </div>
                </li>
              )}
              <li>
                <Pin />
                <div>
                  <strong>Büro</strong>
                  <address>
                    {site.street}
                    <br />
                    {site.zip} {site.city}-{site.district}
                  </address>
                  <a href={site.mapsHref} target="_blank" rel="noopener">
                    Route in Google Maps
                  </a>
                </div>
              </li>
              {site.hours.length > 0 && (
              <li>
                <Clock />
                <div>
                  <strong>Erreichbarkeit</strong>
                  {site.hours.map((h) => (
                    <span key={h.days}>
                      {h.days}: {h.time}
                    </span>
                  ))}
                </div>
              </li>
              )}
              <li>
                <span className="contact-at" aria-hidden>
                  @
                </span>
                <div>
                  <strong>E-Mail</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
            </ul>
            <p style={{ color: "var(--muted)" }}>
              Sie möchten direkt eine Pflege anfragen? Dann nutzen Sie gern unser <a href="/pflege-anfragen/">Anfrage-Formular</a>.
            </p>
          </div>
          <RueckrufForm />
        </div>
      </div>
    </main>
  );
}
