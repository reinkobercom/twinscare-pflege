import Header from "@/components/Header";
import PflegegradCheck from "@/components/PflegegradCheck";
import PlzCheck from "@/components/PlzCheck";
import RueckrufForm from "@/components/RueckrufForm";
import AreaMap from "@/components/AreaMap";
import Footer from "@/components/Footer";
import {
  Phone, Check, Cross, Chevron, Whatsapp, Form, Star, Hands, Syringe, Pause, Basket, Talk, Clinic,
  Shield, Home, People, Clock,
} from "@/components/Icons";
import { site, orte, leistungen } from "@/lib/site";

const leistungsIcons = [Hands, Syringe, Pause, Basket, Talk, Clinic];

const faqs = [
  {
    q: "Was kostet ein ambulanter Pflegedienst?",
    a: "Mit Pflegegrad zahlt die Pflegekasse jeden Monat einen festen Betrag für die Pflege zu Hause – bei Pflegegrad 3 zum Beispiel 1.497 € (Stand 2026). Wir rechnen direkt mit der Kasse ab. Behandlungspflege mit ärztlicher Verordnung übernimmt die Krankenkasse. Einen Eigenanteil zahlen Sie nur, wenn Sie mehr Leistungen wünschen, als das Budget abdeckt. Vor dem Start bekommen Sie einen kostenlosen Kostenvoranschlag.",
  },
  {
    q: "Brauche ich einen Pflegegrad?",
    a: "Für die Grundpflege über die Pflegekasse brauchen Sie mindestens Pflegegrad 2, für den Entlastungsbetrag reicht Pflegegrad 1. Für Behandlungspflege genügt eine ärztliche Verordnung, ein Pflegegrad ist nicht nötig. Noch keinen Pflegegrad? Wir helfen beim Antrag und bereiten Sie auf die Begutachtung vor.",
  },
  {
    q: "Wie schnell können Sie mit der Pflege beginnen?",
    a: "Nach dem ersten Anruf vereinbaren wir zügig einen Termin bei Ihnen zu Hause. Steht eine Entlassung aus dem Krankenhaus an, stimmen wir uns direkt mit dem Sozialdienst der Klinik ab, damit die Versorgung nahtlos weitergeht.",
  },
  {
    q: "Kann ich meinen Pflegedienst selbst wählen oder wechseln?",
    a: "Ja. Sie entscheiden frei, welcher Pflegedienst Sie versorgt. Einen Pflegevertrag können Sie jederzeit ohne Frist kündigen (§ 120 SGB XI). Den Wechsel zu uns organisieren wir mit Ihnen gemeinsam.",
  },
  {
    q: "Was ist Verhinderungspflege?",
    a: "Wenn pflegende Angehörige Urlaub machen, krank sind oder eine Pause brauchen, übernimmt ein Pflegedienst. Ab Pflegegrad 2 steht dafür seit Juli 2025 ein gemeinsamer Jahresbetrag von bis zu 3.539 € für Verhinderungs- und Kurzzeitpflege bereit. Die Pflege kann auch stundenweise erfolgen.",
  },
  {
    q: "Wofür kann ich den Entlastungsbetrag von 131 € nutzen?",
    a: "Ab Pflegegrad 1 stehen Ihnen jeden Monat 131 € für Hilfe im Alltag zu – etwa Haushalt, Einkaufen oder Begleitung zu Terminen. Nicht genutzte Beträge sammeln sich an und können bis zum 30. Juni des Folgejahres verwendet werden.",
  },
  {
    q: "In welchen Orten sind Sie unterwegs?",
    a: "Wir versorgen Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld in Hamburg sowie Oststeinbek, Glinde, Reinbek und Wentorf. Unser Büro ist in der Bergedorfer Straße 85.",
  },
  {
    q: "Kommen immer dieselben Pflegekräfte?",
    a: "Wir planen feste, kleine Teams pro Gebiet. So kennen Sie die Menschen, die zu Ihnen kommen, und wir kennen Ihre Gewohnheiten.",
  },
];

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
      telephone: site.phoneHref.replace("tel:", ""),
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

// Platzhalterfotos von Unsplash (kostenlos nutzbar, Unsplash-Lizenz). Vor dem Livegang durch eigene Fotos ersetzen.
function Photo({ id, alt, priority }: { id: string; alt: string; priority?: boolean }) {
  const base = `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75`;
  return (
    <img
      className="photo"
      src={`${base}&w=900`}
      srcSet={`${base}&w=600 600w, ${base}&w=900 900w, ${base}&w=1400 1400w`}
      sizes="(max-width: 900px) 100vw, 50vw"
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

const team = [
  { rolle: "Geschäftsführung", foto: "photo-1741707039536-113e200f9e0d" },
  { rolle: "Pflegedienstleitung", foto: "photo-1587556930720-58ec521056a5" },
  { rolle: "Pflegefachkraft", foto: "photo-1587500154541-1cafd74f0efc" },
  { rolle: "Pflegeberatung", foto: "photo-1765896387398-1e1ae8d2eb85" },
];

export default function Startseite() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main id="inhalt">
        {/* Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Ambulanter Pflegedienst in Bergedorf und dem Hamburger Osten</h1>
              <p className="hero-lead">
                Ambulante Pflege, Behandlungspflege und Entlastung für Ihre Familie – von Menschen, die ihren Stadtteil
                kennen.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="/pflege-anfragen/">
                  Kostenlose Beratung anfragen
                </a>
                <a className="btn btn-call" href={site.phoneHref}>
                  <Phone /> {site.phoneDisplay}
                </a>
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
                <li>Kein Name, keine E-Mail nötig</li>
                <li>Ausführlicher Rechner mit allen Modulen der Begutachtung</li>
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

        {/* Stimmen */}
        <section className="section" aria-labelledby="stimmen-titel">
          <div className="wrap">
            <div className="section-head">
              <h2 id="stimmen-titel">Was Familien über uns sagen</h2>
              <p>Hier erscheinen echte Google-Bewertungen, sobald die ersten vorliegen.</p>
            </div>
            <div className="reviews">
              {["Lohbrügge", "Billstedt", "Reinbek"].map((ort) => (
                <figure className="review" key={ort}>
                  <div className="stars" aria-hidden>
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} />
                    ))}
                  </div>
                  <p>Platzhalter für eine echte Google-Bewertung mit Text.</p>
                  <footer>Angehörige aus {ort}</footer>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section section-tint" aria-labelledby="team-titel">
          <div className="wrap">
            <div className="section-head section-head-split">
              <div>
                <h2 id="team-titel">Die Menschen, die zu Ihnen kommen</h2>
                <p>Ein Team aus Bergedorf, das Pflege als Handwerk versteht.</p>
              </div>
              <a className="btn btn-ghost" href="/team/">
                Das ganze Team
              </a>
            </div>
            <div className="team">
              {team.map(({ rolle, foto }) => (
                <div className="member" key={rolle}>
                  <div className="member-photo">
                    <Photo id={foto} alt="" />
                  </div>
                  <h3>Name folgt</h3>
                  <p>{rolle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-titel">
          <div className="wrap faq-grid">
            <div className="faq-aside">
              <h2 id="faq-titel">Häufige Fragen</h2>
              <p>Ihre Frage ist nicht dabei? Rufen Sie uns an, wir nehmen uns Zeit.</p>
              <a className="btn btn-call" href={site.phoneHref}>
                <Phone /> {site.phoneDisplay}
              </a>
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
          <div className="wrap closing-grid">
            <div>
              <h2 id="abschluss-titel">Lassen Sie uns sprechen</h2>
              <p>
                Ein Gespräch klärt meist mehr als jede Website. Wir beraten Sie kostenlos – am Telefon oder bei Ihnen
                zu Hause.
              </p>
              <div className="closing-ctas">
                <a className="btn btn-light" href={site.phoneHref}>
                  <Phone style={{ color: "var(--red)" }} /> {site.phoneDisplay}
                </a>
                <a className="btn btn-outline-light" href={site.whatsappHref}>
                  <Whatsapp /> WhatsApp
                </a>
              </div>
            </div>
            <RueckrufForm />
          </div>
        </section>
      </main>

      <Footer />

      <nav className="action-bar" aria-label="Schnellkontakt">
        <a className="call" href={site.phoneHref}>
          <Phone /> Anrufen
        </a>
        <a href={site.whatsappHref}>
          <Whatsapp /> WhatsApp
        </a>
        <a className="primary" href="/pflege-anfragen/">
          <Form /> Pflege anfragen
        </a>
      </nav>
    </>
  );
}
