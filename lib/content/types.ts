// Inhaltsmodell der Website. Alle Texte liegen als Daten in lib/content/*.ts
// und werden von den Seitenvorlagen in app/ gerendert (Renderer: components/content.tsx).
//
// Inline-Formatierung in allen Text-Strings:
//   **fett**            → <strong>
//   [Linktext](/pfad/)  → Link (intern oder extern)

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "hinweis"; title?: string; text: string }
  | { type: "cta"; text?: string };

export type Section = {
  /** H2 – als echte Suchfrage; der erste Absatz beantwortet sie direkt */
  h2: string;
  blocks: Block[];
};

export type Faq = { q: string; a: string };
export type Quelle = { title: string; url: string };
export type Foto = { id: string; alt: string };
export type Kennzahl = { wert: string; label: string };

export type Cluster =
  | "kosten"
  | "pflegegrad"
  | "verhinderungspflege"
  | "entlastung"
  | "pflegedienst-finden"
  | "behandlungspflege"
  | "krankenhaus"
  | "angehoerige"
  | "lokal";

export type LeistungSeite = {
  slug: string;
  navTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  kurz: string[];
  kennzahlen: Kennzahl[];
  foto: Foto;
  sections: Section[];
  faqs: Faq[];
  /** Ratgeber-Artikel (slugs), die im Block „Passend dazu“ verlinkt werden */
  ratgeber: string[];
  /** Verwandte Leistungen (slugs) */
  verwandt: string[];
  quellen: Quelle[];
};

export type OrtSeite = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  plz: string[];
  /** z. B. „Bezirk Bergedorf, Freie und Hansestadt Hamburg“ */
  verwaltung: string;
  anfahrt: string;
  kurz: string[];
  foto?: Foto;
  sections: Section[];
  faqs: Faq[];
  /** Nachbarorte (slugs) */
  nachbarn: string[];
  quellen: Quelle[];
  /** Lokale Angaben, die vor dem Livegang bestätigt werden müssen (wird nicht angezeigt) */
  pruefen: string[];
};

export type Artikel = {
  slug: string;
  cluster: Cluster;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  veroeffentlicht: string; // ISO-Datum
  aktualisiert: string; // ISO-Datum
  lesezeit: number; // Minuten
  kurz: string[];
  foto: Foto;
  sections: Section[];
  faqs: Faq[];
  /** Haupt-Linkziel: Leistungs-slug */
  leistung: string;
  /** Verwandte Artikel (slugs) */
  verwandt: string[];
  quellen: Quelle[];
};
