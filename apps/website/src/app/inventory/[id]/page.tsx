"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Vehicle } from "@/types/vehicle";
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  Share2,
  Heart,
  Phone,
  MessageSquare,
  Calendar,
  Gauge,
  Fuel,
  Settings2,
  ShieldCheck,
  CheckCircle2,
  Info,
  ArrowLeft,
  Maximize2,
  ZoomIn,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/inventory/LeadForm";

// ── Same fallback data as home/inventory pages ───────────────────────────────
const FALLBACK_VEHICLES: Vehicle[] = [
  {
    id: "isuzu-dmax-vcross",
    make: "Isuzu", model: "D-Max V-Cross 4x4", year: 2024, price: 6800000,
    engineCC: 2999, transmission: "AUTOMATIC", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "PICKUP", mileage: 12000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The Isuzu D-Max V-Cross 4x4 is Kenya's most capable pickup truck. Powered by a 3.0L turbodiesel engine producing 163PS, it handles Kenya's toughest terrain with ease. Features include 4WD with low range, rear diff lock, hill descent control, and a spacious double cab interior with premium finishes.",
    features: ["4WD with Low Range", "Rear Differential Lock", "Hill Descent Control", "Lane Departure Warning", "Blind Spot Monitoring", "360° Camera", "Leather Seats", "Dual-Zone Climate Control", "Apple CarPlay / Android Auto", "Isofix Child Seat Anchors"],
    images: [
      { id: "img-1", url: "/vehicles/dmax-hero.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/dmax-silver.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-mux",
    make: "Isuzu", model: "mu-X 3.0L SUV", year: 2024, price: 8200000,
    engineCC: 2999, transmission: "AUTOMATIC", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "SUV", mileage: 8000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The 2024 Isuzu mu-X is a premium 7-seater SUV built on the legendary D-Max platform. With a 3.0L turbodiesel engine, 6-speed automatic transmission and full-time 4WD, it delivers confident performance on any road while offering a luxurious cabin for the whole family.",
    features: ["7-Seater Capacity", "Full-Time 4WD", "360° Surround View Camera", "Automatic Parking Assist", "Ventilated Front Seats", "Panoramic Sunroof", "9-Inch Touchscreen", "Apple CarPlay & Android Auto", "Wireless Charging", "10 Airbags"],
    images: [
      { id: "img-1", url: "/vehicles/mux-hero.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/mux-black.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-nqr",
    make: "Isuzu", model: "NQR N-Series Truck", year: 2023, price: 5200000,
    engineCC: 5193, transmission: "MANUAL", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "TRUCK", mileage: 25000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The Isuzu NQR is a medium duty truck designed for Kenya's commercial transport sector. With a 5.2L 4HK1 turbodiesel engine producing 175PS and 637Nm of torque, it reliably handles heavy cargo over long distances with excellent fuel economy.",
    features: ["175PS Turbodiesel Engine", "637Nm Torque", "6-Speed Manual Gearbox", "Air-Assisted Brakes", "Tiltable Cab", "Sleeper Berth", "Heavy Duty Leaf Springs", "NTSA Compliant"],
    images: [{ id: "img-1", url: "/vehicles/nqr-hero.png", isPrimary: true, position: 0 }],
  },
  {
    id: "isuzu-dmax-ls",
    make: "Isuzu", model: "D-Max LS 4x2", year: 2024, price: 5900000,
    engineCC: 1898, transmission: "AUTOMATIC", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "PICKUP", mileage: 5000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The Isuzu D-Max LS 4x2 offers legendary D-Max reliability at an accessible price. Ideal for both city driving and weekend adventures, it features a 1.9L turbodiesel engine with excellent fuel economy and a refined automatic transmission.",
    features: ["1.9L Turbodiesel Engine", "6-Speed Automatic", "LED Headlights", "Rear View Camera", "7-Inch Infotainment", "Power Windows", "Climate Control AC", "Isuzu Warranty"],
    images: [
      { id: "img-1", url: "/vehicles/dmax-silver.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/dmax-hero.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-mux-ls",
    make: "Isuzu", model: "mu-X LS-U 4x4", year: 2024, price: 9100000,
    engineCC: 2999, transmission: "AUTOMATIC", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "SUV", mileage: 3000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The top-of-the-range Isuzu mu-X LS-U 4x4 is the ultimate family SUV for Kenya. Featuring active safety systems, premium leather interior, adaptive cruise control and Isuzu's latest infotainment system.",
    features: ["7-Seater Full Leather", "Adaptive Cruise Control", "Pre-Collision System", "Lane Keep Assist", "Automatic High Beam", "Head-Up Display", "Power Tailgate", "Premium Audio System", "10 Airbags", "Trailer Sway Control"],
    images: [
      { id: "img-1", url: "/vehicles/mux-black.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/mux-hero.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-npr",
    make: "Isuzu", model: "NPR 75 Light Truck", year: 2023, price: 4100000,
    engineCC: 3856, transmission: "MANUAL", fuelType: "DIESEL",
    condition: "FOREIGN", bodyType: "TRUCK", mileage: 18000, category: "CAR",
    status: "AVAILABLE", createdAt: new Date().toISOString(),
    description: "The Isuzu NPR 75 is a light-duty truck perfect for urban delivery and logistics in Kenya. Its 3.8L 4HF1 engine combined with a lightweight chassis provides excellent fuel efficiency and payload capacity.",
    features: ["3.8L Diesel Engine", "5-Speed Manual Gearbox", "Power Steering", "Air Conditioning", "Anti-Lock Brakes", "Dual Airbags", "NTSA Compliant", "Parts Readily Available"],
    images: [{ id: "img-1", url: "/vehicles/fvr-truck.png", isPrimary: true, position: 0 }],
  },
];

const VehicleDetailsPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      const fallback = FALLBACK_VEHICLES.find((v) => v.id === id);
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
        const response = await fetch(`${apiUrl}/api/vehicles/${id}`, {
          cache: "no-store",
          signal: AbortSignal.timeout(3000),
        });
        if (response.ok) {
          const data = await response.json();
          setVehicle(data);
          setLoading(false);
          return;
        }
      } catch { /* use fallback */ }
      setVehicle(fallback || null);
      setLoading(false);
    };
    if (id) fetchVehicle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="animate-pulse" style={{ paddingTop: 80 }}>
          <div className="h-[70vh] bg-gray-100" />
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
          <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center mb-6">
            <Info size={32} className="text-secondary" />
          </div>
          <h1 className="text-2xl font-black uppercase text-[#1A1A1A] mb-3">Vehicle Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            This vehicle may have been sold or removed. Browse our current inventory for available Isuzu vehicles.
          </p>
          <Link href="/inventory" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-all">
            Browse Inventory <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  const images = vehicle.images || [];
  const primaryImg = images[activeImg]?.url || images[0]?.url || "/vehicles/dmax-hero.png";
  const conditionLabel = vehicle.condition === "FOREIGN" ? "Foreign Used" : "Locally Used";
  const fuelLabel = vehicle.fuelType.charAt(0) + vehicle.fuelType.slice(1).toLowerCase();

  const quickSpecs = [
    { label: "Year", value: vehicle.year.toString(), icon: <Calendar size={16} /> },
    { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} km`, icon: <Gauge size={16} /> },
    { label: "Fuel", value: fuelLabel, icon: <Fuel size={16} /> },
    { label: "Transmission", value: vehicle.transmission, icon: <Settings2 size={16} /> },
    { label: "Engine", value: `${vehicle.engineCC}cc`, icon: <Settings2 size={16} /> },
    { label: "Body", value: vehicle.bodyType, icon: <Settings2 size={16} /> },
  ];

  return (
    <main className="min-h-screen bg-[#F7F7F7]">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — full-bleed vehicle photo + pricing card side by side
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#1A1A1A]" style={{ paddingTop: 80 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb strip */}
          <div className="flex items-center justify-between py-3 border-b border-white/8">
            <div className="flex items-center gap-4">
              <Link href="/inventory" className="flex items-center gap-1.5 text-white/40 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest">
                <ArrowLeft size={13} /> Inventory
              </Link>
              <span className="text-white/20 text-xs">›</span>
              <nav className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/35 flex-wrap">
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                <ChevronRight size={11} className="opacity-30" />
                <Link href="/inventory" className="hover:text-secondary transition-colors">Inventory</Link>
                <ChevronRight size={11} className="opacity-30" />
                <span className="text-white/70">{vehicle.make} {vehicle.model}</span>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors flex items-center justify-center" title="Share">
                <Share2 size={14} />
              </button>
              <button className="w-8 h-8 border border-white/15 text-white/50 hover:text-secondary hover:border-secondary transition-colors flex items-center justify-center" title="Save">
                <Heart size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Hero Grid: Photo LEFT, Price Card RIGHT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 py-6 lg:py-8">

            {/* ── LEFT: Vehicle Image (fills all available space) ── */}
            <div className="lg:col-span-7 flex flex-col gap-3">

              {/* Vehicle title (mobile only — shows above image) */}
              <div className="lg:hidden mb-2">
                <span className="inline-block bg-secondary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-2">
                  {conditionLabel}
                </span>
                <h1 className="text-2xl font-black text-white uppercase leading-tight">
                  {vehicle.make} <span className="text-secondary">{vehicle.model}</span>
                </h1>
                <p className="text-white/40 text-sm font-semibold mt-1">
                  {vehicle.year} · {vehicle.bodyType} · {fuelLabel}
                </p>
              </div>

              {/* Main image */}
              <div
                className="relative w-full overflow-hidden bg-[#111] cursor-zoom-in group"
                style={{ aspectRatio: "16/9" }}
                onClick={() => setLightbox(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={primaryImg}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev/Next arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p === 0 ? images.length - 1 : p - 1)); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p + 1) % images.length); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm text-white/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={15} />
                </div>

                {/* Photo count */}
                <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-black px-2.5 py-1 backdrop-blur-sm">
                  {activeImg + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImg(i)}
                      className={`relative flex-shrink-0 overflow-hidden transition-all ${
                        i === activeImg
                          ? "ring-2 ring-secondary opacity-100"
                          : "opacity-50 hover:opacity-80"
                      }`}
                      style={{ width: 90, aspectRatio: "3/2" }}
                    >
                      <Image src={img.url} alt="thumb" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick spec pills (desktop — below image) */}
              <div className="hidden lg:flex flex-wrap gap-2 mt-1">
                {quickSpecs.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
                    <span className="text-secondary">{s.icon}</span>
                    <span className="text-white/50">{s.label}:</span>
                    {s.value}
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Title + Price Card ── */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-2">

              {/* Desktop title */}
              <div className="hidden lg:block">
                <span className="inline-block bg-secondary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-3">
                  {conditionLabel}
                </span>
                <h1 className="text-3xl xl:text-4xl font-black text-white uppercase leading-tight mb-1">
                  {vehicle.make}
                </h1>
                <h2 className="text-3xl xl:text-4xl font-black text-secondary uppercase leading-tight mb-3">
                  {vehicle.model}
                </h2>
                <p className="text-white/40 text-sm font-semibold">
                  {vehicle.year} · {vehicle.bodyType} · {fuelLabel}
                </p>
              </div>

              {/* Price block */}
              <div className="bg-white">
                {/* Red accent top */}
                <div className="h-1 bg-secondary" />
                <div className="p-6 sm:p-7">

                  {/* Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-secondary uppercase tracking-widest border border-secondary/30 px-3 py-1 bg-secondary/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                      {vehicle.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold">
                      <MapPin size={11} className="text-secondary" />
                      Nairobi, Kenya
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pb-5 mb-5 border-b border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">Asking Price</p>
                    <p className="text-4xl xl:text-5xl font-black text-[#1A1A1A] leading-none">
                      <span className="text-xl text-secondary mr-1">KSh</span>
                      {vehicle.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400 mt-1.5">
                      Est. monthly: KSh {Math.round(vehicle.price * 0.02).toLocaleString()} · financing available
                    </p>
                  </div>

                  {/* CTA buttons */}
                  <div className="space-y-2.5">
                    <Link
                      href="/book-test-drive"
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-all"
                    >
                      <Calendar size={16} /> Book a Test Drive
                    </Link>

                    <a
                      href={`https://wa.me/254700000000?text=Hi Edwin Kibira Isuzu Sales, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (KSh ${vehicle.price.toLocaleString()}). Please send more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1ebe5d] transition-all"
                    >
                      <MessageSquare size={16} /> WhatsApp Enquiry
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:+254700000000"
                        className="flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1A1A1A] py-3.5 font-black uppercase text-xs tracking-widest hover:border-secondary hover:text-secondary transition-all"
                      >
                        <Phone size={14} /> Call Us
                      </a>
                      <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-400">
                    <p className="col-span-2 font-black uppercase tracking-widest text-[#1A1A1A] text-[10px] mb-1">Showroom Hours</p>
                    <p>Mon – Fri</p><p className="text-right font-semibold text-gray-600">8:00 AM – 6:00 PM</p>
                    <p>Saturday</p><p className="text-right font-semibold text-gray-600">9:00 AM – 4:00 PM</p>
                    <p>Sunday</p><p className="text-right font-semibold text-gray-600">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BODY — Specs, Description, Features
      ═══════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* ── Left: Details ── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Mobile quick specs */}
            <div className="lg:hidden flex flex-wrap gap-2">
              {quickSpecs.map((s) => (
                <div key={s.label} className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 text-xs font-black uppercase tracking-wide text-[#1A1A1A]">
                  <span className="text-secondary">{s.icon}</span>
                  <span className="text-gray-400">{s.label}:</span>
                  {s.value}
                </div>
              ))}
            </div>

            {/* Description */}
            {vehicle.description && (
              <section className="bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[3px] w-8 bg-secondary" />
                  <h2 className="text-base font-black text-[#1A1A1A] uppercase tracking-wide">About This Vehicle</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{vehicle.description}</p>
              </section>
            )}

            {/* Specs table */}
            <section className="bg-white overflow-hidden">
              <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-gray-100">
                <div className="h-[3px] w-8 bg-secondary" />
                <h2 className="text-base font-black text-[#1A1A1A] uppercase tracking-wide">Full Specifications</h2>
              </div>
              <div>
                {[
                  ["Make", vehicle.make],
                  ["Model", vehicle.model],
                  ["Year", vehicle.year.toString()],
                  ["Body Type", vehicle.bodyType],
                  ["Engine Size", `${vehicle.engineCC}cc`],
                  ["Fuel Type", fuelLabel],
                  ["Transmission", vehicle.transmission],
                  ["Mileage", `${vehicle.mileage.toLocaleString()} km`],
                  ["Condition", conditionLabel],
                  ["Colour", vehicle.color || "Contact for Details"],
                  ["Location", "Nairobi, Kenya"],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-6 sm:px-8 py-3.5 text-sm ${i % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"}`}
                  >
                    <span className="font-black text-[#1A1A1A] uppercase text-xs tracking-wide">{label}</span>
                    <span className="font-semibold text-gray-500 text-xs sm:text-sm uppercase">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <section className="bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[3px] w-8 bg-secondary" />
                  <h2 className="text-base font-black text-[#1A1A1A] uppercase tracking-wide">Key Features</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={15} className="text-secondary flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Quality Guarantee */}
            <section className="bg-[#1A1A1A] p-6 sm:p-8 border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={20} className="text-secondary" />
                <h3 className="text-sm font-black text-white uppercase tracking-wide">Edwin Kibira Isuzu — Quality Guarantee</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Genuine Isuzu Parts Only", "Factory Warranty Certified", "150-Point Technical Inspection", "KRA & NTSA Verified"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 size={14} className="text-secondary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── Right: Finance + Similar Vehicles ── */}
          <div className="lg:col-span-5 space-y-5">
            {/* Finance teaser */}
            <div className="bg-white p-6 sm:p-8 border-t-4 border-secondary">
              <h3 className="font-black text-[#1A1A1A] uppercase text-sm tracking-wide mb-2">Financing Available</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-5">
                Get pre-approved with our bank partners. Estimated monthly payment from{" "}
                <strong className="text-secondary">KSh {Math.round(vehicle.price * 0.02).toLocaleString()}</strong>. No hidden fees.
              </p>
              <div className="space-y-2">
                <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-3.5 font-black uppercase text-xs tracking-widest hover:bg-[#b82222] transition-all">
                  Enquire About Finance <ChevronRight size={14} />
                </Link>
                <Link href="/book-test-drive" className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1A1A1A] py-3.5 font-black uppercase text-xs tracking-widest hover:border-secondary hover:text-secondary transition-all">
                  Book Test Drive
                </Link>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-white p-6 sm:p-8">
              <h3 className="font-black text-[#1A1A1A] uppercase text-sm tracking-wide mb-4">Talk to a Specialist</h3>
              <div className="space-y-3 text-sm">
                <a href="tel:+254700000000" className="flex items-center gap-3 text-gray-600 hover:text-secondary transition-colors font-medium group">
                  <div className="w-9 h-9 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all flex-shrink-0">
                    <Phone size={15} />
                  </div>
                  +254 700 000 000
                </a>
                <a
                  href={`https://wa.me/254700000000?text=Hi, I'm interested in the ${vehicle.make} ${vehicle.model}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#25D366] transition-colors font-medium group"
                >
                  <div className="w-9 h-9 bg-[#25D366]/10 group-hover:bg-[#25D366] flex items-center justify-center text-[#25D366] group-hover:text-white transition-all flex-shrink-0">
                    <MessageSquare size={15} />
                  </div>
                  WhatsApp Us
                </a>
                <div className="flex items-center gap-3 text-gray-600 font-medium">
                  <div className="w-9 h-9 bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <MapPin size={15} />
                  </div>
                  Nairobi, Kenya
                </div>
              </div>
            </div>

            {/* Related links */}
            <div className="bg-white p-6">
              <h3 className="font-black text-[#1A1A1A] uppercase text-xs tracking-widest mb-4">Explore More</h3>
              <div className="space-y-2">
                {[
                  { label: "View All D-Max Models", href: "/inventory?search=D-Max" },
                  { label: "View All mu-X Models", href: "/inventory?search=mu-X" },
                  { label: "Commercial Trucks & Buses", href: "/inventory?search=N-Series" },
                  { label: "Full Inventory", href: "/inventory" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between text-xs font-bold text-gray-500 hover:text-secondary transition-colors py-2 border-b border-gray-50 last:border-0 uppercase tracking-wide group"
                  >
                    {item.label}
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl font-light" onClick={() => setLightbox(false)}>✕</button>
          <div className="relative w-full max-w-5xl max-h-[85vh] mx-6">
            <Image
              src={primaryImg}
              alt={`${vehicle.make} ${vehicle.model}`}
              width={1280}
              height={720}
              className="object-contain w-full h-full max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default VehicleDetailsPage;
