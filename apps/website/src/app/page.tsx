import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import CollectionHighlights from "@/components/home/CollectionHighlights";
import { Vehicle } from "@/types/vehicle";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, ChevronRight, MapPin, Clock, CheckCircle } from "lucide-react";

// ── Default Isuzu Vehicles (shown when API is offline) ──────────────────────
const DEFAULT_ISUZU_VEHICLES: Vehicle[] = [
  {
    id: "isuzu-dmax-vcross",
    make: "Isuzu",
    model: "D-Max V-Cross 4x4",
    year: 2024,
    price: 6800000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "PICKUP",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-1", url: "/vehicles/dmax-hero.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-mux",
    make: "Isuzu",
    model: "mu-X 3.0L SUV",
    year: 2024,
    price: 8200000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "SUV",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-2", url: "/vehicles/mux-hero.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-nqr",
    make: "Isuzu",
    model: "NQR N-Series Truck",
    year: 2023,
    price: 5200000,
    engineCC: 5193,
    transmission: "MANUAL",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "TRUCK",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-3", url: "/vehicles/nqr-hero.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-dmax-ls",
    make: "Isuzu",
    model: "D-Max LS 4x2",
    year: 2024,
    price: 5900000,
    engineCC: 1898,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "PICKUP",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-4", url: "/vehicles/dmax-silver.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-mux-ls",
    make: "Isuzu",
    model: "mu-X LS-U 4x4",
    year: 2024,
    price: 9100000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "SUV",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-5", url: "/vehicles/mux-black.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-npr",
    make: "Isuzu",
    model: "NPR 75 Light Truck",
    year: 2023,
    price: 4100000,
    engineCC: 3856,
    transmission: "MANUAL",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "TRUCK",
    mileage: 0,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    images: [{ id: "img-6", url: "/vehicles/fvr-truck.png", isPrimary: true, position: 0 }],
  },
];

async function getVehicles() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    const res = await fetch(`${apiUrl}/api/vehicles`, { next: { revalidate: 0 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
    return DEFAULT_ISUZU_VEHICLES;
  } catch {
    return DEFAULT_ISUZU_VEHICLES;
  }
}

export default async function Home() {
  const vehicles: Vehicle[] = await getVehicles();
  const featuredVehicles = vehicles.filter((v) => v.status === "AVAILABLE").slice(0, 3);
  const latestVehicles = [...vehicles]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero featuredVehicles={featuredVehicles} />

      {/* ── New Arrivals ── */}
      <NewArrivals vehicles={latestVehicles} />

      {/* ── Vehicle Categories + Why Us ── */}
      <CollectionHighlights vehicles={vehicles} />

      {/* ── About / Built for Africa ── */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Image column */}
            <div className="relative order-2 lg:order-1">
              {/* Decorative blocks */}
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-secondary/10 -z-10" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-secondary -z-10" />

              <div className="relative w-full h-64 sm:h-80 lg:h-[440px] overflow-hidden shadow-2xl">
                <Image
                  src="/vehicles/dmax-hero.png"
                  alt="Isuzu D-Max — Edwin Kibira Isuzu Sales Kenya"
                  fill
                  className="object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 bg-secondary text-white px-6 sm:px-8 py-4">
                  <p className="font-black text-2xl sm:text-3xl leading-none">50+</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold mt-0.5">
                    Years Serving Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[3px] w-10 bg-secondary" />
                  <span className="text-secondary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                    About Edwin Kibira Isuzu Sales
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] uppercase leading-tight">
                  Built Tough.{" "}
                  <span className="text-secondary">Built for Kenya.</span>
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Edwin Kibira Isuzu Sales is your trusted authorized Isuzu dealer in Kenya. We carry
                the full range of Isuzu vehicles — from the legendary D-Max pickup built for
                Kenya&apos;s terrain, to the premium mu-X SUV, and the powerful N-Series commercial
                trucks and buses.
              </p>

              {/* Checklist */}
              <ul className="space-y-2.5">
                {[
                  "Authorized Isuzu dealer — genuine vehicles only",
                  "Full model range: D-Max, mu-X, N-Series & more",
                  "Flexible financing and trade-in options",
                  "Trained technicians for after-sales service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-gray-100">
                {[
                  { value: "500+", label: "Vehicles Sold" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl sm:text-3xl font-black text-secondary leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mt-1.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  href="/inventory"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-7 py-3.5 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#b82222] transition-all"
                >
                  View All Models <ChevronRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Test Drive CTA Banner ── */}
      <section
        className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D62B2B 0%, #a81e1e 100%)" }}
      >
        {/* Decorative stripes */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }} />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-white/75 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
              Experience Isuzu Before You Buy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight">
              Book a Free<br className="hidden sm:block" /> Test Drive Today
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/book-test-drive"
              className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 sm:px-10 py-3.5 sm:py-4 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Book Test Drive
            </Link>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 sm:px-10 py-3.5 sm:py-4 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-white hover:text-secondary transition-all"
            >
              <MessageSquare size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Showroom & Hours ── */}
      <section className="py-16 sm:py-20 bg-[#1A1A1A] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left: address info */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[3px] w-10 bg-secondary" />
                  <span className="text-secondary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                    Visit Us
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight">
                  Visit Our{" "}
                  <span className="text-secondary">Isuzu Showroom</span>
                </h2>
              </div>

              <p className="text-white/45 leading-relaxed text-sm sm:text-base">
                Come experience the full Isuzu range in person. Our trained Isuzu specialists will
                walk you through every model, feature, and financing option tailored to your needs.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: <MapPin size={18} />,
                    label: "Location",
                    value: "Nairobi, Kenya",
                    href: "https://maps.google.com/?q=Nairobi+Kenya",
                  },
                  {
                    icon: <Phone size={18} />,
                    label: "Phone",
                    value: "+254 700 000 000",
                    href: "tel:+254700000000",
                  },
                  {
                    icon: <Clock size={18} />,
                    label: "Working Hours",
                    value: "Mon–Fri: 8AM–6PM · Sat: 9AM–4PM",
                    href: null,
                  },
                ].map((item) => {
                  const inner = (
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all flex-shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white/45 text-xs sm:text-sm mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="lg:col-span-7">
              <div className="border border-white/10 p-8 sm:p-12 relative overflow-hidden">
                {/* Red top line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-2 leading-tight">
                      Ready to Drive an Isuzu?
                    </h3>
                    <p className="text-white/45 text-sm sm:text-base">
                      Talk to one of our Isuzu specialists today. We&apos;ll help you find the
                      right vehicle for your needs and budget.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Link
                      href="/book-test-drive"
                      className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 sm:py-5 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#b82222] transition-all text-center"
                    >
                      Book Test Drive <ChevronRight size={15} />
                    </Link>
                    <Link
                      href="/inventory"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-6 py-4 sm:py-5 font-black uppercase text-xs sm:text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all text-center"
                    >
                      View Inventory <ChevronRight size={15} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-6 py-4 sm:py-5 font-black uppercase text-xs sm:text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all text-center sm:col-span-2"
                    >
                      Contact Us <ChevronRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
