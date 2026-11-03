// Schematische Karte des Einsatzgebiets. Lagen sind vereinfacht, nicht maßstabsgetreu.
const punkte = [
  { name: "Jenfeld", slug: "jenfeld", x: 150, y: 58, anchor: "middle" as const, dy: -16 },
  { name: "Horn", slug: "horn", x: 66, y: 128, anchor: "middle" as const, dy: -16 },
  { name: "Billstedt", slug: "billstedt", x: 172, y: 156, anchor: "middle" as const, dy: 30 },
  { name: "Oststeinbek", slug: "oststeinbek", x: 304, y: 112, anchor: "middle" as const, dy: -16 },
  { name: "Glinde", slug: "glinde", x: 404, y: 150, anchor: "middle" as const, dy: -16 },
  { name: "Reinbek", slug: "reinbek", x: 430, y: 244, anchor: "middle" as const, dy: -16 },
  { name: "Lohbrügge", slug: "lohbruegge", x: 270, y: 236, anchor: "middle" as const, dy: -16 },
  { name: "Wentorf", slug: "wentorf", x: 420, y: 336, anchor: "middle" as const, dy: 30 },
];
const sitz = { x: 284, y: 330 };

export default function AreaMap() {
  return (
    <figure className="area-map">
      <svg viewBox="0 0 500 410" role="group" aria-labelledby="map-title">
        <title id="map-title">Einsatzgebiet von TwinsCare rund um Bergedorf</title>
        <defs>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#d4dfeb" />
          </pattern>
        </defs>
        <rect width="500" height="410" rx="20" fill="#f6f9fc" />
        <rect width="500" height="410" rx="20" fill="url(#dots)" />

        {/* Gebiet */}
        <path
          d="M40 120 C40 60 110 26 170 30 C250 34 330 70 420 110 C470 132 482 200 470 260 C460 330 430 380 360 384 C290 388 240 372 220 330 C200 290 150 230 90 200 C56 184 40 160 40 120Z"
          fill="#e9f0f7"
          stroke="#123765"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />

        {/* Landesgrenze, vereinfacht */}
        <path d="M250 18 C258 110 344 176 352 230 C358 280 356 340 372 400" fill="none" stroke="#4b5d73" strokeWidth="1.4" strokeDasharray="5 6" />
        <text x="196" y="392" fontSize="13" fill="#4b5d73" textAnchor="middle">Hamburg</text>
        <text x="440" y="40" fontSize="13" fill="#4b5d73" textAnchor="middle">Schleswig-Holstein</text>

        {/* Wege vom Büro */}
        <g stroke="#2a4f82" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="2 5" fill="none">
          {punkte.map((p) => (
            <path key={p.slug} d={`M${sitz.x} ${sitz.y} L${p.x} ${p.y}`} />
          ))}
        </g>

        {punkte.map((p) => (
          <a key={p.slug} href={`/pflegedienst/${p.slug}/`}>
            <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
            <circle cx={p.x} cy={p.y} r="7" fill="#fff" stroke="#123765" strokeWidth="3" />
            <text x={p.x} y={p.y + p.dy} fontSize="16" fontWeight="700" fill="#123765" textAnchor={p.anchor}>
              {p.name}
            </text>
          </a>
        ))}

        {/* Sitz Bergedorf mit Giebel aus dem Logo */}
        <a href="/pflegedienst/bergedorf/">
          <circle cx={sitz.x} cy={sitz.y} r="30" fill="#c91f2a" fillOpacity="0.12" />
          <path d={`M${sitz.x - 15} ${sitz.y + 2} L${sitz.x} ${sitz.y - 11} L${sitz.x + 15} ${sitz.y + 2}`} fill="none" stroke="#c91f2a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M${sitz.x} ${sitz.y + 12} c-5 -3.5 -7.5 -6 -7.5 -8.7 a3.4 3.4 0 0 1 7.5 -1.3 a3.4 3.4 0 0 1 7.5 1.3 c0 2.7 -2.5 5.2 -7.5 8.7z`} fill="#c91f2a" />
          <text x={sitz.x} y={sitz.y + 50} fontSize="17" fontWeight="700" fill="#123765" textAnchor="middle">
            Bergedorf
          </text>
          <text x={sitz.x} y={sitz.y + 68} fontSize="13" fill="#4b5d73" textAnchor="middle">
            unser Büro
          </text>
        </a>
      </svg>
      <figcaption>Schematische Darstellung – tippen Sie auf einen Ort für Details.</figcaption>
    </figure>
  );
}
