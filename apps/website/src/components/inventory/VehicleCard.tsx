"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gauge, Fuel, Settings2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Vehicle } from "@/types/vehicle";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

const VehicleCard = ({ vehicle, index = 0 }: VehicleCardProps) => {
  const primaryImage = vehicle.images.find(img => img.isPrimary) || vehicle.images[0];
  const conditionLabel = vehicle.condition === 'FOREIGN' ? "Foreign Used" : "Locally Used";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-400 overflow-hidden flex flex-col"
    >
      {/* Image Container - Strictly 4:3 Aspect Ratio */}
      <Link href={`/inventory/${vehicle.id}`} className="block relative aspect-[4/3] overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={primaryImage?.url || '/vehicles/dmax-hero.png'}
          alt={`${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Urgent Badge Overlays */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-3 py-1.5 text-xs font-extrabold bg-primary text-white uppercase tracking-wider shadow-lg">
            In Stock
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1.5 text-xs font-extrabold bg-secondary text-white uppercase tracking-wider shadow-lg">
            {vehicle.year}
          </span>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1 bg-white">
        {/* Title & Condition - Dense Hierarchy */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-primary leading-tight mb-0.5 group-hover:text-secondary transition-colors">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-[10px] text-primary font-black uppercase tracking-widest">{conditionLabel}</p>
        </div>

        {/* Info Grid - Clean 2-column Sentence Case Specs */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6 pt-3 border-t border-black/5">
          <div className="space-y-1">
            <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-none">Engine</p>
            <p className="text-sm font-black text-primary">{vehicle.engineCC}cc</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-primary font-black uppercase tracking-widest leading-none">Fuel Type</p>
            <p className="text-sm font-black text-primary capitalize">{vehicle.fuelType.toLowerCase()}</p>
          </div>
        </div>

        {/* Footer Row - Tight Price & VIEW Link */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-black/5">
          <p className="text-2xl font-black text-primary tracking-tight">
            <span className="text-[10px] uppercase text-primary mr-2 font-black">KSh</span>
            {vehicle.price.toLocaleString()}
          </p>
          <Link 
            href={`/inventory/${vehicle.id}`}
            className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 text-xs font-black uppercase hover:bg-accent-dark transition-all active:scale-95"
          >
            View
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
