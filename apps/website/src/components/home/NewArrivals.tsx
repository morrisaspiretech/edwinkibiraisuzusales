"use client";

import React from "react";
import { motion } from "framer-motion";
import VehicleCard from "@/components/inventory/VehicleCard";
import { Vehicle } from "@/types/vehicle";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NewArrivalsProps {
  vehicles: Vehicle[];
}

const NewArrivals = ({ vehicles }: NewArrivalsProps) => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight uppercase leading-none">
              New <span className="text-accent underline decoration-1 underline-offset-8">Arrivals</span>
            </h2>
            <p className="text-sm md:text-lg text-primary/60 font-bold max-w-xl">
              The latest additions to our premium collection, hand-picked for quality.
            </p>
          </div>
          <Link 
            href="/inventory" 
            className="group flex items-center gap-4 text-xs font-extrabold uppercase text-primary hover:text-accent transition-colors tracking-widest"
          >
            Explore Full Showroom
            <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
              <ChevronRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {vehicles.slice(0, 6).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <VehicleCard vehicle={vehicle} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
