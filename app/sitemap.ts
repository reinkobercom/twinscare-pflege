import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { leistungsSeiten, ortSeiten, artikel, clusterMitArtikeln } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.domain}${p}`;
  const heute = new Date();
  const statisch = [
    ["/", 1],
    ["/leistungen/", 0.9],
    ["/pflegedienst/", 0.9],
    ["/kosten/", 0.8],
    ["/kosten/leistungen-pflegekasse/", 0.7],
    ["/pflegegrad-rechner/", 0.8],
    ["/pflege-anfragen/", 0.8],
    ["/ratgeber/", 0.7],
    ["/haeufige-fragen/", 0.6],
    ["/ueber-uns/", 0.5],
    ["/team/", 0.4],
    ["/kontakt/", 0.6],
    ["/impressum/", 0.1],
    ["/datenschutz/", 0.1],
    ["/barrierefreiheit/", 0.1],
  ] as const;
  return [
    ...statisch.map(([p, priority]) => ({ url: u(p), lastModified: heute, priority })),
    ...leistungsSeiten.map((l) => ({ url: u(`/leistungen/${l.slug}/`), lastModified: heute, priority: 0.9 })),
    ...ortSeiten.map((o) => ({ url: u(`/pflegedienst/${o.slug}/`), lastModified: heute, priority: 0.9 })),
    ...clusterMitArtikeln().map((c) => ({ url: u(`/ratgeber/thema/${c}/`), lastModified: heute, priority: 0.5 })),
    ...artikel.map((a) => ({ url: u(`/ratgeber/${a.slug}/`), lastModified: new Date(a.aktualisiert), priority: 0.7 })),
  ];
}
