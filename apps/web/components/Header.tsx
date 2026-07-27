"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, User, Menu, Heart, Zap, ChevronDown, Car, Shield, Gauge, Calculator } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-6">
            <div className="max-w-7xl mx-auto">
                <div
                    className="bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] px-10 py-5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/20 transition-transform group-hover:rotate-6">
                                <span className="text-white font-black text-2xl">A.</span>
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-slate-900">Aspire<span className="text-primary">.</span></span>
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            <NavGroup
                                label="Inventory"
                                active={activeMenu === 'buy'}
                                onHover={() => setActiveMenu('buy')}
                                items={[
                                    { label: "Live Stock", desc: "Available for immediate delivery", icon: <Car size={16} /> },
                                    { label: "Custom Import", desc: "Build your dream spec globally", icon: <Zap size={16} /> },
                                    { label: "Premium Fleet", desc: "Ultra-luxury & Diplomatic units", icon: <Shield size={16} /> }
                                ]}
                            />
                            <NavGroup
                                label="Intelligence"
                                active={activeMenu === 'intel'}
                                onHover={() => setActiveMenu('intel')}
                                items={[
                                    { label: "Market Valuation", desc: "Real-time 2025 KRA Pricing", icon: <Gauge size={16} /> },
                                    { label: "Duty Calculator", desc: "Precise tax & port breakdown", icon: <Calculator size={16} /> },
                                    { label: "VIN Audit", desc: "Complete history verification", icon: <Shield size={16} /> }
                                ]}
                            />
                            <NavLink label="Logistics" />
                            <NavLink label="Concierge" />
                        </nav>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="text-slate-400 hover:text-primary transition-colors p-2">
                            <Search size={22} />
                        </button>
                        <div className="h-6 w-px bg-slate-200 hidden sm:block" />
                        <Link href="/account" className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors">
                            <User size={18} />
                            Member
                        </Link>
                        <Link href="/sell" className="pro-button !py-3 !px-8 hover:scale-105 transition-transform active:scale-95 text-sm">
                            List Vehicle
                        </Link>
                        <button className="lg:hidden p-2 text-slate-900">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

function NavGroup({ label, items, active, onHover }: { label: string; items: any[]; active: boolean; onHover: () => void }) {
    return (
        <div className="relative" onMouseEnter={onHover}>
            <button className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-colors ${active ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}>
                {label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${active ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-4 w-72 bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-6 z-[110]"
                    >
                        <div className="space-y-4">
                            {items.map((item, idx) => (
                                <Link key={idx} href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors group/item">
                                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{item.label}</p>
                                        <p className="text-[11px] text-slate-400 font-medium leading-tight">{item.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function NavLink({ label }: { label: string }) {
    return (
        <button className="text-[13px] font-bold text-slate-500 hover:text-primary tracking-wide transition-colors relative group">
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
        </button>
    );
}
