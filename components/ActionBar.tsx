import { site } from "@/lib/site";
import { Phone, Whatsapp, Form } from "./Icons";

export default function ActionBar() {
  return (
    <nav className="action-bar" aria-label="Schnellkontakt">
      <a className="call" href={site.phoneHref}>
        <Phone /> Anrufen
      </a>
      <a href={site.whatsappHref}>
        <Whatsapp /> WhatsApp
      </a>
      <a className="primary" href="/pflege-anfragen/">
        <Form /> Pflege anfragen
      </a>
    </nav>
  );
}
