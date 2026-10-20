import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Edwin Kibirai Isuzu Sales | Authorized Isuzu Dealership Nairobi",
  description: "Learn about Edwin Kibirai Isuzu Sales in Nairobi, Kenya. Your trusted authorized partner for brand-new Isuzu trucks, buses, pickups, SUVs, and flexible bank asset financing.",
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/about/",
  },
  openGraph: {
    title: "About Edwin Kibirai Isuzu Sales Nairobi",
    description: "Your trusted authorized partner for brand-new Isuzu trucks, buses, pickups, SUVs, and asset financing in Kenya.",
    url: "https://edwinkibiraisuzusales.onrender.com/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
