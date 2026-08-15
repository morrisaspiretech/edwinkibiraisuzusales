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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-white antialiased text-[#1a1a1a]`}>
        <NextTopLoader color="#D62B2B" height={4} showSpinner={true} />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
