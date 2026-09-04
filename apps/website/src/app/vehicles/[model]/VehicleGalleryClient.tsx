"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft, FaChevronRight, FaExpand, FaXmark,
  FaPhone, FaWhatsapp, FaCheck, FaTruck,
} from "react-icons/fa6";
import type { VehicleVariant, VehicleSpec } from "@/data/vehicles";
import CompareCheckbox from "@/components/inventory/CompareCheckbox";
import FavouriteButton from "@/components/inventory/FavouriteButton";

interface Props {
  vehicleId: string;
  images: string[];
  title: string;
  description: string;
  quickSpecs: { engine: string; transmission: string; power?: string; payload?: string; fuel: string };
  features: string[];
  variants?: VehicleVariant[];
  price?: VehicleSpec["price"];
}

export default function VehicleGalleryClient({ vehicleId, images, title, description, quickSpecs, features, variants, price }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const currentImg = images[activeImg] || images[0] || "";
  const resetZoom = () => { setZoom(1); setPan({ x: 0, y: 0 }); };
  const zoomIn = () => setZoom(z => Math.min(parseFloat((z + 0.5).toFixed(1)), 4));
  const zoomOut = () => setZoom(z => {
    const next = parseFloat((z - 0.5).toFixed(1));
    if (next <= 1) { setPan({ x: 0, y: 0 }); return 1; }
    return next;
  });
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn(); else zoomOut();
  };
  const goNext = () => { setActiveImg(p => (p + 1) % images.length); resetZoom(); };
  const goPrev = () => { setActiveImg(p => (p === 0 ? images.length - 1 : p - 1)); resetZoom(); };
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) { setIsDragging(true); dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y }; }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: dragStart.current.panX + (e.clientX - dragStart.current.x), y: dragStart.current.panY + (e.clientY - dragStart.current.y) });
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleParallaxMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: nx * 14, y: ny * 14 });
  };

  return (
    <>
      {/* ── SPLIT: GALLERY + DETAILS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200" style={{ minHeight: "85vh" }}>

        {/* LEFT: Interactive Image Gallery */}
        <div className="lg:col-span-7 bg-[#0d0d0d] flex flex-col" style={{ minHeight: "55vh" }}>
          <div
            ref={imgContainerRef}
            className="relative flex-1 overflow-hidden select-none"
            style={{ minHeight: 420, cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
            onMouseDown={handleMouseDown}
            onMouseMove={(e) => { handleMouseMove(e); handleParallaxMove(e); }}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { handleMouseUp(); setIsHovered(false); setParallax({ x: 0, y: 0 }); }}
            onWheel={handleWheel}
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
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    transform: !mounted
                      ? "scale(1)"
                      : zoom > 1
                        ? `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`
                        : `scale(1.06) translate(${parallax.x}px, ${parallax.y}px)`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.12s ease-out",
                    cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                >
                  <Image
                    src={currentImg}
                    alt={`${title} - view ${activeImg + 1}`}
                    fill
                    className="object-contain p-6"
                    priority={activeImg === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 backdrop-blur-sm">
              {activeImg + 1} / {images.length}
            </div>

            {/* Arrow Navigation */}
            {images.length > 1 && (
              <>
                <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D62B2B] text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm">
                  <FaChevronLeft size={20} />
                </button>
                <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D62B2B] text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm">
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* Zoom Controls + Fullscreen */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
              <button onClick={zoomOut} className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full font-black text-xl transition-all backdrop-blur-sm" title="Zoom Out">−</button>
              <span onClick={resetZoom} className="bg-black/70 text-white text-xs font-bold px-3 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-all backdrop-blur-sm select-none">{Math.round(zoom * 100)}%</span>
              <button onClick={zoomIn} className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full font-black text-xl transition-all backdrop-blur-sm" title="Zoom In">+</button>
              <button onClick={() => setLightbox(true)} className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all backdrop-blur-sm" title="View Fullscreen">
                <FaExpand size={15} />
              </button>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {images.length > 1 && (
            <div className="bg-[#0a0a0a] border-t border-white/10 p-3 flex-shrink-0">
              <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin", scrollbarColor: "#D62B2B #1a1a1a" }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveImg(i); resetZoom(); }}
                    className={`relative flex-shrink-0 rounded-sm overflow-hidden transition-all border-2 ${i === activeImg ? "border-[#D62B2B] opacity-100" : "border-transparent opacity-40 hover:opacity-80 hover:border-white/30"}`}
                    style={{ width: 80, height: 58 }}
                    title={`View image ${i + 1}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Sticky Details Sidebar */}
        <div className="lg:col-span-5 bg-white border-l border-gray-100">
          <div className="lg:sticky lg:top-20 overflow-y-auto" style={{ maxHeight: "calc(100vh - 80px)" }}>
            <div className="divide-y divide-gray-50">

              {/* OVERVIEW */}
              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="h-[2px] w-6 bg-[#D62B2B] flex-shrink-0" />
                  <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Overview</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm font-normal">{description}</p>
              </div>

              {/* QUICK SPECS */}
              <div className="p-5 lg:p-6">
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-[2px] w-6 bg-[#D62B2B] flex-shrink-0" />
                    <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Quick Specs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CompareCheckbox vehicleId={vehicleId} />
                    <FavouriteButton vehicleId={vehicleId} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Engine", value: quickSpecs.engine },
                    { label: "Transmission", value: quickSpecs.transmission },
                    quickSpecs.power
                      ? { label: "Power", value: quickSpecs.power }
                      : quickSpecs.payload
                        ? { label: "Payload", value: quickSpecs.payload }
                        : null,
                    { label: "Fuel", value: quickSpecs.fuel },
                  ].filter(Boolean).map(spec => (
                    <div key={spec!.label} className="group bg-gray-50/90 hover:bg-[#1a1a1a] transition-all duration-200 rounded-lg px-3 py-2.5 border border-gray-100 hover:border-[#D62B2B]">
                      <p className="text-[9px] text-gray-400 group-hover:text-gray-400 font-black uppercase tracking-wider mb-0.5">{spec!.label}</p>
                      <p className="text-xs sm:text-sm font-black text-[#1a1a1a] group-hover:text-white leading-snug">{spec!.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRICE BLOCK */}
              {price && (price.chassisPrice || price.withBodyPrice || price.unitPrice) && (
                <div className="px-5 lg:px-6 py-3">
                  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-[#D62B2B] px-4 py-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/90 flex-shrink-0" />
                      <span className="text-white font-black text-[9px] uppercase tracking-widest">
                        {price.label ? `${price.label} Price` : "Price"}
                      </span>
                    </div>
                    <div className="px-4 py-3 space-y-2.5">
                      {price.chassisPrice && (
                        <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-white/10">
                          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">Chassis</span>
                          <span className="text-white font-black text-lg tabular-nums">{price.chassisPrice}</span>
                        </div>
                      )}
                      {price.withBodyPrice && (
                        <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-white/10">
                          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">With Body</span>
                          <span className="text-[#D62B2B] font-black text-lg tabular-nums">{price.withBodyPrice}</span>
                        </div>
                      )}
                      {price.unitPrice && (
                        <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-white/10">
                          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">{price.label ?? "Unit"}</span>
                          <span className="text-[#D62B2B] font-black text-xl tabular-nums">{price.unitPrice}</span>
                        </div>
                      )}
                      <p className="text-gray-400 text-[8.5px] font-medium leading-tight">
                        * Prices are indicative. Contact Edwin for current offers, colour options &amp; financing.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* VARIANTS PRICING TABLE */}
              {variants && variants.length > 0 && (
                <div className="px-5 lg:px-6 py-4">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="h-[2px] w-6 bg-[#D62B2B] flex-shrink-0" />
                    <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Model Range &amp; Pricing</span>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-gray-100">
                    <table className="min-w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-[#1a1a1a] text-white">
                          <th className="text-left px-3 py-2.5 font-black uppercase tracking-wider text-[9px] whitespace-nowrap">Model</th>
                          <th className="text-center px-3 py-2.5 font-black uppercase tracking-wider text-[9px] whitespace-nowrap">Payload</th>
                          <th className="text-center px-3 py-2.5 font-black uppercase tracking-wider text-[9px] whitespace-nowrap">Drive</th>
                          <th className="text-right px-3 py-2.5 font-black uppercase tracking-wider text-[9px] whitespace-nowrap">Chassis</th>
                          <th className="text-right px-3 py-2.5 font-black uppercase tracking-wider text-[9px] whitespace-nowrap">With Body</th>
                        </tr>
                      </thead>
                      <tbody>
                        {variants.map((v, i) => (
                          <tr key={v.model} className={`border-b border-gray-50 transition-colors hover:bg-red-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                            <td className="px-3 py-2.5">
                              <div className="flex items-center gap-2">
                                <FaTruck size={10} className="text-[#D62B2B] flex-shrink-0" />
                                <div>
                                  <p className="font-black text-[#1a1a1a] text-xs uppercase tracking-wide">{v.model}</p>
                                  {v.power && <p className="text-[9px] text-gray-400 font-semibold">{v.power}</p>}
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-2.5 text-center"><span className="font-bold text-[#1a1a1a] text-[11px]">{v.payload}</span></td>
                            <td className="px-3 py-2.5 text-center">
                              <span className={`inline-block px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded ${v.drive === "4×4" ? "bg-amber-100 text-amber-700 border border-amber-200" : "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                                {v.drive}
                              </span>
                            </td>
                            <td className="px-3 py-2.5 text-right"><p className="font-black text-[11px] text-[#1a1a1a] whitespace-nowrap">{v.chassisPrice}</p></td>
                            <td className="px-3 py-2.5 text-right"><p className="font-black text-[11px] text-[#D62B2B] whitespace-nowrap">{v.withBodyPrice}</p></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[8.5px] text-gray-400 mt-1.5 font-medium italic">* Prices are indicative. Contact Edwin for current offers &amp; financing.</p>
                </div>
              )}

              {/* KEY FEATURES */}
              {features && features.length > 0 && (
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className="h-[2px] w-6 bg-[#D62B2B] flex-shrink-0" />
                    <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Key Features</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.slice(0, 8).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-50/80 hover:bg-red-50/40 transition-colors rounded-lg px-3 py-2 border border-gray-100">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D62B2B] flex items-center justify-center shadow-xs">
                          <FaCheck size={7.5} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-800 font-semibold leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA BUTTONS */}
              <div className="p-5 lg:p-6 bg-gray-50/80 border-t border-gray-100">
                <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-2.5">Ready to own this vehicle?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href="tel:0768351483"
                    className="flex items-center justify-center gap-2 w-full bg-[#D62B2B] text-white py-3 font-black uppercase text-xs tracking-wider hover:bg-[#b01e1e] transition-colors shadow-md shadow-red-100 rounded-lg"
                  >
                    <FaPhone size={13} /> Call Edwin
                  </a>
                  <a
                    href="https://wa.me/254768351483"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 font-black uppercase text-xs tracking-wider hover:bg-[#1ebe5c] transition-colors shadow-md shadow-green-100 rounded-lg"
                  >
                    <FaWhatsapp size={15} /> WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/98 flex flex-col items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-10">
              <span className="text-white/70 font-bold text-sm">{activeImg + 1} / {images.length}</span>
              <button onClick={(e) => { e.stopPropagation(); setLightbox(false); }} className="text-white hover:text-[#D62B2B] bg-white/10 p-3 rounded-full transition-all hover:scale-110">
                <FaXmark size={22} />
              </button>
            </div>

            <div className="relative w-full flex-1 max-w-6xl mx-auto px-16" style={{ maxHeight: "80vh" }} onClick={(e) => e.stopPropagation()}>
              <Image src={currentImg} alt={title} fill className="object-contain" />
            </div>

            {images.length > 1 && (
              <>
                <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#D62B2B] text-white p-4 rounded-full transition-all hover:scale-110">
                  <FaChevronLeft size={26} />
                </button>
                <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#D62B2B] text-white p-4 rounded-full transition-all hover:scale-110">
                  <FaChevronRight size={26} />
                </button>
              </>
            )}

            {images.length > 1 && (
              <div className="flex gap-2 px-6 py-5 overflow-x-auto flex-shrink-0 z-10" onClick={(e) => e.stopPropagation()}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative flex-shrink-0 rounded overflow-hidden border-2 transition-all ${i === activeImg ? "border-[#D62B2B] scale-95" : "border-transparent opacity-40 hover:opacity-90"}`}
                    style={{ width: 72, height: 50 }}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
