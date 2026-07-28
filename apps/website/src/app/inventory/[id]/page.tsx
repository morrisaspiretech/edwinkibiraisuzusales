"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import ImageGallery from "@/components/inventory/ImageGallery";
import { Vehicle } from "@/types/vehicle";
import {
  ChevronRight,
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
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import LeadForm from "@/components/inventory/LeadForm";

// ── Identical fallback data as home/inventory pages ──────────────────────────
const FALLBACK_VEHICLES: Vehicle[] = [
  {
    id: "isuzu-dmax-vcross",
    make: "Isuzu",
    model: "D-Max V-Cross 4x4",
    year: 2024,
    price: 6800000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "PICKUP",
    mileage: 12000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The Isuzu D-Max V-Cross 4x4 is Kenya's most capable pickup truck. Powered by a 3.0L turbodiesel engine producing 163PS, it handles Kenya's toughest terrain with ease. Features include automatic transmission, 4WD with low range, rear diff lock, hill descent control, and a spacious double cab interior.",
    features: [
      "4WD with Low Range",
      "Rear Differential Lock",
      "Hill Descent Control",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
      "360° Camera",
      "Leather Seats",
      "Dual-Zone Climate Control",
      "Apple CarPlay / Android Auto",
      "Isofix Child Seat Anchors",
    ],
    images: [
      { id: "img-1", url: "/vehicles/dmax-hero.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/dmax-silver.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-mux",
    make: "Isuzu",
    model: "mu-X 3.0L SUV",
    year: 2024,
    price: 8200000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "SUV",
    mileage: 8000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The 2024 Isuzu mu-X is a premium 7-seater SUV built on the legendary D-Max platform. With a 3.0L turbodiesel engine, 6-speed automatic transmission and full-time 4WD, it delivers confident performance on any road while offering a luxurious cabin for the whole family.",
    features: [
      "7-Seater Capacity",
      "Full-Time 4WD",
      "360° Surround View Camera",
      "Automatic Parking Assist",
      "Ventilated Front Seats",
      "Panoramic Sunroof",
      "9-Inch Touchscreen",
      "Apple CarPlay & Android Auto",
      "Wireless Charging",
      "10 Airbags",
    ],
    images: [
      { id: "img-1", url: "/vehicles/mux-hero.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/mux-black.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-nqr",
    make: "Isuzu",
    model: "NQR N-Series Truck",
    year: 2023,
    price: 5200000,
    engineCC: 5193,
    transmission: "MANUAL",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "TRUCK",
    mileage: 25000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The Isuzu NQR is a medium duty truck designed for Kenya's commercial transport sector. With a 5.2L 4HK1 turbodiesel engine producing 175PS and 637Nm of torque, it reliably handles heavy cargo over long distances with excellent fuel economy.",
    features: [
      "175PS Turbodiesel Engine",
      "637Nm Torque",
      "6-Speed Manual Gearbox",
      "Air-Assisted Brakes",
      "Tiltable Cab",
      "Sleeper Berth",
      "Heavy Duty Leaf Springs",
      "NTSA Compliant",
    ],
    images: [
      { id: "img-1", url: "/vehicles/nqr-hero.png", isPrimary: true, position: 0 },
    ],
  },
  {
    id: "isuzu-dmax-ls",
    make: "Isuzu",
    model: "D-Max LS 4x2",
    year: 2024,
    price: 5900000,
    engineCC: 1898,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "PICKUP",
    mileage: 5000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The Isuzu D-Max LS 4x2 offers the legendary D-Max reliability and style at an accessible price point. Ideal for both city driving and weekend adventures, it features a 1.9L turbodiesel engine with excellent fuel economy and a refined automatic transmission.",
    features: [
      "1.9L Turbodiesel Engine",
      "6-Speed Automatic",
      "LED Headlights",
      "Rear View Camera",
      "7-Inch Infotainment",
      "Power Windows",
      "Climate Control AC",
      "Isuzu Warranty",
    ],
    images: [
      { id: "img-1", url: "/vehicles/dmax-silver.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/dmax-hero.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-mux-ls",
    make: "Isuzu",
    model: "mu-X LS-U 4x4",
    year: 2024,
    price: 9100000,
    engineCC: 2999,
    transmission: "AUTOMATIC",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "SUV",
    mileage: 3000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The top-of-the-range Isuzu mu-X LS-U 4x4 is the ultimate family SUV for Kenya. Featuring the full suite of active safety systems, premium leather interior, adaptive cruise control and Isuzu's latest infotainment system, it is unmatched in its class.",
    features: [
      "7-Seater Full Leather",
      "Adaptive Cruise Control",
      "Pre-Collision System",
      "Lane Keep Assist",
      "Automatic High Beam",
      "Head-Up Display",
      "Power Tailgate",
      "Premium Audio System",
      "10 Airbags",
      "Trailer Sway Control",
    ],
    images: [
      { id: "img-1", url: "/vehicles/mux-black.png", isPrimary: true, position: 0 },
      { id: "img-2", url: "/vehicles/mux-hero.png", isPrimary: false, position: 1 },
    ],
  },
  {
    id: "isuzu-npr",
    make: "Isuzu",
    model: "NPR 75 Light Truck",
    year: 2023,
    price: 4100000,
    engineCC: 3856,
    transmission: "MANUAL",
    fuelType: "DIESEL",
    condition: "FOREIGN",
    bodyType: "TRUCK",
    mileage: 18000,
    category: "CAR",
    status: "AVAILABLE",
    createdAt: new Date().toISOString(),
    description:
      "The Isuzu NPR 75 is a light-duty truck perfect for urban delivery and logistics in Kenya. Its 3.8L 4HF1 engine combined with a lightweight chassis provides excellent fuel efficiency and payload capacity for city and regional distribution routes.",
    features: [
      "3.8L Diesel Engine",
      "5-Speed Manual Gearbox",
      "Power Steering",
      "Air Conditioning",
      "Anti-Lock Brakes",
      "Dual Airbags",
      "NTSA Compliant",
      "Parts Readily Available",
    ],
    images: [
      { id: "img-1", url: "/vehicles/fvr-truck.png", isPrimary: true, position: 0 },
    ],
  },
];

const VehicleDetailsPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      // First check fallback data (instant — no API needed)
      const fallback = FALLBACK_VEHICLES.find((v) => v.id === id);

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
        const response = await fetch(`${apiUrl}/api/vehicles/${id}`, {
          cache: "no-store",
          signal: AbortSignal.timeout(3000), // 3s timeout
        });
        if (response.ok) {
          const data = await response.json();
          setVehicle(data);
          setLoading(false);
          return;
        }
      } catch {
        // API offline — use fallback
      }

      // Use fallback vehicle data if available
      if (fallback) {
        setVehicle(fallback);
      } else {
        setVehicle(null);
      }
      setLoading(false);
    };

    if (id) fetchVehicle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-48 bg-gray-100 rounded" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-[400px] bg-gray-100 rounded" />
              <div className="h-[400px] bg-gray-100 rounded" />
            </div>
          </div>
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
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-all"
            >
              Browse Inventory <ChevronRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const conditionLabel = vehicle.condition === "FOREIGN" ? "Foreign Used" : "Locally Used";
  const fuelLabel = vehicle.fuelType.charAt(0) + vehicle.fuelType.slice(1).toLowerCase();

  return (
    <main className="min-h-screen bg-white pb-24">
      <Navbar />

      {/* ── Hero Breadcrumb Bar ── */}
      <div className="bg-[#1A1A1A] pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back link */}
          <Link
            href="/inventory"
            className="inline-flex items-center gap-2 text-white/50 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-widest mb-4"
          >
            <ArrowLeft size={14} /> Back to Inventory
          </Link>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 mb-4 flex-wrap">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <Link href="/inventory" className="hover:text-secondary transition-colors">Inventory</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-white font-extrabold">{vehicle.make} {vehicle.model}</span>
          </nav>
          {/* Title row */}
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className="inline-block bg-secondary text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-2">
                {conditionLabel}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase leading-tight">
                {vehicle.make} <span className="text-secondary">{vehicle.model}</span>
              </h1>
              <p className="text-white/40 text-sm font-semibold mt-1">
                {vehicle.year} · {vehicle.bodyType} · {fuelLabel}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                title="Share"
              >
                <Share2 size={16} />
              </button>
              <button
                className="w-10 h-10 border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                title="Save"
              >
                <Heart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* ── Left: Gallery + Details ── */}
          <div className="lg:w-2/3 space-y-10">

            {/* Gallery */}
            <ImageGallery images={vehicle.images} />

            {/* Quick spec pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Calendar size={14} />, label: `${vehicle.year}` },
                { icon: <Gauge size={14} />, label: `${vehicle.mileage.toLocaleString()} km` },
                { icon: <Fuel size={14} />, label: fuelLabel },
                { icon: <Settings2 size={14} />, label: vehicle.transmission },
                { icon: <Settings2 size={14} />, label: `${vehicle.engineCC}cc` },
              ].map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#F7F7F7] border border-gray-200 px-4 py-2 text-xs font-black uppercase tracking-wide text-[#1A1A1A]"
                >
                  <span className="text-secondary">{pill.icon}</span>
                  {pill.label}
                </div>
              ))}
            </div>

            {/* Description */}
            {vehicle.description && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[3px] w-8 bg-secondary" />
                  <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-wide">
                    About this Vehicle
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {vehicle.description}
                </p>
              </section>
            )}

            {/* Specifications table */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-[3px] w-8 bg-secondary" />
                <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-wide">
                  Specifications
                </h2>
              </div>
              <div className="border border-gray-100 overflow-hidden">
                {[
                  { label: "Make", value: vehicle.make },
                  { label: "Model", value: vehicle.model },
                  { label: "Year", value: vehicle.year.toString() },
                  { label: "Body Type", value: vehicle.bodyType },
                  { label: "Engine", value: `${vehicle.engineCC}cc` },
                  { label: "Fuel Type", value: fuelLabel },
                  { label: "Transmission", value: vehicle.transmission },
                  { label: "Mileage", value: `${vehicle.mileage.toLocaleString()} km` },
                  { label: "Condition", value: conditionLabel },
                  { label: "Colour", value: vehicle.color || "Contact for details" },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between px-5 py-3 text-sm ${
                      i % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"
                    }`}
                  >
                    <span className="font-black text-[#1A1A1A] uppercase text-xs tracking-wide">
                      {row.label}
                    </span>
                    <span className="font-semibold text-gray-600 text-xs sm:text-sm uppercase">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            {vehicle.features && vehicle.features.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[3px] w-8 bg-secondary" />
                  <h2 className="text-lg font-black text-[#1A1A1A] uppercase tracking-wide">
                    Key Features
                  </h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vehicle.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-700 font-medium"
                    >
                      <CheckCircle2 size={15} className="text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Quality Guarantee */}
            <section className="bg-[#1A1A1A] p-6 sm:p-8 border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={20} className="text-secondary flex-shrink-0" />
                <h3 className="text-base font-black text-white uppercase tracking-wide">
                  Edwin Kibira Isuzu — Quality Guarantee
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Genuine Isuzu Parts Only",
                  "Factory Warranty Certified",
                  "150-Point Technical Inspection",
                  "KRA & NTSA Verified",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60 font-medium">
                    <CheckCircle2 size={14} className="text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── Right: Pricing & Contact ── */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-5">

              {/* Price card */}
              <div className="bg-white border border-gray-100 shadow-xl overflow-hidden">
                {/* Red top accent */}
                <div className="h-1 bg-secondary w-full" />
                <div className="p-6 sm:p-8">

                  {/* Status & location */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block bg-secondary/10 text-secondary text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-secondary/20">
                      {vehicle.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold uppercase tracking-wide">
                      <MapPin size={12} className="text-secondary" /> Nairobi, Kenya
                    </div>
                  </div>

                  {/* Vehicle name */}
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A1A1A] uppercase mb-1 leading-tight">
                    {vehicle.make} <span className="text-secondary">{vehicle.model}</span>
                  </h2>
                  <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-5">
                    {vehicle.year} · {conditionLabel}
                  </p>

                  {/* Price */}
                  <div className="pb-5 mb-5 border-b border-gray-100">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-1">
                      Asking Price
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-[#1A1A1A] leading-none">
                      <span className="text-sm mr-1 text-secondary">KSh</span>
                      {vehicle.price.toLocaleString()}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <Link
                      href="/book-test-drive"
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-4 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#b82222] transition-all"
                    >
                      <Calendar size={16} /> Book Test Drive
                    </Link>

                    <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />

                    <a
                      href={`https://wa.me/254700000000?text=Hi Edwin Kibira Isuzu Sales, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (KSh ${vehicle.price.toLocaleString()}). Please provide more details.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-black uppercase text-xs sm:text-sm tracking-widest hover:bg-[#1ebe5d] transition-all"
                    >
                      <MessageSquare size={16} /> WhatsApp Enquiry
                    </a>

                    <a
                      href="tel:+254700000000"
                      className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1A1A1A] py-4 font-black uppercase text-xs sm:text-sm tracking-widest hover:border-secondary hover:text-secondary transition-all"
                    >
                      <Phone size={16} /> Call Us Now
                    </a>
                  </div>

                  {/* Opening hours */}
                  <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-400 space-y-1">
                    <p className="font-black uppercase tracking-widest text-[#1A1A1A] mb-2 text-[10px]">
                      Showroom Hours
                    </p>
                    <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                    <p>Saturday: 9:00 AM – 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Finance teaser */}
              <div className="border border-gray-100 p-6 bg-[#F7F7F7]">
                <h3 className="font-black text-[#1A1A1A] uppercase text-sm tracking-wide mb-2">
                  Financing Available
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Get pre-approved with our bank partners. Estimated monthly payment from{" "}
                  <strong className="text-secondary">KSh {Math.round(vehicle.price * 0.02).toLocaleString()}</strong>.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-black text-secondary uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Enquire About Finance <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VehicleDetailsPage;
