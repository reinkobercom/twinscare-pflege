import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/content";

export const metadata: Metadata = {
  title: "Impressum | TwinsCare",
  alternates: { canonical: "/impressum/" },
};

// Angaben mit „folgt“ liefert TwinsCare. Rechtliche Prüfung durch den Auftraggeber (Vertrag § 6 Abs. 4).
export default function ImpressumPage() {
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
        Registergericht: folgt
        <br />
        Registernummer: folgt
      </p>
      <p>
        Persönlich haftende Gesellschafterin: folgt
        <br />
        Vertreten durch die Geschäftsführung: folgt
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phoneDisplay || "folgt"}
        <br />
        E-Mail: {site.email}
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: folgt</p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Verantwortliche Pflegefachkraft (Pflegedienstleitung): folgt
        <br />
        Es gelten das Pflegeberufegesetz (PflBG) sowie die Vorschriften des SGB V und SGB XI.
      </p>

      <h2>Versorgungsvertrag und zuständige Stellen</h2>
      <p>
        Zugelassen zur Versorgung durch Versorgungsvertrag nach § 72 SGB XI und Vertrag nach § 132a SGB V mit den
        Landesverbänden der Pflege- und Krankenkassen in Hamburg.
        <br />
        Zuständige Aufsichtsbehörde: folgt
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Bildnachweise</h2>
      <p>Fotos: Unsplash (unsplash.com), Unsplash-Lizenz.</p>
    </main>
  );
}
