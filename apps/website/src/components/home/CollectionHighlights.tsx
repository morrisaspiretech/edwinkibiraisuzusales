"use client";

import React from "react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types/vehicle";
import { Car, Bike, Sparkles, Shield, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CollectionHighlightsProps {
  vehicles: Vehicle[];
}

const CollectionHighlights = ({ vehicles }: CollectionHighlightsProps) => {
  const suvCount = vehicles.filter(v => v.bodyType?.toLowerCase().includes("suv")).length;
  const sedanCount = vehicles.filter(v => v.bodyType?.toLowerCase().includes("sedan")).length;
  const bikeCount = vehicles.filter(v => v.category === "BIKE").length;

  const collections = [
    {
      title: "Luxury SUVs",
      count: suvCount,
      icon: <Car className="w-8 h-8" />,
      link: "/inventory?bodyType=SUV",
      desc: "Experience ultimate command and comfort."
    },
    {
      title: "Executive Sedans",
      count: sedanCount,
      icon: <Sparkles className="w-8 h-8" />,
      link: "/inventory?bodyType=Sedan",
      desc: "Sophistication meets high-performance."
    },
    {
      title: "Premium Bikes",
      count: bikeCount,
      icon: <Bike className="w-8 h-8" />,
      link: "/bikes",
      desc: "Pure adrenaline and engineering perfection."
    }
  ];

  return (
    <section className="py-24 bg-surface px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((col, index) => (
            <Link 
              key={col.title}
              href={col.link} 
              className="group bg-white p-10 border border-primary/5 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-accent/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
              
              <div className="bg-surface w-16 h-16 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                {col.icon}
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-primary uppercase">{col.title}</h3>
                  <span className="bg-primary text-white text-xs px-2.5 py-1 rounded-full font-extrabold tabular-nums">
                    {col.count}
                  </span>
                </div>
                <p className="text-sm text-primary/60 font-bold">{col.desc}</p>
              </div>

              <div className="mt-12 flex items-center gap-3 text-xs font-extrabold uppercase text-accent opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 tracking-widest leading-none">
                View Collection <ChevronRight size={14} strokeWidth={3} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionHighlights;
