import type { Metadata } from "next";
import AnfrageFunnel from "@/components/AnfrageFunnel";
import { Breadcrumbs } from "@/components/content";
import { Check, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pflege anfragen – kostenlose Beratung | TwinsCare Bergedorf",
  description:
    "In drei Schritten Pflege anfragen: Wir rufen Sie zurück, beraten kostenlos bei Ihnen zu Hause und erstellen einen Kostenvoranschlag. Bergedorf und Hamburg-Ost.",
  alternates: { canonical: "/pflege-anfragen/" },
};

export default function AnfragePage() {
  return (
    <main id="inhalt" className="page-hero" style={{ borderBottom: 0 }}>
      <div className="wrap">
        <Breadcrumbs items={[{ href: "/pflege-anfragen/", label: "Pflege anfragen" }]} />
        <div className="funnel-layout">
          <div className="funnel-intro">
            <h1>Pflege anfragen</h1>
            <p className="page-lead">Drei kurze Schritte, kostenlos und unverbindlich. Wir melden uns bei Ihnen.</p>
            <ul className="funnel-facts">
              <li><Check /> Kostenlose Erstberatung bei Ihnen zu Hause</li>
              <li><Check /> Schriftlicher Kostenvoranschlag vor dem Start</li>
              <li><Check /> Anträge erledigen wir gemeinsam mit Ihnen</li>
            </ul>
            <div className="funnel-call">
              <span>Lieber direkt sprechen?</span>
              <a className="btn btn-call" href={site.phoneHref}>
                <Phone /> {site.phoneDisplay}
              </a>
            </div>
          </div>
          <AnfrageFunnel />
        </div>
      </div>
    </main>
  );
}
