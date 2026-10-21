import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Best Isuzu Dealer Kenya | Edwin Kibirai Isuzu Sales - Trucks, Buses, Pickups & SUVs Nairobi",
  description:
    "Looking for the best Isuzu dealer in Kenya? Buy brand-new Isuzu trucks (FRR90, NLR, NQR, NMR, FVR, FVZ), D-Max pickups, MU-X SUVs & UD Quester at Edwin Kibirai Isuzu Sales Nairobi. Up to 100% asset financing, fast delivery & official warranty. Call 0768 351 483.",
  keywords: [
    "best Isuzu dealer Kenya", "best Isuzu dealer Nairobi", "Isuzu dealer Kenya", "buy Isuzu Kenya",
    "Edwin Kibirai Isuzu", "Edwin Kibirai Isuzu Sales", "authorized Isuzu dealer Kenya", "Isuzu East Africa dealer",
    "Isuzu truck price Kenya", "Isuzu D-Max price Kenya", "Isuzu D-Max double cab Kenya", "Isuzu D-Max 4x4 price Kenya",
    "Isuzu FRR90 price Kenya", "Isuzu NLR price Kenya", "Isuzu NQR price Kenya",
    "Isuzu NMR price Kenya", "Isuzu FVR price Kenya", "Isuzu FVZ price Kenya",
    "Isuzu MU-X price Kenya", "Isuzu NPS 4x4 Kenya", "UD Quester price Kenya", "Isuzu bus price Kenya",
    "Isuzu truck financing Kenya", "Isuzu bank loan Kenya", "buy Isuzu on loan Kenya", "Isuzu asset finance Kenya",
    "Isuzu trucks Nairobi", "commercial vehicles Kenya", "Enterprise Road Isuzu dealer",
    "Isuzu 4HK1 engine", "Isuzu 4JJ3 engine", "Isuzu 6HK1 engine",
  ],
  metadataBase: new URL("https://www.edwinkibiraisuzusales.co.ke"),
  verification: {
    google: "84Q1D5R1_Y8vdOBKd_F1GaIeEsQ0vt6Q3eq51zM9bjs",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Best Isuzu Dealer in Kenya | Edwin Kibirai Isuzu Sales Nairobi",
    description: "Kenya's premier authorized dealership for brand-new Isuzu Trucks, Buses, D-Max Pickups, and MU-X SUVs. Unbeatable pricing and up to 100% bank financing.",
    type: "website",
    url: "https://www.edwinkibiraisuzusales.co.ke",
    siteName: "Edwin Kibirai Isuzu Sales Kenya",
    images: [{ url: "/logo.jpg", width: 1024, height: 1024, alt: "Edwin Kibirai Isuzu Sales - Best Isuzu Dealer in Kenya" }],
  },
};


import { CompareProvider } from "@/context/CompareContext";
import CompareBar from "@/components/inventory/CompareBar";
import LiveChat from "@/components/layout/LiveChat";
import { FavouritesProvider } from "@/context/FavouritesContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-white antialiased text-[#1a1a1a]`}>
        <NextTopLoader color="#D62B2B" height={4} showSpinner={true} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "AutoDealer",
                name: "Edwin Kibirai Isuzu Sales",
                image: "https://www.edwinkibiraisuzusales.co.ke/logo.jpg",
                "@id": "https://www.edwinkibiraisuzusales.co.ke",
                url: "https://www.edwinkibiraisuzusales.co.ke",
                telephone: "+254768351483",
                email: "edwin@cfg.co.ke",
                description: "Authorized Isuzu dealer in Nairobi, Kenya. Selling brand-new Isuzu trucks (FRR90, NLR, NQR, NMR, FVR, FVZ), buses, D-Max pickups, MU-X SUVs and UD Quester prime movers. Up to 100% bank financing available.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Enterprise Road",
                  addressLocality: "Nairobi",
                  addressRegion: "Nairobi County",
                  addressCountry: "KE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -1.3005887,
                  longitude: 36.8580214,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                priceRange: "KES 2,500,000 - KES 16,500,000",
                areaServed: "Kenya",
                currenciesAccepted: "KES",
                paymentAccepted: "Cash, Bank Transfer, Bank Financing"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Edwin Kibira Isuzu Sales",
                "url": "https://www.edwinkibiraisuzusales.co.ke",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.edwinkibiraisuzusales.co.ke/inventory?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Isuzu",
                "url": "https://www.edwinkibiraisuzusales.co.ke/ultimate-isuzu-guide",
                "logo": "https://www.edwinkibiraisuzusales.co.ke/logo.jpg",
                "sameAs": [
                  "https://en.wikipedia.org/wiki/Isuzu_Motors",
                  "https://www.isuzu.co.jp/world/"
                ]
              }
            ]),
          }}
        />
        <FavouritesProvider>
          <CompareProvider>
            <main className="min-h-screen flex flex-col">
              {children}
            </main>

            <LiveChat />
            <Footer />
            <CompareBar />
          </CompareProvider>
        </FavouritesProvider>
      </body>
    </html>
  );
}
