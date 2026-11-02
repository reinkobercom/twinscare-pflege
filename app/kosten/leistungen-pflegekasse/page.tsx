import type { Metadata } from "next";
import type { Section } from "@/lib/content/types";
import {
  PageHero, Sections, Toc, SideCard, QuellenListe, CtaBand, JsonLd, breadcrumbSchema, KurzBox,
} from "@/components/content";

export const metadata: Metadata = {
  title: "Leistungen der Pflegekasse 2026: alle Beträge | TwinsCare",
  description:
    "Alle Leistungen der Pflegeversicherung 2026 auf einen Blick: Pflegegeld, Sachleistung, Entlastungsbetrag, Tagespflege, Verhinderungspflege, Hilfsmittel und Zuschüsse.",
  alternates: { canonical: "/kosten/leistungen-pflegekasse/" },
};

const crumbs = [
  { href: "/kosten/", label: "Kosten und Finanzierung" },
  { href: "/kosten/leistungen-pflegekasse/", label: "Leistungen der Pflegekasse" },
];

const sections: Section[] = [
  {
    h2: "Welche Leistungen gibt es je Pflegegrad?",
    blocks: [
      { type: "p", text: "Die monatlichen Leistungen steigen mit dem Pflegegrad. Die Beträge gelten seit dem 1. Januar 2025 und bleiben bis Ende 2027 unverändert." },
      {
        type: "table",
        head: ["Leistung (pro Monat)", "PG 1", "PG 2", "PG 3", "PG 4", "PG 5"],
        rows: [
          ["Pflegegeld (§ 37)", "–", "347 €", "599 €", "800 €", "990 €"],
          ["Pflegesachleistung (§ 36)", "–", "796 €", "1.497 €", "1.859 €", "2.299 €"],
          ["Entlastungsbetrag (§ 45b)", "131 €", "131 €", "131 €", "131 €", "131 €"],
          ["Tages- und Nachtpflege (§ 41)", "–", "721 €", "1.357 €", "1.685 €", "2.085 €"],
          ["Pflegehilfsmittel zum Verbrauch (§ 40)", "42 €", "42 €", "42 €", "42 €", "42 €"],
        ],
        caption: "Stand 2026",
      },
    ],
  },
  {
    h2: "Welche Leistungen gibt es pro Jahr oder je Maßnahme?",
    blocks: [
      { type: "p", text: "Einige Leistungen sind als Jahresbudget oder als Zuschuss je Maßnahme angelegt." },
      {
        type: "table",
        head: ["Leistung", "Betrag", "Ab Pflegegrad"],
        rows: [
          ["Verhinderungs- und Kurzzeitpflege (gemeinsamer Jahresbetrag, § 42a)", "bis 3.539 € pro Jahr", "2"],
          ["Wohnumfeldverbessernde Maßnahmen (§ 40 Abs. 4)", "bis 4.180 € je Maßnahme", "1"],
          ["Beratungseinsatz bei Pflegegeldbezug (§ 37 Abs. 3)", "Kosten trägt die Pflegekasse", "1 (freiwillig), ab 2 Pflicht"],
        ],
      },
    ],
  },
  {
    h2: "Welche Leistungen lassen sich kombinieren?",
    blocks: [
      { type: "p", text: "Die meisten Leistungen lassen sich miteinander kombinieren – nur Pflegegeld und Pflegesachleistung werden anteilig verrechnet." },
      {
        type: "ul",
        items: [
          "Pflegesachleistung und Pflegegeld: anteilig als [Kombinationsleistung](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          "Entlastungsbetrag: immer zusätzlich, auch neben Pflegegeld oder Sachleistung.",
          "Tages- und Nachtpflege: zusätzlich zu Pflegegeld oder Sachleistung, ohne Anrechnung.",
          "Verhinderungspflege: zusätzlich – während tageweiser Verhinderungspflege wird die Hälfte des Pflegegelds weitergezahlt.",
          "Bis zu 40 % der Pflegesachleistung können für anerkannte Angebote zur Unterstützung im Alltag umgewidmet werden.",
        ],
      },
      { type: "cta", text: "Wir prüfen gemeinsam mit Ihnen, welche Budgets Sie noch nicht nutzen." },
    ],
  },
];

export default function LeistungenPflegekassePage() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Leistungen der Pflegekasse 2026 im Überblick"
        lead="Alle Beträge der Pflegeversicherung auf einer Seite – nach Pflegegrad, als Jahresbudget und als Zuschuss."
      />
      <div className="wrap content-layout">
        <article className="content-main">
          <KurzBox
            items={[
              "Pflegegeld: 347 € bis 990 € im Monat ab Pflegegrad 2.",
              "Pflegesachleistung für einen Pflegedienst: 796 € bis 2.299 € im Monat.",
              "Entlastungsbetrag: 131 € im Monat für alle Pflegegrade.",
              "Verhinderungs- und Kurzzeitpflege: bis 3.539 € im Jahr ab Pflegegrad 2.",
            ]}
          />
          <Sections sections={sections} />
          <QuellenListe
            quellen={[
              { title: "Bundesgesundheitsministerium: Leistungen der Pflegeversicherung im Überblick", url: "https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick.html" },
              { title: "SGB XI – Gesetzestext", url: "https://www.gesetze-im-internet.de/sgb_11/" },
            ]}
          />
        </article>
        <div className="content-aside">
          <Toc sections={sections} />
          <SideCard />
        </div>
      </div>
      <CtaBand />
    </main>
  );
}
