"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaMessage, FaChevronLeft, FaChevronRight, FaPhone, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Vehicle } from "@/types/vehicle";

interface HeroProps {
  featuredVehicles: Vehicle[];
}

const isuzuSlides = [
  {
    id: "slide-dmax",
    eyebrow: "Best Seller · Pickup Truck",
    title: "Edwin Kibira",
    highlight: "Isuzu Sales",
    subtitle: "Your Trusted Authorised Isuzu Dealer in Kenya",
    body: "Buy brand-new, zero-mileage Isuzu trucks, buses & pickups in Kenya. Edwin Kibira Isuzu Sales — serving Kenyans with pride.",
    image: "/vehicles/dmax-hero.png",
    cta: "Browse Pickups",
    ctaSecondary: "Book a Test Drive",
    link: "/vehicles/double-cabin",
    linkSecondary: "/book-test-drive",
    badge: "AUTHORISED DEALER",
    accent: "#D62B2B",
  },
  {
    id: "slide-mux",
    eyebrow: "Premium SUV · Zero Mileage",
    title: "ISUZU",
    highlight: "mu-X",
    subtitle: "Premium 7-Seater Family SUV — Brand New",
    body: "Command every road in style. The Isuzu mu-X combines luxurious comfort with legendary off-road capability. Up to 100% bank financing available.",
    image: "/vehicles/mux-hero.png",
    cta: "View mu-X SUV",
    ctaSecondary: "Request Quote",
    link: "/vehicles/mu-x-3000cc",
    linkSecondary: "/contact",
    badge: "NEW · ZERO MILEAGE",
    accent: "#D62B2B",
  },
  {
    id: "slide-truck",
    eyebrow: "Commercial Fleet · N & F Series",
    title: "ISUZU",
    highlight: "Trucks & Buses",
    subtitle: "Heavy Duty Commercial Vehicles",
    body: "Powering Kenyan businesses forward. Our N-Series and F-Series trucks and buses deliver unmatched reliability for every fleet size.",
    image: "/vehicles/n-series-truck.webp",
    cta: "View Trucks",
    ctaSecondary: "Get a Quote",
    link: "/vehicles/light-trucks-n-series",
    linkSecondary: "/contact",
    badge: "COMMERCIAL FLEET",
    accent: "#D62B2B",
  },
];

const Hero = ({ featuredVehicles }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = isuzuSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#111] hero-section" style={{ height: "92vh", minHeight: 560, maxHeight: 900 }}>

      {/* ── Background Image ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`img-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title + " " + current.highlight}
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.55)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Gradient: left-heavy so text is always readable ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30">
        <motion.div
          key={`bar-${currentSlide}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-secondary"
        />
      </div>

      {/* ── Background Image with 'Moving' Animation ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for text readability */}
          <motion.div
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ── Content ── */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col justify-center">
        <div className="max-w-3xl mt-20">
          {/* Eyebrow badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-secondary text-white text-[10px] sm:text-xs font-black px-4 py-1.5 uppercase tracking-widest shadow-lg">
              {current.badge}
            </span>
            <span className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {current.eyebrow}
            </span>
          </motion.div>

          {/* Main Title - Fixed Typography */}
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight text-white mb-4">
              {current.title}{" "}
              <span className="text-secondary block sm:inline">{current.highlight}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white/90 font-bold mb-4 text-lg sm:text-xl md:text-2xl"
          >
            {current.subtitle}
          </motion.p>

          {/* Body text */}
          <motion.p
            key={`body-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl font-medium"
          >
            {current.body}
          </motion.p>

        {/* ── CTA Buttons ── */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8"
          >
            <Link
              href={current.link}
              className="inline-flex items-center gap-2 bg-secondary text-white font-black uppercase text-xs sm:text-sm tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:bg-[#b82222] transition-all duration-200"
            >
              {current.cta}
              <FaArrowRight size={16} />
            </Link>
            <Link
              href={current.linkSecondary}
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-black uppercase text-xs sm:text-sm tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:bg-white hover:text-[#1A1A1A] transition-all duration-200"
            >
              {current.ctaSecondary}
            </Link>
          </motion.div>



        </div>
      </div>

      {/* ── Slide counter (desktop) ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-11 h-11 border border-white/30 text-white hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center backdrop-blur-sm"
        >
          <FaChevronLeft size={20} />
        </button>
        <span className="text-white/50 font-black text-xs tabular-nums">
          {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-11 h-11 border border-white/30 text-white hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center backdrop-blur-sm"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-16 sm:bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-secondary"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>

      {/* ── Quick Contact Strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-secondary/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between py-2.5 sm:py-3">
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="tel:0768351483"
              className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-bold hover:text-white/80 transition-colors"
            >
              <FaPhone size={13} />
              <span className="hidden sm:inline">0768 351 483</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/254768351483"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-bold hover:text-white/80 transition-colors"
            >
              <FaMessage size={13} />
              WhatsApp
            </a>
          </div>
          <Link
            href="/vehicles"
            className="text-white text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-1.5 sm:gap-2 hover:gap-3 sm:hover:gap-4 transition-all"
          >
            <span className="hidden sm:inline">Browse All Vehicles</span>
            <span className="sm:hidden">View All</span>
            <FaChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
