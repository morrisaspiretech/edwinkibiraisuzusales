"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { useCompare } from "@/context/CompareContext";
import { VEHICLES_DATA } from "@/data/vehicles";
import { FaChevronLeft, FaXmark, FaCheck } from "react-icons/fa6";

export default function ComparePage() {
  const { compareIds, removeVehicle, clearComparison } = useCompare();

  const vehicles = compareIds.map((id) => VEHICLES_DATA[id]).filter(Boolean);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />

      <section className="bg-[#1A1A1A] pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/vehicles" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-6 text-xs font-bold uppercase tracking-widest transition-colors">
            <FaChevronLeft size={10} /> Back to Vehicles
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-2">
                Compare <span className="text-[#D62B2B]">Vehicles</span>
              </h1>
              <p className="text-white/60 text-sm">Compare up to 3 vehicles side-by-side to find the right fit for your needs.</p>
            </div>
            {vehicles.length > 0 && (
              <button
                onClick={clearComparison}
                className="text-xs font-bold text-gray-400 hover:text-[#D62B2B] uppercase tracking-widest transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="flex-1 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {vehicles.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaXmark size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase mb-2">No Vehicles Selected</h3>
              <p className="text-gray-500 mb-6">You haven't selected any vehicles to compare yet.</p>
              <Link
                href="/vehicles"
                className="inline-block bg-[#D62B2B] text-white px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-colors rounded shadow-sm"
              >
                Browse Vehicles
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-x-auto">
              <div className="min-w-[800px]">
                {/* ── HEADER ROW ── */}
                <div className="grid grid-cols-4 border-b border-gray-200">
                  <div className="p-6 bg-gray-50 flex items-center">
                    <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Overview</span>
                  </div>
                  {vehicles.map((v) => {
                    const priceLabel = v.price?.unitPrice ?? v.price?.chassisPrice ?? null;
                    return (
                      <div key={v.id} className="p-6 border-l border-gray-200 relative group">
                        <button
                          onClick={() => removeVehicle(v.id)}
                          className="absolute top-4 right-4 w-6 h-6 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors"
                          title="Remove"
                        >
                          <FaXmark size={12} />
                        </button>
                        <div className="relative aspect-[16/10] bg-[#f8f8f8] rounded-lg mb-4 p-2">
                          <Image src={v.heroImage} alt={v.title} fill className="object-contain" />
                        </div>
                        <span className="inline-block bg-[#D62B2B] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm mb-2">
                          {v.category}
                        </span>
                        <h3 className="text-lg font-black text-[#1a1a1a] uppercase leading-tight mb-2">{v.title}</h3>
                        {priceLabel && (
                          <div className="text-[#D62B2B] font-black text-lg tabular-nums mb-4">{priceLabel}</div>
                        )}
                        <Link
                          href={`/vehicles/${v.id}`}
                          className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-black text-[10px] uppercase tracking-widest py-2.5 rounded transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    );
                  })}
                  {/* Empty place holders for alignment if < 3 vehicles */}
                  {[...Array(3 - vehicles.length)].map((_, i) => (
                    <div key={`empty-hdr-${i}`} className="p-6 border-l border-gray-200 bg-gray-50 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Add a vehicle<br/>to compare</span>
                    </div>
                  ))}
                </div>

                {/* ── QUICK SPECS ── */}
                <CompareSection title="Quick Specs" />
                <CompareRow label="Engine" vehicles={vehicles} getValue={(v) => v.quickSpecs.engine} />
                <CompareRow label="Transmission" vehicles={vehicles} getValue={(v) => v.quickSpecs.transmission} />
                <CompareRow label="Fuel" vehicles={vehicles} getValue={(v) => v.quickSpecs.fuel} />
                <CompareRow label="Power / Payload" vehicles={vehicles} getValue={(v) => v.quickSpecs.power || v.quickSpecs.payload || "-"} />

                {/* ── DETAILED ENGINE ── */}
                <CompareSection title="Engine & Performance" />
                <CompareRow label="Type" vehicles={vehicles} getValue={(v) => v.detailedSpecs.engine.type} />
                <CompareRow label="Displacement" vehicles={vehicles} getValue={(v) => v.detailedSpecs.engine.displacement} />
                <CompareRow label="Max Power" vehicles={vehicles} getValue={(v) => v.detailedSpecs.engine.maxPower} />
                <CompareRow label="Max Torque" vehicles={vehicles} getValue={(v) => v.detailedSpecs.engine.maxTorque} />

                {/* ── DIMENSIONS ── */}
                <CompareSection title="Dimensions & Capacities" />
                <CompareRow label="Length" vehicles={vehicles} getValue={(v) => v.detailedSpecs.dimensions.length} />
                <CompareRow label="Width" vehicles={vehicles} getValue={(v) => v.detailedSpecs.dimensions.width} />
                <CompareRow label="Height" vehicles={vehicles} getValue={(v) => v.detailedSpecs.dimensions.height} />
                <CompareRow label="Wheelbase" vehicles={vehicles} getValue={(v) => v.detailedSpecs.dimensions.wheelbase} />
                <CompareRow label="Ground Clearance" vehicles={vehicles} getValue={(v) => v.detailedSpecs.dimensions.groundClearance} />
                
                {/* ── FEATURES ── */}
                <CompareSection title="Key Features" />
                <div className="grid grid-cols-4 border-b border-gray-200 bg-white">
                  <div className="p-4 px-6 border-r border-gray-200 bg-gray-50/50">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Features</span>
                  </div>
                  {vehicles.map((v) => (
                    <div key={v.id} className="p-4 px-6 border-r border-gray-200 last:border-r-0">
                      <ul className="space-y-2">
                        {v.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <FaCheck size={12} className="text-[#D62B2B] mt-1 flex-shrink-0" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {[...Array(3 - vehicles.length)].map((_, i) => (
                    <div key={`empty-feat-${i}`} className="p-4 px-6 border-r border-gray-200 last:border-r-0 bg-gray-50/50"></div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>
      </section>
</main>
  );
}

function CompareSection({ title }: { title: string }) {
  return (
    <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-100">
      <div className="col-span-4 p-3 px-6">
        <h4 className="text-[10px] font-black text-[#D62B2B] uppercase tracking-widest">{title}</h4>
      </div>
    </div>
  );
}

function CompareRow({ label, vehicles, getValue }: { label: string, vehicles: any[], getValue: (v: any) => string }) {
  return (
    <div className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="p-4 px-6 border-r border-gray-200 bg-gray-50/50 flex items-center">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      {vehicles.map((v) => (
        <div key={v.id} className="p-4 px-6 border-r border-gray-200 last:border-r-0 flex items-center">
          <span className="text-sm font-semibold text-[#1a1a1a]">{getValue(v)}</span>
        </div>
      ))}
      {[...Array(3 - vehicles.length)].map((_, i) => (
        <div key={`empty-row-${i}`} className="p-4 px-6 border-r border-gray-200 last:border-r-0 bg-gray-50/50"></div>
      ))}
    </div>
  );
}
