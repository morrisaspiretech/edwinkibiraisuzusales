"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { ChevronRight, Shield, Star, Wrench, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CollectionHighlightsProps {
  vehicles: Vehicle[];
}

const categories = [
  {
    title: "Isuzu D-Max",
    type: "Pickup Trucks",
    desc: "Kenya's most versatile and powerful pickup truck. Built for rough terrain and long hauls.",
    image: "/vehicles/dmax-hero.png",
    link: "/inventory?search=D-Max",
    bodyType: "pickup",
    model: "d-max",
  },
  {
    title: "Isuzu mu-X",
    type: "SUV / Family Car",
    desc: "7-seater premium family SUV with commanding presence and legendary Isuzu reliability.",
    image: "/vehicles/mux-hero.png",
    link: "/inventory?search=mu-X",
    bodyType: "suv",
    model: "mu-x",
  },
  {
    title: "Isuzu N-Series",
    type: "Commercial Trucks & Buses",
    desc: "N-Series trucks, buses and coaches powering every business across Kenya.",
    image: "/vehicles/nqr-hero.png",
    link: "/inventory?search=N-Series",
    bodyType: "truck",
    model: "n-series",
  },
];

const whyUs = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Genuine Isuzu",
    desc: "Fully certified, factory-original vehicles with manufacturer warranty",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Best Prices",
    desc: "Competitive market-leading pricing with flexible financing options",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "After-Sales Support",
    desc: "Dedicated service centre with genuine Isuzu spare parts",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick Delivery",
    desc: "Fast processing and vehicle delivery right across Kenya",
  },
];

const CollectionHighlights = ({ vehicles }: CollectionHighlightsProps) => {
  const getCount = (bodyType: string, model: string) =>
    vehicles.filter(
      (v) =>
        v.bodyType?.toLowerCase().includes(bodyType) ||
        v.model?.toLowerCase().includes(model)
    ).length;

  return (
    <>
      {/* ── Vehicle Categories ── */}
      <section className="py-10 sm:py-14 bg-[#F7F7F7] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[3px] w-10 bg-secondary" />
              <span className="text-secondary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Our Isuzu Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase leading-tight">
              Find Your{" "}
              <span className="text-secondary">Isuzu</span>
            </h2>
          </div>

          {/* Category cards — real vehicle images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => {
              const count = getCount(cat.bodyType, cat.model);
              return (
                <Link
                  key={cat.title}
                  href={cat.link}
                  className="group bg-white border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Vehicle photo */}
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Red overlay on hover */}
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-all duration-300" />
                    {/* Stock badge */}
                    {count > 0 && (
                      <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-black px-2.5 py-1 uppercase tracking-widest">
                        {count} In Stock
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-secondary">
                        {cat.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-wide mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{cat.desc}</p>

                    {/* Arrow link */}
                    <div className="flex items-center gap-2 mt-5 text-xs font-black uppercase tracking-widest text-secondary">
                      View Models
                      <ChevronRight
                        size={14}
                        strokeWidth={3}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Edwin Kibira Isuzu ── */}
      <section className="py-10 sm:py-14 bg-[#1A1A1A] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-[3px] w-8 bg-secondary" />
              <span className="text-secondary font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
              <div className="h-[3px] w-8 bg-secondary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight">
              The Edwin Kibira{" "}
              <span className="text-secondary">Isuzu Difference</span>
            </h2>
          </div>

          {/* Why-us grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-5 sm:p-7 border border-white/8 hover:border-secondary/50 hover:bg-white/5 transition-all duration-300 group rounded-sm"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all duration-300 mb-4 rounded-sm">
                  {item.icon}
                </div>
                <h4 className="text-white font-black text-sm uppercase tracking-wide mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHighlights;
