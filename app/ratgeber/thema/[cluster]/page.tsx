import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Cluster } from "@/lib/content/types";
import { artikel, clusterInfo, clusterMitArtikeln } from "@/lib/content";
import ArtikelGrid from "@/components/ArtikelGrid";
import { PageHero, CtaBand, JsonLd, breadcrumbSchema } from "@/components/content";

type Props = { params: Promise<{ cluster: string }> };

export function generateStaticParams() {
  return clusterMitArtikeln().map((c) => ({ cluster: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = (await params).cluster as Cluster;
  const info = clusterInfo[c];
  if (!info) return {};
  return {
    title: `${info.titel} – Ratgeber | TwinsCare`,
    description: `${info.text} Ratgeber von TwinsCare, Ihrem ambulanten Pflegedienst in Bergedorf und Hamburg-Ost.`,
    alternates: { canonical: `/ratgeber/thema/${c}/` },
  };
}

export default async function ThemaPage({ params }: Props) {
  const c = (await params).cluster as Cluster;
  const info = clusterInfo[c];
  const items = artikel.filter((a) => a.cluster === c);
  if (!info || !items.length) notFound();
  const crumbs = [
    { href: "/ratgeber/", label: "Ratgeber" },
    { href: `/ratgeber/thema/${c}/`, label: info.titel },
  ];
  return (
    <main id="inhalt">
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(crumbs) }} />
      <PageHero crumbs={crumbs} h1={`Ratgeber: ${info.titel}`} lead={info.text} ctas={false} />
      <section className="section">
        <div className="wrap">
          <ul className="chips-nav" aria-label="Themen">
            {clusterMitArtikeln().map((k) => (
              <li key={k}>
                <a href={`/ratgeber/thema/${k}/`} aria-current={k === c ? "page" : undefined}>
                  {clusterInfo[k].titel}
                </a>
              </li>
            ))}
          </ul>
          <ArtikelGrid items={items} />
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
