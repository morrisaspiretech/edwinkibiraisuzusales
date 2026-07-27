"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { Truck, Car, Bus, ChevronRight, Shield, Clock, Star, Wrench } from "lucide-react";
import Link from "next/link";

interface CollectionHighlightsProps {
  vehicles: Vehicle[];
}

const CollectionHighlights = ({ vehicles }: CollectionHighlightsProps) => {
  const pickupCount = vehicles.filter(
    (v) => v.bodyType?.toLowerCase().includes("pickup") || v.model?.toLowerCase().includes("d-max")
  ).length;
  const suvCount = vehicles.filter(
    (v) => v.bodyType?.toLowerCase().includes("suv") || v.model?.toLowerCase().includes("mu-x")
  ).length;
  const commercialCount = vehicles.filter(
    (v) =>
      v.bodyType?.toLowerCase().includes("truck") ||
      v.bodyType?.toLowerCase().includes("bus") ||
      v.model?.toLowerCase().includes("n-series")
  ).length;

  const collections = [
    {
      title: "D-Max Pickups",
      count: pickupCount,
      icon: <Truck className="w-8 h-8" />,
      link: "/inventory?search=D-Max",
      desc: "Kenya's most versatile and powerful pickup truck.",
      color: "from-secondary/10 to-secondary/5",
    },
    {
      title: "mu-X SUVs",
      count: suvCount,
      icon: <Car className="w-8 h-8" />,
      link: "/inventory?search=mu-X",
      desc: "7-seater premium family SUV with commanding presence.",
      color: "from-secondary/10 to-secondary/5",
    },
    {
      title: "Commercial Vehicles",
      count: commercialCount,
      icon: <Bus className="w-8 h-8" />,
      link: "/inventory?search=N-Series",
      desc: "N-Series trucks, buses and coaches for every business.",
      color: "from-secondary/10 to-secondary/5",
    },
  ];

  const whyUs = [
    { icon: <Shield className="w-6 h-6" />, title: "Genuine Isuzu", desc: "Fully certified, factory-original vehicles" },
    { icon: <Star className="w-6 h-6" />, title: "Best Prices", desc: "Competitive market-leading pricing" },
    { icon: <Wrench className="w-6 h-6" />, title: "After-Sales Support", desc: "Dedicated service and spare parts" },
    { icon: <Clock className="w-6 h-6" />, title: "Quick Delivery", desc: "Fast processing and vehicle delivery" },
  ];

  return (
    <>
      {/* ── Vehicle Categories ── */}
      <section className="py-20 bg-surface px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[3px] w-12 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">
                Our Isuzu Range
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-tight">
              Find Your<br />
              <span className="text-secondary">Isuzu Vehicle</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col) => (
              <Link
                key={col.title}
                href={col.link}
                className="group bg-white border border-gray-100 hover:border-secondary/40 shadow-sm hover:shadow-xl transition-all duration-400 relative overflow-hidden"
              >
                {/* Red top accent */}
                <div className="h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500" />

                <div className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all duration-300 mb-6">
                    {col.icon}
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-black text-primary uppercase tracking-wide">
                      {col.title}
                    </h3>
                    <span className="bg-primary text-white text-xs px-2.5 py-1 font-extrabold tabular-nums min-w-[28px] text-center">
                      {col.count || "New"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 font-medium mb-6">{col.desc}</p>

                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View Models <ChevronRight size={14} strokeWidth={3} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Edwin Kibira Isuzu ── */}
      <section className="py-16 bg-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[3px] w-8 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">Why Choose Us</span>
              <div className="h-[3px] w-8 bg-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase">
              The Edwin Kibira<br />
              <span className="text-secondary">Isuzu Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary flex items-center justify-center text-secondary group-hover:text-white transition-all duration-300 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-black text-sm uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHighlights;
