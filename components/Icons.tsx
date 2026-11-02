type P = React.SVGProps<SVGSVGElement>;
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const Whatsapp = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 20.5l1.3-4A8.5 8.5 0 1 1 8 19.3z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base} strokeWidth={2.4} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);
export const Cross = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M7 7l10 10M17 7L7 17" />
  </svg>
);
export const Chevron = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);
export const Menu = (p: P) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = Cross;
export const Form = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />
  </svg>
);

/* Leistungs-Icons */
export const Hands = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 14l4-1 5 2.5a1.6 1.6 0 0 1-1 3l-3.5-.8" />
    <path d="M3 19.5l5 1.5 7-2 6-4.5a1.7 1.7 0 0 0-2.2-2.5L15 14" />
    <path d="M14.5 4.5a2.3 2.3 0 0 1 3.5 0 2.3 2.3 0 0 1 3.5 3L18 11l-3.5-3.5a2.3 2.3 0 0 1 0-3z" />
  </svg>
);
export const Syringe = (p: P) => (
  <svg {...base} {...p}>
    <path d="M17 3l4 4M19 5l-9.5 9.5M14 6l4 4M8.5 11.5l4 4M6 14l4 4-3 3H3v-4z" />
  </svg>
);
export const Pause = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9v6M14 9v6" />
  </svg>
);
export const Basket = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 10h16l-1.5 9a2 2 0 0 1-2 1.7h-9a2 2 0 0 1-2-1.7z" />
    <path d="M8.5 10L12 4l3.5 6M9 14v3M15 14v3" />
  </svg>
);
export const Talk = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    <path d="M17 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3" />
  </svg>
);
export const Clinic = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);

/* Vertrauen */
export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-4.5" />
  </svg>
);
export const Home = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M12 18c-2.5-1.6-3.5-2.8-3.5-4.2 0-1 .8-1.8 1.8-1.8.7 0 1.3.4 1.7 1 .4-.6 1-1 1.7-1 1 0 1.8.8 1.8 1.8 0 1.4-1 2.6-3.5 4.2z" />
  </svg>
);
export const People = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16.5" cy="9" r="2.5" />
    <path d="M3 19c.5-3.3 2.8-5 5.5-5s5 1.7 5.5 5M14.5 14.2c2.6-.4 5.6.8 6.5 4.8" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/* Das Haus-und-Familien-Zeichen aus dem Logo, einfarbig, als Platzhalter-Grafik */
export const BrandMark = (p: P) => (
  <svg viewBox="0 0 480 450" fill="currentColor" aria-hidden {...p}>
    <path d="M8 164 L230 13 Q239 7 247 13 L365 96 L365 50 Q365 45 370 45 L410 45 Q415 45 415 50 L415 132 L478 164 L462 164 L239 45 L24 164 Z" />
    <circle cx="126" cy="205" r="31" />
    <circle cx="347" cy="205" r="31" />
    <path d="M49 282 C49 244 78 229 126 229 C160 229 190 245 213 276 C183 261 151 260 131 274 C108 290 112 329 129 360 C147 393 179 416 195 430 L181 430 C112 393 49 341 49 282Z" />
    <path d="M424 282 C424 244 395 229 347 229 C313 229 283 245 260 276 C290 261 322 260 342 274 C365 290 361 329 344 360 C326 393 294 416 278 430 L292 430 C361 393 424 341 424 282Z" />
    <circle cx="237" cy="316" r="25" />
    <path d="M177 328 C194 347 214 357 237 357 C260 357 280 347 297 328 C302 322 311 328 307 336 C295 359 277 374 258 381 L258 421 L237 438 L216 421 L216 381 C197 374 179 359 167 336 C163 328 172 322 177 328Z" />
  </svg>
);

export const Heart = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 21c-5.6-3.9-9-7.1-9-11a4.8 4.8 0 0 1 9-2.4A4.8 4.8 0 0 1 21 10c0 3.9-3.4 7.1-9 11z" />
  </svg>
);
