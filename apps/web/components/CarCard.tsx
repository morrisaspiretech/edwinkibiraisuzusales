"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, Gauge } from "lucide-react";
import Link from "next/link";

interface CarCardProps {
    car: {
        id: string;
        name: string;
        make: string;
        model: string;
        year: number;
        price: string;
        condition: string;
        transmission: string;
        image: string;
        refNo: string;
        engineCode: string;
        driveType: string;
        isReserved?: boolean;
        specs: {
            engine: string;
            mileage: string;
            fuel: string;
        };
    };
}

export function CarCard({ car }: CarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
        >
            <Link href={`/cars/${car.id}`}>
                <div className="pro-card overflow-hidden h-full flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                            {car.isReserved && (
                                <span className="bg-amber-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                                    Reserved
                                </span>
                            )}
                            <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm border border-slate-200/50">
                                {car.condition}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-6 flex-1 flex flex-col">
                        <div className="space-y-2">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
                                    {car.name}
                                </h3>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap pt-1">
                                    REF: {car.refNo}
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-500">{car.year} Model • {car.transmission} • {car.specs.fuel}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 py-6 border-y border-slate-50">
                            <SpecNode label="Engine" value={car.engineCode} />
                            <SpecNode label="Drive" value={car.driveType} />
                            <SpecNode label="Capacity" value={car.specs.engine} />
                            <SpecNode label="Mileage" value={car.specs.mileage} />
                        </div>

                        <div className="flex items-end justify-between pt-4 mt-auto">
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Market Value</p>
                                <p className="text-2xl font-black text-slate-900 tracking-tight leading-none">{car.price}</p>
                            </div>
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                                <ArrowUpRight size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

function SpecNode({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-300">{label}</p>
            <p className="text-xs font-bold text-slate-600 tracking-wide">{value}</p>
        </div>
    );
}
