import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionBar from "@/components/ActionBar";
import RueckrufButton from "@/components/RueckrufButton";
import ConsentBanner from "@/components/ConsentBanner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Pflegedienst Bergedorf & Hamburg-Ost | TwinsCare ambulante Pflege",
    template: "%s",
  },
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
      <body>
        <Header />
        {children}
        <Footer />
        <RueckrufButton />
        <ActionBar />
        <ConsentBanner />
        {/* Vercel Web Analytics: cookielos, ohne Einwilligung (Art. 6 Abs. 1 lit. f DSGVO) */}
        <Analytics />
      </body>
    </html>
  );
}
