import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isuzu Loan & Asset Finance Calculator Kenya 2026 | Edwin Kibirai",
  description: "Calculate your monthly loan repayments for brand new Isuzu trucks, buses, and pickups in Kenya. Flexible bank financing packages with up to 95% financing.",
  alternates: {
    canonical: "https://www.edwinkibiraisuzusales.co.ke/loan-calculator/",
  },
  openGraph: {
    title: "Isuzu Asset Finance Calculator Kenya | Edwin Kibirai",
    description: "Calculate your monthly repayments for Isuzu trucks, pickups, and buses in Kenya.",
    url: "https://www.edwinkibiraisuzusales.co.ke/loan-calculator/",
  },
};

export default function LoanCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
