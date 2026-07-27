import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import CollectionHighlights from "@/components/home/CollectionHighlights";
import { Vehicle } from "@/types/vehicle";
import Link from "next/link";
import { Phone, MessageSquare, ChevronRight, MapPin, Clock } from "lucide-react";

const DEFAULT_ISUZU_VEHICLES: Vehicle[] = [
  {
    id: 'isuzu-dmax-vcross',
    make: 'Isuzu',
    model: 'D-Max V-Cross 4x4',
    year: 2024,
    price: 6800000,
    engineCC: 2999,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'PICKUP',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-1', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-mux',
    make: 'Isuzu',
    model: 'mu-X 3.0L SUV',
    year: 2024,
    price: 8200000,
    engineCC: 2999,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'SUV',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-2', url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-nqr',
    make: 'Isuzu',
    model: 'NQR N-Series Truck',
    year: 2023,
    price: 5200000,
    engineCC: 5193,
    transmission: 'MANUAL',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'TRUCK',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-3', url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-dmax-ls',
    make: 'Isuzu',
    model: 'D-Max LS 4x2',
    year: 2024,
    price: 5900000,
    engineCC: 1898,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'PICKUP',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-4', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-mux-ls',
    make: 'Isuzu',
    model: 'mu-X LS-U 4x4',
    year: 2024,
    price: 9100000,
    engineCC: 2999,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'SUV',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-5', url: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-npr',
    make: 'Isuzu',
    model: 'NPR 75 Light Truck',
    year: 2023,
    price: 4100000,
    engineCC: 3856,
    transmission: 'MANUAL',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'TRUCK',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-6', url: 'https://images.unsplash.com/photo-1586191583539-be21063b00da?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
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
  } catch (error) {
    console.error("Error fetching vehicles, using default Isuzu collection:", error);
    return DEFAULT_ISUZU_VEHICLES;
  }
}

export default async function Home() {
  const vehicles: Vehicle[] = await getVehicles();
  const featuredVehicles = vehicles.filter(v => v.status === 'AVAILABLE').slice(0, 3);
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

      {/* ── Isuzu Kenya — Built for Africa Section ── */}
      <section className="py-20 bg-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary -z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop"
                alt="Isuzu D-Max Kenya"
                className="w-full h-[420px] object-cover shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 bg-secondary text-white px-8 py-4">
                <p className="font-black text-2xl">50+ Years</p>
                <p className="text-xs uppercase tracking-widest font-semibold">Serving Kenya</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[3px] w-12 bg-secondary" />
                <span className="text-secondary font-black text-xs uppercase tracking-widest">
                  About Edwin Kibira Isuzu Sales
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-tight">
                Built Tough.<br />
                <span className="text-secondary">Built for Kenya.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Edwin Kibira Isuzu Sales is your trusted authorized Isuzu dealer in Kenya. We carry the full range of Isuzu vehicles — from the legendary D-Max pickup built for Kenya&apos;s terrain, to the premium mu-X family SUV, and the powerful N-Series commercial trucks and buses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With decades of experience and a commitment to after-sales service, we make owning an Isuzu in Kenya easy, reliable, and rewarding.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                {[
                  { value: "500+", label: "Vehicles Sold" },
                  { value: "98%", label: "Customer Satisfaction" },
                  { value: "24/7", label: "After-Sales Support" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black text-secondary">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/inventory"
                  className="bg-secondary text-white px-8 py-4 font-black uppercase text-sm tracking-wider hover:bg-accent-dark transition-all flex items-center gap-2"
                >
                  View All Models <ChevronRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-primary text-primary px-8 py-4 font-black uppercase text-sm tracking-wider hover:bg-primary hover:text-white transition-all"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Test Drive CTA Banner ── */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">
              Experience Isuzu Before You Buy
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              Book a Free<br />Test Drive Today
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/book-test-drive"
              className="bg-white text-secondary px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-primary hover:text-white transition-all text-center"
            >
              Book Test Drive
            </Link>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-secondary transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Showroom & Hours ── */}
      <section className="py-20 bg-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-[3px] w-12 bg-secondary" />
                  <span className="text-secondary font-black text-xs uppercase tracking-widest">Visit Us</span>
                </div>
                <h2 className="text-4xl font-black text-white uppercase leading-tight">
                  Visit Our<br />
                  <span className="text-secondary">Isuzu Showroom</span>
                </h2>
              </div>

              <p className="text-white/50 leading-relaxed">
                Come experience the full range of Isuzu vehicles in person. Our team of Isuzu-trained experts will guide you through every model, feature, and financing option.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="https://maps.google.com/?q=Nairobi+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Location</h4>
                    <p className="text-white/40 text-sm">Nairobi, Kenya</p>
                  </div>
                </a>

                <a href="tel:+254700000000" className="flex items-center gap-5 group">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Phone</h4>
                    <p className="text-white/40 text-sm">+254 700 000 000</p>
                  </div>
                </a>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Hours</h4>
                    <p className="text-white/40 text-sm">Mon–Fri: 8:00AM – 6:00PM</p>
                    <p className="text-white/40 text-sm">Sat: 9:00AM – 4:00PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="lg:col-span-7">
              <div className="border border-white/10 p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-black text-white uppercase mb-2">
                      Ready to Drive an Isuzu?
                    </h3>
                    <p className="text-white/50">
                      Talk to one of our Isuzu specialists today. We&apos;ll help you find the right vehicle for your needs and budget.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                      href="/book-test-drive"
                      className="bg-secondary text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:bg-accent-dark transition-all flex items-center justify-center gap-2 text-center"
                    >
                      Book Test Drive <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="/inventory"
                      className="border-2 border-white/30 text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2 text-center"
                    >
                      View Inventory <ChevronRight size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="border-2 border-white/30 text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2 sm:col-span-2 text-center"
                    >
                      Contact Us <ChevronRight size={16} />
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
