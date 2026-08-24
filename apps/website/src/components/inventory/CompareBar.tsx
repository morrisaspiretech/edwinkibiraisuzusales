"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCompare } from "@/context/CompareContext";
import { VEHICLES_DATA } from "@/data/vehicles";
import { FaXmark, FaCodeCompare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function CompareBar() {
  const { compareIds, removeVehicle, clearComparison } = useCompare();

  if (compareIds.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 flex-1 overflow-x-auto pb-2 sm:pb-0">
            {compareIds.map((id) => {
              const vehicle = VEHICLES_DATA[id];
              if (!vehicle) return null;
              return (
                <div key={id} className="relative flex items-center bg-gray-50 border border-gray-200 rounded-lg p-2 min-w-[150px] flex-shrink-0">
                  <div className="relative w-12 h-8 mr-3 flex-shrink-0">
                    <Image src={vehicle.heroImage} alt={vehicle.title} fill className="object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 pr-6">
                    <p className="text-[10px] font-bold text-gray-500 uppercase truncate">{vehicle.category}</p>
                    <p className="text-xs font-black text-[#1a1a1a] truncate">{vehicle.title}</p>
                  </div>
                  <button
                    onClick={() => removeVehicle(id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Remove"
                  >
                    <FaXmark size={12} />
                  </button>
                </div>
              );
            })}

            {/* Empty slots placeholders */}
            {[...Array(Math.max(0, 3 - compareIds.length))].map((_, i) => (
              <div key={`empty-${i}`} className="hidden md:flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-lg p-2 min-w-[150px] h-[54px] flex-shrink-0">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Add Vehicle</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
            <button
              onClick={clearComparison}
              className="text-xs font-bold text-gray-500 hover:text-red-500 transition-colors uppercase tracking-widest px-2"
            >
              Clear
            </button>
            <Link
              href="/compare"
              className={`flex items-center justify-center gap-2 px-6 py-3 font-black text-xs uppercase tracking-widest transition-colors rounded shadow-sm flex-1 sm:flex-none ${
                compareIds.length > 1
                  ? "bg-[#D62B2B] text-white hover:bg-red-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
              }`}
            >
              <FaCodeCompare size={14} />
              Compare ({compareIds.length}/3)
            </Link>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
