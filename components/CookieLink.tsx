"use client";

import { hatEinwilligungsTools, oeffneCookieEinstellungen } from "@/lib/tracking";

export default function CookieLink() {
  if (!hatEinwilligungsTools) return null;
  return (
    <li>
      <button type="button" className="footer-linkbutton" onClick={oeffneCookieEinstellungen}>
        Cookie-Einstellungen
      </button>
    </li>
  );
}
