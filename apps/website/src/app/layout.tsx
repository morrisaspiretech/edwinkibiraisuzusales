import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aspire Motors | Kenya's Premium Vehicle Dealership",
  description: "Experience excellence with Aspire Motors. Browse luxury vehicles, SUVs, and bikes in Kenya. Quality certified cars at the best prices.",
};

import Footer from "@/components/layout/Footer";
import TopProgressBar from "@/components/layout/TopProgressBar";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
