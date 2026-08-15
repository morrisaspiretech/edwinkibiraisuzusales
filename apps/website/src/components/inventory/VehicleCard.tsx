"use client";

import React from "react";
import Link from "next/link";
import { Vehicle } from "@/types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

const VehicleCard = ({ vehicle, index = 0 }: VehicleCardProps) => {
  const primaryImage = vehicle.images?.find(img => img.isHero) || vehicle.images?.[0];
  
  // Clean fallback image
  const imageUrl = primaryImage?.url || "/vehicles/nqr-hero.png";

  const getModelSlug = (modelName: string = "") => {
    const m = modelName.toLowerCase();
    if (m.includes("single")) return "single-cabin";
    if (m.includes("kipchoge")) return "kipchoge-limited-edition";
    if (m.includes("double") || m.includes("d-max") || m.includes("dmax")) return "double-cabin";
    if (m.includes("mu-x") || m.includes("mux")) {
      if (m.includes("1900")) return "mu-x-1900cc";
      return "mu-x-3000cc";
    }
    if (m.includes("bus")) {
      if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) return "f-series-buses";
      return "n-series-buses";
    }
    if (m.includes("mover") || m.includes("gxz")) return "movers";
    if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) return "heavy-trucks-f-series";
    return "light-trucks-n-series"; // default to n-series
  };

  const modelSlug = getModelSlug(vehicle.model);

  return (
    <div
      className="group bg-white border border-gray-100 hover:border-[#D62B2B]/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <Link 
        href={`/vehicles/${modelSlug}`} 
        className="block relative w-full h-48 bg-gray-50 overflow-hidden flex-shrink-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[10px] font-black bg-[#1a1a1a] text-white uppercase tracking-wider">
            {vehicle.year}
          </span>
        </div>
      </Link>

      {/* Details Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-sm font-black text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#D62B2B] transition-colors uppercase tracking-tight line-clamp-2 min-h-[40px]">
          {vehicle.make} {vehicle.model}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 pt-3 border-t border-gray-100 text-xs flex-grow">
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Engine</p>
            <p className="font-black text-[#1a1a1a]">{vehicle.engineCC ? `${vehicle.engineCC}cc` : "N/A"}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Fuel Type</p>
            <p className="font-black text-[#1a1a1a] capitalize">{(vehicle.fuelType || "Diesel").toLowerCase()}</p>
          </div>
          {vehicle.transmission && (
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Transmission</p>
              <p className="font-black text-[#1a1a1a] capitalize">{vehicle.transmission.toLowerCase()}</p>
            </div>
          )}
          {vehicle.bodyType && (
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Type</p>
              <p className="font-black text-[#1a1a1a] capitalize">{vehicle.bodyType.toLowerCase()}</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-gray-100 mt-auto">
          <Link
            href={`/vehicles/${modelSlug}`}
            className="flex items-center justify-center gap-1.5 w-full bg-[#D62B2B] text-white px-4 py-2.5 text-xs font-black uppercase hover:bg-[#b82222] transition-colors"
          >
            View Details
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
