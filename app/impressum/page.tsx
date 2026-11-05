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

      <h2>Hinweise zur Streitbeilegung</h2>
      <p>
        <strong>Verbraucherstreitbeilegung (§ 36 VSBG):</strong> Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Für eigene Inhalte auf diesen Seiten sind wir nach § 7 Abs. 1 DDG und den allgemeinen Gesetzen verantwortlich.
        Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter nicht verpflichtet, übermittelte oder gespeicherte fremde
        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Pflichten zur Entfernung oder Sperrung von Informationen nach den allgemeinen Gesetzen bleiben davon unberührt.
        Eine Haftung ist erst ab dem Zeitpunkt möglich, zu dem wir von einer konkreten Rechtsverletzung Kenntnis erhalten.
        Sobald uns eine solche Rechtsverletzung bekannt wird, entfernen wir die betreffenden Inhalte umgehend.
      </p>
      <p>
        Die Inhalte dieser Website dienen der allgemeinen Information und ersetzen keine persönliche Beratung durch
        Ärztinnen, Ärzte, Pflegekassen oder unser Pflegeteam. Beträge und Leistungen der Pflege- und Krankenversicherung
        geben wir sorgfältig wieder; sie können sich durch gesetzliche Änderungen jedoch ändern.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website enthält Links zu externen Websites Dritter. Auf deren Inhalte haben wir keinen Einfluss und
        übernehmen dafür keine Gewähr; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der verlinkten
        Seite. Bei der Verlinkung haben wir die Seiten auf mögliche Rechtsverstöße geprüft, rechtswidrige Inhalte waren
        zu diesem Zeitpunkt nicht erkennbar. Eine fortlaufende Kontrolle der verlinkten Seiten ist ohne konkrete
        Anhaltspunkte für eine Rechtsverletzung nicht zumutbar. Wird uns eine Rechtsverletzung bekannt, entfernen wir den
        betreffenden Link umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die von uns erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
        Vervielfältigung, Bearbeitung, Verbreitung und jede Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
        der schriftlichen Zustimmung der jeweiligen Urheberin oder des jeweiligen Urhebers. Downloads und Kopien dieser
        Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit Inhalte nicht von uns erstellt wurden, beachten wir die Urheberrechte Dritter und kennzeichnen diese
        Inhalte entsprechend. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        Hinweis an <a href={`mailto:${site.email}`}>{site.email}</a>. Wird uns eine Rechtsverletzung bekannt, entfernen
        wir die betreffenden Inhalte umgehend.
      </p>

      <h2>Bildnachweise</h2>
      <p>Fotos: Unsplash (unsplash.com), Unsplash-Lizenz.</p>

      <p className="legal-stand">Stand: November 2026</p>
    </main>
  );
}
