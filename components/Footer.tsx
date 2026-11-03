import { site, orte, leistungen } from "@/lib/site";
import { Heart } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="footer-logo" href="/" aria-label="TwinsCare – zur Startseite">
              <img src="/logo.svg" alt="TwinsCare Ambulanter Pflegedienst" width="153" height="44" />
            </a>
            <address>
              {site.legalName}
              <br />
              {site.street}
              <br />
              {site.zip} {site.city}-{site.district}
            </address>
            <ul>
              {site.phoneHref && (
                <li>
                  Telefon: <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </li>
              )}
              <li>
                E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
              <li>
                <a href={site.mapsHref} rel="noopener" target="_blank">
                  Route in Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Leistungen</h2>
            <ul>
              {leistungen.map((l) => (
                <li key={l.slug}>
                  <a href={`/leistungen/${l.slug}/`}>{l.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Einsatzgebiet</h2>
            <ul>
              {orte.map((o) => (
                <li key={o.slug}>
                  <a href={`/pflegedienst/${o.slug}/`}>Pflegedienst {o.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Hilfe und Wissen</h2>
            <ul>
              <li><a href="/kosten/">Kosten und Finanzierung</a></li>
              <li><a href="/pflegegrad-rechner/">Pflegegrad-Rechner</a></li>
              <li><a href="/ratgeber/">Ratgeber</a></li>
              <li><a href="/haeufige-fragen/">Häufige Fragen</a></li>
              <li><a href="/ueber-uns/">Über uns</a></li>
              <li><a href="/kontakt/">Kontakt</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="made-with">
            © {new Date().getFullYear()} TwinsCare – Mit <Heart aria-label="Herz" role="img" /> aus Hamburg
          </span>
          <ul>
            <li><a href="/impressum/">Impressum</a></li>
            <li><a href="/datenschutz/">Datenschutz</a></li>
            <li><a href="/barrierefreiheit/">Barrierefreiheit</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
