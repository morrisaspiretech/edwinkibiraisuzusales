"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Vehicle } from "@/types/vehicle";
import Link from "next/link";

interface HeroProps {
  featuredVehicles: Vehicle[];
}

const Hero = ({ featuredVehicles }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback slides if no featured vehicles
  const defaultSlides = [
    {
      id: "fallback-1",
      title: "DRIVE EXCELLENCE",
      subtitle: "Experience Kenya's Finest Luxury SUVs",
      image: "/hero-car.png",
      cta: "Browse SUVs",
      link: "/inventory?search=SUV"
    },
    {
      id: "fallback-2",
      title: "EXECUTIVE PRESENCE",
      subtitle: "Discover Our Range of Premium Sedans",
      image: "/hero-car.png",
      cta: "Explore Sedans",
      link: "/inventory?search=Sedan"
    },
  ];

  // Always use the default hardcoded slides for the Hero to preserve the exact aesthetic
  const slides = defaultSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[800px] w-full overflow-hidden bg-primary flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-accent font-extrabold text-sm uppercase tracking-widest">
              {('featured' in slides[currentSlide]) ? (slides[currentSlide] as any).featured : "Aspire Motors Premium"}
            </span>
          </motion.div>

          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.85] uppercase tracking-tighter"
          >
            {slides[currentSlide].title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-accent block" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p 
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl font-bold uppercase tracking-wide"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              href={slides[currentSlide].link}
              className="bg-accent text-primary px-10 py-5 font-extrabold uppercase text-base hover:bg-white transition-all shadow-2xl flex items-center gap-3 rounded-sm"
            >
              {slides[currentSlide].cta}
              <ChevronRight size={20} strokeWidth={3} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Quick Access Categories Cards */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-primary via-primary/80 to-transparent pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 translate-y-6"
          >
            {[
              { title: "Luxury SUVs", tag: "SUV", icon: "/icons/suv-icon.svg", link: "/inventory?search=SUV" },
              { title: "Superbikes", tag: "Bike", icon: "/icons/bike-icon.svg", link: "/bikes" },
              { title: "Performance Sedans", tag: "Sedan", icon: "/icons/sedan-icon.svg", link: "/inventory?search=Sedan" },
              { title: "View All Features", tag: "All", icon: "/icons/all-icon.svg", link: "/inventory" },
            ].map((category, idx) => (
              <Link 
                key={category.tag} 
                href={category.link}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-6 hover:border-accent/50 transition-all duration-300",
                  idx === 3 ? "bg-accent/10 border-accent/20 hover:bg-accent hover:text-primary" : ""
                )}
              >
                <div className="flex flex-col h-full justify-between gap-4">
                  <span className={cn(
                    "font-extrabold uppercase tracking-widest text-sm",
                    idx === 3 ? "text-accent group-hover:text-primary" : "text-white/60 group-hover:text-white"
                  )}>
                    {category.tag}
                  </span>
                  <div className="flex items-end justify-between">
                    <h3 className={cn(
                      "font-bold text-lg leading-tight uppercase",
                      idx === 3 ? "text-white group-hover:text-primary" : "text-white"
                    )}>
                      {category.title.split(" ").map((w, i) => (
                        <span key={i} className="block">{w}</span>
                      ))}
                    </h3>
                    <ChevronRight size={20} className={cn(
                      "opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                      idx === 3 ? "text-primary" : "text-accent"
                    )} />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        <button onClick={prevSlide} className="p-3 border border-white/20 text-white hover:bg-accent hover:text-primary transition-all rounded-full bg-white/5 backdrop-blur-md">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-3 border border-white/20 text-white hover:bg-accent hover:text-primary transition-all rounded-full bg-white/5 backdrop-blur-md">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-accent/20 w-full z-20">
        <motion.div 
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-accent"
        />
      </div>
    </section>
  );
};

export default Hero;
