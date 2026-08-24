"use client";

import React from "react";
import { useCompare } from "@/context/CompareContext";
import { FaCodeCompare } from "react-icons/fa6";

interface Props {
  vehicleId: string;
}

export default function CompareCheckbox({ vehicleId }: Props) {
  const { compareIds, addVehicle, removeVehicle, isMaxSelected } = useCompare();
  
  const isSelected = compareIds.includes(vehicleId);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isSelected) {
      removeVehicle(vehicleId);
    } else {
      if (isMaxSelected) {
        alert("You can only compare up to 3 vehicles at a time.");
        return;
      }
      addVehicle(vehicleId);
    }
  };

  return (
    <button
      onClick={toggleCompare}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest rounded transition-all ${
        isSelected
          ? "bg-[#D62B2B] text-white"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
      title={isSelected ? "Remove from comparison" : "Add to comparison"}
    >
      <FaCodeCompare size={10} />
      {isSelected ? "Added" : "Compare"}
    </button>
  );
}
