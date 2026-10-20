import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare Isuzu Vehicles Side-by-Side | Edwin Kibirai Isuzu Sales",
  description: "Compare Isuzu commercial trucks, buses, D-Max pickups, and mu-X SUVs side-by-side. Compare engine specs, payload capacity, transmission, and pricing in Kenya.",
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/compare/",
  },
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
