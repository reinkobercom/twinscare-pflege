import type { Block, Faq, Section, Quelle } from "@/lib/content/types";
import { site } from "@/lib/site";
import Photo from "./Photo";
import { Phone, Check, Chevron } from "./Icons";
import React from "react";

/* ---------- Inline-Auszeichnung: **fett** und [Text](/pfad/) ---------- */
export function Rich({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<strong key={i++}>{m[1]}</strong>);
    else {
      const href = m[3];
      const ext = /^https?:/.test(href);
      parts.push(
        <a key={i++} href={href} {...(ext ? { target: "_blank", rel: "noopener" } : {})}>
          {m[2]}
        </a>
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);

/* ---------- Blöcke ---------- */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i}>
                <Rich text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>
                    <Rich text={t} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>
                    <Rich text={t} />
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div className="table-wrap" key={i}>
                <table>
                  {b.caption && <caption>{b.caption}</caption>}
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) =>
                          k === 0 ? (
                            <th key={k} scope="row">
                              <Rich text={c} />
                            </th>
                          ) : (
                            <td key={k}>
                              <Rich text={c} />
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "hinweis":
            return (
              <aside className="note" key={i}>
                {b.title && <strong className="note-title">{b.title}</strong>}
                <p>
                  <Rich text={b.text} />
                </p>
              </aside>
            );
          case "cta":
            return <InlineCta key={i} text={b.text} />;
        }
      })}
    </>
  );
}

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h2} id={slugify(s.h2)} className="prose-section">
          <h2>{s.h2}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}
    </>
  );
}

export function Toc({ sections, extra = [] }: { sections: Section[]; extra?: { id: string; label: string }[] }) {
  return (
    <nav className="toc" aria-label="Auf dieser Seite">
      <strong>Auf dieser Seite</strong>
      <ol>
        {sections.map((s) => (
          <li key={s.h2}>
            <a href={`#${slugify(s.h2)}`}>{s.h2}</a>
          </li>
        ))}
        {extra.map((e) => (
          <li key={e.id}>
            <a href={`#${e.id}`}>{e.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- Seitenkopf ---------- */
export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Brotkrumen">
      <ol>
        <li>
          <a href="/">Start</a>
        </li>
        {items.map((c, i) => (
          <li key={c.href}>
            {i === items.length - 1 ? <span aria-current="page">{c.label}</span> : <a href={c.href}>{c.label}</a>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  crumbs,
  h1,
  lead,
  foto,
  children,
  ctas = true,
}: {
  crumbs: Crumb[];
  h1: string;
  lead: string;
  foto?: { id: string; alt: string };
  children?: React.ReactNode;
  ctas?: boolean;
}) {
  return (
    <section className={`page-hero${foto ? " has-photo" : ""}`}>
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <div className="page-hero-grid">
          <div>
            <h1>{h1}</h1>
            <p className="page-lead">
              <Rich text={lead} />
            </p>
            {ctas && (
              <div className="hero-ctas">
                <a className="btn btn-primary" href="/pflege-anfragen/">
                  Kostenlose Beratung anfragen
                </a>
                <a className="btn btn-call" href={site.phoneHref}>
                  <Phone /> {site.phoneDisplay}
                </a>
              </div>
            )}
            {children}
          </div>
          {foto && (
            <div className="page-hero-photo">
              <Photo id={foto.id} alt={foto.alt} priority />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Kennzahlen({ items }: { items: { wert: string; label: string }[] }) {
  return (
    <dl className="kennzahlen">
      {items.map((k) => (
        <div key={k.label}>
          <dt>{k.label}</dt>
          <dd>{k.wert}</dd>
        </div>
      ))}
    </dl>
  );
}

export function KurzBox({ title = "Das Wichtigste in Kürze", items }: { title?: string; items: string[] }) {
  return (
    <aside className="kurz" aria-label={title}>
      <strong>{title}</strong>
      <ul>
        {items.map((t, i) => (
          <li key={i}>
            <Check />
            <span>
              <Rich text={t} />
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ---------- FAQ ---------- */
export function FaqSection({ faqs, title = "Häufige Fragen", id = "fragen" }: { faqs: Faq[]; title?: string; id?: string }) {
  return (
    <section className="prose-section" id={id}>
      <h2>{title}</h2>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <div>
              <p>
                <Rich text={f.a} />
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export const faqSchema = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\*\*|\[|\]\([^)]+\)/g, "") },
  })),
});

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ href: "/", label: "Start" }, ...crumbs].map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: `${site.domain}${c.href}`,
  })),
});

/* ---------- CTAs ---------- */
export function InlineCta({ text }: { text?: string }) {
  return (
    <aside className="inline-cta">
      <div>
        <strong>Fragen zu Ihrer Situation?</strong>
        <p>{text || "Wir beraten Sie kostenlos – am Telefon oder bei Ihnen zu Hause in Bergedorf und Umgebung."}</p>
      </div>
      <div className="inline-cta-actions">
        <a className="btn btn-primary" href="/pflege-anfragen/">
          Beratung anfragen
        </a>
        <a className="btn btn-call" href={site.phoneHref}>
          <Phone /> Anrufen
        </a>
      </div>
    </aside>
  );
}

export function CtaBand({ title = "Lassen Sie uns sprechen", text }: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>
            {text ||
              "Wir beraten Sie kostenlos und unverbindlich – am Telefon oder bei Ihnen zu Hause. Anträge erledigen wir gemeinsam mit Ihnen."}
          </p>
        </div>
        <div className="cta-band-actions">
          <a className="btn btn-light" href="/pflege-anfragen/">
            Kostenlose Beratung anfragen
          </a>
          <a className="btn btn-call" href={site.phoneHref}>
            <Phone /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SideCard() {
  return (
    <aside className="side-card">
      <strong>Kostenlose Beratung</strong>
      <p>Wir kommen zu Ihnen nach Hause und klären, was die Kasse übernimmt.</p>
      <a className="btn btn-primary" href="/pflege-anfragen/">
        Beratung anfragen
      </a>
      <a className="btn btn-call" href={site.phoneHref}>
        <Phone /> {site.phoneDisplay}
      </a>
    </aside>
  );
}

export function LinkCards({ title, items }: { title: string; items: { href: string; title: string; text?: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="prose-section" id="passend">
      <h2>{title}</h2>
      <div className="link-cards">
        {items.map((it) => (
          <a key={it.href} href={it.href} className="link-card">
            <span>
              <strong>{it.title}</strong>
              {it.text && <small>{it.text}</small>}
            </span>
            <Chevron />
          </a>
        ))}
      </div>
    </section>
  );
}

export function QuellenListe({ quellen }: { quellen: Quelle[] }) {
  if (!quellen.length) return null;
  return (
    <section className="quellen" aria-label="Quellen">
      <strong>Quellen</strong>
      <ul>
        {quellen.map((q) => (
          <li key={q.url}>
            <a href={q.url} target="_blank" rel="noopener">
              {q.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
