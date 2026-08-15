"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Vehicle } from "@/types/vehicle";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/inventory/LeadForm";
import { FaChevronRight, FaChevronLeft, FaMapLocationDot, FaPhone, FaMessage, FaCircleCheck, FaExpand, FaCheck, FaXmark, FaShareNodes, FaHeart, FaCalendar, FaGauge, FaGasPump, FaSliders, FaShieldHeart } from "react-icons/fa6";
interface Props {
  initialVehicle: Vehicle;
}

export default function VehicleClientView({ initialVehicle }: Props) {
  const vehicle = initialVehicle;
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "features" | "lead">("overview");

  const images = vehicle.images || [];
  const primaryImg = images[activeImg]?.url || images[0]?.url || "https://d2ekrm2045sfs2.cloudfront.net/cms/2024/10/15100939/1400.webp";
  const conditionLabel = vehicle.condition === "FOREIGN" ? "Foreign Used" : vehicle.condition === "NEW" ? "Brand New" : "Locally Used";
  const fuelLabel = vehicle.fuelType ? vehicle.fuelType.charAt(0) + vehicle.fuelType.slice(1).toLowerCase() : "Diesel";

  const specsList = [
    { icon: <FaGasPump size={16} />, label: "Fuel Type", value: fuelLabel },
    { icon: <FaGauge size={16} />, label: "Engine", value: vehicle.engineCC ? `${vehicle.engineCC}cc` : "N/A" },
    { icon: <FaSliders size={16} />, label: "Transmission", value: vehicle.transmission || "Manual" },
    { icon: <FaCalendar size={16} />, label: "Year", value: String(vehicle.year) },
    { icon: <FaMapLocationDot size={16} />, label: "Condition", value: conditionLabel },
    { icon: <FaShieldHeart size={16} />, label: "Status", value: vehicle.status },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-6 pb-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 flex-wrap">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <FaChevronRight size={12} className="opacity-40" />
            <Link href="/inventory" className="hover:text-secondary transition-colors">Inventory</Link>
            <FaChevronRight size={12} className="opacity-40" />
            <span className="text-primary">{vehicle.make} {vehicle.model}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest bg-secondary/10 text-secondary border border-secondary/20 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5" />{vehicle.status}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest bg-gray-100 text-gray-600 border border-gray-200 rounded">
                  {conditionLabel}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-primary uppercase">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied!");
                }}
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-[#D62B2B] hover:text-[#D62B2B] transition-colors"
              >
                <FaShareNodes size={18} />
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className="p-3 bg-white border border-gray-200 rounded-lg hover:border-[#D62B2B] transition-colors"
              >
                <FaHeart
                  size={18}
                  className={liked ? "text-[#D62B2B]" : "text-gray-400"}
                />
              </button>
              <div className="text-right">
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Asking Price</p>
                <p className="text-base font-black text-secondary">Contact for Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Images */}
          <div className="lg:col-span-7 space-y-3">
            {/* Hero Image */}
            <div
              className="relative w-full overflow-hidden bg-gray-900 cursor-zoom-in"
              style={{ height: 420 }}
              onClick={() => setLightbox(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image src={primaryImg} alt={`${vehicle.make} ${vehicle.model}`} fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
              <button className="absolute bottom-3 right-3 bg-black/50 text-white p-2 backdrop-blur-sm hover:bg-secondary transition-colors">
                <FaExpand size={16} />
              </button>
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p === 0 ? images.length - 1 : p - 1)); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 backdrop-blur-sm hover:bg-secondary transition-colors"
                  ><FaChevronLeft size={18} /></button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p + 1) % images.length); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 backdrop-blur-sm hover:bg-secondary transition-colors"
                  ><FaChevronRight size={18} /></button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={img.id || i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-14 flex-shrink-0 overflow-hidden border-2 transition-colors ${i === activeImg ? "border-secondary" : "border-transparent"}`}
                  >
                    <Image src={img.url} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Tabs */}
            <div className="bg-white border border-gray-100 shadow-sm">
              <div className="flex border-b border-gray-100">
                {(["overview", "specs", "features", "lead"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3.5 text-xs font-black uppercase tracking-widest transition-colors ${activeTab === tab ? "border-b-2 border-secondary text-secondary" : "text-gray-400 hover:text-primary"}`}
                  >
                    {tab === "lead" ? "Inquire" : tab}
                  </button>
                ))}
              </div>

              <div className="p-5">
                {activeTab === "overview" && (
                  <div className="space-y-4">
                    <h2 className="text-base font-black text-primary uppercase">About This Vehicle</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {vehicle.description || "Premium Isuzu vehicle available for sale. Contact us for more details."}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                      {specsList.map(({ icon, label, value }) => (
                        <div key={label} className="bg-gray-50 p-3 border border-gray-100">
                          <div className="flex items-center gap-2 text-secondary mb-1">{icon}<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span></div>
                          <p className="font-black text-primary text-sm">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="space-y-2">
                    {specsList.map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                        <div className="flex items-center gap-2 text-gray-500">
                          <span className="text-secondary">{icon}</span>
                          <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
                        </div>
                        <span className="font-black text-primary text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "features" && (
                  <div>
                    <h2 className="text-base font-black text-primary uppercase mb-4">Vehicle Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(vehicle.features && vehicle.features.length > 0 ? vehicle.features : [
                        "Power Steering", "Air Conditioning", "ABS Brakes", "Dual Airbags",
                        "NTSA Compliant", "Parts Readily Available", "Fuel Efficient"
                      ]).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <FaCircleCheck size={14} className="text-secondary flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "lead" && (
                  <div>
                    <h2 className="text-base font-black text-primary uppercase mb-4">Inquire About This Vehicle</h2>
                    <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Contact & Specs Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-gray-100 shadow-sm p-6">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Asking Price</p>
              <p className="text-xl font-black text-secondary mb-1">Contact for Pricing</p>
              <p className="text-xs text-gray-400 mb-6">{conditionLabel} · Zero Mileage · Genuine Isuzu</p>
              <a
                href="tel:0768351483"
                className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-3.5 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-colors mb-3"
              >
                <FaPhone size={16} /> 0768 351 483
              </a>
              <a
                href="https://wa.me/254768351483"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border-2 border-secondary text-secondary py-3.5 font-black uppercase text-sm tracking-widest hover:bg-secondary hover:text-white transition-colors"
              >
                <FaMessage size={16} /> WhatsApp
              </a>
            </div>

            <div className="bg-white border border-gray-100 shadow-sm p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Quick Specs</h3>
              <div className="space-y-3">
                {specsList.map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <span className="text-secondary">{icon}</span>
                      <span className="font-bold">{label}</span>
                    </div>
                    <span className="font-black text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f9f9f9] border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldHeart size={18} className="text-[#D62B2B]" />
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Edwin Kibira Isuzu Sales</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Authorised Isuzu dealer in Kenya. All vehicles are brand-new, zero-mileage and meet NTSA requirements.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#D62B2B] uppercase tracking-widest hover:gap-2 transition-all"
              >
                Visit Showroom <FaChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button className="absolute top-4 right-4 text-white/60 hover:text-white">
              <FaXmark size={28} />
            </button>
            <div className="relative w-full max-w-4xl" style={{ height: "80vh" }}>
              <Image src={primaryImg} alt={vehicle.model} fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
