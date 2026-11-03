// Zentrale Unternehmensdaten. Alle mit TODO markierten Werte vor dem Livegang ersetzen.
// Telefon und WhatsApp: ausschließlich die Tracking-Nummern verwenden (Vertrag § 7a Abs. 5).

export const site = {
  name: "TwinsCare",
  legalName: "Twins Care ambulanter Pflegedienst GmbH & Co. KG",
  domain: "https://www.twinscare-pflegedienst.de",
  street: "Bergedorfer Straße 85",
  zip: "21033",
  city: "Hamburg",
  district: "Bergedorf",
  phoneDisplay: "", // Tracking-Nummer eintragen, z. B. "040 123 456 78" – leer = alle Telefon-Buttons ausgeblendet
  phoneHref: "", // z. B. "tel:+494012345678"
  whatsappHref: "", // z. B. "https://wa.me/494012345678" – leer = WhatsApp ausgeblendet
  email: "info@twinscare-pflegedienst.de", // TODO: bestätigen
  hours: [] as { days: string; time: string }[], // z. B. { days: "Montag bis Freitag", time: "8:00 bis 17:00 Uhr" }
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bergedorfer+Stra%C3%9Fe+85+21033+Hamburg",
};

// Hinweis auf freie Kapazitäten im Hero. Nur aktiv lassen, wenn es stimmt (mit Twinscare abstimmen).
export const kapazitaet = {
  aktiv: true,
  orte: ["Bergedorf", "Lohbrügge", "Billstedt"], // TODO: aktuelle Orte mit freien Plätzen eintragen
};

export const orte = [
  { name: "Bergedorf", slug: "bergedorf", plz: "21029–21039", sitz: true },
  { name: "Lohbrügge", slug: "lohbruegge", plz: "21031, 21033, 22115" },
  { name: "Billstedt", slug: "billstedt", plz: "22111–22119" },
  { name: "Horn", slug: "horn", plz: "22111, 22113, 22119" },
  { name: "Jenfeld", slug: "jenfeld", plz: "22043, 22045" },
  { name: "Oststeinbek", slug: "oststeinbek", plz: "22113" },
  { name: "Glinde", slug: "glinde", plz: "21509" },
  { name: "Reinbek", slug: "reinbek", plz: "21465" },
  { name: "Wentorf", slug: "wentorf", plz: "21465" },
] as const;

export const leistungen = [
  {
    slug: "ambulante-pflege",
    title: "Ambulante Pflege",
    text: "Körperpflege, Anziehen, Essen und Bewegung – bei Ihnen zu Hause, so oft Sie es brauchen.",
    kasse: "Pflegekasse",
  },
  {
    slug: "behandlungspflege",
    title: "Behandlungspflege",
    text: "Medikamente, Insulin, Wundversorgung und Kompression nach ärztlicher Verordnung.",
    kasse: "Krankenkasse",
  },
  {
    slug: "verhinderungspflege",
    title: "Verhinderungspflege",
    text: "Wir übernehmen, wenn Sie als Angehörige Urlaub machen, krank sind oder eine Pause brauchen.",
    kasse: "Pflegekasse",
  },
  {
    slug: "entlastungsleistungen",
    title: "Entlastungsleistungen",
    text: "Hilfe im Haushalt, beim Einkaufen und im Alltag – bezahlt über den Entlastungsbetrag von 131 € im Monat.",
    kasse: "Pflegekasse",
  },
  {
    slug: "pflegeberatung",
    title: "Pflegeberatung",
    text: "Wir helfen beim Pflegegrad-Antrag und führen den Beratungseinsatz nach § 37.3 bei Ihnen durch.",
    kasse: "Pflegekasse",
  },
  {
    slug: "pflege-nach-krankenhausaufenthalt",
    title: "Pflege nach dem Krankenhaus",
    text: "Wir stimmen uns mit dem Sozialdienst der Klinik ab, damit die Pflege am Entlasstag beginnt.",
    kasse: "Kranken- und Pflegekasse",
  },
] as const;
