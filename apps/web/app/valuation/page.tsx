"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";

export default function ValuationPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="max-w-5xl mx-auto pt-48 px-8 md:px-16 pb-32">
                {/* Header Section */}
                <div className="space-y-8 mb-20 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-4 justify-center md:justify-start"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Intelligence Node: Valuation</span>
                        <div className="h-[1px] w-20 bg-primary/20 hidden md:block" />
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                        Intrinsic <br />
                        <span className="text-primary italic">Valuation Engine.</span>
                    </h1>

                    <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                        Deploying Africa's most advanced valuation model. Cross-referencing
                        KRA 2025 CRSP schedules with real-time auction clearing data to
                        ensure you never overpay.
                    </p>
                </div>

                {/* Input Terminal */}
                <div className="pro-card p-12 space-y-12 bg-slate-50 border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="space-y-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Query Input</span>
                        <input
                            type="text"
                            placeholder="Enter VIN or Model Name (e.g. Prado J150)"
                            className="w-full bg-transparent border-b border-slate-200 py-6 text-3xl font-bold tracking-tight text-slate-900 placeholder:text-slate-200 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <SelectionNode label="Year" value="2018" />
                        <SelectionNode label="Territory" value="Kenya" />
                        <SelectionNode label="Condition" value="Foreign Used" />
                        <SelectionNode label="Trim" value="TX-L" />
                    </div>

                    <button className="pro-button w-full py-6 text-lg shadow-primary-glow">
                        Execute Valuation Audit
                    </button>
                </div>

                {/* Live Basis Schedule */}
                <div className="mt-32 space-y-12">
                    <div className="flex justify-between items-end border-b border-slate-100 pb-6">
                        <h2 className="text-3xl font-bold text-slate-900">Market Basis Schedule</h2>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Live Data Stream</span>
                    </div>

                    <div className="grid gap-4">
                        <BasisItem model="Land Cruiser 300 ZX" year="2025" basis="KES 33,500,000" trend="+42% (CRSP Sync)" />
                        <BasisItem model="Range Rover Vogue L460" year="2024" basis="KES 45,000,000" trend="+38% (Territory Demand)" />
                        <BasisItem model="Toyota Prado J150" year="2018" basis="KES 9,800,000" trend="Stable (High Liquidity)" />
                    </div>
                </div>
            </div>
        </main>
    );
}

function SelectionNode({ label, value }: { label: string; value: string }) {
    return (
        <div className="space-y-2 cursor-pointer group">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">{label}</p>
            <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{value}</p>
        </div>
    );
}

function BasisItem({ model, year, basis, trend }: { model: string, year: string, basis: string, trend: string }) {
    return (
        <div className="pro-card p-8 flex justify-between items-center bg-white border-slate-100 hover:border-primary/20 transition-all group">
            <div className="space-y-1">
                <p className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{model}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{year} Model Year</p>
            </div>
            <div className="text-right space-y-1">
                <p className="text-xl font-bold text-slate-900 leading-tight">{basis}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{trend}</p>
            </div>
        </div>
    );
}
