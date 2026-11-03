"use client";

import { hatEinwilligungsTools, oeffneCookieEinstellungen } from "@/lib/tracking";

export default function CookieEinstellungenButton() {
  if (!hatEinwilligungsTools) {
    return <span>Derzeit sind keine einwilligungspflichtigen Dienste aktiv.</span>;
  }
  return (
    <button type="button" className="btn btn-primary" onClick={oeffneCookieEinstellungen}>
      Cookie-Einstellungen öffnen
    </button>
  );
}
