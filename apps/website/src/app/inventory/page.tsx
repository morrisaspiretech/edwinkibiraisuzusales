"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import FilterSidebar from "@/components/inventory/FilterSidebar";
import VehicleGrid from "@/components/inventory/VehicleGrid";
import { Vehicle } from "@/types/vehicle";
import { ChevronRight, LayoutGrid, List, SortAsc } from "lucide-react";
import Link from "next/link";

const InventoryPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    brand: "",
    bodyType: "",
    transmission: "",
    minPrice: 0,
    maxPrice: 0
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
        const res = await fetch(`${apiUrl}/api/vehicles`, { cache: 'no-store' });
        
        if (res.ok) {
          const data = await res.json();
          setVehicles(data);
        } else {
          console.warn("API returned error, using fallback data");
          setVehicles(getFallbackData());
        }
      } catch (error) {
        console.warn("Fetch failed, using fallback data");
        setVehicles(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const getFallbackData = (): any[] => [
    {
      id: 'fallback-lc200',
      make: 'Toyota',
      model: 'Land Cruiser V8',
      year: 2011,
      price: 5950000,
      engineCC: 4500,
      transmission: 'AUTOMATIC',
      fuelType: 'PETROL',
      condition: 'LOCAL',
      bodyType: 'SUV',
      mileage: 120000,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-1', url: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800', isPrimary: true, position: 0 }]
    },
    {
      id: 'fallback-prado',
      make: 'Toyota',
      model: 'Land Cruiser Prado',
      year: 2011,
      price: 5600000,
      engineCC: 3000,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'SUV',
      mileage: 82000,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-2', url: 'https://images.unsplash.com/photo-1620211116293-61b6c62463fd?q=80&w=800', isPrimary: true, position: 0 }]
    },
    {
      id: 'fallback-discovery',
      make: 'Land Rover',
      model: 'Discovery IV',
      year: 2011,
      price: 4500000,
      engineCC: 3000,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'SUV',
      mileage: 95000,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-3', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800', isPrimary: true, position: 0 }]
    },
    {
      id: 'fallback-hilux',
      make: 'Toyota',
      model: 'Hilux Invincible',
      year: 2021,
      price: 6200000,
      engineCC: 2800,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'PICKUP',
      mileage: 45000,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-4', url: 'https://images.unsplash.com/photo-1594731804116-65155f89be93?q=80&w=800', isPrimary: true, position: 0 }]
    }
  ];

  // Filter Logic
  useEffect(() => {
    let result = [...vehicles];

    // Category Filter (CARS, BIKES)
    if (filters.category && filters.category !== 'all') {
      const catLower = filters.category.toLowerCase();
      result = result.filter(v => {
        const vCatLower = v.category.toLowerCase();
        // Match singular/plural like 'car' vs 'cars'
        return vCatLower === catLower || 
               vCatLower === catLower.replace(/s$/, '') || 
               vCatLower.replace(/s$/, '') === catLower;
      });
    }

    // Keyword Search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(v => 
        v.make.toLowerCase().includes(searchLower) || 
        v.model.toLowerCase().includes(searchLower)
      );
    }

    // Brand Filter
    if (filters.brand) {
      result = result.filter(v => v.make.toLowerCase() === filters.brand.toLowerCase());
    }

    // Body Type Filter
    if (filters.bodyType) {
      result = result.filter(v => v.bodyType.toLowerCase() === filters.bodyType.toLowerCase());
    }

    // Transmission Filter
    if (filters.transmission) {
      result = result.filter(v => v.transmission.toLowerCase() === filters.transmission.toLowerCase());
    }

    // Price Filtering
    if (filters.minPrice > 0) {
      result = result.filter(v => v.price >= filters.minPrice);
    }
    if (filters.maxPrice > 0) {
      result = result.filter(v => v.price <= filters.maxPrice);
    }

    setFilteredVehicles(result);
  }, [filters, vehicles]);

  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Navbar />
      
      {/* Ultra-Lean Header */}
      <div className="pt-24 pb-4 bg-primary px-6 relative overflow-hidden shrink-0 border-b border-accent/20">
        <div className="absolute top-0 right-0 w-1/5 h-full bg-accent/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-between">
          <div className="flex flex-col">
            <nav className="flex items-center gap-2 text-[7px] font-bold uppercase text-accent/40 tracking-[0.3em] mb-1">
              <Link href="/" className="hover:text-accent transition-all">Home</Link>
              <ChevronRight size={6} />
              <span>Showroom</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase leading-none tracking-tighter">
              Premium <span className="text-accent">Inventory</span>
              <span className="ml-4 text-xs font-bold text-white/20 tabular-nums">[{filteredVehicles.length} Units]</span>
            </h1>
          </div>
          <p className="hidden md:block text-white/20 font-bold uppercase tracking-[0.3em] text-[7px] text-right">
            Kenya's Elite Collection <br/> Verified Luxury
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 w-full grow">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Filters - Sticky */}
          <div className="w-full lg:w-72 lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto custom-scrollbar">
            <FilterSidebar onFilterChange={setFilters} />
          </div>

          {/* Results Area */}
          <div className="flex-1 w-full">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/5 sticky top-20 bg-white z-20 pt-2">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary tracking-widest">
                  <LayoutGrid className="w-4 h-4 text-accent" /> Grid
                </button>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary/30 hover:text-primary transition-colors tracking-widest">
                  <List className="w-4 h-4" /> List
                </button>
              </div>
              <div className="flex items-center gap-2">
                <SortAsc className="w-4 h-4 text-accent" />
                <select className="bg-transparent text-[10px] font-bold uppercase text-primary focus:outline-none cursor-pointer tracking-widest border-none">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-surface h-[350px] rounded-xl" />
                ))}
              </div>
            ) : (
              <VehicleGrid vehicles={filteredVehicles} />
            )}

            {!loading && vehicles.length > 0 && (
              <div className="mt-12 mb-12 flex items-center justify-center gap-4 border-t border-primary/5 pt-12">
                <button className="w-10 h-10 flex items-center justify-center border border-primary/10 text-primary font-bold hover:border-accent hover:text-accent transition-all text-[10px]">01</button>
                <button className="w-10 h-10 flex items-center justify-center border border-primary/10 text-primary/40 font-bold hover:border-accent hover:text-accent transition-all text-[10px]">02</button>
                <button className="w-10 h-10 flex items-center justify-center border border-primary/10 text-primary/40 font-bold hover:border-accent hover:text-accent transition-all text-[10px]">03</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default InventoryPage;
