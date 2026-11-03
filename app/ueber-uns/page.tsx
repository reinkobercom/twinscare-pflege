import type { Metadata } from "next";
import type { Section } from "@/lib/content/types";
import { orte, site } from "@/lib/site";
import Photo from "@/components/Photo";
import { PageHero, Sections, CtaBand, JsonLd, breadcrumbSchema, LinkCards } from "@/components/content";

export const metadata: Metadata = {
  title: "Über uns – TwinsCare ambulanter Pflegedienst Bergedorf",
  description:
    "TwinsCare ist ein ambulanter Pflegedienst aus Bergedorf. Wir pflegen mit festen Teams, transparenten Kosten und Zeit für die Menschen – im Hamburger Osten und Umland.",
  alternates: { canonical: "/ueber-uns/" },
};

const crumbs = [{ href: "/ueber-uns/", label: "Über uns" }];

const sections: Section[] = [
  {
    h2: "Wer ist TwinsCare?",
    blocks: [
      {
        type: "p",
        text: "TwinsCare ist ein ambulanter Pflegedienst mit Sitz in der Bergedorfer Straße 85 in Hamburg-Bergedorf. Wir versorgen pflegebedürftige Menschen in ihrem Zuhause – in Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf.",
      },
    ],
  },
  {
    h2: "Wofür stehen wir?",
    blocks: [
      { type: "p", text: "Gute Pflege braucht Zeit, Verlässlichkeit und Ehrlichkeit. Daran lassen wir uns messen." },
      {
        type: "ul",
        items: [
          "**Feste Teams:** Sie lernen die Menschen kennen, die zu Ihnen kommen – und wir Ihre Gewohnheiten.",
          "**Klare Kosten:** Vor dem ersten Einsatz bekommen Sie einen schriftlichen Kostenvoranschlag.",
          "**Kurze Wege:** Wir bleiben in unserem Gebiet rund um Bergedorf. Das spart Fahrzeit und schenkt Zeit für Sie.",
          "**Weniger Papierkram:** Anträge bei Pflege- und Krankenkasse erledigen wir gemeinsam mit Ihnen.",
        ],
      },
    ],
  },
  {
    h2: "Wie arbeiten wir?",
    blocks: [
      { type: "p", text: "Jede Versorgung beginnt mit einem Gespräch bei Ihnen zu Hause. Daraus entsteht ein Pflegeplan, den wir regelmäßig mit Ihnen überprüfen." },
      {
        type: "ol",
        items: [
          "Sie rufen an oder schreiben uns – wir hören zu und klären erste Fragen.",
          "Kostenlose Erstberatung bei Ihnen zu Hause.",
          "Schriftlicher Pflegeplan und Kostenvoranschlag.",
          "Start der Pflege mit Ihrem festen Team.",
        ],
      },
    ],
  },
];

export default function UeberUnsPage() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Ein Pflegedienst aus Bergedorf für den Hamburger Osten"
        lead="Wir sind für Menschen da, die zu Hause gut versorgt bleiben möchten – und für die Familien, die sie dabei begleiten."
        foto={{ id: "photo-1765896387398-1e1ae8d2eb85", alt: "Pflegekraft im Gespräch mit einer älteren Person im Sessel" }}
      />
      <div className="wrap content-layout" style={{ gridTemplateColumns: "minmax(0, 1fr)" }}>
        <article className="content-main" style={{ marginInline: "auto" }}>
          <Sections sections={sections} />
          <div className="mosaic-strip">
            <div><Photo id="photo-1762955913084-96ea3f986468" alt="Betreuerin strickt mit älteren Frauen" /></div>
            <div><Photo id="photo-1773227055624-07b515ba87c5" alt="Pflegekraft begleitet ältere Frau mit Rollator" /></div>
          </div>
          <LinkCards
            title="Mehr über uns"
            items={[
              { href: "/leistungen/", title: "Unsere Leistungen", text: "Was wir für Sie tun können" },
              { href: "/pflegedienst/", title: "Unser Einsatzgebiet", text: orte.map((o) => o.name).join(", ") },
              { href: "/kontakt/", title: "Kontakt", text: `${site.street}, ${site.zip} ${site.city}` },
            ]}
          />
        </article>
      </div>
      <CtaBand />
    </main>
  );
}
