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
  title: "Edwin Kibira Isuzu Sales | Authorized Isuzu Dealer in Kenya",
  description:
    "Edwin Kibira Isuzu Sales – Kenya's trusted Isuzu dealer. Browse D-Max pickups, mu-X SUVs, commercial trucks and buses. Built tough. Built for Kenya.",
  keywords: ["Isuzu Kenya", "Isuzu dealer Nairobi", "D-Max Kenya", "mu-X Kenya", "Isuzu trucks Kenya", "Edwin Kibira Isuzu"],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Edwin Kibira Isuzu Sales",
    description: "Authorized Isuzu dealer in Kenya. D-Max, mu-X, N-Series trucks, buses and more.",
    type: "website",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              name: "Edwin Kibira Isuzu Sales",
              image: "https://edwinkibiraisuzusales.co.ke/logo.jpg",
              "@id": "https://edwinkibiraisuzusales.co.ke",
              url: "https://edwinkibiraisuzusales.co.ke",
              telephone: "+254768351483",
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
            }),
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
