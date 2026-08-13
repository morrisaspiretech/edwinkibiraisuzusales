"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowRight, Zap, Trophy, ShieldCheck, Flame, Heart, Ship, ClipboardCheck, PhoneCall, CheckCircle2, Target, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CarCard } from "@/components/CarCard";
import { useState, useEffect } from "react";

const HERO_CAROUSEL = [
  {
    id: "lc300",
    name: "Toyota Land Cruiser 300 Sahara ZX",
    tagline: "The Unrivaled King of All-Terrain Luxury",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070",
    color: "Arctic White",
    specs: "3.3L V6 Twin-Turbo • 700Nm Torque"
  },
  {
    id: "g63",
    name: "Mercedes-AMG G63 Magno Edition",
    tagline: "Uncompromising Power. Timeless Design.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2070",
    color: "Night Black Magno",
    specs: "4.0L V8 Biturbo • 585 HP • Hand-built"
  },
  {
    id: "rr-l460",
    name: "Range Rover Autobiography L460",
    tagline: "Peerless Refinement for the Modern Leader",
    image: "https://images.unsplash.com/photo-1549416805-0e696f8c7923?auto=format&fit=crop&q=80&w=2070",
    color: "Charente Grey",
    specs: "4.4L V8 P530 • Executive Class Seating"
  }
];

const FLAGSHIP_DATA = [
  {
    id: "lc-300-sahara",
    name: "Toyota Land Cruiser 300 Sahara ZX",
    make: "Toyota",
    model: "Land Cruiser 300",
    year: 2025,
    price: "KES 33,500,000",
    condition: "Showroom Grade",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070",
    refNo: "ASP-LC-902-25",
    engineCode: "F33A-FTV",
    driveType: "Full-Time 4WD (AWD)",
    specs: { engine: "3346cc V6", mileage: "0 KM", fuel: "Diesel" }
  },
  {
    id: "def-110-hse",
    name: "Land Rover Defender 110 X-Dynamic",
    make: "Land Rover",
    model: "Defender 110",
    year: 2023,
    price: "KES 24,900,000",
    condition: "Foreign Used",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1605370600104-51624c9c2229?auto=format&fit=crop&q=80&w=2070",
    refNo: "ASP-DEF-411-GBB",
    engineCode: "P400 i6 MHEV",
    driveType: "Intelligent 4WD",
    isReserved: true,
    specs: { engine: "2996cc", mileage: "12,400 KM", fuel: "Hybrid" }
  },
  {
    id: "rv-vogue-autobio",
    name: "Range Rover Vogue Autobiography",
    make: "Range Rover",
    model: "Vogue L460",
    year: 2024,
    price: "KES 42,000,000",
    condition: "Brand New",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1549416805-0e696f8c7923?auto=format&fit=crop&q=80&w=2070",
    refNo: "ASP-RR-661-L460",
    engineCode: "P530 V8",
    driveType: "All-Wheel Drive (AWD)",
    specs: { engine: "4395cc", mileage: "2,100 KM", fuel: "Petrol" }
  },
  {
    id: "merc-g63-magno",
    name: "Mercedes-Benz G63 AMG Magno",
    make: "Mercedes-Benz",
    model: "G63 AMG",
    year: 2023,
    price: "KES 39,500,000",
    condition: "Fully Cleared",
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=2070",
    refNo: "ASP-MB-992-G63",
    engineCode: "M177 V8 Biturbo",
    driveType: "4WD (G-Tronic)",
    specs: { engine: "3982cc", mileage: "8,200 KM", fuel: "Petrol" }
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Header />

      {/* Immersive Hero Carousel */}
      <section className="relative h-[95vh] w-full overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
            <img
              src={HERO_CAROUSEL[currentSlide].image}
              className="w-full h-full object-cover"
              alt={HERO_CAROUSEL[currentSlide].name}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex items-center px-8 md:px-32">
          <div className="max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              key={`text-${currentSlide}`}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-primary">{HERO_CAROUSEL[currentSlide].specs}</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tight text-white leading-[0.9] uppercase">
                {HERO_CAROUSEL[currentSlide].name.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-primary">{HERO_CAROUSEL[currentSlide].name.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-2xl text-slate-300 max-w-xl font-medium leading-relaxed">
                {HERO_CAROUSEL[currentSlide].tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <button className="pro-button !bg-primary !text-white flex items-center gap-4 px-12 py-5 text-lg group">
                Reserve This Unit
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="pro-button-outline border-white/20 text-white hover:bg-white/10 px-12 py-5 text-lg backdrop-blur-md">
                Technical Data Sheet
              </button>
            </motion.div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 right-8 md:right-32 z-30 flex items-center gap-8">
          <div className="flex items-center gap-3">
            {HERO_CAROUSEL.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-12 bg-primary' : 'w-3 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_CAROUSEL.length) % HERO_CAROUSEL.length)}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 backdrop-blur-md transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL.length)}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 backdrop-blur-md transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Market Statistics Bar */}
      <section className="bg-slate-50 py-12 px-8 md:px-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <StatBlock label="Global Stock" value="3,840" highlight />
          <StatBlock label="Added Today" value="12" />
          <StatBlock label="Market Velocity" value="4.2 Days" />
          <StatBlock label="Verified Dealers" value="126" />
        </div>
      </section>

      {/* Educational Buy-Flow Funnel */}
      <section className="py-40 px-8 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-24">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-primary">The Purchase Protocol</span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter">How to Acquire</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-24 z-0" />

            <FunnelStep
              number="01"
              icon={<PhoneCall size={28} />}
              title="Expert Consultation"
              desc="Discuss your requirements with one of our specialized vehicle portfolio managers."
            />
            <FunnelStep
              number="02"
              icon={<Search size={28} />}
              title="Technical Selection"
              desc="Receive a curated technical report on available stock matching your exact chassis requirements."
            />
            <FunnelStep
              number="03"
              icon={<ShieldCheck size={28} />}
              title="Audit & Audit"
              desc="We perform a rigorous 120-point independent inspection and VIN history audit."
            />
            <FunnelStep
              number="04"
              icon={<Ship size={28} />}
              title="Priority Logistics"
              desc="Expedited shipping, KRA clearance, and luxury white-glove delivery to your door."
            />
          </div>
        </div>
      </section>

      {/* Marketplace Terminal */}
      <section className="py-40 px-8 md:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-primary italic">Live Terminal</span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[1]">Featured Inventory</h2>
            </div>
            <Link href="/inventory" className="group flex items-center gap-4 text-primary font-black text-xl hover:gap-6 transition-all mb-4 tracking-tighter">
              Explore All Units <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {FLAGSHIP_DATA.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Footer */}
      <footer className="py-32 px-8 md:px-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-primary/20">A.</div>
              <span className="text-3xl font-black tracking-tighter text-slate-900 uppercase">Aspire.</span>
            </div>
            <p className="text-md text-slate-500 leading-relaxed font-medium">
              Africa's premier automotive data terminal and luxury import concierge.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary cursor-pointer hover:border-primary transition-all underline">IG</div>
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary cursor-pointer hover:border-primary transition-all underline">LK</div>
              <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary cursor-pointer hover:border-primary transition-all underline">WA</div>
            </div>
          </div>

          <FooterSection
            title="Market"
            links={["Live Inventory", "Technical Specs", "Market Velocity", "Stock Alerts"]}
          />
          <FooterSection
            title="Concierge"
            links={["Custom Import", "How to Buy", "Duty Calculator", "VIN Audit"]}
          />
          <FooterSection
            title="Network"
            links={["Partner Program", "Verified Dealers", "Investor Relations", "Media"]}
          />
        </div>
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">
          <p>© 2025 EDWIN ISUZU SALES KENYA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <p>DATA SECURED BY 256-BIT ENCRYPTION</p>
            <p>AUTHORISED KRA DATA PROVIDER</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StatBlock({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">{label}</p>
      <div className="flex items-baseline gap-2">
        <p className={`text-4xl font-black tracking-tighter ${highlight ? 'text-primary' : 'text-slate-900'}`}>{value}</p>
        {highlight && <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
      </div>
    </div>
  );
}

function FunnelStep({ number, icon, title, desc }: { number: string; icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="relative z-10 space-y-8 group">
      <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative">
        {icon}
        <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-black">{number}</span>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase leading-tight group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function FooterSection({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-8">
      <h4 className="text-sm font-black uppercase tracking-[0.4em] text-slate-900">{title}</h4>
      <ul className="space-y-5 text-[13px] font-bold text-slate-500">
        {links.map(l => (
          <li key={l} className="hover:text-primary cursor-pointer transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}
