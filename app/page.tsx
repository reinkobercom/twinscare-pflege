import PflegegradCheck from "@/components/PflegegradCheck";
import PlzCheck from "@/components/PlzCheck";
import RueckrufForm from "@/components/RueckrufForm";
import AreaMap from "@/components/AreaMap";
import Photo from "@/components/Photo";
import {
  Phone, Check, Cross, Chevron, Whatsapp, Form, Hands, Syringe, Pause, Basket, Talk, Clinic,
  Shield, Home, People, Clock,
} from "@/components/Icons";
import { site, orte, leistungen, kapazitaet } from "@/lib/site";
import { startFaqs as faqs } from "@/lib/faqs";
import { artikel } from "@/lib/content";
import ArtikelGrid from "@/components/ArtikelGrid";

const leistungsIcons = [Hands, Syringe, Pause, Basket, Talk, Clinic];



const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${site.domain}/#organisation`,
      name: "TwinsCare – Ambulanter Pflegedienst",
      legalName: site.legalName,
      url: site.domain,
      logo: `${site.domain}/logo.svg`,
      ...(site.phoneHref ? { telephone: site.phoneHref.replace("tel:", "") } : {}),
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        postalCode: site.zip,
        addressLocality: site.city,
        addressRegion: "Hamburg",
        addressCountry: "DE",
      },
      areaServed: orte.map((o) => ({ "@type": "Place", name: o.name })),
      knowsAbout: leistungen.map((l) => l.title),
      sameAs: [],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};


export default function Startseite() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="inhalt">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              {kapazitaet.aktiv && (
                <p className="capacity">
                  <span className="capacity-dot" aria-hidden />
                  Aktuell freie Plätze in {kapazitaet.orte.slice(0, -1).join(", ")}
                  {kapazitaet.orte.length > 1 ? " und " : ""}
                  {kapazitaet.orte.at(-1)}
                </p>
              )}
              <h1>Ambulanter Pflegedienst in Bergedorf und dem Hamburger Osten</h1>
              <p className="hero-lead">
                Ambulante Pflege, Behandlungspflege und Entlastung für Ihre Familie im Hamburger Osten – von Menschen, die
                ihren Stadtteil kennen.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="/pflege-anfragen/">
                  Kostenlose Beratung anfragen
                </a>
                {site.phoneHref && (
                  <a className="btn btn-call" href={site.phoneHref}>
                  <Phone /> {site.phoneDisplay}
                </a>
                )}
              </div>
              <ul className="hero-facts">
                <li>
                  <Check /> Erstberatung bei Ihnen zu Hause, kostenlos
                </li>
                <li>
                  <Check /> Abrechnung direkt mit Pflege- und Krankenkasse
                </li>
                <li>
                  <Check /> Feste Ansprechpartnerin für Ihre Familie
                </li>
              </ul>
            </div>
            <div className="roof-frame">
              <div className="roof-shape">
                <Photo id="photo-1765896387387-0538bc9f997e" alt="Pflegekraft im Gespräch mit einer älteren Patientin" priority />
              </div>
              <svg className="roof-line" viewBox="0 0 100 34" preserveAspectRatio="none" aria-hidden>
                <path d="M0 34 L50 0 L100 34" fill="none" stroke="#123765" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="hero-note">
                <strong>Rückruf am selben Tag</strong>
                Wenn Sie uns werktags bis 14 Uhr erreichen.
              </div>
            </div>
          </div>
        </section>

        {/* Vertrauensleiste */}
        <section className="trust" aria-label="Darauf können Sie sich verlassen">
          <div className="wrap">
            <ul>
              <li>
                <Shield /> Vertragspartner aller Pflege- und Krankenkassen
              </li>
              <li>
                <Home /> Büro in Bergedorf, Bergedorfer Straße 85
              </li>
              <li>
                <People /> Examinierte Pflegefachkräfte
              </li>
              <li>
                <Clock /> Pflege an 7 Tagen in der Woche
              </li>
            </ul>
          </div>
        </section>

        {/* Leistungen */}
        <section className="section" aria-labelledby="leistungen-titel">
          <div className="wrap">
            <div className="section-head section-head-split">
              <div>
                <h2 id="leistungen-titel">Wobei wir Sie unterstützen</h2>
                <p>Von der täglichen Grundpflege bis zur Beratung beim Pflegegrad – alles aus einer Hand.</p>
              </div>
              <a className="btn btn-ghost" href="/leistungen/">
                Alle Leistungen
              </a>
            </div>
            <div className="leistungen">
              {leistungen.map((l, i) => {
                const Icon = leistungsIcons[i];
                return (
                  <a key={l.slug} className="leistung" href={`/leistungen/${l.slug}/`}>
                    <span className="leistung-icon">
                      <Icon />
                    </span>
                    <span>
                      <h3>{l.title}</h3>
                      <p>{l.text}</p>
                      <span className="kasse">Bezahlt über: {l.kasse}</span>
                    </span>
                    <Chevron className="chev" />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bildband */}
        <section className="mosaic-section" aria-labelledby="zuhause-titel">
          <div className="wrap mosaic">
            <div className="mosaic-text">
              <svg className="mosaic-roof" viewBox="0 0 64 30" aria-hidden>
                <path d="M3 27 L32 4 L61 27" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 id="zuhause-titel">Zuhause bleiben, wo das Leben ist</h2>
              <p>
                Der eigene Sessel, die Nachbarin, der Weg zum Bäcker. Wir sorgen dafür, dass das so bleiben kann – mit
                Pflege, die in Ihren Alltag passt und nicht umgekehrt.
              </p>
              <a className="btn btn-primary" href="/pflege-anfragen/">
                Beratung anfragen
              </a>
            </div>
            <div className="mosaic-a">
              <Photo id="photo-1765896387377-e293914d1e69" alt="Zwei Frauen lachen gemeinsam in einer Wohnung" />
            </div>
            <div className="mosaic-b">
              <Photo id="photo-1762955913084-96ea3f986468" alt="Pflegekraft strickt gemeinsam mit älteren Frauen" />
            </div>
            <div className="mosaic-c">
              <Photo id="photo-1773234005378-ceebf3c877b9" alt="Zwei Hände halten einander" />
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="section section-tint" aria-labelledby="ablauf-titel">
          <div className="wrap">
            <div className="section-head">
              <h2 id="ablauf-titel">So kommen Sie zu uns</h2>
              <p>Drei Schritte, und Sie müssen sich um nichts kümmern, was nicht unbedingt sein muss.</p>
            </div>
            <ol className="steps">
              <li className="step">
                <span className="step-num" aria-hidden>
                  1
                </span>
                <h3>Sie rufen an oder schreiben uns</h3>
                <p>Erzählen Sie kurz, wie die Situation ist. Wir hören zu und beantworten erste Fragen.</p>
                <span className="step-meta">ca. 10 Minuten</span>
              </li>
              <li className="step">
                <span className="step-num" aria-hidden>
                  2
                </span>
                <h3>Wir besuchen Sie zu Hause</h3>
                <p>Wir schauen gemeinsam, was gebraucht wird, und klären, was die Kasse übernimmt.</p>
                <span className="step-meta">kostenlos und unverbindlich</span>
              </li>
              <li className="step">
                <span className="step-num" aria-hidden>
                  3
                </span>
                <h3>Die Pflege beginnt</h3>
                <p>Sie bekommen einen schriftlichen Pflegeplan, und Ihr festes Team kommt zu den vereinbarten Zeiten.</p>
                <span className="step-meta">Anträge erledigen wir mit Ihnen</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Pflegegrad-Teaser */}
        <section className="section" aria-labelledby="check-titel">
          <div className="wrap check">
            <div className="check-copy">
              <h2 id="check-titel">Welcher Pflegegrad ist möglich?</h2>
              <p>
                Drei Fragen geben Ihnen eine erste Orientierung. Danach wissen Sie, ob sich ein Antrag lohnt und welche
                Leistungen in Frage kommen.
              </p>
              <ul>
                <li>Ihr Ergebnis direkt nach den Fragen</li>
                <li>Kostenloser Rückruf einer Pflegeberaterin dazu</li>
                <li>Hilfe beim Antrag und bei der Begutachtung</li>
              </ul>
              <a href="/pflegegrad-rechner/">Zum ausführlichen Pflegegrad-Rechner</a>
            </div>
            <PflegegradCheck />
          </div>
        </section>

        {/* Vergleich */}
        <section className="section section-tint" aria-labelledby="unterschied-titel">
          <div className="wrap">
            <div className="section-head">
              <h2 id="unterschied-titel">Was bei uns anders ist</h2>
              <p>Viele Familien kommen nach schlechten Erfahrungen zu uns. Darauf achten wir besonders.</p>
            </div>
            <div className="compare">
              <div className="compare-photo">
                <Photo id="photo-1762955911431-4c44c7c3f408" alt="Pflegekraft malt gemeinsam mit einem älteren Ehepaar" />
              </div>
              <div className="compare-col compare-other">
                <h3>Oft erlebt</h3>
                <ul>
                  <li><Cross /> Jeden Tag ein anderes Gesicht an der Tür</li>
                  <li><Cross /> Wochenlang auf einen freien Platz warten</li>
                  <li><Cross /> Kosten erst auf der Rechnung erfahren</li>
                  <li><Cross /> Am Telefon in der Warteschleife</li>
                </ul>
              </div>
              <div className="compare-col compare-us">
                <h3>Bei TwinsCare</h3>
                <ul>
                  <li><Check /> Ein festes kleines Team, das Sie kennt</li>
                  <li><Check /> Schnelle Rückmeldung und ein Termin bei Ihnen zu Hause</li>
                  <li><Check /> Kostenvoranschlag vor dem ersten Einsatz</li>
                  <li><Check /> Direkter Draht in unser Büro in Bergedorf</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Einsatzgebiet */}
        <section className="section" aria-labelledby="gebiet-titel">
          <div className="wrap area">
            <AreaMap />
            <div>
              <h2 id="gebiet-titel">Unterwegs in Bergedorf und den Orten ringsum</h2>
              <p style={{ color: "var(--muted)" }}>
                Kurze Wege bedeuten mehr Zeit für Sie. Deshalb bleiben wir in unserem Gebiet rund um Bergedorf.
              </p>
              <ul className="area-list">
                {orte.map((o) => (
                  <li key={o.slug}>
                    <a href={`/pflegedienst/${o.slug}/`}>
                      {o.name} <small>{o.plz}</small>
                    </a>
                  </li>
                ))}
              </ul>
              <PlzCheck />
            </div>
          </div>
        </section>

        {/* Ein Pflegetag */}
        <section className="section section-tint" aria-labelledby="tag-titel">
          <div className="wrap">
            <div className="section-head">
              <h2 id="tag-titel">So kann ein Tag mit uns aussehen</h2>
              <p>Jeder Plan ist anders. Dieses Beispiel zeigt, wie wir einen Tag begleiten können.</p>
            </div>
            <div className="day-photo">
              <Photo id="photo-1773227055624-07b515ba87c5" alt="Pflegekraft begleitet eine ältere Frau mit Rollator" />
            </div>
            <ol className="day">
              <li>
                <time>7:30</time>
                <h3>Guten Morgen</h3>
                <p>Waschen, Anziehen, Frühstück vorbereiten und die Morgenmedikamente.</p>
              </li>
              <li>
                <time>11:30</time>
                <h3>Mittags</h3>
                <p>Insulin spritzen, Blutzucker messen und kurz schauen, ob alles passt.</p>
              </li>
              <li>
                <time>15:00</time>
                <h3>Nachmittags</h3>
                <p>Gemeinsam einkaufen oder ein Spaziergang – bezahlt über den Entlastungsbetrag.</p>
              </li>
              <li>
                <time>19:00</time>
                <h3>Abends</h3>
                <p>Kompressionsstrümpfe ausziehen, Abendpflege und ein ruhiger Start in die Nacht.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Ratgeber */}
        <section className="section section-tint" aria-labelledby="ratgeber-titel">
          <div className="wrap">
            <div className="section-head section-head-split">
              <div>
                <h2 id="ratgeber-titel">Wissen für Angehörige</h2>
                <p>Verständlich erklärt, mit den aktuellen Beträgen für 2026.</p>
              </div>
              <a className="btn btn-ghost" href="/ratgeber/">
                Zum Ratgeber
              </a>
            </div>
            <ArtikelGrid items={artikel.slice(0, 3)} headingLevel="h3" />
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-titel">
          <div className="wrap faq-grid">
            <div className="faq-aside">
              <h2 id="faq-titel">Häufige Fragen</h2>
              <p>Ihre Frage ist nicht dabei? Schreiben Sie uns, wir nehmen uns Zeit.</p>
              {site.phoneHref ? (
                <a className="btn btn-call" href={site.phoneHref}>
                  <Phone /> {site.phoneDisplay}
                </a>
              ) : (
                <a className="btn btn-call" href="/pflege-anfragen/">
                  Frage stellen
                </a>
              )}
            </div>
            <div className="faq">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Abschluss */}
        <section className="section closing" aria-labelledby="abschluss-titel">
          <div className="closing-bg" aria-hidden>
            <Photo id="photo-1761839257513-a921710a4291" alt="Zwei Frauen betrachten gemeinsam Blumen in einem Garten" />
          </div>
          <div className="wrap closing-grid">
            <div>
              <h2 id="abschluss-titel">Lassen Sie uns sprechen</h2>
              <p>
                Ein Gespräch klärt meist mehr als jede Website. Wir beraten Sie kostenlos – am Telefon oder bei Ihnen
                zu Hause.
              </p>
              <div className="closing-ctas">
                {site.phoneHref && (
                  <a className="btn btn-light" href={site.phoneHref}>
                  <Phone style={{ color: "var(--red)" }} /> {site.phoneDisplay}
                </a>
                )}
                {site.whatsappHref && (
                  <a className="btn btn-outline-light" href={site.whatsappHref}>
                  <Whatsapp /> WhatsApp
                </a>
                )}
              </div>
            </div>
            <RueckrufForm />
          </div>
        </section>
      </main>

    </>
  );
}
