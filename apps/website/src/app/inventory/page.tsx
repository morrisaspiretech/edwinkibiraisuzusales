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
        const res = await fetch("/api/vehicles", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setVehicles(Array.isArray(data) ? data : getFallbackData());
        } else {
          setVehicles(getFallbackData());
        }
      } catch {
        setVehicles(getFallbackData());
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const getFallbackData = (): any[] => [
    {
      id: 'isuzu-dmax-vcross',
      make: 'Isuzu',
      model: 'D-Max V-Cross 4x4',
      year: 2024,
      price: 6800000,
      engineCC: 2999,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-1', url: '/vehicles/dmax-hero.png', isPrimary: true, position: 0 }]
    },
    {
      id: 'isuzu-mux-lst',
      make: 'Isuzu',
      model: 'mu-X LS-T 4x2',
      year: 2024,
      price: 7800000,
      engineCC: 1898,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'SUV',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-2', url: '/vehicles/mux-hero.png', isPrimary: true, position: 0 }]
    },
    {
      id: 'isuzu-mux-lsu',
      make: 'Isuzu',
      model: 'mu-X LS-U 4x4',
      year: 2024,
      price: 9100000,
      engineCC: 2999,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'SUV',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-3', url: '/vehicles/mux-hero.png', isPrimary: true, position: 0 }]
    },
    {
      id: 'isuzu-dmax-ls',
      make: 'Isuzu',
      model: 'D-Max LS 4x2',
      year: 2024,
      price: 5900000,
      engineCC: 1898,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-4', url: '/vehicles/dmax-hero.png', isPrimary: true, position: 0 }]
    },
    {
      id: 'isuzu-nqr',
      make: 'Isuzu',
      model: 'NQR 75 Medium Truck',
      year: 2023,
      price: 5200000,
      engineCC: 5193,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'TRUCK',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-5', url: '/vehicles/nqr-hero.png', isPrimary: true, position: 0 }]
    },
    {
      id: 'isuzu-npr',
      make: 'Isuzu',
      model: 'NPR 75 Light Truck',
      year: 2023,
      price: 4100000,
      engineCC: 3856,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'FOREIGN',
      bodyType: 'TRUCK',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-6', url: '/vehicles/nqr-hero.png', isPrimary: true, position: 0 }]
    }
  ];

  // Filter Logic
  useEffect(() => {
    let result = [...vehicles];

    // Category Filter (CARS, BIKES)
    if (filters.category && filters.category !== 'all') {
      const catLower = filters.category.toLowerCase();
      result = result.filter(v => {
        const vCatLower = (v.category || '').toLowerCase();
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
      result = result.filter(v => (v.bodyType || '').toLowerCase() === filters.bodyType.toLowerCase());
    }

    // Transmission Filter
    if (filters.transmission) {
      result = result.filter(v => (v.transmission || '').toLowerCase() === filters.transmission.toLowerCase());
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
      
      {/* Page Header */}
      <div className="pt-8 pb-6 bg-primary px-6 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-secondary/60 tracking-widest mb-2">
              <Link href="/" className="hover:text-secondary transition-all">Home</Link>
              <ChevronRight size={10} />
              <span className="text-white/40">Showroom</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase leading-none">
              Isuzu <span className="text-secondary">Showroom</span>
              <span className="ml-4 text-sm font-bold text-white/30 tabular-nums">{filteredVehicles.length} vehicles</span>
            </h1>
          </div>
          <p className="hidden md:block text-white/30 font-bold uppercase tracking-widest text-xs text-right">
            Edwin Kibira <br/> Isuzu Sales
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
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 sticky top-20 bg-white z-20 pt-2">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary tracking-widest">
                  <LayoutGrid className="w-4 h-4 text-secondary" /> Grid
                </button>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary/30 hover:text-primary transition-colors tracking-widest">
                  <List className="w-4 h-4" /> List
                </button>
              </div>
              <div className="flex items-center gap-2">
                <SortAsc className="w-4 h-4 text-secondary" />
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
