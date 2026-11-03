import type { Metadata } from "next";
import { ortSeiten } from "@/lib/content";
import AreaMap from "@/components/AreaMap";
import PlzCheck from "@/components/PlzCheck";
import { PageHero, CtaBand, JsonLd, breadcrumbSchema } from "@/components/content";

export const metadata: Metadata = {
  title: "Einsatzgebiet Pflegedienst Bergedorf & Umgebung | TwinsCare",
  description:
    "TwinsCare versorgt Bergedorf, Lohbrügge, Billstedt, Horn, Jenfeld, Oststeinbek, Glinde, Reinbek und Wentorf. Jetzt Postleitzahl prüfen.",
  alternates: { canonical: "/pflegedienst/" },
};

const crumbs = [{ href: "/pflegedienst/", label: "Einsatzgebiet" }];

export default function EinsatzgebietHub() {
  const hh = ["bergedorf", "lohbruegge", "billstedt", "horn", "jenfeld"];
  const hamburg = ortSeiten.filter((o) => hh.includes(o.slug));
  const umland = ortSeiten.filter((o) => !hamburg.includes(o));
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Unser Einsatzgebiet rund um Bergedorf"
        lead="Kurze Wege bedeuten mehr Zeit für Sie. Deshalb versorgen wir Bergedorf und Umgebung: neun Orte im Hamburger Osten und im direkten Umland – vom Büro in der Bergedorfer Straße aus."
      />
      <section className="section">
        <div className="wrap area">
          <AreaMap />
          <div>
            <h2>Fahren wir auch zu Ihnen?</h2>
            <p style={{ color: "var(--muted)" }}>
              Geben Sie Ihre Postleitzahl ein. Liegt sie knapp außerhalb, rufen Sie uns trotzdem an.
            </p>
            <PlzCheck />
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Hamburg</h2>
          </div>
          <div className="card-grid">
            {hamburg.map((o) => (
              <a key={o.slug} className="card" href={`/pflegedienst/${o.slug}/`}>
                <div className="card-body">
                  <span className="card-meta">{o.plz.join(", ")}</span>
                  <h3>Pflegedienst {o.name}</h3>
                  <p>{o.lead}</p>
                  <span className="card-more">Zur Ortsseite</span>
                </div>
              </a>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: "3.5rem" }}>
            <h2>Umland in Schleswig-Holstein</h2>
            <p>Für diese Orte sind die Pflegeberatungsstellen der Kreise zuständig – wir erklären es auf den Ortsseiten.</p>
          </div>
          <div className="card-grid">
            {umland.map((o) => (
              <a key={o.slug} className="card" href={`/pflegedienst/${o.slug}/`}>
                <div className="card-body">
                  <span className="card-meta">{o.plz.join(", ")}</span>
                  <h3>Pflegedienst {o.name}</h3>
                  <p>{o.lead}</p>
                  <span className="card-more">Zur Ortsseite</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
