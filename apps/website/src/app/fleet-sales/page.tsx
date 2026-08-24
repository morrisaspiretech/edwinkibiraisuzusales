import React from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import Image from "next/image";
import FleetContactForm from "@/components/fleet/FleetContactForm";
import { Metadata } from "next";
import {
  FaChevronRight, FaTruck, FaBusSimple, FaHelmetSafety,
  FaHandshake, FaCircleCheck, FaPhone, FaWhatsapp,
  FaBuilding, FaLandmark, FaSeedling, FaCartFlatbed,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Fleet & Corporate Sales | Edwin Kibira Isuzu Sales",
  description: "Premium fleet solutions for businesses, NGOs, schools, government, and logistics companies in Kenya. Dedicated fleet sales team, custom body building, and volume financing available.",
};

const industries = [
  {
    icon: <FaTruck size={28} />,
    title: "Logistics & Transport",
    description: "Keep your supply chain running with Kenya's most reliable commercial trucks. From light NLR delivery vans to heavy FVZ tippers, we have the right vehicle for any cargo.",
    models: ["N-Series NLR", "N-Series NQR 81", "F-Series FVR 90L"],
  },
  {
    icon: <FaHelmetSafety size={28} />,
    title: "Construction & Mining",
    description: "Built for the toughest Kenyan terrain. Our 4×4 and high-capacity trucks handle everything from site deliveries to heavy earth-moving support.",
    models: ["N-Series NPS 81H 4×4", "F-Series FVZ 34N", "F-Series FVZ 34T Tipper"],
  },
  {
    icon: <FaBusSimple size={28} />,
    title: "Schools & Institutions",
    description: "Safe, reliable and passenger-friendly. Our certified Isuzu buses seat 26 to 67 passengers — perfect for schools, hospitals, and employee transport.",
    models: ["NMR 26 Seater", "NQR 29/33 Seater", "FVR 34 67 Seater"],
  },
  {
    icon: <FaLandmark size={28} />,
    title: "Government & NGOs",
    description: "We understand procurement processes and provide full documentation for tenders. Our D-Max 4×4 and NPS trucks are favorites across government agencies and international NGOs.",
    models: ["D-Max TFS87 4×4", "N-Series NPS 81H", "mu-X SUV"],
  },
  {
    icon: <FaSeedling size={28} />,
    title: "Agriculture & Farming",
    description: "From fertilizer delivery to farm produce transport, our pickup trucks and light trucks are the workhorses of Kenya's agricultural backbone.",
    models: ["D-Max Single Cab", "N-Series NLR", "N-Series NMR 85"],
  },
  {
    icon: <FaCartFlatbed size={28} />,
    title: "Retail & Distribution",
    description: "Streamline your distribution network with custom body trucks. Box bodies, refrigerated units, and flatbeds all available through our body building partners.",
    models: ["N-Series NQR Xtra", "F-Series FRR 90N", "F-Series FVR 90P"],
  },
];

const benefits = [
  {
    title: "Volume Pricing",
    description: "Get competitive pricing when ordering 3 or more vehicles. Our fleet pricing is designed to give your business maximum value and ROI.",
  },
  {
    title: "Custom Body Building",
    description: "Box bodies, matatu bodies, tipper bodies, refrigerated units — we work with Kenya's best body builders to deliver exactly what your operations need.",
  },
  {
    title: "Flexible Fleet Financing",
    description: "Access structured financing solutions through our banking partners. Finance up to 80% of your fleet at competitive commercial rates.",
  },
  {
    title: "Dedicated Account Manager",
    description: "Every fleet client gets a dedicated point of contact — Edwin personally manages fleet relationships to ensure fast, seamless service.",
  },
  {
    title: "Priority After-Sales Service",
    description: "Fleet vehicles are serviced on priority at Isuzu East Africa's authorised service network across Kenya, minimising downtime.",
  },
  {
    title: "Full Documentation",
    description: "We provide all necessary documentation for procurement, LPO processing, and compliance — including local purchase orders and government tenders.",
  },
];

export default function FleetSalesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-[#0d0d0d] overflow-hidden" style={{ minHeight: 520 }}>
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-black/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D62B2B] z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-24 flex flex-col justify-center" style={{ minHeight: 520 }}>
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#D62B2B] transition-colors">Home</Link>
            <FaChevronRight size={9} className="opacity-40" />
            <span className="text-white/70">Fleet Sales</span>
          </nav>

          <span className="inline-block bg-[#D62B2B] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 mb-6 w-fit">
            Corporate & Fleet Solutions
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight max-w-3xl mb-6 drop-shadow-xl">
            Power Your Business With{" "}
            <span className="text-[#D62B2B]">Isuzu Fleet</span>
          </h1>

          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
            Kenya's most trusted Isuzu dealer for fleet and corporate buyers. Whether you need 1 vehicle or 50, we offer volume pricing, custom body building, and dedicated account management to keep your business moving.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#fleet-form"
              className="bg-[#D62B2B] text-white px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-colors shadow-xl shadow-red-900/40"
            >
              Get Fleet Quote
            </a>
            <a
              href="tel:0768351483"
              className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <FaPhone size={14} /> Call Edwin
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-[#D62B2B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: "35+", label: "Isuzu Models Available" },
              { num: "100%", label: "Brand New Units" },
              { num: "2–4 wks", label: "Custom Body Build Time" },
              { num: "80%", label: "Max Fleet Financing" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black mb-1">{stat.num}</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US FOR FLEET ── */}
      <section className="py-20 px-4 sm:px-8 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Fleet Benefits</span>
              <div className="h-1 w-12 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Why Leading Businesses Choose <span className="text-[#D62B2B]">Edwin Kibira</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#D62B2B]/20 transition-all group">
                <div className="w-10 h-10 bg-[#D62B2B]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D62B2B] transition-colors">
                  <FaCircleCheck size={18} className="text-[#D62B2B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-black text-[#1a1a1a] uppercase tracking-tight mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Industries We Serve</span>
              <div className="h-1 w-12 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight">
              Built for Every <span className="text-[#D62B2B]">Industry</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              From coastal logistics to upcountry construction, Isuzu vehicles power businesses across every sector in Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="group relative bg-[#1a1a1a] rounded-xl overflow-hidden p-7 hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D62B2B]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D62B2B]/10 transition-colors" />
                <div className="text-[#D62B2B] mb-4">{industry.icon}</div>
                <h3 className="text-white font-black text-base uppercase tracking-tight mb-2">{industry.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.models.map((model) => (
                    <span key={model} className="bg-white/10 text-white/70 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FORM ── */}
      <section id="fleet-form" className="py-20 px-4 sm:px-8 bg-[#f9f9f9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-10 bg-[#D62B2B]" />
                <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Get Started</span>
              </div>
              <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight mb-4">
                Request Your <span className="text-[#D62B2B]">Fleet Proposal</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                Fill in your requirements and our Fleet Sales Manager will prepare a tailored vehicle proposal with competitive pricing and financing options — typically within 24 hours.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <FaPhone className="text-[#D62B2B]" size={16} />,
                    label: "Call Us Directly",
                    value: "0768 351 483",
                    href: "tel:0768351483",
                  },
                  {
                    icon: <FaWhatsapp className="text-[#25D366]" size={16} />,
                    label: "WhatsApp Fleet Sales",
                    value: "Chat on WhatsApp",
                    href: "https://wa.me/254768351483?text=Hi%20Edwin%2C%20I%27m%20interested%20in%20fleet%20pricing%20for%20Isuzu%20vehicles.",
                  },
                  {
                    icon: <FaBuilding className="text-[#D62B2B]" size={16} />,
                    label: "Visit Our Showroom",
                    value: "Enterprise Road, Nairobi",
                    href: "https://maps.google.com/?q=Isuzu+East+Africa+Enterprise+Road+Nairobi",
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-[#D62B2B] transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{contact.label}</p>
                      <p className="text-sm font-black text-[#1a1a1a] group-hover:text-[#D62B2B] transition-colors">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <FleetContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
