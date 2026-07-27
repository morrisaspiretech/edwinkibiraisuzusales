"use client";

import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, Grid, List, ChevronDown, Search, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { CarCard } from "@/components/CarCard";

const INVENTORY_DATA = [
    { id: 1, make: "Toyota", model: "Land Cruiser 300", year: 2025, price: "33,500,000", engine: "3.3L Diesel", trim: "Sahara ZX", tag: "KRA 2025 Basis", mileage: "0 KM", location: "Nairobi", fuelType: "Diesel", dealer: "Aspire Certified" },
    { id: 2, make: "Land Rover", model: "Defender 110", year: 2023, price: "24,500,000", engine: "3.0L P400", trim: "HSE X-Dynamic", tag: "Foreign Used", mileage: "12,400 KM", location: "Nairobi", fuelType: "Hybrid", dealer: "Aspire Certified" },
    { id: 3, make: "Mercedes-Benz", model: "G63 AMG", year: 2024, price: "41,000,000", engine: "4.0L V8 Biturbo", trim: "G-Manufaktur", tag: "Fully Cleared", mileage: "1,200 KM", location: "Nairobi", fuelType: "Petrol", dealer: "Aspire Certified" },
    { id: 4, make: "Range Rover", model: "Vogue L460", year: 2024, price: "45,000,000", engine: "4.4L V8", trim: "First Edition", tag: "Duty Free / Diplomatic", mileage: "0 KM", location: "Mombasa", fuelType: "Petrol", dealer: "Aspire Certified" },
    { id: 5, make: "Toyota", model: "Prado J150", year: 2018, price: "9,800,000", engine: "2.8L Diesel", trim: "TX-L Package", tag: "Foreign Used", mileage: "42,000 KM", location: "Nairobi", fuelType: "Diesel", dealer: "Aspire Certified" },
    { id: 6, make: "Lexus", model: "LX 600", year: 2024, price: "38,500,000", engine: "3.5L V6 Turbo", trim: "Ultra Luxury", tag: "Ex-Japan", mileage: "0 KM", location: "Nairobi", fuelType: "Petrol", dealer: "Aspire Certified" },
];

export default function MarketplacePage() {
    return (
        <main className="min-h-screen bg-[#050505] pt-32 px-8 md:px-16">
            <Header />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
                {/* Terminal Sidepanel (Filters) */}
                <aside className="w-full md:w-64 space-y-12">
                    <div className="space-y-2">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Terminal Status</span>
                        <h2 className="text-2xl font-black italic tracking-editorial text-white">Live Inventory</h2>
                    </div>

                    <div className="space-y-8">
                        <FilterGroup label="Territory" options={["Nairobi", "Mombasa", "Export"]} />
                        <FilterGroup label="Condition" options={["Brand New", "Foreign Used", "Local Used"]} />
                        <FilterGroup label="Metrics" options={["< 10,000 KM", "< 50,000 KM", "Any"]} />
                    </div>

                    <button className="w-full py-4 border border-white/5 bg-white/[0.02] text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">
                        Reset Node
                    </button>
                </aside>

                {/* Inventory Grid */}
                <div className="flex-1 space-y-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {INVENTORY_DATA.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

function FilterGroup({ label, options }: { label: string; options: string[] }) {
    return (
        <div className="space-y-4">
            <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/20">{label}</p>
            <div className="space-y-2">
                {options.map((opt) => (
                    <button key={opt} className="flex items-center gap-3 group text-left">
                        <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
                        <span className="text-[10px] font-bold text-white/40 group-hover:text-white transition-all tracking-tight">{opt}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
