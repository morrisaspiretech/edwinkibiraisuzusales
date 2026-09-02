import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Link from "next/link";
import Image from "next/image";
import { FaMessage, FaPhone, FaChevronRight, FaArrowRight, FaMapLocationDot, FaClock, FaCircleCheck, FaStar, FaTruckFront, FaBusSimple, FaCar, FaShieldHalved, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import MovingCatalog from "@/components/home/MovingCatalog";
import { VEHICLES_DATA } from "@/data/vehicles";
import FeaturedVehicleCard from "@/components/inventory/FeaturedVehicleCard";

export const dynamic = "force-dynamic";

const VEHICLE_CATEGORIES = [
  {
    label: "Trucks",
    sub: "N & F Series",
    icon: <FaTruckFront size={24} />,
    href: "/vehicles#trucks",
    img: "/vehicles/f-series-truck.webp",
  },
  {
    label: "Buses",
    sub: "N & F Series",
    icon: <FaBusSimple size={24} />,
    href: "/vehicles#buses",
    img: "/vehicles/frr90-bus.webp",
  },
  {
    label: "Pickups",
    sub: "D-Max Range",
    icon: <FaCar size={24} />,
    href: "/vehicles#pickups",
    img: "/vehicles/dmax-double.webp",
  },
  {
    label: "SUVs",
    sub: "MU-X Range",
    icon: <FaCar size={24} />,
    href: "/vehicles#suvs",
    img: "/vehicles/mux-1900cc.png",
  },
];

// Featured vehicles linking directly to correct model pages
const FEATURED_VEHICLES = [
  {
    id: 'tfr87-4x2',
    title: 'TFR 87 Single Cab 4×2',
    category: 'Pickups',
    img: '/vehicles/grouped/batch1/2.jpeg',
    spec: '1.9L Turbo Diesel · 150 hp · Manual',
  },
  {
    id: 'tfs87-4x4-manual',
    title: 'TFS 87 Single Cab 4×4',
    category: 'Pickups',
    img: '/vehicles/grouped/batch2/2.jpeg',
    spec: '1.9L Turbo Diesel · Manual · 4×4',
  },
  {
    id: 'tfs87-4x4-auto',
    title: 'TFS 87 Single Cab 4×4',
    category: 'Pickups',
    img: '/vehicles/grouped/batch2/3.jpeg',
    spec: '1.9L Turbo Diesel · Auto · 4×4',
  },
  {
    id: 'tfs87-double-manual',
    title: 'TFS 87 Double Cab',
    category: 'Pickups',
    img: '/vehicles/grouped/batch3/3.jpeg',
    spec: '1.9L Turbo Diesel · Manual · 4×4',
  },
  {
    id: 'tfs87-double-auto',
    title: 'TFS 87 Double Cab',
    category: 'Pickups',
    img: '/vehicles/grouped/batch4/3.jpeg',
    spec: '1.9L Turbo Diesel · Auto · 4×4',
  },
  {
    id: 'tfs40-double-auto',
    title: 'TFS 40 Double Cab Automatic',
    category: 'Pickups',
    img: '/vehicles/tfs40-double-auto/1.jpeg',
    spec: '3.0L Turbo Diesel · 190 hp · 4×4',
  },
  {
    id: 'double-cabin',
    title: 'D-Max 3.0L Double Cab',
    category: 'Pickups',
    img: '/vehicles/dmax-single.webp',
    spec: '3.0L Turbo Diesel · 190 hp · 4×4',
  },
  {
    id: 'mu-x-1900cc',
    title: 'MU-X LS-U 1900cc',
    category: 'SUVs',
    img: '/vehicles/mu-x-1900cc-gallery/1.jpeg',
    spec: '1.9L Turbo Diesel · 150 hp · 7-Seater',
  },
  {
    id: 'mu-x-3000cc',
    title: 'MU-X LS-T 3000cc',
    category: 'SUVs',
    img: '/vehicles/mu-x-3000cc-gallery/1.jpeg',
    spec: '3.0L Turbo Diesel · 190 hp · 7-Seater',
  },
  {
    id: 'n-series-nlr',
    title: 'N-Series NLR',
    category: 'Trucks',
    img: '/vehicles/n-series/nlr-chassis.png',
    spec: '2.999cc Turbo Diesel · 2.3T Payload',
  },
  {
    id: 'n-series-nmr85',
    title: 'N-Series NMR 85',
    category: 'Trucks',
    img: '/vehicles/n-series/nmr85/1.jpeg',
    spec: '2.999cc Turbo Diesel · 3.5T Payload',
  },
  {
    id: 'n-series-nps',
    title: 'N-Series NPS 81H 4×4',
    category: 'Trucks',
    img: '/vehicles/n-series/nps-81h-real.png',
    spec: '4.778cc Turbo Diesel · 3.0T Payload',
  },
  {
    id: 'n-series-nqr81',
    title: 'N-Series NQR 81',
    category: 'Trucks',
    img: '/vehicles/nqr-hero.png',
    spec: '4.778cc Turbo Diesel · 5.0T Payload',
  },
  {
    id: 'n-series-nqr-xtra',
    title: 'N-Series NQR Xtra',
    category: 'Trucks',
    img: '/vehicles/n-series/nqr-xtra-real.png',
    spec: '4.778cc Turbo Diesel · 6.0T Payload',
  },
  {
    id: 'f-series-frr90n',
    title: 'F-Series FRR 90N',
    category: 'Trucks',
    img: '/vehicles/f-series/frr90n/1.jpeg',
    spec: '5,193cc Turbo Diesel · 11T Payload',
  },
  {
    id: 'f-series-fvr90l',
    title: 'F-Series FVR 90L',
    category: 'Trucks',
    img: '/vehicles/f-series/fvr90l/1.jpeg',
    spec: '5,193cc Turbo Diesel · 13T Payload',
  },
  {
    id: 'f-series-fvr90p',
    title: 'F-Series FVR 90P',
    category: 'Trucks',
    img: '/vehicles/f-series/fvr90p/1.jpg',
    spec: '5,193cc Turbo Diesel · 13T Payload',
  },
  {
    id: 'f-series-fvz34n',
    title: 'F-Series FVZ 34N Truck',
    category: 'Trucks',
    img: '/vehicles/f-series/fvz34n/1.jpeg',
    spec: '7,790cc Turbo Diesel · 6×4 · 16T Payload',
  },
  {
    id: 'f-series-fvz34t',
    title: 'F-Series FVZ 34T Tipper',
    category: 'Trucks',
    img: '/vehicles/f-series/fvz34t/1.jpeg',
    spec: '7,790cc Turbo Diesel · 16T Tipper',
  },
  {
    id: 'bus-nmr-26',
    title: 'NMR 26 Seater Bus',
    category: 'Buses',
    img: '/vehicles/buses/nmr26/1.jpg',
    spec: '26 Seater · School / Staff',
  },
  {
    id: 'bus-nqr-29',
    title: 'NQR 29 Seater Bus',
    category: 'Buses',
    img: '/vehicles/nqr-hero.png',
    spec: '29 Seater · Commuter',
  },
  {
    id: 'bus-nqr-33',
    title: 'NQR 33 Seater Bus',
    category: 'Buses',
    img: '/vehicles/buses/nqr33/1.jpeg',
    spec: '33 Seater · Commuter',
  },
  {
    id: 'bus-frr90n-51',
    title: 'FRR 90N 51 Seater',
    category: 'Buses',
    img: '/vehicles/buses/frr90n-51/1.jpg',
    spec: '51 Seater · Ksh 8,450,000',
  },
  {
    id: 'bus-frr90q-51',
    title: 'FRR 90Q 51 Seater',
    category: 'Buses',
    img: '/vehicles/buses/frr90q-51/2.jpg',
    spec: '51 Seater · Ksh 10,425,000',
  },
  {
    id: 'bus-fvr34-67-4x2',
    title: 'FVR 34 67 Seater 4×2',
    category: 'Buses',
    img: '/vehicles/buses/fvr34-4x2/1.jpeg',
    spec: '67 Seater Semi-Luxury · Ksh 14,916,000',
  },
  {
    id: 'bus-fvr34-67-6x2',
    title: 'FVR 34 67 Seater 6×2',
    category: 'Buses',
    img: '/vehicles/buses/fvr34-6x2/10.jpg',
    spec: '67 Seater Semi-Luxury · Ksh 16,623,000',
  },
];

const WHY_FEATURES = [
  {
    icon: <FaShieldHalved size={28} className="text-[#D62B2B]" />,
    title: "100% Genuine Isuzu",
    desc: "Every vehicle is brand-new, zero-mileage, and sourced directly from Isuzu East Africa — backed by an official manufacturer warranty.",
  },
  {
    icon: <FaStar size={28} className="text-[#D62B2B]" />,
    title: "Up to 100% Bank Financing",
    desc: "We partner with leading Kenyan banks to offer flexible financing packages — get your Isuzu with as little as 0% deposit.",
  },
  {
    icon: <FaTruckFront size={28} className="text-[#D62B2B]" />,
    title: "Full Range Available",
    desc: "From light N-Series trucks to heavy F-Series, pickups, buses, and SUVs — we carry the complete Isuzu lineup under one roof.",
  },
  {
    icon: <FaPhone size={28} className="text-[#D62B2B]" />,
    title: "Dedicated Sales Support",
    desc: "Our experienced Isuzu specialists are available 6 days a week to guide you through every step — from selection to financing to delivery.",
  },
];

export default async function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      <Hero />

      {/* ── VEHICLE CATEGORIES (SEPARATED FROM HERO) ── */}
      <section className="bg-white py-12 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-[#D62B2B]" />
            <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Explore <span className="text-[#D62B2B]">Categories</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VEHICLE_CATEGORIES.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="group relative overflow-hidden h-40 flex flex-col justify-end"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-50"
                />
                <div className="relative z-10 p-4">
                  <div className="text-[#D62B2B] mb-1">{cat.icon}</div>
                  <p className="text-white font-black text-base uppercase leading-tight">{cat.label}</p>
                  <p className="text-white/60 text-xs font-semibold">{cat.sub}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL VEHICLE RANGE ── */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-1 bg-[#D62B2B]" />
            <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Browse Our <span className="text-[#D62B2B]">Isuzu Range</span>
            </h2>
            <Link href="/vehicles" className="ml-auto text-xs font-black text-[#D62B2B] uppercase tracking-widest hover:underline flex items-center gap-1">
              View All <FaChevronRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_VEHICLES.map((v) => (
              <FeaturedVehicleCard key={v.id} v={v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MOVING CATALOG ── */}
      <MovingCatalog />

      {/* ── WHY CHOOSE US ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#f9f9f9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-1 w-10 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Why Us</span>
              <div className="h-1 w-10 bg-[#D62B2B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase">
              Why Buy From <span className="text-[#D62B2B]">Edwin Kibira Isuzu?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_FEATURES.map((f) => (
              <div key={f.title} className="bg-white p-5 border border-gray-200 border-t-4 border-t-[#D62B2B] hover:shadow-sm transition-shadow">
                <div className="mb-3">{f.icon}</div>
                <h3 className="font-black text-[#1a1a1a] text-sm uppercase mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING BANNER ── */}
      <section
        className="relative py-12 px-4 sm:px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D62B2B 0%, #a81e1e 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Easy, Fast, Flexible</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase leading-tight">
              Get Up To 100% Bank Financing
            </h2>
            <p className="text-white/70 mt-2 text-sm max-w-lg">
              Drive your new Isuzu today. We partner with leading Kenyan banks — low deposits, flexible repayment terms.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/book-test-drive"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#D62B2B] px-7 py-3 font-black uppercase text-sm tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all"
            >
              Calculate Financing
            </Link>
            <a
              href="https://wa.me/254768351483"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-7 py-3 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-[#D62B2B] transition-all"
            >
              <FaMessage size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:h-[400px] overflow-hidden bg-[#f5f5f5]">
              <Image
                src="/vehicles/mux-3000cc.png"
                alt="Edwin Kibira Isuzu Sales Kenya"
                fill
                className="object-contain p-6"
              />
              <div className="absolute bottom-0 left-0 bg-[#D62B2B] text-white px-6 py-4">
                <p className="font-black text-2xl leading-none">500+</p>
                <p className="text-xs uppercase tracking-widest font-semibold mt-1">Vehicles Sold in Kenya</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-1 w-10 bg-[#D62B2B]" />
                <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">About Edwin Kibira Isuzu Sales</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase leading-tight">
                Your Trusted <span className="text-[#D62B2B]">Isuzu Dealer</span> in Kenya
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Edwin Kibira Isuzu Sales is a multi-award winning, authorised Isuzu dealer in Kenya. We are recognized for excellence across Vehicle Sales, Service, Parts, and Customer Experience. We carry the full range of Isuzu vehicles — from the legendary D-Max pickup built for Kenya&apos;s tough terrain, to the premium MU-X SUV, and the powerful, inter-city distribution champions like the N-Series and FRR90 commercial trucks and buses. Every vehicle is brand-new and zero-mileage.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-Award Winning Authorized Isuzu Dealer — brand-new, zero-mileage vehicles",
                  "Full model range: Trucks (FRR90, N-Series), Buses, Pickups & SUVs",
                  "Up to 100% bank financing available with flexible repayment",
                  "360-Degree After-Sales Solutions: Genuine Parts, Lubricants, and Certified Servicing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <FaCircleCheck size={14} className="text-[#D62B2B] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {[
                  { value: "500+", label: "Vehicles Sold" },
                  { value: "100%", label: "Genuine Isuzu" },
                  { value: "6 Days", label: "Support" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-[#D62B2B] leading-none">{s.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/vehicles" className="inline-flex items-center gap-2 bg-[#D62B2B] text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#b82222] transition-all">
                  Browse Vehicles <FaChevronRight size={14} />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 bg-[#f9f9f9] border-t border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-10 px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-1 w-10 bg-[#D62B2B]" />
            <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Happy Clients</span>
            <div className="h-1 w-10 bg-[#D62B2B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase">
            What Our <span className="text-[#D62B2B]">Customers Say</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Real stories from real Kenyans who trust Edwin Kibira Isuzu Sales.</p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="relative flex overflow-hidden mb-5 group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee gap-5 px-2">
            {[
              { name: "James Mwangi", role: "Fleet Owner, Nairobi", text: "I bought three NQR trucks from Edwin Kibira and the experience was seamless. Great financing terms and after-sales support has been excellent." },
              { name: "Grace Achieng", role: "Transport Business Owner, Kisumu", text: "Edwin walked me through everything — from model selection to bank financing. Got my D-Max with zero deposit. Highly recommend their services." },
              { name: "Peter Kamau", role: "Construction Company, Mombasa", text: "We've purchased 5 Isuzu trucks through Edwin Kibira Isuzu Sales. Transparent pricing and delivery has always been on time." },
              { name: "Samuel Otieno", role: "Agribusiness, Nakuru", text: "Needed a reliable pickup for my farm operations. The D-Max has been absolutely incredible. Edwin helped me secure 90% bank financing with ease." },
              { name: "Caroline Njeri", role: "School Bus Operator, Thika", text: "Edwin Kibira helped me get 2 Isuzu buses for my school transport business. The after-sale service team is always available when I need them." },
              { name: "David Kimani", role: "Logistics Company, Nairobi", text: "Our entire delivery fleet is Isuzu N-Series from Edwin Kibira. Best investment we've ever made. Low maintenance, high uptime, every time." },
              { name: "Fatuma Hassan", role: "Trader, Mombasa", text: "I was skeptical at first but the team was so professional. They helped me compare models and I left with the perfect pickup for my business." },
              { name: "James Mwangi", role: "Fleet Owner, Nairobi", text: "I bought three NQR trucks from Edwin Kibira and the experience was seamless. Great financing terms and after-sales support has been excellent." },
              { name: "Grace Achieng", role: "Transport Business Owner, Kisumu", text: "Edwin walked me through everything — from model selection to bank financing. Got my D-Max with zero deposit. Highly recommend their services." },
              { name: "Peter Kamau", role: "Construction Company, Mombasa", text: "We've purchased 5 Isuzu trucks through Edwin Kibira Isuzu Sales. Transparent pricing and delivery has always been on time." },
              { name: "Samuel Otieno", role: "Agribusiness, Nakuru", text: "Needed a reliable pickup for my farm operations. The D-Max has been absolutely incredible. Edwin helped me secure 90% bank financing with ease." },
              { name: "Caroline Njeri", role: "School Bus Operator, Thika", text: "Edwin Kibira helped me get 2 Isuzu buses for my school transport business. The after-sale service team is always available when I need them." },
            ].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-80 bg-white p-5 border border-gray-200 border-t-4 border-t-[#D62B2B] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-black text-[#1a1a1a] text-xs uppercase tracking-wide">{t.name}</p>
                  <p className="text-[#D62B2B] text-xs font-bold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="relative flex overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-reverse gap-5 px-2">
            {[
              { name: "Brian Omondi", role: "Contractor, Eldoret", text: "I've been running Isuzu trucks for 8 years. Switched to buying from Edwin Kibira Isuzu Sales and the service level is unmatched in Kenya." },
              { name: "Susan Wanjiku", role: "Entrepreneur, Nairobi", text: "Bought a brand new mu-X for my family. The vehicle is a dream. Edwin's team made the entire process smooth, from financing to delivery." },
              { name: "Ahmed Ibrahim", role: "Import/Export, Mombasa", text: "Needed reliable trucks for my port operations. Got 3 FRR trucks from Edwin. Zero downtime in 2 years. Truly the best commercial vehicles." },
              { name: "Ruth Chebet", role: "Dairy Farmer, Rift Valley", text: "Edwin helped me get a single cab D-Max for farm use. The off-road capability is incredible and maintenance costs are very low." },
              { name: "John Njoroge", role: "Real Estate Developer, Karen", text: "Bought an Isuzu mu-X for site visits. The 4x4 capability is phenomenal. Would absolutely buy from Edwin Kibira again without hesitation." },
              { name: "Mary Auma", role: "NGO Fleet Manager, Kisumu", text: "Our organisation needed 4 pickups for field operations. Edwin's team gave us excellent bulk pricing and the vehicles have never let us down." },
              { name: "Joseph Kiprotich", role: "Mining Company, Taita Taveta", text: "Extreme terrain demands extreme vehicles. The Isuzu D-Max 4x4 from Edwin Kibira handles everything we throw at it. Outstanding machine." },
              { name: "Brian Omondi", role: "Contractor, Eldoret", text: "I've been running Isuzu trucks for 8 years. Switched to buying from Edwin Kibira Isuzu Sales and the service level is unmatched in Kenya." },
              { name: "Susan Wanjiku", role: "Entrepreneur, Nairobi", text: "Bought a brand new mu-X for my family. The vehicle is a dream. Edwin's team made the entire process smooth, from financing to delivery." },
              { name: "Ahmed Ibrahim", role: "Import/Export, Mombasa", text: "Needed reliable trucks for my port operations. Got 3 FRR trucks from Edwin. Zero downtime in 2 years. Truly the best commercial vehicles." },
              { name: "Ruth Chebet", role: "Dairy Farmer, Rift Valley", text: "Edwin helped me get a single cab D-Max for farm use. The off-road capability is incredible and maintenance costs are very low." },
              { name: "John Njoroge", role: "Real Estate Developer, Karen", text: "Bought an Isuzu mu-X for site visits. The 4x4 capability is phenomenal. Would absolutely buy from Edwin Kibira again without hesitation." },
            ].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-80 bg-white p-5 border border-gray-200 border-t-4 border-t-[#D62B2B] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-black text-[#1a1a1a] text-xs uppercase tracking-wide">{t.name}</p>
                  <p className="text-[#D62B2B] text-xs font-bold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TIKTOK SHOWCASE ── */}
      <section className="py-14 px-4 sm:px-6 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-1 w-10 bg-[#D62B2B]" />
                <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">As Seen on TikTok</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
                From Our <span className="text-[#D62B2B]">Showroom</span> to You
              </h2>
              <p className="text-gray-400 text-sm mt-2 max-w-xl">
                Real vehicles. Real deliveries. Real customers. See why thousands of Kenyans trust Edwin Kibira Isuzu Sales for their next vehicle.
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@edwinkibiraisuzusales"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 flex items-center gap-2 border border-white/20 text-white px-5 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z"/></svg>
              Follow @edwinkibiraisuzusales
            </a>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

            {/* Video 1 */}
            <div className="group flex flex-col">
              <div className="relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300" style={{aspectRatio:'9/16', maxHeight:'420px'}}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7675848927463165202"
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Isuzu TikTok Video 1"
                  style={{border:'none'}}
                />
              </div>
              <div className="mt-3 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">New Arrival</p>
                <p className="text-white font-bold text-sm leading-snug">Fresh Off the Lot — Brand New Isuzu Delivery</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">A brand-new Isuzu rolls off our lot straight into the hands of a happy customer. This is what we do every day — matching Kenyans with the perfect vehicle.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group flex flex-col">
              <div className="relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300" style={{aspectRatio:'9/16', maxHeight:'420px'}}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7675446772679920917"
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Isuzu TikTok Video 2"
                  style={{border:'none'}}
                />
              </div>
              <div className="mt-3 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">Showroom</p>
                <p className="text-white font-bold text-sm leading-snug">Inside the Edwin Kibira Isuzu Showroom</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">Step inside our showroom and explore the full Isuzu range — from rugged pickups to premium SUVs — all lined up and ready for you to experience.</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="group flex flex-col">
              <div className="relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300" style={{aspectRatio:'9/16', maxHeight:'420px'}}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7673221439557831957"
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Isuzu TikTok Video 3"
                  style={{border:'none'}}
                />
              </div>
              <div className="mt-3 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">Feature Spotlight</p>
                <p className="text-white font-bold text-sm leading-snug">Isuzu D-Max — Built for Kenya's Roads</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">The Isuzu D-Max is engineered for Kenyan terrain. Whether it's city commuting or off-road adventures, this pickup delivers unmatched durability and performance.</p>
              </div>
            </div>

            {/* Video 4 */}
            <div className="group flex flex-col">
              <div className="relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300" style={{aspectRatio:'9/16', maxHeight:'420px'}}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7672472169426734357"
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Isuzu TikTok Video 4"
                  style={{border:'none'}}
                />
              </div>
              <div className="mt-3 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">Customer Delivery</p>
                <p className="text-white font-bold text-sm leading-snug">Another Happy Customer — A Proud Moment</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">Nothing beats the joy on a customer's face when they drive away in their new Isuzu. We take pride in making every delivery a memorable occasion.</p>
              </div>
            </div>

            {/* Video 5 */}
            <div className="group flex flex-col">
              <div className="relative bg-black overflow-hidden border border-white/10 group-hover:border-[#D62B2B]/60 transition-colors duration-300" style={{aspectRatio:'9/16', maxHeight:'420px'}}>
                <iframe
                  src="https://www.tiktok.com/embed/v2/7670236623962918164"
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  title="Isuzu TikTok Video 5"
                  style={{border:'none'}}
                />
              </div>
              <div className="mt-3 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-1">MU-X SUV</p>
                <p className="text-white font-bold text-sm leading-snug">The Isuzu MU-X — Kenya's Premium 7-Seater SUV</p>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">Commanding presence. Premium comfort. The Isuzu MU-X is for families and executives who demand the very best — locally assembled right here in Kenya.</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm mb-4">Like what you see? We post new content every week.</p>
            <a
              href="https://www.tiktok.com/@edwinkibiraisuzusales"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D62B2B] text-white px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#b01e1e] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.72a8.19 8.19 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1Z"/></svg>
              Follow Us on TikTok — @edwinkibiraisuzusales
            </a>
          </div>

        </div>
      </section>

      {/* ── CONTACT / SHOWROOM ── */}
      <section className="bg-[#0d0d0d] border-t border-white/10 overflow-hidden">

        {/* Top accent strip */}
        <div className="h-1 w-full bg-gradient-to-r from-[#D62B2B] via-[#ff5555] to-[#D62B2B]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">

          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Visit Us Today</span>
              <div className="h-px w-12 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              Come See Our <span className="text-[#D62B2B]">Showroom</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Experience every Isuzu model in person. Our experts will guide you through features, financing, and test drives — no pressure.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Left: Contact Details — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Contact Cards */}
              {[
                { icon: <FaMapLocationDot size={20} />, label: "Location", value: "Nairobi, Kenya", sub: "Visit us at our main showroom", href: "https://maps.google.com/?q=Nairobi+Kenya", color: "#D62B2B" },
                { icon: <FaPhone size={20} />, label: "Call Us", value: "0768 351 483", sub: "Mon – Sat: 8AM – 6PM", href: "tel:0768351483", color: "#D62B2B" },
                { icon: <FaWhatsapp size={20} />, label: "WhatsApp", value: "Chat With Us", sub: "Get a reply within minutes", href: "https://wa.me/254768351483?text=Hi+Edwin%2C+I+would+like+to+visit+your+showroom+and+view+the+Isuzu+vehicles.", color: "#25D366" },
                { icon: <FaClock size={20} />, label: "Working Hours", value: "Mon – Sat: 8AM – 6PM", sub: "Closed on Sundays & Public Holidays", href: null, color: "#D62B2B" },
              ].map((item) => {
                const content = (
                  <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg hover:border-[#D62B2B]/50 hover:bg-white/8 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + "20", color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-white font-bold text-base leading-tight">{item.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                    {item.href && (
                      <FaArrowRight size={12} className="ml-auto mt-1 text-gray-600 group-hover:text-[#D62B2B] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    )}
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Right: Map + CTA — 3 cols */}
            <div className="lg:col-span-3 flex flex-col gap-6">

              {/* Google Map Embed */}
              <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl" style={{ height: "280px" }}>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Isuzu%20East%20Africa,%20Enterprise%20Road,%20Nairobi+(Edwin%20Kibira%20Isuzu%20Sales)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Edwin Kibira Isuzu Sales Location"
                />
              </div>

              {/* CTA Panel */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-7">
                <h3 className="text-xl font-black text-white uppercase mb-1">Ready to Drive Your Dream Isuzu?</h3>
                <p className="text-gray-400 text-sm mb-6">Tell us what you need — we respond within the hour. Zero pressure, 100% honest advice.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/get-quote"
                    className="flex items-center justify-center gap-2 bg-[#D62B2B] text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#b82222] transition-all shadow-lg shadow-[#D62B2B]/20 group"
                  >
                    Get a Quote
                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/vehicles"
                    className="flex items-center justify-center gap-2 border border-white/30 bg-white/5 text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all group"
                  >
                    Browse Vehicles
                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/254768351483?text=Hi+Edwin%2C+I+would+like+to+book+a+test+drive+for+an+Isuzu+vehicle."
                    target="_blank"
                    rel="noreferrer"
                    className="sm:col-span-2 flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#1da851] transition-all shadow-lg shadow-[#25D366]/20 group"
                  >
                    <FaWhatsapp size={16} />
                    WhatsApp Us Now — Instant Reply
                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
