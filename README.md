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
