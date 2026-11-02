"use client";

import { useEffect, useRef, useState } from "react";
import RueckrufForm from "./RueckrufForm";
import { Phone, Close } from "./Icons";

// Schwebender Rückruf-Button für Desktop. Erscheint erst nach dem ersten Scrollen,
// damit er den Hero nicht überdeckt. Auf Mobil übernimmt die Aktionsleiste.
export default function RueckrufButton() {
  const ref = useRef<HTMLDialogElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

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
        onClick={() => ref.current?.showModal()}
        aria-haspopup="dialog"
      >
        <Phone /> Rückruf anfordern
      </button>
      <dialog
        ref={ref}
        className="callback-dialog"
        aria-label="Rückruf anfordern"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <button type="button" className="dialog-close" onClick={() => ref.current?.close()} aria-label="Schließen">
          <Close width={22} height={22} />
        </button>
        <RueckrufForm />
      </dialog>
    </>
  );
}
