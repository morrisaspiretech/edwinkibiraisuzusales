"use client";

import { motion } from "framer-motion";
import { Search, Car, Calculator, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      {/* Premium Header */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="text-2xl font-black italic tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center">
            <span className="rotate-[-45deg] text-white text-[10px] font-black italic">AM</span>
          </div>
          ASPIRE<span className="text-primary">MOTORS</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
          <Link href="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link>
          <Link href="/valuation" className="hover:text-primary transition-colors">CRSP Valuation</Link>
          <Link href="/import" className="hover:text-primary transition-colors">Import Duty</Link>
          <Link href="/dealers" className="hover:text-primary transition-colors">Dealers</Link>
        </div>
        <button className="bg-white text-black text-xs font-black uppercase px-6 py-2 rounded-full tracking-widest hover:scale-105 transition-transform">
          Sell Your Car
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-screen hero-gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
            <Zap size={14} /> The Future of African Car Commerce
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
            DRIVE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">AMBITION</span>
          </h1>
          <p className="text-xl text-white/40 font-medium max-w-2xl mx-auto mb-12">
            Africa's most advanced marketplace for buying, selling, and valuing vehicles. Powered by real KRA CRSP data and AI inspection.
          </p>

          {/* Search Bar */}
          <div className="glass p-2 rounded-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto border border-white/10">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search by Make, Model or Category..."
                className="bg-transparent border-none outline-none w-full py-4 font-medium text-lg"
              />
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white font-black uppercase px-10 py-5 rounded-xl tracking-widest transition-all">
              FIND CARS
            </button>
          </div>
        </motion.div>

        {/* Featured Visual */}
        <div className="mt-20 relative w-full max-w-6xl aspect-[21/9] bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Car size={160} className="text-white/5 group-hover:scale-110 transition-transform duration-1000" />
          </div>
          <div className="absolute bottom-8 left-8 z-20 flex gap-4">
            <div className="glass p-4 rounded-xl border border-white/10">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Live Listings</p>
              <p className="text-2xl font-black">12,482+</p>
            </div>
            <div className="glass p-4 rounded-xl border border-white/10">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">CRSP Verified</p>
              <p className="text-2xl font-black italic">5,200+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "CRSP VALUATION",
              desc: "Instant KRA-synced valuation engine for 2025 models.",
              icon: <Calculator className="text-primary" size={32} />,
              link: "/valuation"
            },
            {
              title: "AI INSPECTION",
              desc: "Fraud protection and deep vehicle diagnostics via AI.",
              icon: <ShieldCheck className="text-primary" size={32} />,
              link: "/inspection"
            },
            {
              title: "IMPORT CALCULATOR",
              desc: "Calculate taxes, IDF, and landing costs in seconds.",
              icon: <Zap className="text-primary" size={32} />,
              link: "/import"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black italic mb-4">{feature.title}</h3>
              <p className="text-white/40 font-medium mb-8 leading-relaxed">{feature.desc}</p>
              <Link href={feature.link} className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Explore More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
