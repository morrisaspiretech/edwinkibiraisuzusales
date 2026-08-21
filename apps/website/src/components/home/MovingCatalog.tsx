"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VEHICLES_DATA } from "@/data/vehicles";
import { FaArrowRight } from "react-icons/fa6";

export default function MovingCatalog() {
  // Use a selection of our top vehicles or all of them
  const vehicles = Object.values(VEHICLES_DATA);
  
  // Duplicate the array to ensure a seamless infinite scrolling loop
  const duplicatedVehicles = [...vehicles, ...vehicles];

  return (
    <section className="py-16 bg-[#111] overflow-hidden border-y-[6px] border-[#D62B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Explore Our <span className="text-[#D62B2B]">Full Lineup</span>
        </h2>
        <p className="text-white/60 text-sm mt-2 font-medium tracking-wide">
          Hover over any vehicle to pause and click to explore details.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Gradient Fades for Smooth Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee gap-6 px-3">
          {duplicatedVehicles.map((vehicle, idx) => (
            <Link
              key={`${vehicle.id}-${idx}`}
              href={`/vehicles/${vehicle.id}`}
              className="relative w-72 h-[340px] flex-shrink-0 bg-white group/card overflow-hidden hover:-translate-y-2 transition-transform duration-300 rounded-sm"
            >
              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-[#D62B2B] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 z-20 shadow-md">
                {vehicle.category}
              </div>

              {/* Vehicle Image */}
              <div className="relative h-[200px] w-full bg-[#f2f2f2] flex items-center justify-center p-6 overflow-hidden">
                <Image
                  src={vehicle.heroImage}
                  alt={vehicle.title}
                  fill
                  className="object-contain p-4 group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="288px"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#D62B2B]/90 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-white p-4">
                   <p className="text-xs font-bold uppercase tracking-widest mb-1 text-white/80">View Details</p>
                   <FaArrowRight size={24} className="group-hover/card:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-5 bg-white border-t border-gray-100 flex flex-col justify-between h-[140px]">
                <div>
                  <h3 className="text-lg font-black text-[#1a1a1a] uppercase leading-tight line-clamp-2">
                    {vehicle.title}
                  </h3>
                </div>
                
                <div className="flex justify-between items-end border-t border-gray-100 pt-3">
                   <div>
                     <p className="text-[9px] font-bold uppercase text-gray-400">Engine</p>
                     <p className="text-[10px] font-black text-[#1a1a1a]">{vehicle.quickSpecs.engine}</p>
                   </div>
                   <div className="text-right">
                     <p className="text-[9px] font-bold uppercase text-gray-400">Power</p>
                     <p className="text-[10px] font-black text-[#1a1a1a]">{vehicle.quickSpecs.power}</p>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
