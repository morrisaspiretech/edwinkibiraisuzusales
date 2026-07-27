"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import VehicleCard from "@/components/inventory/VehicleCard";
import { Vehicle } from "@/types/vehicle";
import { 
  ChevronRight, 
  Search, 
  Filter, 
  Car, 
  Bike as BikeIcon, 
  SlidersHorizontal,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BikesCollectionPage = () => {
  const [bikes, setBikes] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const getBikes = async function() {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
          const res = await fetch(`${apiUrl}/api/vehicles?category=BIKE`, { cache: 'no-store' });
          if (!res.ok) return [];
          return res.json();
        }
        const data = await getBikes();
        setBikes(data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBikes();
  }, []);

  const filteredBikes = bikes.filter(bike => 
    `${bike.make} ${bike.model}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section / Breadcrumbs */}
      <div className="pt-24 pb-8 px-6 bg-primary border-b border-accent/10">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-accent mb-4 tracking-[0.2em]">
            <Link href="/" className="hover:text-white transition-all">Home</Link>
            <ChevronRight size={10} className="opacity-50" />
            <span className="text-white">All Bikes</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9]">
                The <span className="text-accent">Bike</span> Collection
              </h1>
              <p className="text-sm md:text-lg text-white/60 font-medium pl-1 max-w-xl">
                From high-speed superbikes to luxury cruisers. Experience ultimate performance.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-8 py-6 rounded-2xl text-white flex items-center gap-6 shadow-2xl">
              <div className="flex flex-col">
                <span className="text-3xl font-bold leading-none text-accent">{bikes.length}</span>
                <span className="text-xs font-extrabold uppercase opacity-80 mt-1 tabular-nums">Motorbikes</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold leading-none text-white">{bikes.filter(b => b.status === 'AVAILABLE').length}</span>
                <span className="text-xs font-extrabold uppercase opacity-80 mt-1 tabular-nums">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 min-h-[600px]">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-focus-within:text-accent transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by Brand, Model or Specs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface border border-primary/5 py-5 pl-16 pr-8 rounded-full text-sm font-bold placeholder:text-primary/20 focus:outline-none focus:border-accent focus:bg-white transition-all shadow-sm focus:shadow-xl"
            />
          </div>
          <button className="bg-surface border border-primary/5 px-8 py-5 rounded-full flex items-center gap-3 text-xs font-extrabold uppercase text-primary hover:bg-white hover:shadow-xl transition-all tracking-widest leading-none">
            <SlidersHorizontal size={18} className="text-accent" /> Filter Items
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 animate-pulse">
            <Loader2 className="animate-spin text-accent mb-6" size={48} />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary/30">Syncing Collection...</p>
          </div>
        ) : filteredBikes.length === 0 ? (
          <div className="text-center py-40 border-2 border-dashed border-primary/5 rounded-[3rem]">
            <BikeIcon className="mx-auto mb-6 opacity-10" size={64} />
            <h3 className="text-xl font-bold uppercase text-primary mb-2">No Bikes Found</h3>
            <p className="text-sm text-primary/60 font-bold uppercase">Try adjusting your search or check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredBikes.map((bike, index) => (
              <VehicleCard key={bike.id} vehicle={bike} index={index} />
            ))}
          </div>
        )}
      </div>

      {/* Newsletter / Call to Action */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-accent rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center space-y-8 shadow-2xl overflow-hidden relative group">
          <BikeIcon className="absolute -right-20 -bottom-20 w-80 h-80 text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
          <h2 className="text-4xl md:text-6xl font-bold text-primary uppercase max-w-2xl leading-[0.95]">
            Can't find your <span className="text-white">Dream Ride?</span>
          </h2>
          <p className="text-sm md:text-lg text-primary/60 font-bold max-w-xl">
            We source premium motorbikes globally. Tell us what you're looking for.
          </p>
          <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase hover:scale-105 transition-transform shadow-2xl">
            Custom Sourcing Inquiry
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BikesCollectionPage;
