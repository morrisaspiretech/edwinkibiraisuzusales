import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Edwin Kibirai Isuzu Sales",
  description: "Find answers to top questions about buying brand new Isuzu vehicles, bank asset financing, delivery, warranty, and servicing in Kenya.",
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/faq/",
  },
  openGraph: {
    title: "Isuzu Kenya FAQ | Edwin Kibirai Isuzu Sales",
    description: "Frequently asked questions about buying brand new Isuzu vehicles and asset financing in Kenya.",
    url: "https://edwinkibiraisuzusales.onrender.com/faq/",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
