import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Edwin Kibirai Isuzu Sales | Call 0768 351 483 Nairobi",
  description: "Get in touch with Edwin Kibirai Isuzu Sales. Visit our Enterprise Road showroom in Nairobi or call 0768 351 483 for immediate pricing, quotations, and test drive bookings.",
  alternates: {
    canonical: "https://edwinkibiraisuzusales.onrender.com/contact/",
  },
  openGraph: {
    title: "Contact Edwin Kibirai Isuzu Sales Nairobi",
    description: "Visit our Enterprise Road showroom in Nairobi or call 0768 351 483 for immediate pricing and quotations.",
    url: "https://edwinkibiraisuzusales.onrender.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
