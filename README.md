# TwinsCare – Website

Website des ambulanten Pflegedienstes TwinsCare (Bergedorf und Hamburg-Ost).
Domain: https://www.twinscare-pflegedienst.de

## Stack
- Next.js (App Router), TypeScript, reines CSS (`app/globals.css`)
- Schriften selbst gehostet über Fontsource: Bricolage Grotesque (Überschriften), Atkinson Hyperlegible (Text)
- Formular-Versand über Resend (`app/api/rueckruf/route.ts`)
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
| `MAIL_FROM` | `TwinsCare Website <website@twinscare-pflegedienst.de>` (Domain in Resend verifizieren) |
| `MAIL_TO` | `info@twinscare-pflegedienst.de` |

## Unternehmensdaten
Telefon, WhatsApp, E-Mail und Öffnungszeiten stehen zentral in `lib/site.ts`.
Werte mit `TODO` vor dem Livegang ersetzen – nur die Tracking-Nummern verwenden.
