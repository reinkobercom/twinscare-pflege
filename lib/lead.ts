// Schickt eine Anfrage an /api/anfrage und meldet eine erfolgreiche Anfrage an Google Tag Manager / Ads.
export async function sendeAnfrage(daten: Record<string, unknown>): Promise<void> {
  const res = await fetch("/api/anfrage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(daten),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Die Nachricht wurde nicht gesendet. Bitte rufen Sie uns direkt an.");

  // Conversion-Ereignis für das Tracking (Vertrag § 7a)
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "lead", lead_typ: daten.typ });
}

export function fehlertext(err: unknown) {
  return err instanceof Error && err.message !== "Failed to fetch"
    ? err.message
    : "Die Nachricht wurde nicht gesendet. Bitte rufen Sie uns direkt an.";
}
