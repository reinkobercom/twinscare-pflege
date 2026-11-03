"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Phone, Menu, Close } from "./Icons";

const nav = [
  { href: "/leistungen/", label: "Leistungen" },
  { href: "/pflegedienst/", label: "Einsatzgebiet" },
  { href: "/kosten/", label: "Kosten" },
  { href: "/ratgeber/", label: "Ratgeber" },
  { href: "/ueber-uns/", label: "Über uns" },
  { href: "/kontakt/", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <div className="wrap header-inner">
        <a className="brand" href="/" aria-label="TwinsCare – zur Startseite">
          <img src="/logo.svg" alt="TwinsCare Ambulanter Pflegedienst GmbH & Co. KG" width="209" height="60" />
        </a>
        <nav className="main-nav" aria-label="Hauptnavigation">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          {site.phoneHref && (
            <a className="header-phone" href={site.phoneHref} aria-label={`Anrufen: ${site.phoneDisplay}`}>
            <Phone />
            <span>{site.phoneDisplay}</span>
          </a>
          )}
          <a className="btn btn-primary" href="/pflege-anfragen/">
            Pflege anfragen
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile Navigation">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="/pflege-anfragen/">
            Pflege anfragen
          </a>
          {site.phoneHref && (
            <a className="btn btn-call" href={site.phoneHref}>
            <Phone /> {site.phoneDisplay}
          </a>
          )}
        </nav>
      )}
    </header>
  );
}
