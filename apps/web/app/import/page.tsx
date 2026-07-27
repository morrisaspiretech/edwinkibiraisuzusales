"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";

export default function ImportPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="max-w-7xl mx-auto pt-48 px-8 md:px-16 pb-32">
                <div className="flex flex-col xl:flex-row gap-20">
                    {/* Left: Input Console */}
                    <div className="flex-1 space-y-16">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-4"
                            >
                                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">Intelligence Node: Importation</span>
                                <div className="h-[1px] w-16 bg-primary/20" />
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                                Advanced <br />
                                <span className="text-primary italic">Tax Terminal.</span>
                            </h1>

                            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                                Precise computation of the July 1, 2025 KRA Tariff Schedule.
                                Aggregating Import Duty, Excise, VAT, and Railway Development Levies.
                            </p>
                        </div>

                        <div className="pro-card p-12 space-y-12 bg-slate-50 border-slate-100 shadow-xl shadow-slate-200/50">
                            <div className="space-y-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">FOB Value (Export Price)</span>
                                <div className="flex items-baseline gap-4 border-b border-slate-200 pb-4">
                                    <span className="text-2xl font-bold text-slate-400">GBP</span>
                                    <input
                                        type="text"
                                        placeholder="0.00"
                                        className="bg-transparent text-5xl font-bold tracking-tight text-slate-900 focus:outline-none w-full placeholder:text-slate-100"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
                                <SelectionNode label="Vehicle Age" value="2023 MY" />
                                <SelectionNode label="Capacity" value="2,400cc" />
                                <SelectionNode label="Fuel Engine" value="Petrol" />
                            </div>

                            <button className="pro-button w-full py-6 text-lg shadow-primary-glow">
                                Execute Duty Calculation
                            </button>
                        </div>
                    </div>

                    {/* Right: Data Report */}
                    <div className="w-full xl:w-[480px] space-y-8">
                        <div className="pro-card p-10 space-y-10 border-slate-100 shadow-lg bg-white">
                            <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                                <h2 className="text-xl font-bold text-slate-900">Duty Breakdown</h2>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">KRA 2025 Schedule</span>
                            </div>

                            <div className="space-y-6">
                                <ReportLine label="Import Duty" rate="35.0%" value="---" />
                                <ReportLine label="Excise Duty" rate="35.0%" value="---" />
                                <ReportLine label="VAT" rate="16.0%" value="---" />
                                <ReportLine label="IDF" rate="3.5%" value="---" />
                                <ReportLine label="RDL" rate="2.0%" value="---" />
                            </div>

                            <div className="pt-8 border-t border-slate-50 space-y-4">
                                <div className="bg-primary/5 rounded-3xl p-8 space-y-2 border border-primary/10">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Estimated Total Payable</span>
                                    <p className="text-4xl font-bold tracking-tight text-slate-900">KES 0.00</p>
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 leading-relaxed uppercase tracking-wider text-center">
                                    Estimated based on 20ft container shipping <br /> rates to Mombasa port.
                                </p>
                            </div>
                        </div>

                        <div className="pro-card p-8 border-slate-100/50 bg-slate-50/50 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Mombasa Port Charges Included</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Interpol & CFS Fees Estimated</span>
                            </div>
                        </div>
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

function ReportLine({ label, rate, value }: { label: string, rate: string, value: string }) {
    return (
        <div className="flex justify-between items-center group">
            <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-tight">{label}</span>
                <span className="text-[9px] font-bold text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">{rate}</span>
            </div>
            <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">{value}</span>
        </div>
    );
}
