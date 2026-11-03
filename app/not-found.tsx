import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="inhalt" className="wrap legal" style={{ textAlign: "left" }}>
      <h1>Diese Seite gibt es nicht</h1>
      <p className="page-lead">Vielleicht hilft Ihnen einer dieser Wege weiter:</p>
      <ul>
        <li><a href="/">Zur Startseite</a></li>
        <li><a href="/leistungen/">Unsere Leistungen</a></li>
        <li><a href="/pflegedienst/">Unser Einsatzgebiet</a></li>
        <li><a href="/ratgeber/">Ratgeber</a></li>
      </ul>
      {site.phoneHref ? (
        <p>
          Oder rufen Sie uns an: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </p>
      ) : (
        <p>
          Oder schreiben Sie uns: <a href="/pflege-anfragen/">Anfrage senden</a>
        </p>
      )}
    </main>
  );
}
