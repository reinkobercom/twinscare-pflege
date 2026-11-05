import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/content";
import CookieEinstellungenButton from "@/components/CookieEinstellungenButton";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | TwinsCare",
  description: "Wie TwinsCare personenbezogene Daten auf dieser Website verarbeitet: Formulare, Hosting, Analyse, Google Ads, Meta Pixel und Ihre Rechte.",
  alternates: { canonical: "/datenschutz/" },
};

const STAND = "3. November 2026";

// Vor der endgültigen Freigabe durch die Rechtsberatung von TwinsCare prüfen lassen (Vertrag § 6 Abs. 4).
export default function DatenschutzPage() {
  return (
    <main id="inhalt" className="wrap legal">
      <Breadcrumbs items={[{ href: "/datenschutz/", label: "Datenschutz" }]} />
      <h1>Datenschutzerklärung</h1>
      <p>Stand: {STAND}</p>

      <nav aria-label="Inhalt der Datenschutzerklärung">
        <ol>
          <li><a href="#verantwortlicher">Verantwortlicher</a></li>
          <li><a href="#ueberblick">Überblick und Rechtsgrundlagen</a></li>
          <li><a href="#hosting">Hosting und Bereitstellung (Vercel)</a></li>
          <li><a href="#github">Quellcode-Verwaltung (GitHub)</a></li>
          <li><a href="#formulare">Anfrage, Rückruf und Pflegegrad-Rechner</a></li>
          <li><a href="#kontakt">Kontakt per E-Mail, Telefon und WhatsApp</a></li>
          <li><a href="#einwilligung">Cookies und Einwilligungsverwaltung</a></li>
          <li><a href="#vercel-analytics">Vercel Web Analytics</a></li>
          <li><a href="#ga4">Google Analytics 4</a></li>
          <li><a href="#google-ads">Google Ads: Conversion-Tracking und Remarketing</a></li>
          <li><a href="#meta">Meta Pixel</a></li>
          <li><a href="#weitere">Schriften, Bilder und externe Links</a></li>
          <li><a href="#empfaenger">Empfänger und Übermittlung in Drittländer</a></li>
          <li><a href="#speicherdauer">Speicherdauer</a></li>
          <li><a href="#rechte">Ihre Rechte</a></li>
          <li><a href="#sonstiges">Sonstiges</a></li>
        </ol>
      </nav>

      <h2 id="verantwortlicher">1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        {site.legalName}
        <br />
        {site.street}, {site.zip} {site.city}
        <br />
        Telefon: {site.impressum.telefon}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>Einen Datenschutzbeauftragten haben wir nicht bestellt. Bei Fragen zum Datenschutz schreiben Sie uns an die oben genannte E-Mail-Adresse.</p>

      <h2 id="ueberblick">2. Überblick und Rechtsgrundlagen</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies für den Betrieb dieser Website, die Beantwortung Ihrer
        Anfragen oder die Messung unseres Angebots erforderlich ist oder Sie eingewilligt haben. Maßgeblich sind insbesondere:
      </p>
      <ul>
        <li>Art. 6 Abs. 1 lit. a DSGVO – Ihre Einwilligung, etwa für Statistik und Marketing</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO – Anbahnung und Durchführung eines Vertrags, etwa eines Pflegevertrags</li>
        <li>Art. 6 Abs. 1 lit. c DSGVO – gesetzliche Pflichten, etwa Aufbewahrungsfristen</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen, etwa der sichere Betrieb der Website</li>
        <li>Art. 9 Abs. 2 lit. a DSGVO – Ihre ausdrückliche Einwilligung in die Verarbeitung von Gesundheitsdaten</li>
        <li>
          § 25 Abs. 1 TDDDG – Ihre Einwilligung in das Speichern von Informationen auf Ihrem Endgerät (z. B. Cookies) bzw.
          § 25 Abs. 2 Nr. 2 TDDDG, soweit dies für den Dienst unbedingt erforderlich ist
        </li>
      </ul>
      <p>
        Die Verbindung zu dieser Website ist per TLS verschlüsselt. Sie erkennen das an „https://“ in der Adresszeile Ihres
        Browsers.
      </p>

      <h2 id="hosting">3. Hosting und Bereitstellung (Vercel)</h2>
      <p>
        Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf
        verarbeitet Vercel technisch notwendige Daten: IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse, übertragene
        Datenmenge, Referrer sowie Browser- und Geräteinformationen. Diese Daten sind erforderlich, um die Website
        auszuliefern, ihre Sicherheit zu gewährleisten und Angriffe abzuwehren. Auch die Formulare dieser Website werden über
        Server von Vercel verarbeitet.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer sicheren, stabilen und
        schnellen Bereitstellung der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
        Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Die Übermittlung in die USA stützt sich auf den
        Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO).
      </p>

      <h2 id="github">4. Quellcode-Verwaltung (GitHub)</h2>
      <p>
        Den Programmcode dieser Website verwalten wir bei der GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107,
        USA. Von dort wird die Website bei Vercel erstellt. Beim Besuch unserer Website werden keine Daten von Ihnen an GitHub
        übertragen; GitHub verarbeitet nur Daten der Personen, die an der Website arbeiten. GitHub ist nach dem EU-US Data
        Privacy Framework zertifiziert.
      </p>

      <h2 id="formulare">5. Anfrage, Rückruf und Pflegegrad-Rechner</h2>
      <p>
        Auf dieser Website können Sie uns über drei Formulare erreichen: die Pflegeanfrage, den Rückrufwunsch und den
        Pflegegrad-Rechner. Je nach Formular verarbeiten wir:
      </p>
      <ul>
        <li>Name, Telefonnummer, E-Mail-Adresse und Postleitzahl bzw. Ort</li>
        <li>Ihre gewünschte Rückrufzeit und eine freiwillige Nachricht</li>
        <li>
          Angaben zur Pflegesituation, etwa für wen Sie Hilfe suchen, welche Leistungen Sie benötigen, ob ein Pflegegrad
          besteht, die Wohnsituation und Ihre Antworten im Pflegegrad-Rechner
        </li>
        <li>die Seite, von der aus Sie das Formular abgeschickt haben</li>
      </ul>
      <p>
        <strong>Zweck:</strong> Wir nutzen die Angaben, um Ihre Anfrage zu bearbeiten, Sie zurückzurufen, Sie zu beraten und
        gegebenenfalls einen Pflegevertrag vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>
      <p>
        <strong>Gesundheitsdaten:</strong> Angaben zur Pflegesituation und zum Pflegegrad sind Gesundheitsdaten im Sinne von
        Art. 9 DSGVO. Wir verarbeiten sie nur, wenn Sie vor dem Absenden ausdrücklich eingewilligt haben (Art. 9 Abs. 2 lit. a
        DSGVO). Ihre Einwilligung ist freiwillig und kann jederzeit mit Wirkung für die Zukunft widerrufen werden, zum
        Beispiel per E-Mail an <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <strong>Pflegegrad-Rechner:</strong> Das Ergebnis ist eine unverbindliche Orientierung. Es findet keine
        automatisierte Entscheidung im Sinne von Art. 22 DSGVO statt; den Pflegegrad legt allein die Pflegekasse nach der
        Begutachtung durch den Medizinischen Dienst fest.
      </p>
      <p>
        <strong>Versand per E-Mail (Resend):</strong> Die Formularinhalte werden über den E-Mail-Dienst Resend der Plus Five
        Five, Inc., USA, an uns übermittelt. Resend verarbeitet die Daten in unserem Auftrag (Art. 28 DSGVO), speichert sie
        in den USA und löscht E-Mail- und Protokolldaten nach 30 Tagen. Resend ist nach dem EU-US Data Privacy Framework
        zertifiziert; zusätzlich gelten Standardvertragsklauseln der EU-Kommission.
      </p>
      <p>
        <strong>Marketing-Agentur:</strong> Eine Kopie jeder Anfrage erhält unsere Marketing-Agentur VALIORA (RX2 Marketing
        GmbH, Stockumer Straße 30, 59368 Werne). Sie erfasst und wertet die Anfragen in unserem Auftrag aus, um den Erfolg
        unserer Werbemaßnahmen zu messen (Art. 28 DSGVO).
      </p>
      <p>
        Eine Bestätigungs-E-Mail an Sie verschicken wir nicht; die Bestätigung erhalten Sie direkt auf der Website. An Google
        oder Meta geben wir keine Formularinhalte und keine Kontaktdaten weiter. Wenn Sie in Marketing eingewilligt haben,
        erfahren diese Anbieter nur, dass eine Anfrage stattgefunden hat (siehe Abschnitte 10 und 11).
      </p>
      <p>
        Die Angabe der Pflichtfelder ist für die Bearbeitung Ihrer Anfrage erforderlich. Ohne diese Angaben können wir Ihre
        Anfrage nicht beantworten; gesetzlich verpflichtet sind Sie zur Angabe nicht.
      </p>

      <h2 id="kontakt">6. Kontakt per E-Mail, Telefon und WhatsApp</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres Anliegens (Art.
        6 Abs. 1 lit. b DSGVO, bei Gesundheitsdaten Art. 9 Abs. 2 lit. a DSGVO).
      </p>
      <p>
        Bieten wir einen Link zu WhatsApp an, wird beim Anklicken die App bzw. Website von WhatsApp geöffnet, einem Dienst der
        WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland. Erst dann werden Daten an WhatsApp übertragen. WhatsApp
        verarbeitet die Daten in eigener Verantwortung; es gelten die Datenschutzhinweise von WhatsApp. Nutzen Sie diesen Weg
        nur, wenn Sie damit einverstanden sind – alternativ erreichen Sie uns per E-Mail oder über unsere Formulare.
      </p>

      <h2 id="einwilligung">7. Cookies und Einwilligungsverwaltung</h2>
      <p>
        Diese Website setzt ohne Ihre Einwilligung keine Cookies zu Statistik- oder Werbezwecken. Dienste, die Cookies oder
        ähnliche Technologien verwenden, laden erst, nachdem Sie im Banner zugestimmt haben. Sie können wählen zwischen:
      </p>
      <ul>
        <li><strong>Notwendig:</strong> speichert Ihre Auswahl. Immer aktiv.</li>
        <li><strong>Statistik:</strong> Google Analytics 4</li>
        <li><strong>Marketing:</strong> Google Ads (Conversion-Tracking und Remarketing) und Meta Pixel</li>
      </ul>
      <p>
        Ihre Auswahl speichern wir im lokalen Speicher Ihres Browsers (Eintrag „twinscare-consent“, 12 Monate), damit der
        Banner nicht bei jedem Seitenaufruf erscheint. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. c
        DSGVO (Nachweis der Einwilligung). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder
        ändern:
      </p>
      <p>
        <CookieEinstellungenButton />
      </p>
      <div className="table-wrap">
        <table>
          <caption>Übersicht der Cookies und Speichereinträge</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Anbieter</th>
              <th scope="col">Zweck</th>
              <th scope="col">Dauer</th>
            </tr>
          </thead>
          <tbody>
            <tr><th scope="row">twinscare-consent</th><td data-label="Anbieter">TwinsCare</td><td data-label="Zweck">Speichert Ihre Cookie-Auswahl</td><td data-label="Dauer">12 Monate</td></tr>
            <tr><th scope="row">_ga, _ga_*</th><td data-label="Anbieter">Google</td><td data-label="Zweck">Unterscheidet Besucher für Google Analytics</td><td data-label="Dauer">2 Jahre</td></tr>
            <tr><th scope="row">_gcl_au, _gcl_*</th><td data-label="Anbieter">Google</td><td data-label="Zweck">Conversion-Messung für Google Ads</td><td data-label="Dauer">90 Tage</td></tr>
            <tr><th scope="row">_fbp, _fbc</th><td data-label="Anbieter">Meta</td><td data-label="Zweck">Zuordnung von Besuchen und Anzeigenklicks für den Meta Pixel</td><td data-label="Dauer">90 Tage</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="vercel-analytics">8. Vercel Web Analytics</h2>
      <p>
        Zur Reichweitenmessung nutzen wir Vercel Web Analytics der Vercel Inc. (Anschrift siehe Abschnitt 3). Der Dienst
        setzt keine Cookies und speichert nichts auf Ihrem Endgerät. Besucher werden über einen Hashwert aus der Anfrage
        unterschieden, der nach 24 Stunden verworfen wird; eine Wiedererkennung über mehrere Tage oder Websites hinweg ist so
        nicht möglich. Erfasst werden die aufgerufene Seite, der Referrer, das Land sowie Browser, Betriebssystem und
        Gerätetyp. Wir sehen nur zusammengefasste Statistiken.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist es, die Nutzung unserer Website in
        anonymisierter Form zu verstehen und sie zu verbessern. Sie können der Verarbeitung jederzeit widersprechen (Art. 21
        DSGVO), etwa per E-Mail an uns. Zur Übermittlung in die USA siehe Abschnitt 3.
      </p>

      <h2 id="ga4">9. Google Analytics 4</h2>
      <p>
        Mit Ihrer Einwilligung (Kategorie „Statistik“) nutzen wir Google Analytics 4, einen Webanalysedienst der Google
        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Google Analytics speichert Cookies auf
        Ihrem Gerät und erfasst, welche Seiten Sie aufrufen, wie lange Sie bleiben, woher Sie kommen und ob Sie eine Anfrage
        absenden. Dabei werden auch Ihre gekürzte IP-Adresse, Geräte- und Browserinformationen sowie ein ungefährer
        Standort verarbeitet. Google Analytics 4 speichert keine vollständigen IP-Adressen.
      </p>
      <p>
        Wir nutzen die Daten, um zu verstehen, welche Inhalte hilfreich sind, und um die Website zu verbessern.
        Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Wir setzen den Google
        Consent Mode ein: Ohne Ihre Einwilligung wird Google Analytics nicht geladen.
      </p>
      <p>
        Die Daten können an die Google LLC in den USA übermittelt werden. Google LLC ist nach dem EU-US Data Privacy Framework
        zertifiziert. Mit Google besteht ein Vertrag zur Auftragsverarbeitung. Mehr unter{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.
      </p>

      <h2 id="google-ads">10. Google Ads: Conversion-Tracking und Remarketing</h2>
      <p>
        Mit Ihrer Einwilligung (Kategorie „Marketing“) nutzen wir Google Ads der Google Ireland Limited (Anschrift siehe
        Abschnitt 9).
      </p>
      <p>
        <strong>Conversion-Tracking:</strong> Wenn Sie über eine Google-Anzeige auf unsere Website kommen, setzt Google ein
        Cookie. Senden Sie anschließend eine Anfrage ab, erfährt Google, dass die Anzeige zu einer Anfrage geführt hat. Wir
        erhalten nur zusammengefasste Zahlen und erfahren nicht, wer Sie sind. Formularinhalte und Kontaktdaten übermitteln
        wir nicht; die Funktion „erweiterte Conversions“ ist deaktiviert.
      </p>
      <p>
        <strong>Remarketing:</strong> Google kann Besucher unserer Website in Zielgruppenlisten aufnehmen, damit wir ihnen
        später bei Google und auf Partnerseiten Anzeigen zeigen können. Google nutzt dafür Cookies und gegebenenfalls Ihre
        Google-Kontodaten.
      </p>
      <p>
        Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Personalisierte Werbung
        können Sie zusätzlich unter{" "}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a> deaktivieren. Zur
        Übermittlung in die USA siehe Abschnitt 9.
      </p>

      <h2 id="meta">11. Meta Pixel</h2>
      <p>
        Mit Ihrer Einwilligung (Kategorie „Marketing“) nutzen wir den Meta Pixel der Meta Platforms Ireland Limited, Merrion
        Road, Dublin 4, D04 X2K5, Irland („Meta“). Der Pixel erfasst Seitenaufrufe auf unserer Website und ob eine Anfrage
        stattgefunden hat (Ereignis „Lead“). Meta setzt dafür Cookies, verarbeitet Ihre IP-Adresse sowie Browser- und
        Geräteinformationen und kann die Daten Ihrem Facebook- oder Instagram-Konto zuordnen, wenn Sie dort angemeldet sind.
      </p>
      <p>
        Wir nutzen die Daten, um den Erfolg unserer Anzeigen auf Facebook und Instagram zu messen und Besuchern unserer
        Website dort Anzeigen zu zeigen (Custom Audiences). Formularinhalte und Kontaktdaten übermitteln wir nicht; der
        automatische Abgleich von Kontaktdaten („Advanced Matching“) ist deaktiviert.
      </p>
      <p>
        Für die Erhebung und Übermittlung der Daten an Meta sind wir und Meta gemeinsam verantwortlich (Art. 26 DSGVO). Die
        Vereinbarung dazu finden Sie unter{" "}
        <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener">
          facebook.com/legal/controller_addendum
        </a>
        . Meta ist für die weitere Verarbeitung allein verantwortlich. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs.
        1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Daten können an die Meta Platforms, Inc. in den USA übermittelt werden; Meta ist
        nach dem EU-US Data Privacy Framework zertifiziert. Mehr unter{" "}
        <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener">facebook.com/privacy/policy</a>.
      </p>

      <h2 id="weitere">12. Schriften, Bilder und externe Links</h2>
      <p>
        <strong>Schriften:</strong> Die Schriftarten sind auf unserem Server eingebunden. Es wird keine Verbindung zu Servern
        von Google oder anderen Schriftanbietern hergestellt.
      </p>
      <p>
        <strong>Bilder:</strong> Einige Fotos werden vom Bilderdienst Unsplash (Unsplash Inc., Montreal, Kanada) über
        images.unsplash.com geladen. Dabei werden Ihre IP-Adresse und technische Daten Ihres Browsers an Unsplash
        übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist eine ansprechende
        Darstellung. Für Kanada besteht ein Angemessenheitsbeschluss der EU-Kommission.
      </p>
      <p>
        <strong>Externe Links:</strong> Unsere Seiten enthalten Links zu Google Maps, Behörden, Pflegekassen und Gesetzestexten.
        Erst wenn Sie einen solchen Link anklicken, werden Daten an den jeweiligen Anbieter übertragen. Für dessen
        Datenverarbeitung ist der Anbieter verantwortlich.
      </p>

      <h2 id="empfaenger">13. Empfänger und Übermittlung in Drittländer</h2>
      <p>Ihre Daten erhalten nur die in dieser Erklärung genannten Stellen:</p>
      <ul>
        <li>Auftragsverarbeiter: Vercel (Hosting, Web Analytics), Resend (E-Mail-Versand), VALIORA / RX2 Marketing GmbH (Auswertung der Anfragen)</li>
        <li>Mit Ihrer Einwilligung: Google (Analytics, Ads) und Meta (Pixel; gemeinsame Verantwortung bei der Erhebung)</li>
        <li>Unsplash (Bilder) und GitHub (nur Quellcode, keine Besucherdaten)</li>
      </ul>
      <p>
        Vercel, Resend, GitHub, Google und Meta sitzen in den USA oder übermitteln Daten dorthin. Grundlage ist jeweils der
        Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), bei dem die Anbieter
        zertifiziert sind, ergänzend Standardvertragsklauseln (Art. 46 DSGVO). Wir verkaufen Ihre Daten nicht.
      </p>

      <h2 id="speicherdauer">14. Speicherdauer</h2>
      <ul>
        <li>
          <strong>Anfragen aus den Formularen:</strong> Kommt kein Pflegevertrag zustande, löschen wir Ihre Anfrage
          spätestens drei Jahre nach Ende des Jahres, in dem der letzte Kontakt stattfand (regelmäßige Verjährungsfrist, §§
          195, 199 BGB). Widerrufen Sie Ihre Einwilligung, löschen wir Gesundheitsdaten unverzüglich, soweit keine
          gesetzliche Pflicht entgegensteht.
        </li>
        <li>
          <strong>Kommt ein Pflegevertrag zustande,</strong> gelten die gesetzlichen Aufbewahrungsfristen, etwa nach
          Handels- und Steuerrecht sowie für die Pflegedokumentation.
        </li>
        <li><strong>Resend:</strong> 30 Tage</li>
        <li><strong>Vercel Web Analytics:</strong> Besucher-Hash 24 Stunden, danach nur zusammengefasste Statistiken</li>
        <li><strong>Cookie-Auswahl:</strong> 12 Monate</li>
        <li><strong>Google Analytics, Google Ads, Meta:</strong> siehe Cookie-Übersicht in Abschnitt 7 sowie die Einstellungen der Anbieter</li>
      </ul>

      <h2 id="rechte">15. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Auskunft (Art. 15 DSGVO)</li>
        <li>Berichtigung (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Verarbeiten wir Ihre Daten auf Grundlage berechtigter Interessen
        (Art. 6 Abs. 1 lit. f DSGVO), können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        widersprechen. Gegen Direktwerbung können Sie jederzeit ohne Angabe von Gründen widersprechen.
      </p>
      <p>
        Zur Ausübung Ihrer Rechte genügt eine E-Mail an <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <strong>Beschwerderecht:</strong> Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig
        ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit, Ludwig-Erhard-Straße 22, 20459 Hamburg,{" "}
        <a href="https://datenschutz-hamburg.de" target="_blank" rel="noopener">datenschutz-hamburg.de</a>.
      </p>

      <h2 id="sonstiges">16. Sonstiges</h2>
      <p>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling nach Art. 22 DSGVO findet durch uns nicht statt.
        Wir passen diese Datenschutzerklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt die jeweils hier
        veröffentlichte Fassung.
      </p>
    </main>
  );
}
