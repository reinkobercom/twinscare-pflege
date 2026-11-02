import type { Cluster } from "./types";
import { leistungsSeiten } from "./leistungen";
import { ortSeiten } from "./orte";
import { ratgeberA } from "./ratgeber-a";
import { ratgeberB } from "./ratgeber-b";

export { leistungsSeiten, ortSeiten };
export const artikel = [...ratgeberA, ...ratgeberB].sort((a, b) => b.veroeffentlicht.localeCompare(a.veroeffentlicht));

export const clusterInfo: Record<Cluster, { titel: string; text: string }> = {
  kosten: { titel: "Kosten und Finanzierung", text: "Was Pflege kostet und welche Kasse was übernimmt." },
  pflegegrad: { titel: "Pflegegrad", text: "Antrag, Begutachtung und Leistungen je Pflegegrad." },
  verhinderungspflege: { titel: "Verhinderungspflege", text: "Entlastung, wenn pflegende Angehörige ausfallen." },
  entlastung: { titel: "Entlastung im Alltag", text: "Entlastungsbetrag, Haushaltshilfe und Unterstützung." },
  "pflegedienst-finden": { titel: "Pflegedienst finden", text: "Worauf Sie bei der Auswahl achten sollten." },
  behandlungspflege: { titel: "Behandlungspflege", text: "Medizinische Pflege zu Hause und was die Krankenkasse zahlt." },
  krankenhaus: { titel: "Nach dem Krankenhaus", text: "Gut vorbereitet von der Klinik nach Hause." },
  angehoerige: { titel: "Für Angehörige", text: "Pflege organisieren, ohne sich zu überfordern." },
  lokal: { titel: "Pflege im Hamburger Osten", text: "Anlaufstellen und Angebote vor Ort." },
};

export const getLeistung = (slug: string) => leistungsSeiten.find((l) => l.slug === slug);
export const getOrt = (slug: string) => ortSeiten.find((o) => o.slug === slug);
export const getArtikel = (slug: string) => artikel.find((a) => a.slug === slug);
export const clusterMitArtikeln = () =>
  (Object.keys(clusterInfo) as Cluster[]).filter((c) => artikel.some((a) => a.cluster === c));
