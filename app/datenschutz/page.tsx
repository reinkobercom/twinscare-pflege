import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | TwinsCare",
  alternates: { canonical: "/datenschutz/" },
};

// ENTWURF – vor dem Livegang durch den Datenschutzberater von TwinsCare prüfen lassen (Vertrag § 6 Abs. 4).
export default function DatenschutzPage() {
  return (
    <main id="inhalt" className="wrap legal">
      <Breadcrumbs items={[{ href: "/datenschutz/", label: "Datenschutz" }]} />
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        {site.legalName}, {site.street}, {site.zip} {site.city}
        <br />
        Telefon: {site.phoneDisplay || "folgt"}, E-Mail: {site.email}
        <br />
        Datenschutzbeauftragte/r: folgt
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf werden
        technisch notwendige Daten verarbeitet (IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser). Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. f DSGVO (sicherer und stabiler Betrieb). Mit Vercel besteht ein Auftragsverarbeitungsvertrag;
        die Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework bzw. von
        Standardvertragsklauseln.
      </p>

      <h2>3. Kontakt- und Anfrageformulare</h2>
      <p>
        Wenn Sie uns über ein Formular (Rückruf, Pflege-Anfrage, Pflegegrad-Rechner) kontaktieren, verarbeiten wir Ihre
        Angaben (z. B. Name, Telefonnummer, E-Mail, Postleitzahl, Angaben zur Pflegesituation), um Ihre Anfrage zu
        bearbeiten und Sie zu beraten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und
        Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Angaben zur Pflegesituation sind Gesundheitsdaten; diese verarbeiten wir
        nur mit Ihrer ausdrücklichen Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit
        mit Wirkung für die Zukunft widerrufen, z. B. per E-Mail an {site.email}.
      </p>
      <p>
        Für den Versand der Formularinhalte per E-Mail nutzen wir Resend (Resend, Inc., USA) als Auftragsverarbeiter.
        Grundlage der Übermittlung in die USA: folgt. Die Formularinhalte erhält außerdem unsere Marketing-Agentur
        VALIORA (RX2 Marketing GmbH, Stockumer Straße 30, 59368 Werne), die Anfragen in unserem Auftrag erfasst und
        auswertet. Ihre Daten löschen wir, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
        gesetzlichen Aufbewahrungspflichten bestehen. Konkrete Speicherdauer: folgt.
      </p>

      <h2>4. Schriftarten</h2>
      <p>Die verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Es findet keine Verbindung zu Servern von Google statt.</p>

      <h2>5. Bilder</h2>
      <p>
        Einige Fotos werden derzeit vom Bilderdienst Unsplash (images.unsplash.com) geladen. Dabei wird Ihre IP-Adresse an
        Unsplash übermittelt.
      </p>

      <h2>6. Externe Links</h2>
      <p>
        Unsere Seiten enthalten Links zu Google Maps, WhatsApp und zu Behörden. Erst wenn Sie einen dieser Links anklicken,
        werden Daten an den jeweiligen Anbieter übertragen.
      </p>

      <h2>7. Statistik und Conversion-Messung</h2>
      <p>
        Derzeit setzen wir keine Analyse- oder Tracking-Dienste und keine Cookies zu Werbezwecken ein. Sobald sich das
        ändert, ergänzen wir diesen Abschnitt und holen vorher Ihre Einwilligung ein.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
        Widerspruch (Art. 15–21 DSGVO) sowie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z. B. beim
        Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit.
      </p>
    </main>
  );
}
