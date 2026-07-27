"use client";

import React from "react";
import VehicleCard from "./VehicleCard";
import { Vehicle } from "@/types/vehicle";

interface VehicleGridProps {
  vehicles: Vehicle[];
}

const VehicleGrid = ({ vehicles }: VehicleGridProps) => {
  if (vehicles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-surface border border-primary/5">
        <h3 className="text-2xl font-bold text-primary mb-2 uppercase tracking-tight">No Vehicles Found</h3>
        <p className="text-text-dark/50 font-medium">Try adjusting your filters to find your perfect match.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
      ))}
    </div>
  );
};

export default VehicleGrid;
