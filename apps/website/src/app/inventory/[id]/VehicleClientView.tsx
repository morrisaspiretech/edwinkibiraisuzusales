"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Vehicle } from "@/types/vehicle";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/inventory/LeadForm";
import { FaChevronRight, FaChevronLeft, FaMapLocationDot, FaPhone, FaMessage, FaCircleCheck, FaExpand, FaCheck, FaXmark, FaShareNodes, FaHeart, FaCalendar, FaGauge, FaGasPump, FaSliders, FaShieldHeart, FaWhatsapp } from "react-icons/fa6";

interface Props {
  initialVehicle: Vehicle;
}

export default function VehicleClientView({ initialVehicle }: Props) {
  const vehicle = initialVehicle;
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "lead">("overview");

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const images = vehicle.images || [];
  const primaryImg = images[activeImg]?.url || images[0]?.url || "https://d2ekrm2045sfs2.cloudfront.net/cms/2024/10/15100939/1400.webp";
  const conditionLabel = vehicle.condition === "FOREIGN" ? "Foreign Used" : vehicle.condition === "NEW" ? "Brand New" : "Locally Used";
  const fuelLabel = vehicle.fuelType ? vehicle.fuelType.charAt(0) + vehicle.fuelType.slice(1).toLowerCase() : "Diesel";

  const specsList = [
    { icon: <FaGasPump size={16} />, label: "Fuel", value: fuelLabel },
    vehicle.engineCC ? { icon: <FaGauge size={16} />, label: "Engine", value: `${vehicle.engineCC}cc` } : null,
    { icon: <FaSliders size={16} />, label: "Trans", value: vehicle.transmission || "Manual" },
    { icon: <FaCalendar size={16} />, label: "Year", value: String(vehicle.year) },
    { icon: <FaMapLocationDot size={16} />, label: "Condition", value: conditionLabel },
  ].filter(Boolean) as { icon: JSX.Element; label: string; value: string }[];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-gray-200 pt-6 pb-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 flex-wrap mb-4">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <FaChevronRight size={12} className="opacity-40" />
            <Link href="/inventory" className="hover:text-secondary transition-colors">Inventory</Link>
            <FaChevronRight size={12} className="opacity-40" />
            <span className="text-primary">{vehicle.make} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT: Image Gallery (Scrollable) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            
            {/* Header (Mobile / Desktop) */}
            <div className="mb-6">
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

            {/* Main Interactive Viewer */}
            <div
              className="relative w-full overflow-hidden bg-gray-900 cursor-crosshair rounded-lg shadow-md group"
              style={{ height: "60vh", minHeight: 400, maxHeight: 600 }}
              onClick={() => setLightbox(true)}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
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
                    className={`object-cover pointer-events-none transition-opacity duration-200 ${mounted && isHovering ? "opacity-0" : "opacity-100"}`} 
                  />
                  {/* Zoom Overlay */}
                  {mounted && (
                  <div 
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-150 ${isHovering ? "opacity-100" : "opacity-0"}`}
                    style={{
                      backgroundImage: `url(${primaryImg})`,
                      backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                      backgroundSize: "250%",
                      backgroundRepeat: "no-repeat"
                    }}
                  />
                  )}
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all pointer-events-none" />
              
              <button className="absolute bottom-4 right-4 bg-black/60 text-white p-3 rounded backdrop-blur-sm hover:bg-secondary transition-colors z-10 shadow-lg">
                <FaExpand size={18} />
              </button>
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p === 0 ? images.length - 1 : p - 1)); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded backdrop-blur-sm hover:bg-secondary transition-colors z-10 shadow-lg opacity-0 group-hover:opacity-100"
                  ><FaChevronLeft size={20} /></button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p + 1) % images.length); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded backdrop-blur-sm hover:bg-secondary transition-colors z-10 shadow-lg opacity-0 group-hover:opacity-100"
                  ><FaChevronRight size={20} /></button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.id || i}
                    onClick={() => setActiveImg(i)}
                    className={`relative aspect-[4/3] w-full rounded overflow-hidden border-2 transition-all ${i === activeImg ? "border-secondary scale-95 shadow-md" : "border-transparent opacity-70 hover:opacity-100"}`}
                  >
                    <Image src={img.url} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Sticky Details Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Pricing & Actions Box */}
              <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Asking Price</p>
                    <p className="text-2xl font-black text-secondary">Contact for Pricing</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => { navigator.clipboard.writeText(window.location.href); alert("Link copied!"); }}
                      className="p-2.5 bg-gray-50 border border-gray-200 rounded text-gray-500 hover:border-[#D62B2B] hover:text-[#D62B2B] transition-colors"
                      title="Share"
                    >
                      <FaShareNodes size={16} />
                    </button>
                    <button
                      onClick={() => setLiked(!liked)}
                      className="p-2.5 bg-gray-50 border border-gray-200 rounded text-gray-500 hover:border-[#D62B2B] transition-colors"
                      title="Save"
                    >
                      <FaHeart size={16} className={liked ? "text-[#D62B2B]" : ""} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 border-y border-gray-100 py-4">
                  {specsList.slice(0, 3).map(({ icon, label, value }) => (
                    <div key={label} className="text-center">
                      <div className="flex justify-center text-gray-400 mb-1">{icon}</div>
                      <p className="font-black text-primary text-xs truncate">{value}</p>
                      <p className="text-[9px] uppercase tracking-widest text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:0768351483"
                    className="flex items-center justify-center gap-2 w-full bg-secondary text-white py-3.5 rounded font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-colors shadow-md shadow-secondary/20"
                  >
                    <FaPhone size={16} /> Call Edwin
                  </a>
                  <a
                    href="https://wa.me/254768351483"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full border-2 border-green-500 text-green-600 bg-green-50 rounded py-3.5 font-black uppercase text-sm tracking-widest hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <FaWhatsapp size={16} /> WhatsApp Direct
                  </a>
                </div>
              </div>

              {/* Tabs for Details */}
              <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
                <div className="flex bg-gray-50 border-b border-gray-200 overflow-x-auto">
                  {(["overview", "features", "lead"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 min-w-[90px] px-4 py-3.5 text-[11px] font-black uppercase tracking-widest transition-colors ${activeTab === tab ? "bg-white border-b-2 border-secondary text-secondary" : "text-gray-500 hover:bg-gray-100"}`}
                    >
                      {tab === "lead" ? "Inquire" : tab}
                    </button>
                  ))}
                </div>

                <div className="p-6 min-h-[300px]">
                  {activeTab === "overview" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {vehicle.description || "Premium Isuzu vehicle available for sale. Contact us for more details."}
                      </p>
                      <div className="pt-4 space-y-3">
                        <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Full Specifications</h3>
                        {specsList.map(({ label, value }) => (
                          <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50 text-sm">
                            <span className="text-gray-500 font-bold">{label}</span>
                            <span className="font-black text-primary">{value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="space-y-3">
                        {(vehicle.features && vehicle.features.length > 0 ? vehicle.features : [
                          "Power Steering", "Air Conditioning", "ABS Brakes", "Dual Airbags",
                          "NTSA Compliant", "Parts Readily Available", "Fuel Efficient"
                        ]).map((f, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded">
                            <FaCircleCheck size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{f}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "lead" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <p className="text-xs text-gray-500 mb-4">Leave your details below and Edwin will get back to you immediately.</p>
                      <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />
                    </motion.div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center backdrop-blur-md"
            onClick={() => setLightbox(false)}
          >
            {/* Top Toolbar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
              <p className="text-white font-bold tracking-widest uppercase text-sm">
                {activeImg + 1} / {images.length}
              </p>
              <button className="text-white hover:text-secondary transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20">
                <FaXmark size={24} />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div className="relative w-full h-full max-w-7xl max-h-[85vh] mx-auto px-4 sm:px-12 flex items-center justify-center">
              <div className="relative w-full h-full cursor-zoom-out" onClick={(e) => e.stopPropagation()}>
                <Image src={primaryImg} alt={vehicle.model} fill className="object-contain" />
              </div>
            </div>

            {/* Controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p === 0 ? images.length - 1 : p - 1)); }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary p-4 bg-black/50 rounded-full transition-all hover:scale-110"
                ><FaChevronLeft size={28} /></button>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveImg(p => (p + 1) % images.length); }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary p-4 bg-black/50 rounded-full transition-all hover:scale-110"
                ><FaChevronRight size={28} /></button>
              </>
            )}

            {/* Thumbnail Strip in Lightbox */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-6 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
                {images.map((img, i) => (
                  <button
                    key={img.id || i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-14 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${i === activeImg ? "border-secondary" : "border-transparent opacity-50 hover:opacity-100"}`}
                  >
                    <Image src={img.url} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

