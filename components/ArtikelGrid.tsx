import type { Artikel } from "@/lib/content/types";
import { clusterInfo } from "@/lib/content";
import Photo from "./Photo";

export default function ArtikelGrid({ items, headingLevel = "h2" }: { items: Artikel[]; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="card-grid">
      {items.map((a) => (
        <a key={a.slug} className="card" href={`/ratgeber/${a.slug}/`}>
          <div className="card-photo">
            <Photo id={a.foto.id} alt={a.foto.alt} sizes="(max-width: 600px) 100vw, 33vw" />
          </div>
          <div className="card-body">
            <span className="card-meta">
              {clusterInfo[a.cluster].titel} · {a.lesezeit} Min.
            </span>
            <H>{a.h1}</H>
            <p>{a.lead}</p>
            <span className="card-more">Weiterlesen</span>
          </div>
        </a>
      ))}
    </div>
  );
}
