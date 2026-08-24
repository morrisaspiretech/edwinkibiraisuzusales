"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useFavourites } from "@/context/FavouritesContext";
import { VEHICLES_DATA } from "@/data/vehicles";
import { FaChevronLeft, FaHeartCrack } from "react-icons/fa6";
import FeaturedVehicleCard from "@/components/inventory/FeaturedVehicleCard";

export default function FavouritesPage() {
  const { favouriteIds, clearFavourites } = useFavourites();

  const vehicles = favouriteIds.map((id) => VEHICLES_DATA[id]).filter(Boolean);

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
                Saved <span className="text-[#D62B2B]">Vehicles</span>
              </h1>
              <p className="text-white/60 text-sm">Review your shortlisted Isuzu vehicles.</p>
            </div>
            {vehicles.length > 0 && (
              <button
                onClick={clearFavourites}
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
                <FaHeartCrack size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-black text-[#1a1a1a] uppercase mb-2">No Saved Vehicles</h3>
              <p className="text-gray-500 mb-6">You haven't saved any vehicles to your favourites yet. Click the heart icon on any vehicle to save it for later.</p>
              <Link
                href="/vehicles"
                className="inline-block bg-[#D62B2B] text-white px-8 py-3 font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-colors rounded shadow-sm"
              >
                Browse Vehicles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vehicles.map((v) => (
                <FeaturedVehicleCard
                  key={v.id}
                  v={{
                    id: v.id,
                    img: v.heroImage,
                    title: v.title,
                    category: v.category,
                    spec: v.quickSpecs.engine || v.description,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
