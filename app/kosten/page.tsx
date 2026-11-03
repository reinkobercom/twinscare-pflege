import type { Metadata } from "next";
import type { Section, Faq } from "@/lib/content/types";
import {
  PageHero, KurzBox, Sections, Toc, SideCard, FaqSection, LinkCards, QuellenListe, CtaBand, JsonLd, faqSchema,
  breadcrumbSchema,
} from "@/components/content";

export const metadata: Metadata = {
  title: "Kosten ambulante Pflege 2026: Was zahlt die Kasse?",
  description:
    "Was kostet ein Pflegedienst und was zahlen Pflege- und Krankenkasse? Alle Beträge 2026, Rechenbeispiele und Eigenanteil – verständlich erklärt.",
  alternates: { canonical: "/kosten/" },
};

const crumbs = [{ href: "/kosten/", label: "Kosten und Finanzierung" }];

const sections: Section[] = [
  {
    h2: "Was zahlt die Pflegekasse für einen Pflegedienst?",
    blocks: [
      {
        type: "p",
        text: "Die Pflegekasse zahlt für die Pflege durch einen ambulanten Dienst monatlich bis zu 796 € (Pflegegrad 2) bis 2.299 € (Pflegegrad 5) als **Pflegesachleistung** (§ 36 SGB XI). Wir rechnen diesen Betrag direkt mit Ihrer Pflegekasse ab.",
      },
      {
        type: "table",
        head: ["Pflegegrad", "Pflegesachleistung", "Pflegegeld", "Entlastungsbetrag"],
        rows: [
          ["Pflegegrad 1", "–", "–", "131 €"],
          ["Pflegegrad 2", "796 €", "347 €", "131 €"],
          ["Pflegegrad 3", "1.497 €", "599 €", "131 €"],
          ["Pflegegrad 4", "1.859 €", "800 €", "131 €"],
          ["Pflegegrad 5", "2.299 €", "990 €", "131 €"],
        ],
        caption: "Monatliche Höchstbeträge, Stand 2026 (gültig seit 1. Januar 2025, nächste Anpassung 2028)",
      },
      { type: "p", text: "Alle weiteren Leistungen – von Tagespflege bis Wohnungsumbau – finden Sie in der [Übersicht aller Leistungen der Pflegekasse](/kosten/leistungen-pflegekasse/)." },
    ],
  },
  {
    h2: "Was zahlt die Krankenkasse?",
    blocks: [
      {
        type: "p",
        text: "Medizinische **Behandlungspflege** wie Medikamentengabe, Insulin oder Wundversorgung zahlt die Krankenkasse, wenn der Arzt sie verordnet (§ 37 SGB V). Dafür ist kein Pflegegrad nötig.",
      },
      {
        type: "p",
        text: "Erwachsene zahlen eine gesetzliche Zuzahlung von 10 % der Kosten für höchstens 28 Tage im Jahr plus 10 € je Verordnung, sofern keine Befreiung vorliegt. Mehr dazu: [Behandlungspflege – was zahlt die Krankenkasse?](/ratgeber/behandlungspflege-krankenkasse/)",
      },
    ],
  },
  {
    h2: "Wann entsteht ein Eigenanteil?",
    blocks: [
      {
        type: "p",
        text: "Ein Eigenanteil entsteht nur, wenn die gewünschten Leistungen mehr kosten als der monatliche Höchstbetrag Ihres Pflegegrads. Vor dem ersten Einsatz bekommen Sie von uns einen schriftlichen Kostenvoranschlag – Sie wissen also vorher, ob und in welcher Höhe etwas für Sie anfällt.",
      },
      {
        type: "p",
        text: "Die Preise für einzelne Leistungen sind in Hamburg zwischen Pflegediensten und Pflegekassen vertraglich vereinbart. Was das konkret bedeutet, erklärt der Ratgeber [Was kostet ein ambulanter Pflegedienst?](/ratgeber/was-kostet-ein-pflegedienst/)",
      },
      { type: "cta" },
    ],
  },
  {
    h2: "Kann man Pflegegeld und Pflegedienst kombinieren?",
    blocks: [
      {
        type: "p",
        text: "Ja, mit der **Kombinationsleistung** (§ 38 SGB XI): Nutzen Sie die Pflegesachleistung nur teilweise, erhalten Sie für den Rest anteilig Pflegegeld.",
      },
      {
        type: "table",
        head: ["Beispiel Pflegegrad 3", "Betrag"],
        rows: [
          ["Pflegesachleistung genutzt: 40 % von 1.497 €", "598,80 €"],
          ["Verbleibender Anteil Pflegegeld: 60 % von 599 €", "359,40 €"],
          ["Zusätzlich: Entlastungsbetrag", "131,00 €"],
        ],
      },
      { type: "p", text: "Wann sich welche Variante lohnt, lesen Sie unter [Pflegesachleistung oder Pflegegeld?](/ratgeber/pflegesachleistung-oder-pflegegeld/)" },
    ],
  },
  {
    h2: "Welche Leistungen gibt es zusätzlich?",
    blocks: [
      { type: "p", text: "Neben der monatlichen Pflege stehen Ihnen weitere Budgets zu, die viele Familien nicht ausschöpfen." },
      {
        type: "ul",
        items: [
          "**Entlastungsbetrag:** 131 € im Monat ab Pflegegrad 1 für Hilfe im Alltag – mehr unter [Entlastungsleistungen](/leistungen/entlastungsleistungen/).",
          "**Verhinderungs- und Kurzzeitpflege:** gemeinsamer Jahresbetrag bis 3.539 € ab Pflegegrad 2 – mehr unter [Verhinderungspflege](/leistungen/verhinderungspflege/).",
          "**Pflegehilfsmittel zum Verbrauch:** bis 42 € im Monat, zum Beispiel für Handschuhe und Desinfektion.",
          "**Wohnungsanpassung:** bis 4.180 € je Maßnahme, etwa für eine bodengleiche Dusche.",
        ],
      },
    ],
  },
  {
    h2: "Was kostet die Beratung bei TwinsCare?",
    blocks: [
      {
        type: "p",
        text: "Die Erstberatung bei Ihnen zu Hause ist kostenlos und unverbindlich. Den Beratungseinsatz nach § 37 Abs. 3 SGB XI für Pflegegeldbezieher bezahlt die Pflegekasse.",
      },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Muss ich in Vorkasse gehen?",
    a: "Nein. Wir rechnen Pflegesachleistungen und Behandlungspflege direkt mit Ihrer Pflege- und Krankenkasse ab. Eine Rechnung bekommen Sie nur für einen vorher vereinbarten Eigenanteil.",
  },
  {
    q: "Was passiert, wenn das Budget der Pflegekasse nicht reicht?",
    a: "Dann besprechen wir mit Ihnen, welche Leistungen wirklich nötig sind, ob sich der Entlastungsbetrag nutzen lässt oder ob ein höherer Pflegegrad in Frage kommt. Einen Eigenanteil gibt es nur mit Ihrem Einverständnis.",
  },
  {
    q: "Werden die Beträge 2027 erhöht?",
    a: "Nein. Die Beträge der Pflegeversicherung gelten seit dem 1. Januar 2025 unverändert. Die nächste gesetzliche Anpassung ist für den 1. Januar 2028 vorgesehen.",
  },
  {
    q: "Zahlt die Pflegekasse auch ohne Pflegegrad?",
    a: "Nein, Leistungen der Pflegekasse setzen einen Pflegegrad voraus. Behandlungspflege nach ärztlicher Verordnung zahlt die Krankenkasse aber auch ohne Pflegegrad.",
  },
];

export default function KostenPage() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [faqSchema(faqs), breadcrumbSchema(crumbs)] }} />
      <PageHero
        crumbs={crumbs}
        h1="Kosten und Finanzierung der Pflege zu Hause"
        lead="Mit Pflegegrad übernimmt die Pflegekasse einen großen Teil der Kosten. Hier sehen Sie, was Ihnen 2026 zusteht und wann ein Eigenanteil entsteht."
        foto={{ id: "photo-1702648156180-25d8be9c9527", alt: "Älteres Paar sitzt gemeinsam auf dem Sofa" }}
      />
      <div className="wrap content-layout">
        <article className="content-main">
          <KurzBox
            items={[
              "Die Pflegekasse zahlt für einen Pflegedienst bis zu 796 € (Pflegegrad 2) bis 2.299 € (Pflegegrad 5) im Monat.",
              "Behandlungspflege nach ärztlicher Verordnung zahlt die Krankenkasse – auch ohne Pflegegrad.",
              "Zusätzlich gibt es 131 € Entlastungsbetrag im Monat ab Pflegegrad 1.",
              "Vor dem Start bekommen Sie von uns einen schriftlichen Kostenvoranschlag.",
            ]}
          />
          <Sections sections={sections} />
          <FaqSection faqs={faqs} />
          <LinkCards
            title="Passend dazu"
            items={[
              { href: "/kosten/leistungen-pflegekasse/", title: "Alle Leistungen der Pflegekasse", text: "Komplette Übersicht 2026" },
              { href: "/pflegegrad-rechner/", title: "Pflegegrad-Rechner", text: "Erste Einschätzung in 3 Minuten" },
              { href: "/ratgeber/was-kostet-ein-pflegedienst/", title: "Was kostet ein ambulanter Pflegedienst?", text: "Ratgeber" },
              { href: "/ratgeber/pflegegrade-leistungen/", title: "Pflegegrad 1 bis 5: alle Leistungen", text: "Ratgeber" },
            ]}
          />
          <QuellenListe
            quellen={[
              { title: "Bundesgesundheitsministerium: Pflegeleistungen im Überblick", url: "https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/leistungen-der-pflegeversicherung/leistungen-im-ueberblick.html" },
              { title: "§ 36 SGB XI – Pflegesachleistung", url: "https://www.gesetze-im-internet.de/sgb_11/__36.html" },
              { title: "§ 38 SGB XI – Kombination von Geld- und Sachleistung", url: "https://www.gesetze-im-internet.de/sgb_11/__38.html" },
            ]}
          />
        </article>
        <div className="content-aside">
          <Toc sections={sections} extra={[{ id: "fragen", label: "Häufige Fragen" }]} />
          <SideCard />
        </div>
      </div>
      <CtaBand title="Wir rechnen es mit Ihnen durch" />
    </main>
  );
}
