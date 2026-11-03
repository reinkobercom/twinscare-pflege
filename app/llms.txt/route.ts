import { site, orte } from "@/lib/site";
import { leistungsSeiten, ortSeiten, artikel } from "@/lib/content";

export const dynamic = "force-static";

// llms.txt: kompakte Übersicht für KI-Systeme (https://llmstxt.org)
export function GET() {
  const u = (p: string) => `${site.domain}${p}`;
  const text = `# TwinsCare – Ambulanter Pflegedienst in Hamburg-Bergedorf

> TwinsCare (${site.legalName}) ist ein ambulanter Pflegedienst mit Sitz in der ${site.street}, ${site.zip} ${site.city}-Bergedorf. Einsatzgebiet: ${orte.map((o) => o.name).join(", ")}. Leistungen: ambulante Pflege (Grundpflege nach SGB XI), Behandlungspflege (SGB V), Verhinderungspflege, Entlastungsleistungen, Pflegeberatung inklusive Beratungseinsatz nach § 37 Abs. 3 SGB XI und Pflege nach dem Krankenhaus. Erstberatung zu Hause kostenlos, Abrechnung direkt mit Pflege- und Krankenkasse.

Kontakt: ${[site.phoneDisplay, site.email, u("/pflege-anfragen/")].filter(Boolean).join(" · ")}

## Leistungen
${leistungsSeiten.map((l) => `- [${l.navTitle}](${u(`/leistungen/${l.slug}/`)}): ${l.metaDescription}`).join("\n")}

## Einsatzgebiet
${ortSeiten.map((o) => `- [Pflegedienst ${o.name}](${u(`/pflegedienst/${o.slug}/`)}): PLZ ${o.plz.join(", ")} – ${o.verwaltung}`).join("\n")}

## Kosten und Tools
- [Kosten und Finanzierung](${u("/kosten/")}): Was Pflege- und Krankenkasse 2026 zahlen
- [Leistungen der Pflegekasse 2026](${u("/kosten/leistungen-pflegekasse/")}): alle Beträge je Pflegegrad
- [Pflegegrad-Rechner](${u("/pflegegrad-rechner/")}): Orientierung nach den sechs Modulen der Begutachtung

## Ratgeber
${artikel.map((a) => `- [${a.h1}](${u(`/ratgeber/${a.slug}/`)}): ${a.metaDescription}`).join("\n")}

## Optional
- [Über uns](${u("/ueber-uns/")})
- [Häufige Fragen](${u("/haeufige-fragen/")})
- [Kontakt](${u("/kontakt/")})
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
