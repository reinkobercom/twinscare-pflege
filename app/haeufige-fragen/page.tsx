import type { Metadata } from "next";
import { startFaqs } from "@/lib/faqs";
import { leistungsSeiten } from "@/lib/content";
import { PageHero, FaqSection, CtaBand, JsonLd, faqSchema, breadcrumbSchema } from "@/components/content";

export const metadata: Metadata = {
  title: "Häufige Fragen zur ambulanten Pflege | TwinsCare Bergedorf",
  description:
    "Antworten auf die häufigsten Fragen zu Kosten, Pflegegrad, Verhinderungspflege, Entlastungsbetrag und Behandlungspflege – von TwinsCare aus Bergedorf.",
  alternates: { canonical: "/haeufige-fragen/" },
};

const crumbs = [{ href: "/haeufige-fragen/", label: "Häufige Fragen" }];

export default function FaqPage() {
  const gruppen = [
    { id: "allgemein", title: "Allgemein", faqs: startFaqs },
    ...leistungsSeiten.map((l) => ({ id: l.slug, title: l.navTitle, faqs: l.faqs.slice(0, 4) })),
  ];
  const alle = gruppen.flatMap((g) => g.faqs);
  const eindeutig = alle.filter((f, i) => alle.findIndex((x) => x.q === f.q) === i);
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [faqSchema(eindeutig), breadcrumbSchema(crumbs)] }} />
      <PageHero
        crumbs={crumbs}
        h1="Häufige Fragen zur Pflege zu Hause"
        lead="Die Antworten auf die Fragen, die uns Familien am häufigsten stellen. Ihre Frage ist nicht dabei? Rufen Sie uns an."
      />
      <div className="wrap" style={{ maxWidth: 860, paddingBlock: "clamp(2.5rem, 6vw, 4.5rem)" }}>
        <ul className="chips-nav" aria-label="Themen">
          {gruppen.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`}>{g.title}</a>
            </li>
          ))}
        </ul>
        {gruppen.map((g) => (
          <FaqSection key={g.id} id={g.id} title={g.title} faqs={g.faqs} />
        ))}
      </div>
      <CtaBand />
    </main>
  );
}
