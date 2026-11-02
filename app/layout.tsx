import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Pflegedienst Bergedorf & Hamburg-Ost | TwinsCare ambulante Pflege",
  description:
    "Ambulanter Pflegedienst in Bergedorf, Lohbrügge, Billstedt, Horn, Jenfeld, Oststeinbek, Glinde, Reinbek und Wentorf. Kostenlose Erstberatung zu Hause, Abrechnung direkt mit der Pflegekasse.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.domain,
    siteName: "TwinsCare",
    title: "TwinsCare – Ambulanter Pflegedienst in Bergedorf und Hamburg-Ost",
    description:
      "Pflege zu Hause in Bergedorf und Umgebung. Kostenlose Erstberatung, feste Ansprechpartner, Abrechnung direkt mit der Kasse.",
  },
};

export const viewport: Viewport = {
  themeColor: "#123765",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
