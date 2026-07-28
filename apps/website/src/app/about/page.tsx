"use client";

import React from "react";
import { Shield, Award, Users, ChevronRight, ArrowRight, Truck, Car, Bus, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Header ── */}
      <header className="relative bg-primary pt-0 pb-0 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vehicles/dmax-hero.png"
            alt="Isuzu Kenya"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs font-bold uppercase text-secondary mb-6 tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} className="text-white/30" />
              <span className="text-white/60">About Us</span>
            </nav>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[3px] w-12 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">Our Story</span>
              <div className="h-[3px] w-12 bg-secondary" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 uppercase leading-none tracking-tight">
              Edwin Kibira<br />
              <span className="text-secondary">Isuzu Sales</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Kenya&apos;s trusted Isuzu dealer — bringing durable, reliable Isuzu vehicles to Kenyans across the country.
            </p>
          </motion.div>
        </div>

        {/* Red bottom border */}
        <div className="h-1 w-full bg-secondary" />
      </header>

      {/* ── Stats ── */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Isuzu Vehicles Sold", value: "500+", icon: <Truck size={28} /> },
              { label: "Happy Clients", value: "400+", icon: <Users size={28} /> },
              { label: "Years Experience", value: "10+", icon: <Award size={28} /> },
              { label: "Customer Satisfaction", value: "98%", icon: <Shield size={28} /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-8 border border-gray-100 hover:border-secondary/40 text-center group transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all mx-auto mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-black text-secondary mb-1">{stat.value}</p>
                <p className="text-xs font-bold uppercase text-gray-400 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary -z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vehicles/mux-black.png"
              alt="Isuzu D-Max"
              className="w-full h-[420px] object-cover shadow-2xl relative z-10"
            />
            <div className="absolute bottom-0 right-0 bg-secondary text-white px-8 py-4 z-20">
              <p className="font-black text-xl uppercase">Authorized Dealer</p>
              <p className="text-xs uppercase tracking-widest text-white/80">Isuzu East Africa</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-12 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="text-4xl font-black text-primary uppercase leading-tight">
              Your Trusted<br />
              <span className="text-secondary">Isuzu Partner</span><br />
              in Kenya
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Edwin Kibira Isuzu Sales is a dedicated Isuzu dealership serving Kenyans with genuine Isuzu vehicles. We specialize in the full Isuzu range — from the iconic D-Max pickup that dominates Kenya&apos;s roads, to the premium mu-X SUV, and the powerful N-Series commercial trucks and buses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe every Kenyan deserves a vehicle that&apos;s built to last. That&apos;s why Isuzu — with their legendary durability, low running costs, and wide service network — is the right choice for both personal and business use.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "Genuine Isuzu Vehicles", desc: "Every vehicle is factory-certified and authentic", icon: <Shield className="text-secondary" size={20} /> },
                { title: "Trained Isuzu Specialists", desc: "Our team knows every Isuzu model inside and out", icon: <Award className="text-secondary" size={20} /> },
                { title: "Full After-Sales Support", desc: "Service, spare parts and technical assistance", icon: <Users className="text-secondary" size={20} /> },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Isuzu Models We Sell ── */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[3px] w-8 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">What We Sell</span>
              <div className="h-[3px] w-8 bg-secondary" />
            </div>
            <h2 className="text-4xl font-black text-primary uppercase">
              The Full <span className="text-secondary">Isuzu Range</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Truck size={40} />,
                title: "Isuzu D-Max",
                subtitle: "Pickup Trucks",
                desc: "From the workhorse D-Max SX to the premium V-Cross 4x4. The #1 pickup in Kenya for reliability and performance.",
                link: "/inventory?search=D-Max",
              },
              {
                icon: <Car size={40} />,
                title: "Isuzu mu-X",
                subtitle: "SUV / Family Car",
                desc: "A spacious 7-seater SUV with powerful diesel engine, modern technology, and premium interior. Perfect for Kenyan roads.",
                link: "/inventory?search=mu-X",
              },
              {
                icon: <Bus size={40} />,
                title: "Isuzu N-Series",
                subtitle: "Commercial Trucks & Buses",
                desc: "NPR, NQR, NPS trucks and FVR/FVZ heavy trucks for transport businesses, logistics and construction.",
                link: "/inventory?search=N-Series",
              },
            ].map((model) => (
              <Link
                key={model.title}
                href={model.link}
                className="bg-white p-8 border border-gray-100 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-1 bg-secondary mb-8 w-0 group-hover:w-full transition-all duration-500" />
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-black text-primary uppercase mb-1">{model.title}</h3>
                <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-3">{model.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{model.desc}</p>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all">
                  Explore Models <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-12 bg-secondary" />
                <span className="text-secondary font-black text-xs uppercase tracking-widest">Get Started</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
                Ready to Own<br />
                <span className="text-secondary">an Isuzu?</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                Talk to our Isuzu experts today. Whether you want a pickup, SUV, or commercial vehicle, we have the right Isuzu for you at the best price in Kenya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inventory"
                className="bg-secondary text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:bg-accent-dark transition-all flex items-center justify-center gap-2"
              >
                View All Vehicles <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-white/30 text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} /> WhatsApp Us
              </a>
              <a
                href="tel:+254700000000"
                className="border-2 border-white/30 text-white px-8 py-5 font-black uppercase text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
