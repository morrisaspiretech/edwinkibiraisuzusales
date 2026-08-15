"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import FilterSidebar from "@/components/inventory/FilterSidebar";
import VehicleGrid from "@/components/inventory/VehicleGrid";
import { Vehicle } from "@/types/vehicle";

import Link from "next/link";
import { FaChevronRight, FaTableCells, FaList, FaArrowUpAZ } from "react-icons/fa6";

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
      id: 'tfs87-double-auto',
      make: 'Isuzu',
      model: 'TFS 87 Double Cab 1900cc (Automatic)',
      year: 2024,
      price: 0,
      engineCC: 1898,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-5', url: '/vehicles/gallery/img-5.jpg', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-mux-ls-u',
      make: 'Isuzu',
      model: 'mu-X LS-U 3.0L',
      year: 2024,
      price: 0,
      engineCC: 2999,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'SUV',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-2', url: '/vehicles/mux-3000cc.png', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'tfr87-4x2',
      make: 'Isuzu',
      model: 'TFR 87 Single Cab 4×2',
      year: 2024,
      price: 3890000,
      engineCC: 1898,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-3a', url: '/vehicles/gallery/img-1.jpg', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'tfs87-4x4-manual',
      make: 'Isuzu',
      model: 'TFS 87 Single Cab 4×4',
      year: 2024,
      price: 4390000,
      engineCC: 1898,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-3b', url: '/vehicles/gallery/img-2.jpg', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'tfs87-4x4-auto',
      make: 'Isuzu',
      model: 'TFS 87 Single Cab 4×4 Auto',
      year: 2024,
      price: 4600000,
      engineCC: 1898,
      transmission: 'AUTOMATIC',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-3c', url: '/vehicles/gallery/img-3.jpg', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'tfs87-double-manual',
      make: 'Isuzu',
      model: 'TFS 87 Double Cab 1900cc (Manual)',
      year: 2024,
      price: 0,
      engineCC: 1898,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'PICKUP',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-4', url: '/vehicles/gallery/img-4.jpg', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-nqr81k',
      make: 'Isuzu',
      model: 'NQR81K Light Truck',
      year: 2024,
      price: 0,
      engineCC: 4778,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'TRUCK',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-5', url: '/vehicles/n-series-truck.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-frr90n',
      make: 'Isuzu',
      model: 'FRR 90N Medium Truck',
      year: 2024,
      price: 0,
      engineCC: 5193,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'TRUCK',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-6', url: '/vehicles/f-series-truck.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-gxz-heavy',
      make: 'Isuzu',
      model: 'GXZ Heavy Duty Truck',
      year: 2024,
      price: 0,
      engineCC: 15681,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'TRUCK',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-7', url: '/vehicles/gxz-mover.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-nmr85-bus-25',
      make: 'Isuzu',
      model: 'NMR85 25 Seater Bus',
      year: 2024,
      price: 0,
      engineCC: 2999,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'BUS',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-8', url: '/vehicles/nmr85-bus.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-nqr-bus-33',
      make: 'Isuzu',
      model: 'NQR 33 Seater Bus',
      year: 2024,
      price: 0,
      engineCC: 4778,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'BUS',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-9', url: '/vehicles/nqr-bus.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-frr90-bus-50',
      make: 'Isuzu',
      model: 'FRR90 50 Seater Bus',
      year: 2024,
      price: 0,
      engineCC: 5193,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'BUS',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-10', url: '/vehicles/frr90-bus.webp', isHero: true, orderIndex: 0 }]
    },
    {
      id: 'isuzu-fvr34s-bus-67',
      make: 'Isuzu',
      model: 'FVR34S 67 Seater Bus',
      year: 2024,
      price: 0,
      engineCC: 7790,
      transmission: 'MANUAL',
      fuelType: 'DIESEL',
      condition: 'NEW',
      bodyType: 'BUS',
      mileage: 0,
      category: 'CAR',
      status: 'AVAILABLE',
      createdAt: new Date().toISOString(),
      images: [{ id: 'img-11', url: '/vehicles/fvr34s-bus.webp', isHero: true, orderIndex: 0 }]
    },
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
      <div className="pt-8 pb-6 bg-white border-b-2 border-[#D62B2B] px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">
              <Link href="/" className="hover:text-[#D62B2B] transition-all">Home</Link>
              <FaChevronRight size={10} />
              <span className="text-[#D62B2B]">Showroom</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-black text-[#1a1a1a] uppercase leading-none">
              Isuzu <span className="text-[#D62B2B]">Showroom</span>
              <span className="ml-3 text-sm font-bold text-gray-400 tabular-nums">{filteredVehicles.length} vehicles</span>
            </h1>
          </div>
          <p className="hidden md:block text-[#D62B2B] font-black uppercase tracking-widest text-xs text-right">
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
                  <FaTableCells className="w-4 h-4 text-secondary" /> Grid
                </button>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary/30 hover:text-primary transition-colors tracking-widest">
                  <FaList className="w-4 h-4" /> List
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowUpAZ className="w-4 h-4 text-secondary" />
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
