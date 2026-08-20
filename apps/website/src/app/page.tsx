import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Link from "next/link";
import Image from "next/image";
import { FaMessage, FaPhone, FaChevronRight, FaMapLocationDot, FaClock, FaCircleCheck, FaStar, FaTruckFront, FaBusSimple, FaCar, FaShieldHalved, FaWhatsapp } from "react-icons/fa6";

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
    id: 'light-trucks-n-series',
    title: 'N-Series Trucks',
    category: 'Trucks',
    img: '/vehicles/n-series-truck.webp',
    spec: '3.0L – 4.8L · Multiple Configurations',
  },
  {
    id: 'heavy-trucks-f-series',
    title: 'F-Series Trucks',
    category: 'Trucks',
    img: '/vehicles/f-series-truck.webp',
    spec: '5.2L – 7.8L · 7 – 18 Tonne GVW',
  },
  {
    id: 'n-series-buses',
    title: 'N-Series Buses',
    category: 'Buses',
    img: '/vehicles/nmr85-bus.webp',
    spec: '25 – 33 Seater · School / Staff',
  },
  {
    id: 'f-series-buses',
    title: 'F-Series Buses',
    category: 'Buses',
    img: '/vehicles/frr90-bus.webp',
    spec: '50 – 67 Seater · Inter-city',
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
      <Hero featuredVehicles={[]} />

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
              <Link
                key={v.id}
                href={`/vehicles/${v.id}`}
                className="group bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] bg-gradient-to-b from-[#f8f8f8] to-white p-4">
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[9px] font-black text-[#D62B2B] uppercase tracking-widest shadow-sm">
                    {v.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 bg-white border-t border-gray-50">
                  <h3 className="text-sm font-black text-[#1a1a1a] uppercase mb-1.5 group-hover:text-[#D62B2B] transition-colors line-clamp-1">{v.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">{v.spec}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
                    <span className="text-[10px] font-black uppercase text-[#1a1a1a] tracking-widest transition-colors">
                      Explore Model
                    </span>
                    <div className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-[#D62B2B] flex items-center justify-center transition-colors">
                      <FaChevronRight size={10} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                Edwin Kibira Isuzu Sales is your trusted, authorised Isuzu dealer in Kenya. We carry the full range of Isuzu vehicles — from the legendary D-Max pickup built for Kenya&apos;s tough terrain, to the premium MU-X SUV, and the powerful N-Series and F-Series commercial trucks and buses. Every vehicle is brand-new, zero-mileage.
              </p>
              <ul className="space-y-2">
                {[
                  "Authorised Isuzu dealer — brand-new, zero-mileage vehicles only",
                  "Full model range: Trucks (N & F Series), Buses, Pickups & SUVs",
                  "Up to 100% bank financing available with flexible repayment",
                  "Trained Isuzu-certified specialists for sales and after-sales support",
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
      <section className="py-12 px-4 sm:px-6 bg-[#f9f9f9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-1 w-10 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Happy Clients</span>
              <div className="h-1 w-10 bg-[#D62B2B]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase">
              What Our <span className="text-[#D62B2B]">Customers Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "James Mwangi",
                role: "Fleet Owner, Nairobi",
                text: "I bought three NQR trucks from Edwin Kibira and the experience was seamless. Great financing terms and after-sales support has been excellent.",
              },
              {
                name: "Grace Achieng",
                role: "Transport Business Owner",
                text: "Edwin walked me through everything — from model selection to bank financing. Got my D-Max with zero deposit. Highly recommend their services.",
              },
              {
                name: "Peter Kamau",
                role: "Construction Company, Mombasa",
                text: "We've purchased 5 Isuzu trucks through Edwin Kibira Isuzu Sales. Their pricing is transparent and delivery has always been on time.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white p-5 border border-gray-200 border-t-4 border-t-[#D62B2B]">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-black text-[#1a1a1a] text-xs uppercase">{t.name}</p>
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
      <section className="py-12 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-10 bg-[#D62B2B]" />
                <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase mb-4">
                Visit Our <span className="text-[#D62B2B]">Showroom</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Come experience the full Isuzu range in person. Our trained specialists will guide you through every model, feature, and financing option.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <FaMapLocationDot size={16} />, label: "Location", value: "Nairobi, Kenya", href: "https://maps.google.com/?q=Nairobi+Kenya" },
                  { icon: <FaPhone size={16} />, label: "Phone", value: "0768 351 483", href: "tel:0768351483" },
                  { icon: <FaMessage size={16} />, label: "WhatsApp", value: "Chat with us now", href: "https://wa.me/254768351483" },
                  { icon: <FaClock size={16} />, label: "Hours", value: "Mon–Sat: 8AM–6PM", href: null },
                ].map((item) => {
                  const inner = (
                    <div className="flex items-center gap-3 group">
                      <div className="w-9 h-9 bg-[#D62B2B]/10 flex items-center justify-center text-[#D62B2B] group-hover:bg-[#D62B2B] group-hover:text-white transition-all flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">{item.label}</p>
                        <p className="text-sm font-bold text-[#1a1a1a]">{item.value}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#f9f9f9] border border-gray-200 p-8">
              <h3 className="text-lg font-black text-[#1a1a1a] uppercase mb-1">Get a Quote Today</h3>
              <p className="text-gray-500 text-sm mb-5">Tell us which vehicle you&apos;re interested in and we&apos;ll get back to you within the hour.</p>
              <div className="space-y-3">
                <Link
                  href="/book-test-drive"
                  className="flex items-center justify-center gap-2 bg-[#D62B2B] text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#b82222] transition-all w-full"
                >
                  Book Test Drive <FaChevronRight size={14} />
                </Link>
                <Link
                  href="/vehicles"
                  className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all w-full"
                >
                  View All Vehicles <FaChevronRight size={14} />
                </Link>
                <a
                  href="https://wa.me/254768351483"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-[#1da851] transition-all w-full"
                >
                  <FaMessage size={14} /> WhatsApp Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
