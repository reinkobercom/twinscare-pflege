import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artikel, getArtikel, getLeistung, clusterInfo } from "@/lib/content";
import { site } from "@/lib/site";
import {
  PageHero, KurzBox, Sections, Toc, SideCard, FaqSection, LinkCards, QuellenListe, CtaBand,
  JsonLd, faqSchema, breadcrumbSchema,
} from "@/components/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArtikel((await params).slug);
  if (!a) return {};
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/ratgeber/${a.slug}/` },
    openGraph: {
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      url: `/ratgeber/${a.slug}/`,
      publishedTime: a.veroeffentlicht,
      modifiedTime: a.aktualisiert,
    },
  };
}

const datum = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });

export default async function ArtikelPage({ params }: Props) {
  const a = getArtikel((await params).slug);
  if (!a) notFound();
  const cluster = clusterInfo[a.cluster];
  const crumbs = [
    { href: "/ratgeber/", label: "Ratgeber" },
    { href: `/ratgeber/thema/${a.cluster}/`, label: cluster.titel },
    { href: `/ratgeber/${a.slug}/`, label: a.h1 },
  ];
  const leistung = getLeistung(a.leistung);
  const passend = [
    ...(leistung
      ? [{ href: `/leistungen/${leistung.slug}/`, title: `${leistung.navTitle} bei TwinsCare`, text: leistung.lead }]
      : []),
    ...a.verwandt
      .map((s) => getArtikel(s))
      .filter((x) => !!x)
      .map((x) => ({ href: `/ratgeber/${x.slug}/`, title: x.h1, text: `${x.lesezeit} Min. Lesezeit` })),
  ];

  return (
    <main id="inhalt">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: a.h1,
              description: a.metaDescription,
              datePublished: a.veroeffentlicht,
              dateModified: a.aktualisiert,
              inLanguage: "de-DE",
              mainEntityOfPage: `${site.domain}/ratgeber/${a.slug}/`,
              image: `https://images.unsplash.com/${a.foto.id}?auto=format&fit=crop&w=1200&q=75`,
              author: { "@type": "Organization", name: "Redaktion TwinsCare", url: site.domain },
              publisher: { "@id": `${site.domain}/#organisation` },
            },
            faqSchema(a.faqs),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <PageHero crumbs={crumbs} h1={a.h1} lead={a.lead} foto={a.foto} ctas={false}>
        <p className="byline">
          <span>
            Von der <strong>Redaktion TwinsCare</strong>
          </span>
          <span>Aktualisiert am {datum(a.aktualisiert)}</span>
          <span>{a.lesezeit} Min. Lesezeit</span>
        </p>
      </PageHero>
      <div className="wrap content-layout">
        <article className="content-main">
          <KurzBox title="Kurz gesagt" items={a.kurz} />
          <Sections sections={a.sections} />
          <FaqSection faqs={a.faqs} />
          <LinkCards title="Weiterlesen" items={passend} />
          <QuellenListe quellen={a.quellen} />
          <p className="disclaimer">
            Dieser Ratgeber ersetzt keine individuelle Rechts- oder Sozialberatung. Alle Beträge: Stand 2026.
          </p>
        </article>
        <div className="content-aside">
          <Toc sections={a.sections} extra={[{ id: "fragen", label: "Häufige Fragen" }]} />
          <SideCard />
        </div>
      </div>
      <CtaBand />
    </main>
  );
}
