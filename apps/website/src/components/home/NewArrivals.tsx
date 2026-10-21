"use client";

import React from "react";
import { motion } from "framer-motion";
import VehicleCard from "@/components/inventory/VehicleCard";
import { Vehicle } from "@/types/vehicle";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface NewArrivalsProps {
  vehicles: Vehicle[];
}

const NewArrivals = ({ vehicles }: NewArrivalsProps) => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[3px] w-12 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">
                Latest Stock
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-none">
              New <span className="text-secondary">Isuzu</span> Arrivals
            </h2>
            <p className="text-gray-500 font-medium mt-2 max-w-md">
              Browse our latest genuine Isuzu vehicles — fresh stock available now.
            </p>
          </div>
          <Link
            href="/vehicles"
            className="group flex items-center gap-3 text-xs font-black uppercase text-primary hover:text-secondary transition-colors tracking-widest flex-shrink-0"
          >
            View All Isuzu Vehicles
            <div className="w-10 h-10 border border-primary/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all">
              <FaChevronRight size={16} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.slice(0, 6).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <VehicleCard vehicle={vehicle} index={index} />
            </motion.div>
          ))}
        </div>

        {vehicles.length === 0 && (
          <div className="text-center py-16 border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
              No vehicles in stock yet. Please check back soon or contact us directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 bg-secondary text-white px-6 py-3 font-black uppercase text-sm tracking-wider hover:bg-accent-dark transition-all"
            >
              Contact Us <FaChevronRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
