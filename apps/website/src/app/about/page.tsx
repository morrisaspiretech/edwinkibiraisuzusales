"use client";

import React from "react";
import { Shield, Award, Users, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Header */}
      <header className="relative pt-20 pb-8 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80" 
            alt="About Aspire Motors" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center justify-center gap-2 text-xs font-black uppercase text-accent mb-4 tracking-[0.2em]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Our Story</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              THE <span className="text-accent underline decoration-4 underline-offset-8">ASPIRE</span> STANDARD
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-bold leading-relaxed">
              Kenya's premier destination for high-performance vehicles and luxury automotive experiences.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="-mt-16 relative z-20 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-primary/80 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl shadow-2xl">
          {[
            { label: "Vehicles Sold", value: "1,200+" },
            { label: "Happy Clients", value: "950+" },
            { label: "Awards Won", value: "12" },
            { label: "Years Experience", value: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl md:text-5xl font-black text-accent mb-2 group-hover:scale-110 transition-transform">{stat.value}</p>
              <p className="text-xs font-black uppercase text-white/40 tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1562141982-c1a79895130b?auto=format&fit=crop&q=80" 
              alt="Workshop" 
              className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white tracking-tight">CRAFTING EXCELLENCE <br/>IN EVERY MILE</h2>
            <p className="text-lg text-white/60 font-bold leading-relaxed">
              Founded in 2008, Aspire Motors began with a single mission: to redefine the luxury automotive market in East Africa. We don't just sell cars; we deliver milestones. Our collection is curated with an obsession for performance, heritage, and state-of-the-art engineering.
            </p>
            <div className="space-y-6 pt-4">
              {[
                { title: "Precision Inspection", icon: <Shield className="text-accent" /> },
                { title: "Limited Editions", icon: <Award className="text-accent" /> },
                { title: "Bespoke Service", icon: <Users className="text-accent" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                    {item.icon}
                  </div>
                  <span className="text-lg font-black text-white uppercase tracking-wider">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-gradient-to-r from-accent to-secondary rounded-3xl p-16 relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">EXPERIENCE THE THRILL <br/>FOR YOURSELF</h2>
          <Link 
            href="/inventory" 
            className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-2xl hover:bg-black transition-all"
          >
            Visit Showroom <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
