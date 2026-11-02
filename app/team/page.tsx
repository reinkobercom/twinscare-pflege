import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { PageHero, CtaBand, JsonLd, breadcrumbSchema } from "@/components/content";

export const metadata: Metadata = {
  title: "Unser Team – TwinsCare Pflegedienst Bergedorf",
  description:
    "Lernen Sie das Team von TwinsCare kennen: Pflegefachkräfte, Pflegeberatung und Pflegedienstleitung aus Bergedorf für den Hamburger Osten.",
  alternates: { canonical: "/team/" },
};

const crumbs = [
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/team/", label: "Team" },
];

// Platzhalter – Namen, Fotos und Qualifikationen liefert TwinsCare.
const team = [
  { rolle: "Geschäftsführung", text: "Verantwortet Organisation und Qualität.", foto: "photo-1741707039536-113e200f9e0d" },
  { rolle: "Pflegedienstleitung", text: "Examinierte Pflegefachkraft, plant die Versorgung und die Teams.", foto: "photo-1587556930720-58ec521056a5" },
  { rolle: "Pflegeberatung", text: "Berät zu Pflegegrad, Anträgen und Beratungseinsätzen.", foto: "photo-1765896387398-1e1ae8d2eb85" },
  { rolle: "Pflegefachkraft", text: "Grund- und Behandlungspflege bei Ihnen zu Hause.", foto: "photo-1587500154541-1cafd74f0efc" },
];

export default function TeamPage() {
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero
        crumbs={crumbs}
        h1="Die Menschen, die zu Ihnen kommen"
        lead="Ein Team aus Bergedorf, das Pflege als Handwerk versteht. Hier stellen wir uns vor."
        ctas={false}
      />
      <section className="section">
        <div className="wrap">
          <div className="team">
            {team.map((m) => (
              <div className="member" key={m.rolle}>
                <div className="member-photo">
                  <Photo id={m.foto} alt="" sizes="(max-width: 960px) 50vw, 25vw" />
                </div>
                <h2 style={{ fontSize: "var(--step-1)" }}>Name folgt</h2>
                <p>
                  <strong>{m.rolle}</strong>
                  <br />
                  {m.text}
                </p>
              </div>
            ))}
          </div>
          <p className="disclaimer">Fotos und Namen werden ergänzt, sobald das Team-Fotoshooting stattgefunden hat.</p>
        </div>
      </section>
      <CtaBand title="Lernen Sie uns persönlich kennen" />
    </main>
  );
}
