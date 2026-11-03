import type { Metadata } from "next";
import { artikel, clusterInfo, clusterMitArtikeln } from "@/lib/content";
import ArtikelGrid from "@/components/ArtikelGrid";
import { PageHero, CtaBand, JsonLd, breadcrumbSchema } from "@/components/content";

export const metadata: Metadata = {
  title: "Pflege-Ratgeber für Angehörige 2026 | TwinsCare",
  description:
    "Verständlich erklärt: Pflegegrad beantragen, Kosten des Pflegedienstes, Verhinderungspflege, Entlastungsbetrag und mehr. Mit aktuellen Beträgen für 2026.",
  alternates: { canonical: "/ratgeber/" },
};

const crumbs = [{ href: "/ratgeber/", label: "Ratgeber" }];

export default function RatgeberHub() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Ratgeber Pflege: verständlich erklärt"
        lead="Antworten auf die Fragen, die Angehörige uns am häufigsten stellen – verständlich erklärt und mit den aktuellen Beträgen der Pflegeversicherung für 2026."
        ctas={false}
      />
      <section className="section">
        <div className="wrap">
          <ul className="chips-nav" aria-label="Themen">
            {clusterMitArtikeln().map((c) => (
              <li key={c}>
                <a href={`/ratgeber/thema/${c}/`}>{clusterInfo[c].titel}</a>
              </li>
            ))}
          </ul>
          <ArtikelGrid items={artikel} />
        </div>
      </section>
      <CtaBand title="Lieber persönlich fragen?" />
    </main>
  );
}
