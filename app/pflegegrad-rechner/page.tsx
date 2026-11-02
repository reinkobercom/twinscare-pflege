import type { Metadata } from "next";
import type { Section, Faq } from "@/lib/content/types";
import PflegegradRechner from "@/components/PflegegradRechner";
import {
  Breadcrumbs, Sections, FaqSection, CtaBand, JsonLd, faqSchema, breadcrumbSchema, KurzBox,
} from "@/components/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pflegegrad-Rechner 2026: kostenlos Pflegegrad ermitteln | TwinsCare",
  description:
    "Mit dem Pflegegrad-Rechner in 3 Minuten eine erste Einschätzung erhalten – nach den sechs Modulen der Begutachtung. Inklusive Pflegegeld und Sachleistung 2026.",
  alternates: { canonical: "/pflegegrad-rechner/" },
};

const crumbs = [{ href: "/pflegegrad-rechner/", label: "Pflegegrad-Rechner" }];

const sections: Section[] = [
  {
    h2: "Wie wird der Pflegegrad berechnet?",
    blocks: [
      {
        type: "p",
        text: "Der Pflegegrad ergibt sich aus einer Punktzahl zwischen 0 und 100, die der Medizinische Dienst in sechs Lebensbereichen (Modulen) ermittelt. Jedes Modul fließt mit einem festen Gewicht in die Gesamtpunktzahl ein.",
      },
      {
        type: "table",
        head: ["Modul", "Was wird bewertet?", "Gewichtung"],
        rows: [
          ["1 Mobilität", "Fortbewegen in der Wohnung, Treppensteigen, Positionswechsel", "10 %"],
          ["2 Kognitive und kommunikative Fähigkeiten", "Orientierung, Erinnern, Verstehen, Entscheiden", "15 % (der höhere Wert aus Modul 2 oder 3 zählt)"],
          ["3 Verhaltensweisen und psychische Problemlagen", "Unruhe, Ängste, abwehrendes Verhalten", "–"],
          ["4 Selbstversorgung", "Waschen, Anziehen, Essen und Trinken, Toilettengang", "40 %"],
          ["5 Umgang mit krankheitsbedingten Anforderungen", "Medikamente, Verbände, Arztbesuche, Therapien", "20 %"],
          ["6 Gestaltung des Alltagslebens und sozialer Kontakte", "Tagesablauf, Beschäftigung, Kontakte", "15 %"],
        ],
      },
    ],
  },
  {
    h2: "Ab wie vielen Punkten gibt es welchen Pflegegrad?",
    blocks: [
      { type: "p", text: "Ab 12,5 Punkten gibt es Pflegegrad 1, ab 27 Punkten Pflegegrad 2. Die Schwellen sind gesetzlich festgelegt (§ 15 SGB XI)." },
      {
        type: "table",
        head: ["Pflegegrad", "Punkte", "Pflegegeld", "Pflegesachleistung"],
        rows: [
          ["Pflegegrad 1", "12,5 bis unter 27", "–", "– (131 € Entlastungsbetrag)"],
          ["Pflegegrad 2", "27 bis unter 47,5", "347 €", "796 €"],
          ["Pflegegrad 3", "47,5 bis unter 70", "599 €", "1.497 €"],
          ["Pflegegrad 4", "70 bis unter 90", "800 €", "1.859 €"],
          ["Pflegegrad 5", "90 bis 100", "990 €", "2.299 €"],
        ],
        caption: "Monatliche Beträge, Stand 2026",
      },
    ],
  },
  {
    h2: "Wie genau ist der Pflegegrad-Rechner?",
    blocks: [
      {
        type: "p",
        text: "Der Rechner gibt eine Orientierung, keine verbindliche Einstufung. Er fragt pro Modul nur die wichtigsten Punkte ab – die echte Begutachtung prüft rund 60 Einzelkriterien.",
      },
      {
        type: "p",
        text: "Liegt Ihr Ergebnis knapp an einer Schwelle, lohnt sich eine gute Vorbereitung auf die Begutachtung besonders. Wie das geht, lesen Sie im Ratgeber [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
      },
    ],
  },
  {
    h2: "Wie geht es nach dem Rechner weiter?",
    blocks: [
      { type: "p", text: "Der nächste Schritt ist der Antrag bei der Pflegekasse – ein Anruf genügt, die Leistungen gelten ab dem Monat des Antrags." },
      {
        type: "ol",
        items: [
          "Antrag bei der Pflegekasse stellen (telefonisch oder schriftlich, formlos möglich).",
          "Der Medizinische Dienst meldet sich und kommt zur Begutachtung nach Hause.",
          "Die Pflegekasse entscheidet in der Regel innerhalb von 25 Arbeitstagen.",
          "Mit dem Bescheid können Sie Leistungen wie [ambulante Pflege](/leistungen/ambulante-pflege/) oder [Entlastungsleistungen](/leistungen/entlastungsleistungen/) nutzen.",
        ],
      },
      { type: "p", text: "Schritt für Schritt erklärt: [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/). Gern helfen wir Ihnen dabei – kostenlos im Rahmen unserer [Pflegeberatung](/leistungen/pflegeberatung/)." },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "Ist der Pflegegrad-Rechner kostenlos?",
    a: "Ja. Der Rechner und die anschließende Beratung durch TwinsCare sind kostenlos und unverbindlich.",
  },
  {
    q: "Warum muss ich meine Kontaktdaten angeben?",
    a: "Wir senden Ihnen die Auswertung zu und rufen Sie für eine kostenlose Beratung an. So können wir gemeinsam klären, ob sich ein Antrag lohnt und welche Leistungen in Frage kommen.",
  },
  {
    q: "Kann ich mit dem Ergebnis einen Pflegegrad beantragen?",
    a: "Das Ergebnis ersetzt keinen Antrag. Den Pflegegrad legt die Pflegekasse nach der Begutachtung durch den Medizinischen Dienst fest. Das Ergebnis hilft Ihnen aber, die Begutachtung vorzubereiten.",
  },
  {
    q: "Was bekomme ich bei Pflegegrad 1?",
    a: "Bei Pflegegrad 1 gibt es kein Pflegegeld, aber den Entlastungsbetrag von 131 € im Monat, Pflegehilfsmittel bis 42 € im Monat und Zuschüsse für den Umbau der Wohnung bis 4.180 € je Maßnahme.",
  },
];

export default function RechnerPage() {
  return (
    <main id="inhalt">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebApplication",
              name: "Pflegegrad-Rechner",
              applicationCategory: "HealthApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
              url: `${site.domain}/pflegegrad-rechner/`,
              provider: { "@id": `${site.domain}/#organisation` },
            },
            faqSchema(faqs),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <section className="page-hero">
        <div className="wrap">
          <Breadcrumbs items={crumbs} />
          <div className="check rechner-layout">
            <div className="check-copy">
              <h1>Pflegegrad-Rechner 2026</h1>
              <p className="page-lead">
                Zwölf Fragen zu den Lebensbereichen, die auch der Medizinische Dienst prüft. Danach wissen Sie, welcher
                Pflegegrad möglich ist und welche Leistungen Ihnen zustehen.
              </p>
              <ul>
                <li>Orientierung nach den sechs Modulen der Begutachtung</li>
                <li>Mit Pflegegeld und Sachleistung nach aktuellem Stand</li>
                <li>Kostenloser Rückruf einer Pflegeberaterin dazu</li>
              </ul>
            </div>
            <PflegegradRechner />
          </div>
        </div>
      </section>
      <div className="wrap content-layout" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
        <article className="content-main" style={{ marginInline: "auto" }}>
          <KurzBox
            items={[
              "Der Pflegegrad hängt davon ab, wie selbstständig ein Mensch im Alltag ist – nicht von der Diagnose.",
              "Ab 27 Punkten gibt es Pflegegrad 2 mit 347 € Pflegegeld oder 796 € Pflegesachleistung im Monat.",
              "Die Selbstversorgung zählt mit 40 % am stärksten.",
              "Leistungen gelten ab dem Monat, in dem Sie den Antrag stellen.",
            ]}
          />
          <Sections sections={sections} />
          <FaqSection faqs={faqs} />
        </article>
      </div>
      <CtaBand title="Wir helfen beim Antrag" />
    </main>
  );
}
