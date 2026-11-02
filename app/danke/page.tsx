import type { Metadata } from "next";
import { site } from "@/lib/site";
import { artikel } from "@/lib/content";
import ArtikelGrid from "@/components/ArtikelGrid";
import { Check, Phone } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Danke für Ihre Anfrage | TwinsCare",
  robots: { index: false, follow: true },
};

export default function DankePage() {
  return (
    <main id="inhalt">
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Check width={56} height={56} style={{ color: "var(--good)" }} />
          <h1>Danke, Ihre Anfrage ist angekommen</h1>
          <p className="page-lead">
            Wir melden uns telefonisch bei Ihnen. So geht es weiter:
          </p>
          <ol className="steps" style={{ marginTop: "1.5rem" }}>
            <li className="step">
              <span className="step-num">1</span>
              <h3>Wir rufen Sie an</h3>
              <p>Wir besprechen Ihre Situation und beantworten erste Fragen.</p>
            </li>
            <li className="step">
              <span className="step-num">2</span>
              <h3>Hausbesuch</h3>
              <p>Kostenlos und unverbindlich bei Ihnen zu Hause.</p>
            </li>
            <li className="step">
              <span className="step-num">3</span>
              <h3>Pflegeplan und Start</h3>
              <p>Sie bekommen einen schriftlichen Kostenvoranschlag.</p>
            </li>
          </ol>
          <p style={{ marginTop: "2rem" }}>
            Ist es dringend? Rufen Sie uns direkt an:{" "}
            <a href={site.phoneHref}>
              <Phone width={18} height={18} style={{ display: "inline", verticalAlign: "-3px", color: "var(--red)" }} />{" "}
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Zur Vorbereitung auf das Gespräch</h2>
          </div>
          <ArtikelGrid items={artikel.slice(0, 3)} headingLevel="h3" />
        </div>
      </section>
    </main>
  );
}
