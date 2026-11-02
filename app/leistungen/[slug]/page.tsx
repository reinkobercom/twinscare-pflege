import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leistungsSeiten, getLeistung, getArtikel } from "@/lib/content";
import { orte, site } from "@/lib/site";
import {
  PageHero, Kennzahlen, KurzBox, Sections, Toc, SideCard, FaqSection, LinkCards, QuellenListe, CtaBand,
  JsonLd, faqSchema, breadcrumbSchema,
} from "@/components/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return leistungsSeiten.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLeistung((await params).slug);
  if (!l) return {};
  return {
    title: l.metaTitle,
    description: l.metaDescription,
    alternates: { canonical: `/leistungen/${l.slug}/` },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: `/leistungen/${l.slug}/` },
  };
}

export default async function LeistungPage({ params }: Props) {
  const l = getLeistung((await params).slug);
  if (!l) notFound();
  const crumbs = [
    { href: "/leistungen/", label: "Leistungen" },
    { href: `/leistungen/${l.slug}/`, label: l.navTitle },
  ];
  const verwandt = [
    ...l.verwandt
      .map((s) => leistungsSeiten.find((x) => x.slug === s))
      .filter((x) => !!x)
      .map((x) => ({ href: `/leistungen/${x.slug}/`, title: x.navTitle, text: x.lead })),
    ...l.ratgeber
      .map((s) => getArtikel(s))
      .filter((x) => !!x)
      .map((a) => ({ href: `/ratgeber/${a.slug}/`, title: a.h1, text: `Ratgeber · ${a.lesezeit} Min. Lesezeit` })),
  ];

  return (
    <main id="inhalt">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: l.navTitle,
              serviceType: l.navTitle,
              description: l.metaDescription,
              url: `${site.domain}/leistungen/${l.slug}/`,
              provider: { "@id": `${site.domain}/#organisation` },
              areaServed: orte.map((o) => ({ "@type": "Place", name: o.name })),
            },
            faqSchema(l.faqs),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <PageHero crumbs={crumbs} h1={l.h1} lead={l.lead} foto={l.foto}>
        <Kennzahlen items={l.kennzahlen} />
      </PageHero>
      <div className="wrap content-layout">
        <article className="content-main">
          <KurzBox items={l.kurz} />
          <Sections sections={l.sections} />
          <FaqSection faqs={l.faqs} />
          <LinkCards title="Passend dazu" items={verwandt} />
          <QuellenListe quellen={l.quellen} />
        </article>
        <div className="content-aside">
          <Toc sections={l.sections} extra={[{ id: "fragen", label: "Häufige Fragen" }]} />
          <SideCard />
        </div>
      </div>
      <CtaBand />
    </main>
  );
}
