import { trackeLead } from "./tracking";

// Schickt eine Anfrage an /api/anfrage und meldet eine erfolgreiche Anfrage an die eingewilligten Tracking-Dienste.
export async function sendeAnfrage(daten: Record<string, unknown>): Promise<void> {
  const res = await fetch("/api/anfrage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(daten),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.error || "Die Nachricht wurde nicht gesendet. Bitte rufen Sie uns direkt an.");

  // Conversion-Ereignis (Vertrag § 7a) – nur „Lead“, keine Formularinhalte
  trackeLead();
}

export function fehlertext(err: unknown) {
  return err instanceof Error && err.message !== "Failed to fetch"
    ? err.message
    : "Die Nachricht wurde nicht gesendet. Bitte rufen Sie uns direkt an.";
}
