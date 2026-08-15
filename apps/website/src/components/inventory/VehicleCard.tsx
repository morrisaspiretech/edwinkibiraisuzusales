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
    if (m.includes("tfr 87") || m.includes("tfr87")) return "tfr87-4x2";
    if (m.includes("tfs 87") && m.includes("double") && (m.includes("auto") || m.includes("automatic"))) return "tfs87-double-auto";
    if (m.includes("tfs 87") && m.includes("double")) return "tfs87-double-manual";
    if (m.includes("tfs 87") && (m.includes("auto") || m.includes("automatic"))) return "tfs87-4x4-auto";
    if (m.includes("tfs 87") || m.includes("tfs87")) return "tfs87-4x4-manual";
    if (m.includes("single")) return "tfr87-4x2";
    if (m.includes("kipchoge")) return "kipchoge-limited-edition";
    if (m.includes("double") || m.includes("d-max") || m.includes("dmax")) return "double-cabin";
    if (m.includes("mu-x") || m.includes("mux")) {
      if (m.includes("1900") || m.includes("1.9")) return "mu-x-1900cc";
      return "mu-x-3000cc";
    }
    if (m.includes("bus")) {
      if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) return "f-series-buses";
      return "n-series-buses";
    }
    if (m.includes("mover") || m.includes("gxz")) return "movers";
    if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) return "heavy-trucks-f-series";
    return "light-trucks-n-series";
  };

  // Use vehicle.id first — it is already the correct URL slug.
  // Fall back to name-based mapping only for legacy API data without a proper id.
  const modelSlug = vehicle.id || getModelSlug(vehicle.model);

  return (
    <div
      className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <Link 
        href={`/vehicles/${modelSlug}`} 
        className="block relative w-full h-52 bg-gradient-to-b from-gray-50 to-white flex-shrink-0 overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${vehicle.make} ${vehicle.model}`}
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-[1.08]"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-[10px] font-black rounded-full bg-black/90 backdrop-blur-sm text-white uppercase tracking-wider shadow-sm">
            {vehicle.year}
          </span>
        </div>
      </Link>

      {/* Details Container */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        {/* Title */}
        <h3 className="text-[15px] font-black text-[#1a1a1a] leading-snug mb-4 group-hover:text-[#D62B2B] transition-colors uppercase tracking-tight line-clamp-2 min-h-[44px]">
          {vehicle.make} {vehicle.model}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5 pt-4 border-t border-gray-50 text-xs flex-grow">
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Engine</p>
            <p className="font-black text-[#1a1a1a]">{vehicle.engineCC ? `${vehicle.engineCC}cc` : "N/A"}</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Fuel Type</p>
            <p className="font-black text-[#1a1a1a] capitalize">{(vehicle.fuelType || "Diesel").toLowerCase()}</p>
          </div>
          {vehicle.transmission && (
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Transmission</p>
              <p className="font-black text-[#1a1a1a] capitalize">{vehicle.transmission.toLowerCase()}</p>
            </div>
          )}
          {vehicle.bodyType && (
            <div>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Type</p>
              <p className="font-black text-[#1a1a1a] capitalize">{vehicle.bodyType.toLowerCase()}</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 mt-auto">
          <Link
            href={`/vehicles/${modelSlug}`}
            className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#f8f9fa] border border-gray-100 text-[#1a1a1a] px-4 py-3 text-[11px] font-black uppercase hover:bg-[#D62B2B] hover:border-[#D62B2B] hover:text-white transition-all duration-300"
          >
            View Details
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
