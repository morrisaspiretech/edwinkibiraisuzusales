"use client";

import { Metadata } from 'next';
import { calculateTaxes } from '@repo/utils/src/crsp/calculator';
import { ShieldCheck, Activity, Info, Zap, MessageCircle, Phone, Calendar, Gauge, Fuel, Share2, Heart } from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { motion } from 'framer-motion';

export default function CarDetailPage({ params }: { params: { make: string; model: string; year: string } }) {
    const { make, model, year } = params;

    const mockCar = {
        price: 8500000,
        askingPricePretty: "8.5M",
        engineCc: 2800,
        engineType: "Inline-4 Turbo",
        engineCode: "1GD-FTV",
        transmission: "6-Speed Super ECT",
        fuelType: "Diesel",
        mileage: "45,000 km",
        color: "Pearl White",
        vin: "JTMBA31J204XXXXXX",
        chassis: "GDJ150-00XXXX",
        manufactureDate: "2022-08-15",
        importHistory: "Japan Import (August 2024)",
        specs: {
            horsepower: 201,
            torque: 500,
            seating: 7,
            drivetrain: "4WD with Diff Lock",
            bore: "92.0 mm",
            stroke: "103.6 mm",
            compression: "15.6:1",
            suspension: "KDSS Adaptive Suspension",
            brakes: "Ventilated Discs with ABS/EBD",
            audio: "JBL 14-Speaker System"
        },
        dealer: {
            name: "Premium Motors Ltd",
            rating: "4.9/5",
            verified: true,
            location: "Westlands, Nairobi"
        }
    };

    const taxes = calculateTaxes({
        originalCrsp: mockCar.price,
        engineCapacityCc: mockCar.engineCc,
        yearOfManufacture: parseInt(year),
        isCommercial: false
    });

    return (
        <main className="min-h-screen bg-midnight text-white selection:bg-primary selection:text-white">
            <Header />

            {/* Top Interactive Section */}
            <section className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
                {/* Left: Cinematic Gallery (8 Columns) */}
                <div className="lg:col-span-8 bg-slate-900 h-[60vh] lg:h-[85vh] relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                        <span className="text-[120px] font-black italic tracking-tighter uppercase grayscale">SHOWROOM</span>
                    </div>

                    {/* Gallery Controls Overlay */}
                    <div className="absolute bottom-10 left-10 z-20 flex gap-4">
                        <button className="glass px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">360° View</button>
                        <button className="glass px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Video Walkthrough</button>
                    </div>
                    <button className="absolute top-10 right-10 z-20 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>

                {/* Right: Primary Info (4 Columns) */}
                <div className="lg:col-span-4 p-8 lg:p-12 flex flex-col justify-center border-l border-white/5 bg-white/[0.01]">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                                    <ShieldCheck size={12} /> Verified Listing
                                </div>
                                <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white/40">
                                    {mockCar.mileage}
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">
                                {make} <br />
                                <span className="text-primary">{model}</span>
                            </h1>
                            <p className="text-xl text-white/40 font-bold uppercase tracking-widest italic">{year} Model Year</p>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-2">Market Price</p>
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl font-black tracking-tighter">KES {mockCar.askingPricePretty}</span>
                                <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                                    Great Value
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3 pt-8">
                            <button className="bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] py-6 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
                                <Phone size={14} /> Contact Dealer
                            </button>
                            <button className="bg-green-600 text-white font-black uppercase tracking-[0.2em] text-[10px] py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-700 hover:scale-[1.02] active:scale-95 transition-all">
                                <MessageCircle size={14} /> WhatsApp Inqury
                            </button>
                        </div>

                        <div className="pt-8 flex items-center gap-4 group cursor-pointer">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                <ShieldCheck className="text-white/40 group-hover:text-white" />
                            </div>
                            <div>
                                <p className="font-black uppercase italic text-xs tracking-widest">{mockCar.dealer.name}</p>
                                <p className="text-[10px] text-white/20 font-bold">{mockCar.dealer.rating} Verified Rating • {mockCar.dealer.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Action Bar */}
            <div className="sticky top-20 z-40 h-16 glass border-y border-white/5 px-12 hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-12">
                    {["Overview", "Specifications", "Valuation", "Dealer"].map((tab) => (
                        <button key={tab} className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-primary transition-colors">{tab}</button>
                    ))}
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-lg font-black tracking-tighter">KES {mockCar.askingPricePretty}</p>
                    <button className="bg-primary text-white text-[9px] font-black uppercase tracking-widest px-8 py-2.5 rounded-full hover:bg-blue-600 transition-colors">Reserve Unit</button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-24">
                <div className="lg:col-span-2 space-y-32">
                    {/* Identity & Verification */}
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-12 flex items-center gap-4">
                            Identity & Cloud Verification <div className="h-px flex-1 bg-white/5" />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
                            <IdentityTile label="VIN Number" value={mockCar.vin} mono />
                            <IdentityTile label="Chassis Number" value={mockCar.chassis} mono />
                            <IdentityTile label="Manufacture Date" value={mockCar.manufactureDate} />
                            <IdentityTile label="Import History" value={mockCar.importHistory} />
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-12 flex items-center gap-4">
                            Engineering Micro-Specs <div className="h-px flex-1 bg-white/5" />
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Engine Code", value: mockCar.engineCode },
                                { label: "Displacement", value: `${mockCar.engineCc}cc` },
                                { label: "Compression", value: mockCar.specs.compression },
                                { label: "Drivetrain", value: mockCar.specs.drivetrain },
                                { label: "Horsepower", value: `${mockCar.specs.horsepower} HP` },
                                { label: "Torque", value: `${mockCar.specs.torque} Nm` },
                                { label: "Bore/Stroke", value: `${mockCar.specs.bore} x ${mockCar.specs.stroke}` },
                                { label: "Transmission", value: mockCar.transmission },
                            ].map((spec) => (
                                <div key={spec.label} className="bg-white/5 border border-white/5 p-6 rounded-[2rem] hover:border-primary/40 transition-colors">
                                    <p className="text-[9px] text-white/20 uppercase font-black tracking-widest mb-1">{spec.label}</p>
                                    <p className="text-sm font-black italic">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Import Duty Visualization */}
                    <section className="bg-primary/10 border border-primary/10 p-12 rounded-[3rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Zap size={200} className="text-primary" />
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-black italic uppercase italic tracking-tighter mb-4">CRSP Sync Intelligence</h2>
                            <p className="text-sm text-white/40 font-medium leading-relaxed mb-12">
                                Based on our latest KRA CRSP sync (2025 Guide), here is the estimated total cost to register this vehicle in Kenya.
                            </p>

                            <div className="space-y-6">
                                <DutyRow label="CRSP Base Value" value={mockCar.price.toLocaleString()} />
                                <DutyRow label="Depreciation Applied" value={`-${(mockCar.price * taxes.depreciationRate).toLocaleString()}`} red />
                                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Total Duty Estimate</p>
                                        <p className="text-4xl font-black italic">KES {taxes.totalTaxes.toLocaleString()}</p>
                                    </div>
                                    <button className="bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">Download Report</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Sticky Ad / AI Insights */}
                <div className="space-y-8">
                    <div className="sticky top-40 space-y-8">
                        <div className="glass p-8 rounded-[3rem] border border-white/5 bg-gradient-to-br from-primary/10 to-transparent">
                            <h3 className="text-xl font-black italic uppercase mb-4">AI Smart Analysis</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">
                                The {model} currently holds 85% of its value after 3 years in the Nairobi market. This specific unit is priced <b>5% below</b> the current trend.
                            </p>
                            <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary">
                                <Activity size={16} /> Market Uptrend
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/5 p-8 rounded-[3rem] space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-white/20">Vehicle Condition</h3>
                            <div className="space-y-4">
                                <ConditionItem label="Paint Integrity" value="98%" />
                                <ConditionItem label="Interior Hygiene" value="Certified" />
                                <ConditionItem label="Mechanical" value="Passed" />
                            </div>
                            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-black uppercase py-4 rounded-2xl text-[10px] tracking-widest transition-colors">Request Inspection Doc</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function IdentityTile({ label, value, mono }: { label: string, value: string, mono?: boolean }) {
    return (
        <div className="p-8 bg-midnight border border-white/5">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 mb-2">{label}</p>
            <p className={`text-sm font-black italic ${mono ? 'font-mono tracking-tighter' : ''}`}>{value}</p>
        </div>
    );
}

function DutyRow({ label, value, red }: { label: string, value: string, red?: boolean }) {
    return (
        <div className="flex justify-between items-center text-sm font-bold opacity-80">
            <span className="text-white/40 uppercase text-[9px] font-black tracking-widest">{label}</span>
            <span className={red ? 'text-red-400' : 'text-white'}>KES {value}</span>
        </div>
    );
}

function ConditionItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{label}</span>
            <span className="text-xs font-black italic">{value}</span>
        </div>
    );
}
