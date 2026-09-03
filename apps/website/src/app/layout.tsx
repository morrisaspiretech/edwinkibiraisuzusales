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
  title: "Edwin Kibira Isuzu Sales - Authorized Isuzu Dealerships in Kenya | Trucks, Buses, Pickups & SUVs",
  description:
    "Edwin Kibira Isuzu Sales is a Leading Authorized Dealer for Isuzu Trucks (like the ever popular Isuzu FRR90), Buses, Pickups and SUVs in Kenya. Multi-Award Winning Dealer for Vehicle Sales, Service, Parts and Customer Experience.",
  keywords: [
    // Core Kenya
    "Isuzu Kenya", "Authorized Isuzu Dealer", "Isuzu dealer Nairobi", "Edwin Kibira Isuzu", 
    // Global & Regional
    "Isuzu East Africa", "Isuzu Africa", "Global Isuzu Dealer", "International Isuzu Sales", "Isuzu Exporters", "Buy Isuzu Online",
    // Vehicle Types
    "Isuzu Trucks", "Isuzu Buses", "Isuzu Pickups", "Isuzu SUVs", "Commercial Vehicles", "Light Duty Trucks", "Medium Duty Trucks", "Heavy Duty Trucks",
    // Specific Models (Current & Legacy)
    "D-Max Kenya", "mu-X Kenya", "Isuzu FRR90", "Isuzu FVR90", "Isuzu FTS", "Isuzu FVZ", "Isuzu NQR", "Isuzu NMR", "Isuzu NLR", "Isuzu NPS", "Isuzu GXZ", 
    // Engine & Tech Specs
    "Isuzu 4JJ3 Engine", "Isuzu 4HK1 Engine", "Isuzu 6HK1 Engine", "Isuzu Tech Specs", "Isuzu Payload", "Isuzu Chassis",
    // Services
    "Isuzu Parts Kenya", "Genuine Isuzu Parts", "Isuzu Service Center", "Isuzu Maintenance", "Isuzu Telematics", "MaxIT"
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
                name: "Edwin Kibira Isuzu Sales",
                image: "https://edwinkibiraisuzusales.onrender.com/logo.jpg",
                "@id": "https://edwinkibiraisuzusales.onrender.com",
                url: "https://edwinkibiraisuzusales.onrender.com",
                telephone: "+254768351483",
                description: "Global authorized dealer for Isuzu commercial and passenger vehicles. Offering sales, genuine parts, and comprehensive service.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Enterprise Road",
                  addressLocality: "Nairobi",
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
                priceRange: "$$$"
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
