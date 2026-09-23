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
  title: "Isuzu Dealer Kenya | Edwin Kibirai Isuzu Sales — Trucks, Buses, Pickups & SUVs Nairobi",
  description:
    "Buy brand-new Isuzu trucks, buses, pickups & SUVs in Kenya. Edwin Kibirai Isuzu Sales — authorized dealer in Nairobi. FRR90, NLR, NQR, NMR, D-Max, MU-X & UD Quester. Up to 100% bank financing. Call 0768 351 483.",
  keywords: [
    // High-intent Kenya buyer keywords
    "Isuzu truck price Kenya", "Isuzu dealer Nairobi", "buy Isuzu Kenya", "Isuzu Kenya 2024",
    "Edwin Kibirai Isuzu", "authorized Isuzu dealer Kenya", "Isuzu East Africa dealer",
    // Model-specific (what people actually search)
    "Isuzu FRR90 price Kenya", "Isuzu NLR price Kenya", "Isuzu NQR price Kenya",
    "Isuzu NMR price Kenya", "Isuzu FVR price Kenya", "Isuzu FVZ price Kenya",
    "Isuzu D-Max price Kenya", "Isuzu D-Max double cab Kenya", "Isuzu MU-X price Kenya",
    "Isuzu NPS 4x4 Kenya", "UD Quester price Kenya", "Isuzu bus price Kenya",
    // Financing
    "Isuzu truck financing Kenya", "Isuzu bank loan Kenya", "buy Isuzu on loan Kenya",
    // Location
    "Isuzu dealer Nairobi", "Isuzu trucks Nairobi", "commercial vehicles Kenya",
    // Engine/tech (for spec searchers)
    "Isuzu 4HK1 engine", "Isuzu 4JJ3 engine", "Isuzu 6HK1 engine", "Isuzu 4773cc",
  ],
  metadataBase: new URL("https://edwinkibiraisuzusales.onrender.com"),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
      'en-KE': '/',
    },
  },
  // 🔴 Replace the content value below with your actual Google Search Console verification code
  // Get it from: https://search.google.com/search-console → Add Property → HTML tag method
  verification: {
    google: "84Q1D5R1_Y8vdOBKd_F1GaIeEsQ0vt6Q3eq51zM9bjs",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Edwin Kibira Isuzu Sales - Global & Authorized Isuzu Dealership",
    description: "The ultimate destination for Isuzu Trucks, Buses, Pickups, and SUVs globally. Comprehensive specs, sales, and service for all Isuzu models.",
    type: "website",
    url: "https://edwinkibiraisuzusales.onrender.com",
    siteName: "Edwin Kibira Isuzu Sales - Global Hub",
    images: [{ url: "/logo.jpg", width: 1024, height: 1024, alt: "Edwin Kibira Isuzu Sales" }],
  },
};

import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
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
                image: "https://edwinkibiraisuzusales.onrender.com/logo.jpg",
                "@id": "https://edwinkibiraisuzusales.onrender.com",
                url: "https://edwinkibiraisuzusales.onrender.com",
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
                paymentAccepted: "Cash, Bank Transfer, Bank Financing",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Isuzu Vehicles Kenya",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "Isuzu FRR90 Truck" } },
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "Isuzu NLR Truck" } },
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "Isuzu NQR Truck" } },
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "Isuzu D-Max Pickup" } },
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "Isuzu MU-X SUV" } },
                    { "@type": "Offer", itemOffered: { "@type": "Vehicle", name: "UD Quester Prime Mover" } },
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Edwin Kibira Isuzu Sales",
                "url": "https://edwinkibiraisuzusales.onrender.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://edwinkibiraisuzusales.onrender.com/inventory?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Isuzu",
                "url": "https://edwinkibiraisuzusales.onrender.com/ultimate-isuzu-guide",
                "logo": "https://edwinkibiraisuzusales.onrender.com/logo.jpg",
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
            <FloatingWhatsApp />
            <LiveChat />
            <Footer />
            <CompareBar />
          </CompareProvider>
        </FavouritesProvider>
      </body>
    </html>
  );
}
