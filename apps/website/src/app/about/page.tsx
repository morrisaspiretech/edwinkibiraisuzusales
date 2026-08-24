"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
  FaShield, FaAward, FaUsers, FaChevronRight, FaArrowRight,
  FaTruck, FaPhone, FaWhatsapp, FaStar, FaCircleCheck,
  FaHandshake, FaGraduationCap, FaBuildingFlag, FaLocationDot,
  FaClock, FaMapLocationDot
} from "react-icons/fa6";



const VALUES = [
  {
    icon: <FaHandshake size={28} />,
    title: "Integrity First",
    desc: "We give honest advice on the right vehicle for your needs and budget. No hidden charges, no pressure sales — just transparent, trustworthy service.",
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: "Expert Knowledge",
    desc: "Our team has deep knowledge of every Isuzu model — from engine specs to financing options. We educate our clients so they make confident decisions.",
  },
  {
    icon: <FaBuildingFlag size={28} />,
    title: "Nationwide Reach",
    desc: "While we're headquartered in Nairobi, we serve clients from every corner of Kenya — Mombasa, Kisumu, Eldoret, Nakuru and beyond.",
  },
  {
    icon: <FaStar size={28} />,
    title: "After-Sales Support",
    desc: "Our relationship doesn't end at delivery. We support our clients with service referrals, spare parts guidance, and ongoing vehicle advice.",
  },
];

const MILESTONES = [
  { year: "2025", title: "Journey Begins", desc: "Edwin Kibira Isuzu Sales was established with a clear mission: to connect Kenyans with genuine, zero-mileage Isuzu vehicles at honest prices." },
  { year: "2025", title: "Full Range Launch", desc: "From day one, we stocked the complete Isuzu lineup — D-Max pickups, mu-X SUVs, N-Series commercial trucks and FRR/FVR buses." },
  { year: "2025", title: "Bank Financing Partnerships", desc: "Partnered with all major Kenyan banks to offer up to 100% vehicle financing, making Isuzu ownership accessible to every Kenyan." },
  { year: "2025", title: "Digital Showroom Live", desc: "Launched our full online platform so customers across Kenya can browse every model, view specs, and get instant quotes from anywhere." },
  { year: "2025", title: "Fleet Sales Division", desc: "Opened a dedicated fleet sales division to serve NGOs, corporates, construction companies, and government clients with bulk purchasing." },
  { year: "2026", title: "Growing Nationwide", desc: "Serving clients from Mombasa to Eldoret, Nakuru to Kisumu — our reach extends across every county in Kenya and growing." },
];

const MODELS = [
  {
    image: "/vehicles/grouped/batch3/3.jpeg",
    title: "Isuzu D-Max",
    subtitle: "Pickup Trucks",
    desc: "The #1 pickup in Kenya. Available in Single Cab, Space Cab, and Double Cab configurations with 4x2 and 4x4 drivetrains.",
    tags: ["Single Cab", "Double Cab", "4x4", "4x2"],
    link: "/vehicles#pickups",
  },
  {
    image: "/vehicles/mu-x-1900cc-gallery/1.jpeg",
    title: "Isuzu mu-X",
    subtitle: "Premium SUV",
    desc: "A commanding 7-seater SUV with diesel power, premium interior, and legendary off-road capability. Kenya's best family SUV.",
    tags: ["7-Seater", "Turbo Diesel", "4x4", "Premium"],
    link: "/vehicles#suvs",
  },
  {
    image: "/vehicles/n-series-truck.webp",
    title: "Isuzu N-Series",
    subtitle: "Commercial Trucks",
    desc: "NPR, NQR, and NPS trucks — the backbone of Kenyan logistics. Reliable, fuel-efficient, and built for the long haul.",
    tags: ["NPR 71", "NQR 90", "NPS 75", "Fleet"],
    link: "/vehicles#trucks",
  },
  {
    image: "/vehicles/frr90-bus.webp",
    title: "Isuzu Buses",
    subtitle: "Transport Solutions",
    desc: "FRR and FVR-based buses for school transport, SACCO routes, and private hire. Trusted by hundreds of bus operators across Kenya.",
    tags: ["School Bus", "SACCO", "FRR 90", "FVR"],
    link: "/vehicles#buses",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO HEADER ── */}
      <header className="relative bg-[#111] overflow-hidden" style={{ minHeight: 520 }}>
        <div className="absolute inset-0">
          <img
            src="/vehicles/mux-launch.png"
            alt="Edwin Kibira Isuzu Sales — Locally Assembled MU-X"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Red top stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D62B2B] via-[#ff5555] to-[#D62B2B]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-bold uppercase text-[#D62B2B] mb-6 tracking-widest">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} className="text-white/30" />
              <span className="text-white/50">About Us</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-14 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Our Story</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-5 uppercase leading-none tracking-tight">
              Edwin Kibira<br />
              <span className="text-[#D62B2B]">Isuzu Sales</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-8">
              Kenya&apos;s dedicated Isuzu dealer — serving Kenyans with genuine vehicles, honest advice, and unmatched after-sales care.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/vehicles" className="inline-flex items-center gap-2 bg-[#D62B2B] text-white font-black uppercase text-xs tracking-widest px-8 py-4 hover:bg-[#b82222] transition-all group">
                Browse Our Vehicles
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/254768351483?text=Hi+Edwin%2C+I+read+about+you+on+your+About+page+and+I%27d+like+to+enquire+about+an+Isuzu+vehicle." target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-black uppercase text-xs tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-all">
                <FaWhatsapp size={16} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#D62B2B]" />
      </header>


      {/* ── WHO WE ARE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#D62B2B] -z-10" />
            <img
              src="/vehicles/mux-hero.png"
              alt="Isuzu mu-X on a Kenyan street"
              className="w-full h-[420px] object-cover shadow-2xl"
            />
            {/* Floating badge */}
            <div className="absolute bottom-0 right-0 bg-[#1a1a1a] text-white px-8 py-5">
              <p className="font-black text-base uppercase tracking-wide">Authorised Dealer</p>
              <p className="text-xs uppercase tracking-widest text-[#D62B2B] mt-0.5">Isuzu East Africa</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-12 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="text-4xl font-black text-[#1a1a1a] uppercase leading-tight">
              Your Trusted<br />
              <span className="text-[#D62B2B]">Isuzu Partner</span><br />
              in Kenya
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Edwin Kibira Isuzu Sales is a <strong className="text-[#1a1a1a]">dedicated, authorised Isuzu dealership</strong> proudly serving Kenyans. We specialise in the full Isuzu range — from the iconic D-Max pickup that dominates Kenya&apos;s roads, to the premium mu-X SUV, and the powerful N-Series & F-Series commercial trucks and buses.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              We started this journey with one simple goal: to make it easy for every Kenyan to own a genuine, zero-mileage Isuzu vehicle. We work with all major Kenyan banks to help our clients secure the best financing options available — making ownership accessible to individuals, families, and businesses of all sizes.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              We believe every Kenyan deserves a vehicle that is <strong className="text-[#1a1a1a]">built to last</strong>. Isuzu — with their legendary durability, low running costs, and wide service network across Kenya — is the right choice for every lifestyle and every business.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "100% Genuine Isuzu Vehicles — Zero Mileage, Factory Certified",
                "Bank Financing Available — Up to 100% with Major Kenyan Banks",
                "Trained Isuzu Specialists with 10+ Years of Product Knowledge",
                "Serving Individual, Corporate, NGO & Government Clients",
                "Transparent Pricing — No Hidden Fees or Pressure Selling",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <FaCircleCheck size={16} className="text-[#D62B2B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[3px] w-10 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">What Drives Us</span>
              <div className="h-[3px] w-10 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] uppercase">
              Our <span className="text-[#D62B2B]">Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8 border border-gray-100 hover:border-[#D62B2B]/40 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-[#D62B2B]/10 group-hover:bg-[#D62B2B] flex items-center justify-center text-[#D62B2B] group-hover:text-white transition-all mb-5">
                  {v.icon}
                </div>
                <h3 className="text-base font-black text-[#1a1a1a] uppercase mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── MODELS WE SELL ── */}
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[3px] w-8 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">What We Sell</span>
              <div className="h-[3px] w-8 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] uppercase">
              The Full <span className="text-[#D62B2B]">Isuzu Range</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">From personal pickups to heavy commercial fleets — we have the right Isuzu for every Kenyan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODELS.map((model) => (
              <Link key={model.title} href={model.link}
                className="bg-white border border-gray-100 hover:border-[#D62B2B]/40 hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={model.image} alt={model.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="h-[3px] bg-[#D62B2B] mb-3 w-0 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-lg font-black text-[#1a1a1a] uppercase mb-0.5">{model.title}</h3>
                  <p className="text-[#D62B2B] font-bold text-xs uppercase tracking-widest mb-2">{model.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{model.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {model.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#D62B2B]/10 text-[#D62B2B]">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D62B2B] opacity-0 group-hover:opacity-100 mt-3 transition-all">
                    Explore Models <FaChevronRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / SHOWROOM CTA ── */}
      <section className="bg-[#1a1a1a] border-t border-white/10 overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#D62B2B] via-[#ff5555] to-[#D62B2B]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 lg:py-20">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Get In Touch</span>
              <div className="h-px w-12 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              Ready to Own <span className="text-[#D62B2B]">an Isuzu?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Talk to our Isuzu specialists today. Visit our showroom in Nairobi or reach out online — we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { icon: <FaMapLocationDot size={20} />, label: "Location", value: "Nairobi, Kenya", sub: "Visit our main showroom", href: "https://maps.google.com/?q=Nairobi+Kenya", color: "#D62B2B" },
                { icon: <FaPhone size={20} />, label: "Phone", value: "0768 351 483", sub: "Mon – Sat: 8AM – 6PM", href: "tel:0768351483", color: "#D62B2B" },
                { icon: <FaWhatsapp size={20} />, label: "WhatsApp", value: "Chat With Us Now", sub: "We reply within minutes", href: "https://wa.me/254768351483?text=Hi+Edwin%2C+I+read+your+About+page+and+I%27m+interested+in+an+Isuzu+vehicle.", color: "#25D366" },
                { icon: <FaClock size={20} />, label: "Working Hours", value: "Mon – Sat: 8AM – 6PM", sub: "Closed Sundays & Holidays", href: null, color: "#D62B2B" },
              ].map((item) => {
                const content = (
                  <div className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-lg hover:border-[#D62B2B]/50 transition-all group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + "20", color: item.color }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-white font-bold text-base leading-tight">{item.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                    {item.href && <FaArrowRight size={12} className="ml-auto mt-1 text-gray-600 group-hover:text-[#D62B2B] group-hover:translate-x-1 transition-all flex-shrink-0" />}
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Map + CTAs */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <div className="w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl" style={{ height: "260px" }}>
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Isuzu%20East%20Africa,%20Enterprise%20Road,%20Nairobi+(Edwin%20Kibira%20Isuzu%20Sales)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Edwin Kibira Isuzu Sales - Nairobi Location"
                />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-black text-white uppercase mb-1">Let&apos;s Find Your Perfect Isuzu</h3>
                <p className="text-gray-400 text-sm mb-5">Zero pressure. 100% honest advice. Get a quote or visit our showroom today.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link href="/get-quote"
                    className="flex items-center justify-center gap-2 bg-[#D62B2B] text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#b82222] transition-all shadow-lg shadow-[#D62B2B]/20 group">
                    Get a Quote
                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/vehicles"
                    className="flex items-center justify-center gap-2 border border-white/20 text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all group">
                    Browse Vehicles
                    <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="https://wa.me/254768351483?text=Hi+Edwin%2C+I+would+like+to+enquire+about+an+Isuzu+vehicle."
                    target="_blank" rel="noreferrer"
                    className="sm:col-span-2 flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-5 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#1da851] transition-all shadow-lg shadow-[#25D366]/20 group">
                    <FaWhatsapp size={16} />
                    WhatsApp Us — Instant Reply
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
