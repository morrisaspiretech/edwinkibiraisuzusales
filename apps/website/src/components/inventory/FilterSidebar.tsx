"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaMagnifyingGlass, FaSliders, FaChevronDown, FaXmark } from "react-icons/fa6";

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
  const [localFilters, setLocalFilters] = useState({
    search: "",
    category: "all",
    brand: "isuzu",
    bodyType: "",
    transmission: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const updateFilter = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const reset = {
      search: "",
      category: "all",
      brand: "isuzu",
      bodyType: "",
      transmission: "",
      minPrice: 0,
      maxPrice: 0,
    };
    setLocalFilters(reset);
    onFilterChange(reset);
  };

  const isuzuBodyTypes = ["Pickup", "SUV", "Truck", "Bus", "Van"];

  const isuzuModels = [
    { label: "All Isuzu Models", value: "" },
    { label: "D-Max (Pickup)", value: "D-Max" },
    { label: "mu-X (SUV)", value: "mu-X" },
    { label: "N-Series Trucks", value: "N-Series" },
    { label: "NPR Light Truck", value: "NPR" },
    { label: "NQR Medium Truck", value: "NQR" },
    { label: "FVR Heavy Truck", value: "FVR" },
    { label: "Buses / Coaches", value: "Bus" },
  ];

  return (
    <aside className="w-full h-full space-y-7 bg-surface p-6 border-r border-gray-100 overflow-y-auto custom-scrollbar">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-[3px] bg-secondary" />
          <h3 className="text-sm font-black text-primary tracking-wider uppercase">Filters</h3>
        </div>
        <FaSliders className="w-4 h-4 text-secondary" />
      </div>

      {/* Search */}
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Search</label>
        <div className="relative">
          <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-4 h-4" />
          <input
            type="text"
            placeholder="D-Max, mu-X, NQR..."
            value={localFilters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="w-full bg-white border border-gray-200 px-10 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors placeholder:text-gray-300"
          />
          {localFilters.search && (
            <button
              onClick={() => updateFilter("search", "")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-secondary transition-colors"
            >
              <FaXmark size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Isuzu Model */}
      <FilterGroup label="Isuzu Model">
        <div className="relative">
          <select
            value={localFilters.brand}
            onChange={(e) => updateFilter("brand", e.target.value)}
            className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium appearance-none focus:outline-none focus:border-secondary transition-colors text-primary"
          >
            {isuzuModels.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
        </div>
      </FilterGroup>

      {/* Body Type */}
      <FilterGroup label="Vehicle Type">
        <div className="grid grid-cols-2 gap-2">
          {isuzuBodyTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                updateFilter("bodyType", localFilters.bodyType === type ? "" : type)
              }
              className={cn(
                "px-3 py-2.5 border text-[10px] font-black uppercase tracking-wider transition-all",
                localFilters.bodyType === type
                  ? "bg-secondary border-secondary text-white"
                  : "border-gray-200 bg-white text-gray-500 hover:border-secondary hover:text-secondary"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* Transmission */}
      <FilterGroup label="Transmission">
        <div className="flex flex-col gap-2.5">
          {["AUTOMATIC", "MANUAL"].map((mode) => (
            <label
              key={mode}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() =>
                updateFilter(
                  "transmission",
                  localFilters.transmission === mode ? "" : mode
                )
              }
            >
              <div
                className={cn(
                  "w-5 h-5 border-2 flex items-center justify-center transition-colors",
                  localFilters.transmission === mode
                    ? "border-secondary bg-secondary"
                    : "border-gray-300 bg-white group-hover:border-secondary"
                )}
              >
                {localFilters.transmission === mode && (
                  <div className="w-2 h-2 bg-white" />
                )}
              </div>
              <span
                className={cn(
                  "text-[11px] font-black uppercase tracking-widest transition-colors",
                  localFilters.transmission === mode
                    ? "text-secondary"
                    : "text-gray-400 group-hover:text-primary"
                )}
              >
                {mode}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          Price Range (KSh)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={localFilters.minPrice || ""}
            onChange={(e) =>
              updateFilter("minPrice", parseInt(e.target.value) || 0)
            }
            className="w-1/2 bg-white border border-gray-200 px-3 py-3 text-sm font-medium focus:outline-none focus:border-secondary transition-colors tabular-nums"
          />
          <input
            type="number"
            placeholder="Max"
            value={localFilters.maxPrice || ""}
            onChange={(e) =>
              updateFilter("maxPrice", parseInt(e.target.value) || 0)
            }
            className="w-1/2 bg-white border border-gray-200 px-3 py-3 text-sm font-medium focus:outline-none focus:border-secondary transition-colors tabular-nums"
          />
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={() => onFilterChange(localFilters)}
        className="w-full bg-secondary text-white py-4 font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-all"
      >
        Apply Filters
      </button>

      {/* Clear */}
      <button
        onClick={clearFilters}
        className="w-full text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors flex items-center justify-center gap-2"
      >
        <FaXmark size={12} /> Clear All Filters
      </button>
    </aside>
  );
};

const FilterGroup = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2.5">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
      {label}
    </label>
    {children}
  </div>
);

export default FilterSidebar;
