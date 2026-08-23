"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { FaChevronRight, FaShieldHalved, FaStar, FaWrench, FaClock } from "react-icons/fa6";
import Link from "next/link";

interface CollectionHighlightsProps {
  vehicles: Vehicle[];
}

const categories = [
  {
    title: "Isuzu D-Max",
    type: "Pickup Trucks",
    desc: "Kenya's most versatile and powerful pickup truck. Built for rough terrain and long hauls.",
    image: "/vehicles/dmax-double.webp",
    link: "/vehicles/double-cabin",
    bodyType: "pickup",
    model: "d-max",
  },
  {
    title: "Isuzu mu-X",
    type: "SUV / Family Car",
    desc: "7-seater premium family SUV with commanding presence and legendary Isuzu reliability.",
    image: "/vehicles/mux-3000cc.png",
    link: "/vehicles/mu-x-3000cc",
    bodyType: "suv",
    model: "mu-x",
  },
  {
    title: "Isuzu N-Series",
    type: "Commercial Trucks & Buses",
    desc: "N-Series trucks, buses and coaches powering every business across Kenya.",
    image: "/vehicles/n-series/nlr-chassis.png",
    link: "/vehicles/light-trucks-n-series",
    bodyType: "truck",
    model: "n-series",
  },
];

const whyUs = [
  {
    icon: <FaShieldHalved className="w-6 h-6" />,
    title: "Genuine Isuzu",
    desc: "Fully certified, factory-original vehicles with manufacturer warranty",
  },
  {
    icon: <FaStar className="w-6 h-6" />,
    title: "Best Prices",
    desc: "Competitive market-leading pricing with flexible financing options",
  },
  {
    icon: <FaWrench className="w-6 h-6" />,
    title: "After-Sales Support",
    desc: "Dedicated service centre with genuine Isuzu spare parts",
  },
  {
    icon: <FaClock className="w-6 h-6" />,
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
              <div className="h-[3px] w-10 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Our Isuzu Range
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase leading-tight">
              Find Your{" "}
              <span className="text-[#D62B2B]">Isuzu</span>
            </h2>
          </div>

          {/* Category cards — local images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => {
              return (
                <Link
                  key={cat.title}
                  href={cat.link}
                  className="group bg-white border border-gray-100 hover:border-[#D62B2B]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Vehicle photo */}
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-[#f5f5f5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#D62B2B]">
                        {cat.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-wide mb-2 group-hover:text-[#D62B2B] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{cat.desc}</p>

                    {/* Arrow link */}
                    <div className="flex items-center gap-2 mt-4 text-xs font-black uppercase tracking-widest text-[#D62B2B]">
                      View Models
                      <FaChevronRight
                        size={14}
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
      <section className="py-10 sm:py-14 bg-white border-t border-gray-100 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-[3px] w-8 bg-[#D62B2B]" />
              <span className="text-[#D62B2B] font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                Why Choose Us
              </span>
              <div className="h-[3px] w-8 bg-[#D62B2B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] uppercase leading-tight">
              The Edwin Kibira{" "}
              <span className="text-[#D62B2B]">Isuzu Difference</span>
            </h2>
          </div>

          {/* Why-us grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-5 sm:p-6 border border-gray-200 hover:border-[#D62B2B]/50 hover:bg-[#D62B2B]/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#D62B2B]/10 group-hover:bg-[#D62B2B] flex items-center justify-center text-[#D62B2B] group-hover:text-white transition-all duration-300 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-[#1a1a1a] font-black text-sm uppercase tracking-wide mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionHighlights;
