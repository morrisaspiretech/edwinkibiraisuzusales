"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft, FaChevronRight, FaExpand, FaXmark,
  FaPhone, FaWhatsapp, FaCheck,
} from "react-icons/fa6";

interface Props {
  images: string[];
  title: string;
  description: string;
  quickSpecs: { engine: string; transmission: string; power: string; fuel: string };
  features: string[];
}

export default function VehicleGalleryClient({ images, title, description, quickSpecs, features }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

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
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const goNext = () => { setActiveImg(p => (p + 1) % images.length); resetZoom(); };
  const goPrev = () => { setActiveImg(p => (p === 0 ? images.length - 1 : p - 1)); resetZoom(); };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({ x: dragStart.current.panX + (e.clientX - dragStart.current.x), y: dragStart.current.panY + (e.clientY - dragStart.current.y) });
  };
  const handleMouseUp = () => setIsDragging(false);

  return (
    <>
      {/* ── SPLIT: GALLERY + DETAILS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200" style={{ minHeight: "85vh" }}>

        {/* LEFT: Interactive Image Gallery */}
        <div className="lg:col-span-7 bg-[#0d0d0d] flex flex-col" style={{ minHeight: "55vh" }}>

          {/* Main Viewer */}
          <div
            className="relative flex-1 overflow-hidden select-none"
            style={{ minHeight: 420, cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "crosshair" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
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
                {/* Zoom/Pan layer — separate from Framer so transforms don't conflict */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.15s ease-out",
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
                <button
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D62B2B] text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#D62B2B] text-white p-3 rounded-full transition-all z-10 hover:scale-110 backdrop-blur-sm"
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* Zoom Controls + Fullscreen */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
              <button
                onClick={zoomOut}
                className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full font-black text-xl transition-all backdrop-blur-sm"
                title="Zoom Out"
              >−</button>
              <span
                onClick={resetZoom}
                className="bg-black/70 text-white text-xs font-bold px-3 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-all backdrop-blur-sm select-none"
              >{Math.round(zoom * 100)}%</span>
              <button
                onClick={zoomIn}
                className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full font-black text-xl transition-all backdrop-blur-sm"
                title="Zoom In"
              >+</button>
              <button
                onClick={() => setLightbox(true)}
                className="bg-black/70 hover:bg-[#D62B2B] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all backdrop-blur-sm"
                title="View Fullscreen"
              >
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
                    className={`relative flex-shrink-0 rounded-sm overflow-hidden transition-all border-2 ${i === activeImg
                      ? "border-[#D62B2B] opacity-100"
                      : "border-transparent opacity-40 hover:opacity-80 hover:border-white/30"
                    }`}
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
            <div className="p-7 lg:p-9 space-y-8">

              {/* Description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[3px] w-10 bg-[#D62B2B] flex-shrink-0" />
                  <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Overview</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
              </div>

              {/* Quick Specs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[3px] w-10 bg-[#D62B2B] flex-shrink-0" />
                  <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Quick Specs</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Engine", value: quickSpecs.engine },
                    { label: "Transmission", value: quickSpecs.transmission },
                    { label: "Power", value: quickSpecs.power },
                    { label: "Fuel", value: quickSpecs.fuel },
                  ].map(spec => (
                    <div key={spec.label} className="bg-[#f7f7f7] border-l-4 border-[#D62B2B] px-4 py-3">
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-sm font-black text-[#1a1a1a] leading-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[3px] w-10 bg-[#D62B2B] flex-shrink-0" />
                  <span className="text-[#D62B2B] font-black text-[10px] uppercase tracking-widest">Key Features</span>
                </div>
                <div className="space-y-2.5">
                  {features.slice(0, 8).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D62B2B]/10 flex items-center justify-center mt-0.5">
                        <FaCheck size={10} className="text-[#D62B2B]" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-3 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Ready to own this vehicle?</p>
                <a
                  href="tel:0768351483"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#D62B2B] text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b01e1e] transition-colors shadow-lg shadow-red-100 rounded-sm"
                >
                  <FaPhone size={16} /> Call Edwin — 0768 351 483
                </a>
                <a
                  href="https://wa.me/254768351483"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-4 font-black uppercase text-sm tracking-widest hover:bg-[#1ebe5c] transition-colors rounded-sm"
                >
                  <FaWhatsapp size={18} /> WhatsApp Us
                </a>
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
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-10">
              <span className="text-white/70 font-bold text-sm">{activeImg + 1} / {images.length}</span>
              <button onClick={(e) => { e.stopPropagation(); setLightbox(false); }} className="text-white hover:text-[#D62B2B] bg-white/10 p-3 rounded-full transition-all hover:scale-110">
                <FaXmark size={22} />
              </button>
            </div>

            {/* Image */}
            <div
              className="relative w-full flex-1 max-w-6xl mx-auto px-16"
              style={{ maxHeight: "80vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={currentImg} alt={title} fill className="object-contain" />
            </div>

            {/* Navigation */}
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

            {/* Lightbox Thumbnails */}
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
