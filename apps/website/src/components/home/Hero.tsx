"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Vehicle } from "@/types/vehicle";

interface HeroProps {
  featuredVehicles: Vehicle[];
}

const isuzuSlides = [
  {
    id: "slide-dmax",
    eyebrow: "Best Seller · Pickup Truck",
    title: "ISUZU",
    highlight: "D-MAX",
    subtitle: "Kenya's Most Trusted Pickup Truck",
    body: "Built for rough terrain and long hauls. The D-Max delivers unmatched durability, power, and value across every road in Kenya.",
    image: "/vehicles/dmax-hero.png",
    cta: "Explore D-Max",
    ctaSecondary: "Book Test Drive",
    link: "/inventory?search=D-Max",
    linkSecondary: "/book-test-drive",
    badge: "BEST SELLER",
    accent: "#D62B2B",
  },
  {
    id: "slide-mux",
    eyebrow: "New Arrival · Premium SUV",
    title: "ISUZU",
    highlight: "mu-X",
    subtitle: "Premium 7-Seater Family SUV",
    body: "Command every road in style. The mu-X combines luxurious comfort with legendary Isuzu off-road capability for the whole family.",
    image: "/vehicles/mux-hero.png",
    cta: "Explore mu-X",
    ctaSecondary: "Request Quote",
    link: "/inventory?search=mu-X",
    linkSecondary: "/contact",
    badge: "NEW ARRIVAL",
    accent: "#D62B2B",
  },
  {
    id: "slide-truck",
    eyebrow: "Commercial Fleet · N-Series",
    title: "ISUZU",
    highlight: "N-SERIES",
    subtitle: "Commercial Trucks & Buses",
    body: "Powering Kenya's business forward. The N-Series range delivers reliable commercial performance for fleets of every size.",
    image: "/vehicles/nqr-hero.png",
    cta: "View Commercial",
    ctaSecondary: "Get a Quote",
    link: "/inventory?search=N-Series",
    linkSecondary: "/contact",
    badge: "COMMERCIAL",
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

      {/* ── Main content ── */}
      <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.div
            key={`eye-${currentSlide}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex items-center gap-3 mb-4 sm:mb-5"
          >
            <span className="bg-secondary text-white text-[10px] sm:text-xs font-black px-3 py-1 tracking-[0.18em] uppercase rounded-[2px]">
              {current.badge}
            </span>
            <div className="h-px w-10 bg-white/30" />
            <span className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest hidden sm:block">
              {current.eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
          >
            <h1 className="font-black uppercase leading-[0.9] tracking-tight text-white mb-3"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              {current.title}{" "}
              <span className="text-secondary">{current.highlight}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-white font-semibold mb-2 tracking-wide"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
          >
            {current.subtitle}
          </motion.p>

          {/* Body text */}
          <motion.p
            key={`body-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            {current.body}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link
              href={current.link}
              className="inline-flex items-center gap-2 bg-secondary text-white font-black uppercase text-xs sm:text-sm tracking-widest px-7 sm:px-10 py-3.5 sm:py-4 hover:bg-[#b82222] transition-all duration-200"
            >
              {current.cta}
              <ArrowRight size={16} strokeWidth={2.5} />
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
          <ChevronLeft size={20} />
        </button>
        <span className="text-white/50 font-black text-xs tabular-nums">
          {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
        </span>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-11 h-11 border border-white/30 text-white hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronRight size={20} />
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
              href="tel:+254700000000"
              className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-bold hover:text-white/80 transition-colors"
            >
              <Phone size={13} />
              <span className="hidden sm:inline">+254 700 000 000</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-bold hover:text-white/80 transition-colors"
            >
              <MessageSquare size={13} />
              WhatsApp
            </a>
          </div>
          <Link
            href="/inventory"
            className="text-white text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-1.5 sm:gap-2 hover:gap-3 sm:hover:gap-4 transition-all"
          >
            <span className="hidden sm:inline">View All Isuzu Vehicles</span>
            <span className="sm:hidden">View All</span>
            <ChevronRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
