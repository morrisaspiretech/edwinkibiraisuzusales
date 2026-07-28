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
  Maximize2,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/inventory/LeadForm";

// ── Fallback data ────────────────────────────────────────────────────────
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
      <div className="min-h-screen bg-gray-50 pt-28">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-pulse">
          <div className="h-10 bg-gray-200 w-1/3 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 h-[60vh] bg-gray-200 rounded" />
            <div className="lg:col-span-4 h-[60vh] bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
          <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center mb-6 rounded-full">
            <Info size={32} className="text-secondary" />
          </div>
          <h1 className="text-3xl font-black uppercase text-primary mb-3">Vehicle Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm">
            This vehicle may have been sold or removed. Browse our current inventory for available Isuzu vehicles.
          </p>
          <Link href="/inventory" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-all rounded shadow-lg shadow-secondary/20">
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

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      {/* ── Top Header Section (Title & Breadcrumbs) ── */}
      <div className="bg-white border-b border-gray-200 pt-6 sm:pt-10 pb-6 shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/inventory" className="hover:text-secondary transition-colors">Inventory</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-primary">{vehicle.make} {vehicle.model}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5" />
                  {vehicle.status}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200">
                  {conditionLabel}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200">
                  {vehicle.year}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary uppercase leading-tight tracking-tight">
                {vehicle.make} <span className="text-secondary">{vehicle.model}</span>
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 hover:text-primary hover:border-gray-300 transition-all font-bold text-xs uppercase tracking-wider rounded">
                <Share2 size={14} /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 hover:text-secondary hover:border-secondary transition-all font-bold text-xs uppercase tracking-wider rounded">
                <Heart size={14} /> Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Layout Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ── LEFT COLUMN: Gallery & Details ── */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Image Gallery */}
            <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
              <div 
                className="relative w-full overflow-hidden bg-gray-100 rounded-lg cursor-zoom-in group"
                style={{ aspectRatio: "16/10" }}
                onClick={() => setLightbox(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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

                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p === 0 ? images.length - 1 : p - 1)); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary hover:text-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveImg((p) => (p + 1) % images.length); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-secondary hover:text-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={18} />
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto mt-2 pb-1 scrollbar-hide">
                  {images.map((img, i) => (
                    <button
                      key={img.id}
                      onClick={() => setActiveImg(i)}
                      className={`relative flex-shrink-0 rounded-md overflow-hidden transition-all ${
                        i === activeImg ? "ring-2 ring-secondary opacity-100" : "opacity-60 hover:opacity-100 ring-1 ring-gray-200"
                      }`}
                      style={{ width: 100, aspectRatio: "4/3" }}
                    >
                      <Image src={img.url} alt="thumb" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Highlight Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} km`, icon: <Gauge size={20} /> },
                { label: "Fuel Type", value: fuelLabel, icon: <Fuel size={20} /> },
                { label: "Transmission", value: vehicle.transmission, icon: <Settings2 size={20} /> },
                { label: "Engine", value: `${vehicle.engineCC}cc`, icon: <Settings2 size={20} /> },
              ].map((spec, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
                  <div className="text-secondary bg-secondary/10 p-2 rounded-full">{spec.icon}</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{spec.label}</p>
                    <p className="font-bold text-primary text-sm mt-0.5">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            {vehicle.description && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-lg font-black text-primary uppercase tracking-wide mb-4">About This Vehicle</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{vehicle.description}</p>
              </section>
            )}

            {/* Full Specs Table */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-lg font-black text-primary uppercase tracking-wide">Vehicle Specifications</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                <div className="divide-y divide-gray-100">
                  {[
                    ["Make", vehicle.make],
                    ["Model", vehicle.model],
                    ["Year", vehicle.year.toString()],
                    ["Body Type", vehicle.bodyType],
                    ["Engine Size", `${vehicle.engineCC}cc`],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between p-4">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
                      <span className="font-bold text-primary">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    ["Fuel Type", fuelLabel],
                    ["Transmission", vehicle.transmission],
                    ["Mileage", `${vehicle.mileage.toLocaleString()} km`],
                    ["Condition", conditionLabel],
                    ["Colour", vehicle.color || "Contact for Details"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between p-4">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
                      <span className="font-bold text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <section className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-lg font-black text-primary uppercase tracking-wide mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                      <div className="bg-green-100 text-green-600 p-1 rounded mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* ── RIGHT COLUMN: Pricing & Actions ── */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Main Pricing Box */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg shadow-gray-200/50 overflow-hidden">
                <div className="bg-primary p-6 text-center text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 text-white/5">
                    <Settings2 size={120} />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mb-2">Asking Price</p>
                  <p className="text-4xl font-black tracking-tight relative z-10">
                    <span className="text-xl text-secondary mr-1">KSh</span>
                    {vehicle.price.toLocaleString()}
                  </p>
                </div>
                
                <div className="p-6 space-y-4">
                  <Link
                    href="/book-test-drive"
                    className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#9a1b1b] transition-all rounded shadow-md shadow-secondary/20"
                  >
                    <Calendar size={18} /> Book a Test Drive
                  </Link>

                  <a
                    href={`https://wa.me/254700000000?text=Hi Edwin Kibira Isuzu Sales, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (KSh ${vehicle.price.toLocaleString()}). Please send more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1ebe5d] transition-all rounded shadow-md shadow-[#25D366]/20"
                  >
                    <MessageSquare size={18} /> WhatsApp Enquiry
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+254700000000"
                      className="flex items-center justify-center gap-2 border-2 border-gray-200 text-primary py-3 font-black uppercase text-xs tracking-widest hover:border-primary hover:bg-gray-50 transition-all rounded"
                    >
                      <Phone size={14} /> Call Us
                    </a>
                    <div className="[&>button]:w-full [&>button]:h-full [&>button]:border-2 [&>button]:border-gray-200 [&>button]:text-primary [&>button]:font-black [&>button]:uppercase [&>button]:text-xs [&>button]:tracking-widest [&>button]:rounded hover:[&>button]:border-primary hover:[&>button]:bg-gray-50 transition-all">
                       <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <MapPin size={14} className="text-secondary" /> Nairobi, Kenya
                </div>
              </div>

              {/* Finance Box */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-bl-full" />
                <h3 className="font-black text-primary uppercase text-sm tracking-wide mb-2 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-secondary" /> Financing Options
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Partnered with major banks for seamless asset financing. Estimated from <strong className="text-primary font-black">KSh {Math.round(vehicle.price * 0.02).toLocaleString()} /mo</strong>.
                </p>
                <Link href="/contact" className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider group">
                  Enquire about Finance <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Dealer Box */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                 <h3 className="font-black text-primary uppercase text-sm tracking-wide mb-4">Edwin Kibira Isuzu</h3>
                 <div className="space-y-3 text-sm">
                   <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                     <span className="text-gray-500">Mon - Fri</span>
                     <span className="font-bold text-primary">8:00 AM - 6:00 PM</span>
                   </div>
                   <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                     <span className="text-gray-500">Saturday</span>
                     <span className="font-bold text-primary">9:00 AM - 4:00 PM</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-gray-500">Sunday</span>
                     <span className="font-bold text-primary">Closed</span>
                   </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setLightbox(false)}>
          <button className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2" onClick={() => setLightbox(false)}>
            <span className="sr-only">Close</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div className="relative w-full max-w-6xl max-h-full">
            <Image
              src={primaryImg}
              alt={`${vehicle.make} ${vehicle.model}`}
              width={1920}
              height={1080}
              className="object-contain w-full h-[80vh]"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default VehicleDetailsPage;
