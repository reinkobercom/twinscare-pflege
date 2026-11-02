import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ortSeiten, getOrt } from "@/lib/content";
import { site } from "@/lib/site";
import {
  PageHero, KurzBox, Sections, Toc, SideCard, FaqSection, LinkCards, QuellenListe, CtaBand,
  JsonLd, faqSchema, breadcrumbSchema,
} from "@/components/content";

type Props = { params: Promise<{ ort: string }> };

export function generateStaticParams() {
  return ortSeiten.map((o) => ({ ort: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const o = getOrt((await params).ort);
  if (!o) return {};
  return {
    title: o.metaTitle,
    description: o.metaDescription,
    alternates: { canonical: `/pflegedienst/${o.slug}/` },
    openGraph: { title: o.metaTitle, description: o.metaDescription, url: `/pflegedienst/${o.slug}/` },
  };
}

export default async function OrtPage({ params }: Props) {
  const o = getOrt((await params).ort);
  if (!o) notFound();
  const crumbs = [
    { href: "/pflegedienst/", label: "Einsatzgebiet" },
    { href: `/pflegedienst/${o.slug}/`, label: o.name },
  ];
  const nachbarn = o.nachbarn
    .map((s) => getOrt(s))
    .filter((x) => !!x)
    .map((n) => ({ href: `/pflegedienst/${n.slug}/`, title: `Pflegedienst ${n.name}`, text: n.verwaltung }));

  return (
    <main id="inhalt">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `Ambulanter Pflegedienst in ${o.name}`,
              serviceType: "Ambulante Pflege",
              url: `${site.domain}/pflegedienst/${o.slug}/`,
              provider: { "@id": `${site.domain}/#organisation` },
              areaServed: {
                "@type": "Place",
                name: o.name,
                address: { "@type": "PostalAddress", postalCode: o.plz.join(", "), addressCountry: "DE" },
              },
            },
            faqSchema(o.faqs),
            breadcrumbSchema(crumbs),
          ],
        }}
      />
      <PageHero crumbs={crumbs} h1={o.h1} lead={o.lead} foto={o.foto}>
        <dl className="kennzahlen">
          <div>
            <dt>Postleitzahlen</dt>
            <dd>{o.plz.join(", ")}</dd>
          </div>
          <div>
            <dt>Zuständigkeit</dt>
            <dd>{o.verwaltung}</dd>
          </div>
          <div>
            <dt>Unser Büro</dt>
            <dd>{site.street}, Bergedorf</dd>
          </div>
        </dl>
      </PageHero>
      <div className="wrap content-layout">
        <article className="content-main">
          <KurzBox items={o.kurz} />
          <p className="anfahrt">{o.anfahrt}</p>
          <Sections sections={o.sections} />
          <FaqSection faqs={o.faqs} title={`Häufige Fragen zur Pflege in ${o.name}`} />
          <LinkCards title="Auch in der Nachbarschaft für Sie da" items={nachbarn} />
          <QuellenListe quellen={o.quellen} />
        </article>
        <div className="content-aside">
          <Toc sections={o.sections} extra={[{ id: "fragen", label: "Häufige Fragen" }]} />
          <SideCard />
        </div>
      </div>
      <CtaBand title={`Pflege in ${o.name} – lassen Sie uns sprechen`} />
    </main>
  );
}
