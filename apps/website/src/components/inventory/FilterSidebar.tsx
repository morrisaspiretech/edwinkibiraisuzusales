"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
  const [localFilters, setLocalFilters] = useState({
    search: "",
    category: "all",
    brand: "",
    bodyType: "",
    transmission: "",
    minPrice: 0,
    maxPrice: 0
  });

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    // Auto-apply for search and category, or let the Apply button handle it? 
    // User wants it to "respond", so let's make it reactive.
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const reset = {
      search: "",
      category: "all",
      brand: "",
      bodyType: "",
      transmission: "",
      minPrice: 0,
      maxPrice: 0
    };
    setLocalFilters(reset);
    onFilterChange(reset);
  };

  return (
    <aside className="w-full h-full space-y-8 bg-surface p-7 border border-primary/5 overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-primary tracking-tight uppercase">Filters</h3>
        <SlidersHorizontal className="w-4 h-4 text-accent" />
      </div>

      {/* Category Filter */}
      <FilterGroup label="Category">
        <div className="flex bg-white p-1 border border-primary/5 rounded-sm">
          {[
            { id: 'all', label: 'All' },
            { id: 'CAR', label: 'Cars' },
            { id: 'BIKE', label: 'Bikes' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter("category", cat.id)}
              className={cn(
                "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all",
                localFilters.category === cat.id 
                  ? "bg-primary text-white shadow-xl" 
                  : "text-primary hover:bg-primary/5"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* Search Input */}
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Keyword Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-accent w-4 h-4" />
          <input
            type="text"
            placeholder="Search make, model..."
            value={localFilters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="w-full bg-white border border-primary/5 px-10 py-4 text-sm font-black focus:outline-none focus:border-accent transition-colors shadow-sm placeholder:font-bold"
          />
        </div>
      </div>

      {/* Make Filter */}
      <FilterGroup label="Brand / Manufacturer">
        <div className="relative">
          <select 
            value={localFilters.brand}
            onChange={(e) => updateFilter("brand", e.target.value)}
            className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-black appearance-none focus:outline-none focus:border-accent shadow-sm uppercase tabular-nums"
          >
            <option value="">All Brands</option>
            <option value="toyota">Toyota</option>
            <option value="mazda">Mazda</option>
            <option value="mercedes">Mercedes-Benz</option>
            <option value="bmw">BMW</option>
            <option value="subaru">Subaru</option>
            <option value="land rover">Land Rover</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none" />
        </div>
      </FilterGroup>

      {/* Body Type Filter */}
      <FilterGroup label="Body Type">
        <div className="grid grid-cols-2 gap-2">
          {['SUV', 'Sedan', 'Pickup', 'Coupe', 'Hatchback'].map((type) => (
            <button
              key={type}
              onClick={() => updateFilter("bodyType", localFilters.bodyType === type ? "" : type)}
              className={cn(
                "px-4 py-3 border text-[10px] font-black uppercase tracking-widest transition-all shadow-md",
                localFilters.bodyType === type
                  ? "bg-primary border-primary text-white"
                  : "border-primary/5 bg-white text-primary hover:border-accent hover:text-accent"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* Price Range */}
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Price Range (KSh)</label>
        <div className="flex gap-2">
          <input 
            type="number" 
            placeholder="Min" 
            value={localFilters.minPrice || ""}
            onChange={(e) => updateFilter("minPrice", parseInt(e.target.value) || 0)}
            className="w-1/2 bg-white border border-primary/5 px-4 py-3 text-sm font-black focus:outline-none focus:border-accent shadow-sm tabular-nums" 
          />
          <input 
            type="number" 
            placeholder="Max" 
            value={localFilters.maxPrice || ""}
            onChange={(e) => updateFilter("maxPrice", parseInt(e.target.value) || 0)}
            className="w-1/2 bg-white border border-primary/5 px-4 py-3 text-sm font-black focus:outline-none focus:border-accent shadow-sm tabular-nums" 
          />
        </div>
      </div>

      {/* Transmission */}
      <FilterGroup label="Transmission Type">
        <div className="flex flex-col gap-3">
          {['AUTOMATIC', 'MANUAL'].map((mode) => (
            <label 
              key={mode} 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => updateFilter("transmission", localFilters.transmission === mode ? "" : mode)}
            >
              <div className={cn(
                "w-6 h-6 border-2 flex items-center justify-center transition-colors rounded-sm",
                localFilters.transmission === mode 
                  ? "border-accent bg-accent/10" 
                  : "border-primary/10 bg-white group-hover:border-accent"
              )}>
                <div className={cn(
                  "w-3 h-3 bg-accent transition-all duration-300",
                  localFilters.transmission === mode ? "opacity-100 scale-100" : "opacity-0 scale-50"
                )} />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-widest transition-colors",
                localFilters.transmission === mode ? "text-primary" : "text-primary/60 group-hover:text-primary"
              )}>
                {mode}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <button 
        onClick={() => onFilterChange(localFilters)}
        className="w-full bg-primary text-white py-5 font-extrabold uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-primary transition-all shadow-2xl active:scale-95"
      >
        Apply Filters
      </button>
      
      <button 
        onClick={clearFilters}
        className="w-full text-text-dark/60 text-xs font-extrabold uppercase tracking-[0.3em] hover:text-primary transition-colors pt-4"
      >
        Clear All Refinements
      </button>
    </aside>
  );
};

const FilterGroup = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-3 relative">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{label}</label>
    {children}
  </div>
);

export default FilterSidebar;
