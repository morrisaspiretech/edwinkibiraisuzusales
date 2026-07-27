"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Vehicle } from "@/types/vehicle";

// ── Verified Genuine Isuzu Images ──────────────────────────────────────────
const isuzuSlides = [
  {
    id: "slide-dmax",
    title: "ISUZU D-MAX",
    subtitle: "Kenya's Most Trusted Pickup Truck",
    tagline: "Built Tough. Built for Kenya.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600&q=80",
    cta: "Explore D-Max",
    ctaSecondary: "Book Test Drive",
    link: "/inventory?search=D-Max",
    linkSecondary: "/book-test-drive",
    badge: "BEST SELLER",
  },
  {
    id: "slide-mux",
    title: "ISUZU mu-X",
    subtitle: "Premium 7-Seater Family SUV",
    tagline: "Command Every Road in Style.",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1600&q=80",
    cta: "Explore mu-X",
    ctaSecondary: "Request Quote",
    link: "/inventory?search=mu-X",
    linkSecondary: "/contact",
    badge: "NEW ARRIVAL",
  },
  {
    id: "slide-truck",
    title: "ISUZU N-SERIES",
    subtitle: "Commercial Trucks & Buses",
    tagline: "Powering Kenya's Business Forward.",
    image: "https://images.unsplash.com/photo-1586191583539-be21063b00da?w=1600&q=80",
    cta: "View Commercial",
    ctaSecondary: "Get a Quote",
    link: "/inventory?search=N-Series",
    linkSecondary: "/contact",
    badge: "COMMERCIAL",
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
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const current = slides[currentSlide];

  return (
    <section className="relative h-[88vh] min-h-[600px] max-h-[900px] w-full overflow-hidden bg-primary">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            className="object-cover brightness-[0.35]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="bg-secondary text-white text-xs font-black px-4 py-1.5 tracking-[0.2em] uppercase">
              {current.badge}
            </span>
            <div className="h-[1px] w-16 bg-white/40" />
            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest">
              Edwin Kibira Isuzu Sales
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-8xl font-black text-white mb-3 uppercase leading-none tracking-tight"
          >
            {current.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={word === "D-MAX" || word === "mu-X" || word === "N-SERIES" ? "text-secondary" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-2xl md:text-3xl text-white font-light mb-2 tracking-wide"
          >
            {current.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-white/60 text-base mb-10 font-medium italic"
          >
            {current.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={current.link}
              className="bg-secondary text-white px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-accent-dark transition-all flex items-center gap-3"
            >
              {current.cta}
              <ChevronRight size={18} strokeWidth={3} />
            </Link>
            <Link
              href={current.ctaSecondary}
              className="border-2 border-white text-white px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all"
            >
              {current.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide
                ? "w-10 h-2.5 bg-secondary"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide Arrow Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        <button
          onClick={prevSlide}
          className="w-12 h-12 border border-white/30 text-white hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 border border-white/30 text-white hover:bg-secondary hover:border-secondary transition-all flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Quick Contact Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-secondary/90 backdrop-blur-sm hidden md:flex">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between py-3">
          <div className="flex items-center gap-8">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-white text-sm font-bold hover:text-white/80 transition-colors"
            >
              <Phone size={14} /> +254 700 000 000
            </a>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white text-sm font-bold hover:text-white/80 transition-colors"
            >
              <MessageSquare size={14} /> WhatsApp Us
            </a>
          </div>
          <Link
            href="/inventory"
            className="text-white text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
          >
            View All Isuzu Vehicles <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 w-full z-20 bg-white/10">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-secondary"
        />
      </div>
    </section>
  );
};

export default Hero;
