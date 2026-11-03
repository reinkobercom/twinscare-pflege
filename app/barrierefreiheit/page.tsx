import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/content";

export const metadata: Metadata = {
  title: "Erklärung zur Barrierefreiheit | TwinsCare Pflegedienst",
  description:
    "Erklärung zur Barrierefreiheit der Website von TwinsCare: Stand der Umsetzung, bekannte Einschränkungen und wie Sie uns Barrieren melden.",
  alternates: { canonical: "/barrierefreiheit/" },
};

export default function BarrierefreiheitPage() {
  return (
    <main id="inhalt" className="wrap legal">
      <Breadcrumbs items={[{ href: "/barrierefreiheit/", label: "Barrierefreiheit" }]} />
      <h1>Erklärung zur Barrierefreiheit</h1>
      <p>
        Viele unserer Besucherinnen und Besucher sind ältere Menschen. Deshalb gestalten wir diese Website so, dass sie
        möglichst für alle gut nutzbar ist. Wir orientieren uns an den Web Content Accessibility Guidelines (WCAG) 2.1,
        Stufe AA.
      </p>
      <h2>Was wir dafür tun</h2>
      <ul>
        <li>Große Grundschrift (19 Pixel) und hohe Farbkontraste</li>
        <li>Alle Funktionen sind mit der Tastatur bedienbar, mit sichtbarem Fokus</li>
        <li>Große Schaltflächen, die sich auch mit zittriger Hand gut treffen lassen</li>
        <li>Klare Überschriften-Struktur und beschreibende Linktexte für Screenreader</li>
        <li>Animationen werden reduziert, wenn Ihr Gerät das so eingestellt hat</li>
      </ul>
      <h2>Bekannte Einschränkungen</h2>
      <p>
        Die schematische Karte des Einsatzgebiets ist eine Grafik. Alle Orte sind zusätzlich als Textliste verlinkt.
      </p>
      <h2>Feedback</h2>
      <p>
        Ist Ihnen eine Barriere aufgefallen? Schreiben Sie uns an <a href={`mailto:${site.email}`}>{site.email}</a>
        {site.phoneHref && (
          <>
            {" "}oder rufen Sie an: <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </>
        )}
        .
      </p>
    </main>
  );
}
