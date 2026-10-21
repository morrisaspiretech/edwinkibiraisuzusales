import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Isuzu Test Drive in Nairobi | Edwin Kibirai",
  description: "Experience the power, comfort, and reliability of brand-new Isuzu trucks, D-Max pickups, and mu-X SUVs. Book your free test drive in Nairobi today.",
  alternates: {
    canonical: "https://www.edwinkibiraisuzusales.co.ke/book-test-drive/",
  },
  openGraph: {
    title: "Book a Free Isuzu Test Drive | Edwin Kibirai Isuzu Sales",
    description: "Book your free Isuzu test drive in Nairobi. Drive D-Max, mu-X, or commercial trucks before you buy.",
    url: "https://www.edwinkibiraisuzusales.co.ke/book-test-drive/",
  },
};

export default function BookTestDriveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
