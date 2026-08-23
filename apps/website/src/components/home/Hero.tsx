"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPhone, FaArrowRight, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VEHICLES_DATA } from "@/data/vehicles";

// We select 3 real vehicles from our data to feature in the hero section
const featuredIds = ["double-cabin", "mu-x-3000cc", "light-trucks-n-series"];

// Staggered text reveal variants
const textContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0, // No delay! Starts immediately
    }
  }
};

const textItemVariant: any = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", damping: 15, stiffness: 100 }
  }
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const pathname = usePathname();
  
  // Build dynamic slides from real vehicle data
  const slides = featuredIds.map((id, index) => {
    const vehicle = VEHICLES_DATA[id as keyof typeof VEHICLES_DATA];
    
    return {
      id: vehicle.id,
      eyebrow: `${vehicle.category} · Brand New`,
      title: "ISUZU",
      highlight: vehicle.title,
      subtitle: vehicle.description.split('.')[0] + ".", // First sentence of description
      body: vehicle.description,
      image: vehicle.heroImage,
      video: index === 0 ? "/videos/hero.mp4" : undefined, // Only use video for the first slide as an atmospheric background
      cta: `Explore ${vehicle.category}`,
      ctaSecondary: "Get a Quote",
      link: `/vehicles/${vehicle.id}`,
      linkSecondary: "/get-quote",
      badge: "AVAILABLE NOW",
      specs: [
        { label: "Engine", value: vehicle.quickSpecs.engine },
        { label: "Power", value: vehicle.quickSpecs.power },
        { label: "Transmission", value: vehicle.quickSpecs.transmission },
      ]
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentSlide];
  
  const getWhatsAppMessage = () => {
    let message = "Hi Edwin, I'm interested in buying an Isuzu vehicle and would like to get more details.";
    if (pathname === "/") {
      message = `Hi Edwin, I was on your website homepage and I'm interested in the ${current.title} ${current.highlight}.`;
    }
    return encodeURIComponent(message);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#111] hero-section" style={{ height: "92vh", minHeight: 600, maxHeight: 950 }}>

      {/* ── Background: Cinematic Ken Burns Effect ── */}
      {/* Removed mode="wait" so backgrounds crossfade instantly without delay */}
      <AnimatePresence>
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 12, ease: "linear" } 
          }}
          className="absolute inset-0 z-0 origin-center"
        >
          {current.video ? (
            <video
              src={current.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={current.image}
              alt={current.title + " " + current.highlight}
              fill
              priority
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Dark overlays for text readability ── */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
        <motion.div
          key={`bar-${currentSlide}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-[#D62B2B]"
        />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between pb-24">
        
        {/* Left Side: Text Content */}
        <div className="max-w-3xl mt-8 w-full">
          {/* Eyebrow badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#D62B2B] text-white text-[10px] sm:text-xs font-black px-4 py-1.5 uppercase tracking-widest shadow-lg">
              {current.badge}
            </span>
            <span className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {current.eyebrow}
            </span>
          </motion.div>

          {/* Staggered Main Title & Subtitle */}
          <motion.div
            key={`text-${currentSlide}`}
            variants={textContainerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={textItemVariant} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight text-white mb-3">
              {current.title}
            </motion.h1>
            <motion.h1 variants={textItemVariant} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight text-[#D62B2B] mb-6 drop-shadow-md">
              {current.highlight}
            </motion.h1>
            
            <motion.p variants={textItemVariant} className="text-white font-bold mb-4 text-lg sm:text-xl md:text-2xl drop-shadow-md line-clamp-2">
              {current.subtitle}
            </motion.p>

            <motion.p variants={textItemVariant} className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-xl font-medium line-clamp-3">
              {current.body}
            </motion.p>
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8"
          >
            <Link
              href={current.link}
              className="inline-flex items-center gap-2 bg-[#D62B2B] text-white font-black uppercase text-xs sm:text-sm tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:bg-[#b82222] transition-all duration-300 shadow-lg group"
            >
              {current.cta}
              <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={current.linkSecondary}
              className="inline-flex items-center gap-2 border border-white/40 bg-white/5 backdrop-blur-sm text-white font-black uppercase text-xs sm:text-sm tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
            >
              {current.ctaSecondary}
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Glassmorphism Spec Cards (Desktop Only) */}
        <div className="hidden lg:flex flex-col gap-4 mt-12 mr-12 perspective-1000">
           <AnimatePresence mode="wait">
             <motion.div
               key={`specs-${currentSlide}`}
               initial={{ opacity: 0, x: 30, rotateY: -10 }}
               animate={{ opacity: 1, x: 0, rotateY: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
               className="flex flex-col gap-4"
             >
               {current.specs.map((spec, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-lg shadow-2xl w-64 transform transition-transform hover:scale-105 hover:bg-white/15">
                   <p className="text-[#D62B2B] text-[10px] font-black uppercase tracking-widest mb-1">{spec.label}</p>
                   <p className="text-white text-lg font-bold">{spec.value}</p>
                 </div>
               ))}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* ── Slide Controls ── */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-12 h-12 border border-white/20 rounded-full text-white hover:bg-[#D62B2B] hover:border-[#D62B2B] transition-all flex items-center justify-center backdrop-blur-md hover:scale-110"
        >
          <FaChevronLeft size={16} />
        </button>
        <span className="text-white/80 font-black text-xs tabular-nums drop-shadow-md">
          {String(currentSlide + 1).padStart(2, "0")}<span className="text-white/30">/{String(slides.length).padStart(2, "0")}</span>
        </span>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-12 h-12 border border-white/20 rounded-full text-white hover:bg-[#D62B2B] hover:border-[#D62B2B] transition-all flex items-center justify-center backdrop-blur-md hover:scale-110"
        >
          <FaChevronRight size={16} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-20 sm:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-500 ${
              idx === currentSlide
                ? "w-10 sm:w-12 h-1.5 sm:h-2 bg-[#D62B2B] shadow-[0_0_10px_rgba(214,43,43,0.8)]"
                : "w-2 sm:w-2.5 h-1.5 sm:h-2 bg-white/30 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Quick Contact Strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/80 border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between py-3">
          <div className="flex items-center gap-6 sm:gap-10">
            <a
              href="tel:0768351483"
              className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-bold hover:text-white transition-colors group"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                 <FaPhone size={10} />
              </div>
              <span className="hidden sm:inline">0768 351 483</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={`https://wa.me/254768351483?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-bold hover:text-white transition-colors group"
            >
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 shadow-[0_0_10px_rgba(37,211,102,0.4)] transition-transform">
                 <FaWhatsapp size={12} className="text-white" />
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
          <Link
            href="/vehicles"
            className="text-white text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#D62B2B] transition-colors group"
          >
            <span className="hidden sm:inline border-b border-transparent group-hover:border-[#D62B2B] transition-colors">Browse All Vehicles</span>
            <span className="sm:hidden">View All</span>
            <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
