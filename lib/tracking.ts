// Einwilligungsabhängiges Tracking: Google Analytics 4, Google Ads (Conversion + Remarketing), Meta Pixel.
// Die IDs kommen aus Vercel-Umgebungsvariablen. Ein Dienst lädt nur, wenn seine ID gesetzt ist
// UND der Besucher der passenden Kategorie im Cookie-Banner zugestimmt hat (§ 25 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
// An Google und Meta gehen bei Anfragen nur das Ereignis „Lead“ – keine Formularinhalte, keine Kontaktdaten.

export const trackingIds = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "", // z. B. G-XXXXXXX
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "", // z. B. AW-123456789
  googleAdsLeadLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || "", // Conversion-Label der Aktion „Lead“
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "", // z. B. 1234567890
};

export const hatStatistik = !!trackingIds.ga4;
export const hatMarketing = !!(trackingIds.googleAds || trackingIds.metaPixel);
export const hatEinwilligungsTools = hatStatistik || hatMarketing;

export type Consent = { v: 1; statistik: boolean; marketing: boolean; datum: string };
const KEY = "twinscare-consent";
const GUELTIG_MS = 365 * 24 * 60 * 60 * 1000; // Einwilligung gilt 12 Monate

type W = Window & {
  dataLayer?: unknown[];
  gtag?: (...a: unknown[]) => void;
  fbq?: ((...a: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
  _fbq?: unknown;
  __tcGoogle?: boolean;
  __tcMeta?: boolean;
};
const win = () => (typeof window === "undefined" ? undefined : (window as W));

export function leseConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.v !== 1 || Date.now() - Date.parse(c.datum) > GUELTIG_MS) return null;
    return c;
  } catch {
    return null;
  }
}

export function speichereConsent(statistik: boolean, marketing: boolean) {
  const alt = leseConsent();
  const c: Consent = { v: 1, statistik, marketing, datum: new Date().toISOString() };
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* Speicher nicht verfügbar – dann gilt die Wahl nur für diesen Seitenaufruf */
  }
  // Widerruf: bereits geladene Skripte lassen sich nicht entladen → Cookies löschen und neu laden
  const widerruf = alt && ((alt.statistik && !statistik) || (alt.marketing && !marketing));
  if (widerruf) {
    win()?.gtag?.("consent", "update", {
      analytics_storage: statistik ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
    loescheTrackingCookies();
    window.location.reload();
    return c;
  }
  wendeConsentAn(c);
  return c;
}

function loescheTrackingCookies() {
  const host = location.hostname;
  const domains = ["", host, "." + host, "." + host.replace(/^www\./, "")];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    if (/^(_ga|_gid|_gat|_gcl|_fbp|_fbc)/.test(name)) {
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      }
    }
  }
}

function ladeSkript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function wendeConsentAn(c: Consent | null) {
  const w = win();
  if (!w || !c) return;
  const google = (c.statistik && trackingIds.ga4) || (c.marketing && trackingIds.googleAds);
  if (google && !w.__tcGoogle) {
    w.__tcGoogle = true;
    w.dataLayer = w.dataLayer || [];
    // gtag muss `arguments` pushen, kein Array
    w.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    w.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    w.gtag("consent", "update", {
      analytics_storage: c.statistik ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied",
    });
    w.gtag("js", new Date());
    if (c.statistik && trackingIds.ga4) w.gtag("config", trackingIds.ga4, { send_page_view: false });
    if (c.marketing && trackingIds.googleAds) w.gtag("config", trackingIds.googleAds, { allow_enhanced_conversions: false });
    ladeSkript(`https://www.googletagmanager.com/gtag/js?id=${trackingIds.ga4 && c.statistik ? trackingIds.ga4 : trackingIds.googleAds}`);
    seitenaufruf();
  }
  if (c.marketing && trackingIds.metaPixel && !w.__tcMeta) {
    w.__tcMeta = true;
    const f = function (...args: unknown[]) {
      const fb = w.fbq!;
      if (fb.callMethod) (fb.callMethod as (...a: unknown[]) => void)(...args);
      else fb.queue!.push(args);
    } as unknown as NonNullable<W["fbq"]>;
    f.push = f;
    f.loaded = true;
    f.version = "2.0";
    f.queue = [];
    w.fbq = f;
    w._fbq = f;
    ladeSkript("https://connect.facebook.net/en_US/fbevents.js");
    // Kein Advanced Matching: es werden keine Kontaktdaten an Meta übergeben
    w.fbq("init", trackingIds.metaPixel);
    w.fbq("track", "PageView");
  }
}

let letzterPfad = "";
/** Seitenaufruf bei Navigation (App Router lädt Seiten ohne Neuladen) */
export function seitenaufruf() {
  const w = win();
  if (!w) return;
  const pfad = location.pathname + location.search;
  const c = leseConsent();
  if (c?.statistik && trackingIds.ga4 && w.gtag) {
    w.gtag("event", "page_view", { page_location: location.href, page_path: pfad, page_title: document.title });
  }
  if (letzterPfad && pfad !== letzterPfad && c?.marketing && w.fbq) w.fbq("track", "PageView");
  letzterPfad = pfad;
}

/** Erfolgreiche Anfrage: nur das Ereignis, keine Inhalte */
export function trackeLead() {
  const w = win();
  if (!w) return;
  const c = leseConsent();
  if (c?.statistik && trackingIds.ga4) w.gtag?.("event", "generate_lead");
  if (c?.marketing && trackingIds.googleAds && trackingIds.googleAdsLeadLabel) {
    w.gtag?.("event", "conversion", { send_to: `${trackingIds.googleAds}/${trackingIds.googleAdsLeadLabel}` });
  }
  if (c?.marketing && trackingIds.metaPixel) w.fbq?.("track", "Lead");
}

export const oeffneCookieEinstellungen = () => window.dispatchEvent(new Event("tc:cookie-einstellungen"));
