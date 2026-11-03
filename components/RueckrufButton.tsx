"use client";

import { useEffect, useRef, useState } from "react";
import RueckrufForm from "./RueckrufForm";
import { Phone, Close } from "./Icons";

// Schwebender Rückruf-Button für Desktop. Erscheint erst nach dem ersten Scrollen,
// damit er den Hero nicht überdeckt. Auf Mobil übernimmt die Aktionsleiste.
export default function RueckrufButton() {
  const ref = useRef<HTMLDialogElement>(null);
  const [sichtbar, setSichtbar] = useState(false);
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    // Ausblenden, solange das Rückruf-Formular im Abschluss sichtbar ist
    const imBild = new Set<Element>();
    const update = () => setSichtbar(window.scrollY > 500 && imBild.size === 0);
    const io = new IntersectionObserver((e) => {
      e.forEach((x) => (x.isIntersecting ? imBild.add(x.target) : imBild.delete(x.target)));
      update();
    });
    document.querySelectorAll(".closing, .site-footer, .cta-band, .side-card, .inline-cta, .callback, .funnel, .check-card").forEach((el) => io.observe(el));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className={`callback-fab${sichtbar ? " is-visible" : ""}`}
        onClick={() => {
          setOffen(true);
          requestAnimationFrame(() => ref.current?.showModal());
        }}
        aria-haspopup="dialog"
        tabIndex={sichtbar ? 0 : -1}
        aria-hidden={!sichtbar}
      >
        <Phone /> Rückruf anfordern
      </button>
      <dialog
        ref={ref}
        className="callback-dialog"
        aria-label="Rückruf anfordern"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
        onClose={() => setOffen(false)}
      >
        <button type="button" className="dialog-close" onClick={() => ref.current?.close()} aria-label="Schließen">
          <Close width={22} height={22} />
        </button>
        {/* Formular erst beim Öffnen rendern – vermeidet doppelte Überschriften und Feld-IDs auf der Seite */}
        {offen && <RueckrufForm quelle="Rückruf-Button" />}
      </dialog>
    </>
  );
}
