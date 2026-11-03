import type { Metadata } from "next";
import { leistungsSeiten } from "@/lib/content";
import Photo from "@/components/Photo";
import { PageHero, CtaBand, JsonLd, breadcrumbSchema, Blocks } from "@/components/content";

export const metadata: Metadata = {
  title: "Leistungen ambulanter Pflegedienst Bergedorf | TwinsCare",
  description:
    "Ambulante Pflege, Behandlungspflege, Verhinderungspflege, Entlastung und Pflegeberatung in Bergedorf und Umgebung – direkt mit der Kasse abgerechnet.",
  alternates: { canonical: "/leistungen/" },
};

const crumbs = [{ href: "/leistungen/", label: "Leistungen" }];

export default function LeistungenHub() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Leistungen für die Pflege zu Hause"
        lead="Von der täglichen Körperpflege über medizinische Behandlungspflege bis zur Beratung beim Pflegegrad – Ihr ambulanter Pflegedienst in Bergedorf und Umgebung. Wir rechnen direkt mit Pflege- und Krankenkasse ab."
      />
      <section className="section">
        <div className="wrap">
          <div className="card-grid">
            {leistungsSeiten.map((l) => (
              <a key={l.slug} className="card" href={`/leistungen/${l.slug}/`}>
                <div className="card-photo">
                  <Photo id={l.foto.id} alt={l.foto.alt} sizes="(max-width: 600px) 100vw, 33vw" />
                </div>
                <div className="card-body">
                  <span className="card-meta">{l.kennzahlen[0]?.wert}</span>
                  <h2>{l.navTitle}</h2>
                  <p>{l.lead}</p>
                  <span className="card-more">Mehr erfahren</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="prose-section">
            <h2>Welche Leistung passt zu Ihrer Situation?</h2>
            <Blocks
              blocks={[
                {
                  type: "p",
                  text: "Die meisten Familien kombinieren mehrere Leistungen. Die Übersicht zeigt, was in typischen Situationen hilft und wer die Kosten trägt.",
                },
                {
                  type: "table",
                  head: ["Situation", "Passende Leistung", "Wer zahlt?"],
                  rows: [
                    ["Hilfe beim Waschen, Anziehen oder Essen", "[Ambulante Pflege](/leistungen/ambulante-pflege/)", "Pflegekasse (ab Pflegegrad 2)"],
                    ["Medikamente, Insulin, Verbände nach ärztlicher Verordnung", "[Behandlungspflege](/leistungen/behandlungspflege/)", "Krankenkasse"],
                    ["Pflegende Angehörige brauchen eine Pause", "[Verhinderungspflege](/leistungen/verhinderungspflege/)", "Pflegekasse (ab Pflegegrad 2)"],
                    ["Unterstützung im Haushalt und Alltag", "[Entlastungsleistungen](/leistungen/entlastungsleistungen/)", "Pflegekasse, 131 € im Monat (ab Pflegegrad 1)"],
                    ["Pflegegrad beantragen oder Pflichtberatung bei Pflegegeld", "[Pflegeberatung](/leistungen/pflegeberatung/)", "Pflegekasse"],
                    ["Entlassung aus dem Krankenhaus steht an", "[Pflege nach dem Krankenhaus](/leistungen/pflege-nach-krankenhausaufenthalt/)", "Kranken- und Pflegekasse"],
                  ],
                },
                {
                  type: "p",
                  text: "Unsicher, was Ihnen zusteht? Mit dem [Pflegegrad-Rechner](/pflegegrad-rechner/) bekommen Sie eine erste Einschätzung, alle Beträge finden Sie unter [Kosten und Finanzierung](/kosten/).",
                },
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
