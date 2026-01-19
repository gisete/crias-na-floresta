import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crias Na Floresta",
  description: "Forest school, aprendizagem na natureza",
  keywords: ["escola da floresta", "educação na natureza", "Portugal", "crianças", "aprendizagem ao ar livre"],
  authors: [{ name: "Crias na Floresta" }],
  openGraph: {
    title: "Crias Na Floresta",
    description: "Forest school, aprendizagem na natureza",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${libreFranklin.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Crias na Floresta',
              url: 'https://criasnaFloresta.pt',
              logo: 'https://criasnaFloresta.pt/images/crias-na-floresta-logo.png',
              description: 'Forest School em Portugal dedicado à educação na natureza para crianças dos 6 meses aos 4 anos.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Caxias',
                addressRegion: 'Oeiras',
                addressCountry: 'PT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'criasnafloresta@gmail.com',
                contactType: 'customer service',
              },
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Crias na Floresta',
              url: 'https://criasnaFloresta.pt',
              description: 'Forest School em Portugal dedicado à educação na natureza para crianças.',
              inLanguage: 'pt-PT',
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
