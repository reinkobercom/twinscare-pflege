import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/content";

export const metadata: Metadata = {
  title: "Impressum | TwinsCare ambulanter Pflegedienst Bergedorf",
  description:
    "Impressum der Twins Care Ambulanter Pflegedienst GmbH & Co. KG, Bergedorfer Straße 85, 21033 Hamburg: Anbieterkennzeichnung und Kontakt.",
  alternates: { canonical: "/impressum/" },
};

// Angaben mit „folgt“ liefert TwinsCare. Rechtliche Prüfung durch den Auftraggeber (Vertrag § 6 Abs. 4).
export default function ImpressumPage() {
  const i = site.impressum;
  return (
    <main id="inhalt" className="wrap legal">
      <Breadcrumbs items={[{ href: "/impressum/", label: "Impressum" }]} />
      <h1>Impressum</h1>

      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalName}
        <br />
        {site.street}
        <br />
        {site.zip} {site.city}
      </p>
      <p>
        Persönlich haftende Gesellschafterin: {i.komplementaerin}
        <br />
        Geschäftsführer: {i.geschaeftsfuehrer}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:+49${i.telefon.replace(/\D/g, "").slice(1)}`}>{i.telefon}</a>
        <br />
        Fax: {i.fax}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Handelsregister</h2>
      <p>
        <strong>{site.legalName}</strong>
        <br />
        Registergericht: folgt
        <br />
        Registernummer (HRA): folgt
      </p>
      <p>
        <strong>{i.komplementaerin}</strong>
        <br />
        Registergericht: folgt
        <br />
        Registernummer (HRB): folgt
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: folgt</p>

      <h2>Pflegedienstleitung und berufsrechtliche Angaben</h2>
      <p>
        Pflegedienstleitung: {i.pdl}
        <br />
        Stellvertretende Pflegedienstleitung: {i.stvPdl}
        <br />
        Institutionskennzeichen (IK): {i.ik}
      </p>
      <p>Es gelten das Pflegeberufegesetz (PflBG) sowie die Vorschriften des SGB V und SGB XI.</p>

      <h2>Zuständige Aufsichtsbehörde</h2>
      <p>
        Bezirksamt Altona – Fachamt Gesundheit
        <br />
        Behringstraße 122
        <br />
        22763 Hamburg
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Bildnachweise</h2>
      <p>Fotos: Unsplash (unsplash.com), Unsplash-Lizenz.</p>
    </main>
  );
}
