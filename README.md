# TwinsCare – Website

Website des ambulanten Pflegedienstes TwinsCare (Bergedorf und Hamburg-Ost).
Domain: https://www.twinscare-pflegedienst.de

## Stack
- Next.js (App Router), TypeScript, reines CSS (`app/globals.css`)
- Schriften selbst gehostet über Fontsource: Bricolage Grotesque (Überschriften), Atkinson Hyperlegible (Text)
- Formular-Versand über Resend (`app/api/anfrage/route.ts`, eine Route für Rückruf und Pflegegrad-Rechner). Erfolgreiche Anfragen lösen `dataLayer.push({ event: "lead" })` für das Conversion-Tracking aus.
- Hosting: Vercel

## Lokal starten
```bash
npm install
cp .env.example .env.local   # Resend-Werte eintragen
npm run dev
```

## Umgebungsvariablen (Vercel → Settings → Environment Variables)
| Variable | Beispiel |
| --- | --- |
| `RESEND_API_KEY` | `re_…` |
| `MAIL_FROM` | `VALIORA - Marketing für Pflegeunternehmen <leads@reinkober-leadportal.com>` (Domain in Resend verifiziert) |
| `MAIL_TO` | `leads@reinkober.agency,info@twinscare-pflegedienst.de` |

## Unternehmensdaten
Telefon, WhatsApp, E-Mail und Öffnungszeiten stehen zentral in `lib/site.ts`.
Werte mit `TODO` vor dem Livegang ersetzen – nur die Tracking-Nummern verwenden.

## Tracking und Cookie-Banner
Google Analytics 4, Google Ads und Meta Pixel laden nur, wenn ihre ID gesetzt ist **und** der Besucher im Cookie-Banner zustimmt
(`lib/tracking.ts`, `components/ConsentBanner.tsx`). Ohne gesetzte IDs erscheint kein Banner.
Bei Anfragen geht nur das Ereignis „Lead“ an Google/Meta – keine Formularinhalte, kein Advanced Matching, keine Enhanced Conversions.

| Variable | Beispiel |
| --- | --- |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-123456789` |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | Conversion-Label der Aktion „Lead“ |
| `NEXT_PUBLIC_META_PIXEL_ID` | `1234567890` |

`NEXT_PUBLIC_*`-Werte werden beim Build eingesetzt – nach dem Eintragen neu deployen.
Vercel Web Analytics läuft cookielos ohne Einwilligung; im Vercel-Projekt unter „Analytics“ aktivieren.
