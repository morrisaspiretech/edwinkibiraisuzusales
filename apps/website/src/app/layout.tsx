import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import { CompareProvider } from "@/context/CompareContext";
import CompareBar from "@/components/inventory/CompareBar";
import LiveChat from "@/components/layout/LiveChat";
import { FavouritesProvider } from "@/context/FavouritesContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Best Isuzu Dealer Kenya | Edwin Kibirai Isuzu Sales — Trucks, Pickups, Buses & SUVs Nairobi",
    template: "%s | Edwin Kibirai Isuzu Sales Kenya",
  },
  description:
    "Looking for the best Isuzu dealer in Kenya? Buy brand-new Isuzu trucks (FRR 90, NLR, NQR, NMR, FVR, FVZ Tipper), D-Max pickups (Single & Double Cab), MU-X 7-seater SUVs & UD Quester at Edwin Kibirai Isuzu Sales on Enterprise Road, Nairobi. Up to 100% bank asset financing, official Isuzu East Africa warranty & fast delivery across Kenya. Call 0768 351 483.",
  keywords: [
    "best Isuzu dealer Kenya", "best Isuzu dealer in Kenya", "best Isuzu dealer Nairobi", "Isuzu dealer Kenya",
    "buy Isuzu Kenya", "Edwin Kibirai Isuzu", "Edwin Kibira Isuzu", "Edwin Kibirai Isuzu Sales", "Edwin Kibira Isuzu Sales",
    "authorized Isuzu dealer Kenya", "Isuzu East Africa dealer Nairobi", "Enterprise Road Isuzu dealer",
    "Isuzu truck price Kenya", "Isuzu D-Max price Kenya 2026", "Isuzu D-Max single cab price Kenya",
    "Isuzu D-Max double cab price Kenya", "Isuzu D-Max 4x4 price Kenya", "Isuzu TFS87", "Isuzu TFR87", "Isuzu TFS40 3.0L",
    "Isuzu FRR90 price Kenya", "Isuzu FRR 90 truck Nairobi", "Isuzu NLR price Kenya", "Isuzu NQR price Kenya", "Isuzu NQR 81",
    "Isuzu NMR price Kenya", "Isuzu NMR 85", "Isuzu FVR price Kenya", "Isuzu FVZ price Kenya", "Isuzu FVZ tipper Kenya",
    "Isuzu MU-X price Kenya", "Isuzu NPS 4x4 Kenya", "UD Quester price Kenya", "Isuzu bus price Kenya",
    "Isuzu 33 seater bus price Kenya", "Isuzu 51 seater school bus price Kenya", "Isuzu 67 seater bus Kenya",
    "Isuzu truck financing Kenya", "Isuzu 100 bank financing Kenya", "buy Isuzu on loan Kenya", "Isuzu asset finance Kenya",
    "commercial vehicles Kenya", "Isuzu 4HK1 engine", "Isuzu 4JJ3 engine", "Isuzu 6HK1 engine",
  ],
  metadataBase: new URL("https://www.edwinkibiraisuzusales.co.ke"),
  alternates: {
    canonical: "https://www.edwinkibiraisuzusales.co.ke/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "84Q1D5R1_Y8vdOBKd_F1GaIeEsQ0vt6Q3eq51zM9bjs",
      "rmQ7setcaOVuH9EJZhsQXaNqkURLU4BLg4DypVXZZl0",
    ],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Best Isuzu Dealer in Kenya | Edwin Kibirai Isuzu Sales Nairobi",
    description: "Kenya's premier authorized dealership partner for brand-new Isuzu Trucks, Buses, D-Max Pickups, and MU-X SUVs. Up to 100% bank financing & official warranty. Call 0768 351 483.",
    type: "website",
    url: "https://www.edwinkibiraisuzusales.co.ke/",
    siteName: "Edwin Kibirai Isuzu Sales Kenya",
    locale: "en_KE",
    images: [{ url: "/logo.jpg", width: 1024, height: 1024, alt: "Edwin Kibirai Isuzu Sales - Best Isuzu Dealer in Kenya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Isuzu Dealer in Kenya | Edwin Kibirai Isuzu Sales",
    description: "Buy brand-new Isuzu trucks, D-Max pickups, MU-X SUVs & buses in Kenya. Up to 100% bank financing. Call 0768 351 483.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} font-sans bg-white antialiased text-[#1a1a1a]`}>
        <NextTopLoader color="#D62B2B" height={4} showSpinner={false} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "AutoDealer",
                "@id": "https://www.edwinkibiraisuzusales.co.ke/#autodealer",
                name: "Edwin Kibirai Isuzu Sales",
                alternateName: [
                  "Edwin Kibira Isuzu Sales",
                  "Edwin Kibira Isuzu",
                  "Edwin Kibirai Isuzu",
                  "Edwin Isuzu Kenya",
                  "Edwin Kibira",
                  "Edwin Kibirai",
                ],
                image: [
                  "https://www.edwinkibiraisuzusales.co.ke/logo.jpg",
                  "https://www.edwinkibiraisuzusales.co.ke/vehicles/dmax-double.webp",
                ],
                logo: "https://www.edwinkibiraisuzusales.co.ke/logo.jpg",
                url: "https://www.edwinkibiraisuzusales.co.ke/",
                telephone: "+254768351483",
                email: "edwin@cfg.co.ke",
                description:
                  "Kenya's premier authorized Isuzu dealership sales partner located on Enterprise Road, Nairobi. Selling brand-new Isuzu trucks (FRR 90, NLR, NQR, NMR, FVR, FVZ Tipper), D-Max pickups (Single & Double Cab), MU-X 7-seater SUVs, passenger buses & UD Quester prime movers. Up to 100% bank asset financing with 48-hour approval, official Isuzu East Africa manufacturer warranty, and nationwide delivery across Kenya.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Enterprise Road, Industrial Area",
                  addressLocality: "Nairobi",
                  addressRegion: "Nairobi County",
                  postalCode: "00100",
                  addressCountry: "KE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -1.3005887,
                  longitude: 36.8580214,
                },
                hasMap: "https://maps.google.com/?q=Isuzu+East+Africa+Enterprise+Road+Nairobi",
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Saturday"],
                    opens: "08:00",
                    closes: "16:00",
                  },
                ],
                priceRange: "KES 3,850,000 - KES 17,000,000",
                areaServed: [
                  { "@type": "Country", name: "Kenya" },
                  { "@type": "City", name: "Nairobi" },
                  { "@type": "City", name: "Mombasa" },
                  { "@type": "City", name: "Kisumu" },
                  { "@type": "City", name: "Nakuru" },
                  { "@type": "City", name: "Eldoret" },
                  { "@type": "City", name: "Thika" },
                ],
                currenciesAccepted: "KES, USD",
                paymentAccepted: "Bank Financing, Asset Finance, Bank Transfer, Cash, Banker's Cheque",
                parentOrganization: {
                  "@type": "AutoManufacturer",
                  name: "Isuzu East Africa",
                  url: "https://www.isuzu.co.ke",
                },
                founder: {
                  "@type": "Person",
                  name: "Edwin Kibirai",
                  alternateName: "Edwin Kibira",
                  jobTitle: "Isuzu Commercial Vehicle Sales Consultant",
                  telephone: "+254768351483",
                  worksFor: {
                    "@type": "AutoDealer",
                    name: "Edwin Kibirai Isuzu Sales",
                  },
                },
                sameAs: [
                  "https://www.facebook.com/share/1H61ocz1S5/",
                  "https://www.instagram.com/edwinkibiraisuzu?igsh=Y21sYWwwNXF6aXB5",
                  "https://www.tiktok.com/@edwinkibiraisuzusales?_r=1&_t=ZS-98qpjrR3C8y",
                  "https://maps.google.com/?q=Isuzu+East+Africa+Enterprise+Road+Nairobi",
                  "https://en.wikipedia.org/wiki/Isuzu_Motors",
                ],
                knowsAbout: [
                  "Isuzu D-Max Pickups",
                  "Isuzu Commercial Trucks",
                  "Isuzu FRR 90",
                  "Isuzu NQR 81",
                  "Isuzu NMR 85",
                  "Isuzu NLR 77",
                  "Isuzu FVR 90",
                  "Isuzu FVZ 34N",
                  "Isuzu FVZ 34T Tipper",
                  "Isuzu mu-X 7-Seater SUV",
                  "Isuzu 33 Seater Matatu",
                  "Isuzu 51 Seater School Bus",
                  "Isuzu 67 Seater Coach",
                  "Isuzu Asset Financing Kenya",
                  "100% Bank Asset Finance Kenya",
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "214",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Who is the best Isuzu dealer in Kenya?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Edwin Kibirai Isuzu Sales (also known as Edwin Kibira Isuzu), located on Enterprise Road, Industrial Area in Nairobi, is widely ranked as the best authorized dealership sales specialist in Kenya. They provide brand-new, zero-mileage Isuzu trucks (FRR 90, NLR, NQR, NMR, FVR, FVZ), D-Max pickups, MU-X SUVs, and buses with official Isuzu East Africa 3-year/100,000 km manufacturer warranties, up to 100% bank asset financing with major Kenyan banks, and nationwide delivery across all 47 counties. Contact Edwin Kibirai directly at 0768 351 483.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the price of a brand-new Isuzu D-Max in Kenya in 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Brand-new 2026 Isuzu D-Max prices in Kenya start from KES 3,890,000 to KES 4,450,000 for the TFR 87 Single Cab 4x2 1.9L, KES 4,390,000 to KES 5,200,000 for the TFS 87 Single Cab 4x4 1.9L, KES 5,850,000 to KES 6,450,000 for the TFS 87 Double Cab 4x4 1.9L, and KES 7,800,000 to KES 8,900,000 for the top-spec TFS 40 3.0L V-Cross / LS-E Double Cab 4x4 Automatic. Call 0768 351 483 for current stock and proforma invoices.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much is an Isuzu FRR 90 truck in Kenya in 2026?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The Isuzu FRR 90 (11-tonne GVW, 7–8 tonne payload champion) chassis is priced from KES 6,800,000 to KES 7,600,000. Complete turnkey packages with custom cargo dropside, box body, or refrigerated units range from KES 7,800,000 to KES 8,500,000. Edwin Kibirai arranges up to 95% asset financing with flexible monthly installments.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I buy an Isuzu truck or pickup on 100% bank financing in Kenya?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Edwin Kibirai Isuzu Sales partners with all leading Kenyan commercial banks including Co-operative Bank, KCB, Equity Bank, NCBA, Stanbic Bank, and Family Bank to provide up to 100% asset financing with 0% to 10% deposit and flexible repayment periods of up to 60 to 72 months. Approvals are processed within 48 to 72 hours.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What are the prices of Isuzu N-Series light commercial trucks (NLR, NMR, NQR)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "In 2026, the Isuzu NLR 77 (4.5-tonne GVW, 2.5–3.0T payload) starts around KES 3,850,000; the Isuzu NMR 85 (5.5-tonne GVW, 3.5T payload) starts around KES 4,350,000; and the Isuzu NQR 81 (8.5-tonne GVW, 5.5–6.0T payload) starts from KES 4,775,000 (standard chassis) to KES 5,250,000 (NQR Xtra Long deck).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Where is Edwin Kibirai Isuzu Sales located in Nairobi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "The main showroom and consultation desk is located on Enterprise Road, Industrial Area, Nairobi, Kenya. Visits, vehicle inspections, and test drives can be scheduled 6 days a week (Monday to Saturday, 8:00 AM to 6:00 PM) by calling or sending a WhatsApp to +254 768 351 483.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What warranty comes with brand-new Isuzu vehicles from Edwin Kibirai?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Every vehicle sold is 100% brand-new, zero-mileage, and covered by the official Isuzu East Africa manufacturer warranty of 3 years or 100,000 kilometers, supported by genuine Isuzu parts and authorized service centers across Kenya.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the price of Isuzu buses in Kenya (33-seater, 51-seater, 67-seater)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "An Isuzu NQR 33-seater PSV matatu ranges between KES 7,200,000 and KES 8,400,000 complete; an Isuzu FRR 90 51-seater yellow school bus built to full NTSA regulations ranges from KES 10,500,000 to KES 12,800,000; and an Isuzu FVR 34 67-seater intercounty luxury coach ranges from KES 14,900,000 to KES 18,500,000.",
                    },
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.edwinkibiraisuzusales.co.ke/#website",
                name: "Edwin Kibirai Isuzu Sales",
                alternateName: "Edwin Kibira Isuzu",
                url: "https://www.edwinkibiraisuzusales.co.ke/",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.edwinkibiraisuzusales.co.ke/vehicles/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.edwinkibiraisuzusales.co.ke/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Vehicles Showroom",
                    item: "https://www.edwinkibiraisuzusales.co.ke/vehicles/",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Isuzu Commercial Trucks",
                    item: "https://www.edwinkibiraisuzusales.co.ke/trucks/",
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "Isuzu D-Max Pickups",
                    item: "https://www.edwinkibiraisuzusales.co.ke/vehicles/d-max/",
                  },
                ],
              },
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
