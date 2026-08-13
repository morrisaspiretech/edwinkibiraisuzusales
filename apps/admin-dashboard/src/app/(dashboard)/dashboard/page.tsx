"use client";

import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Car, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock,
  Plus,
  Loader2,
  ChevronRight,
  MessageSquare,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Vehicle } from "@/types";

interface Lead {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  vehicle?: { make: string; model: string };
}

const AdminDashboard = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      try {
        const [vRes, lRes] = await Promise.all([
          fetch(`${apiUrl}/api/vehicles`).catch(() => null),
          fetch(`${apiUrl}/api/admin/leads`).catch(() => null)
        ]);

        const vData = vRes?.ok ? await vRes.json() : [];
        const lData = lRes?.ok ? await lRes.json() : [];

        // Safely coerce to arrays regardless of API shape
        setVehicles(Array.isArray(vData) ? vData : (vData?.vehicles ?? vData?.data ?? []));
        setLeads(Array.isArray(lData) ? lData : (lData?.leads ?? lData?.data ?? []));
      } catch (error) {
        console.warn("Dashboard fetch error:", error);
        setVehicles([]);
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const availableCars = vehicles.filter(v => v.category === 'CAR' && v.status === 'AVAILABLE').length;
  const newLeads = leads.filter(l => l.status === 'NEW').length;
  const totalRevenueMock = vehicles.filter(v => v.status === 'SOLD').reduce((sum, v) => sum + v.price, 0);

  const stats = [
    { label: "Car Inventory", value: availableCars, icon: Car, trend: "Live Stock", isPositive: true },
    { label: "New Leads", value: newLeads, icon: Users, trend: `${leads.length} Total`, isPositive: true },
    { label: "Sourcing Requests", value: "Pending", icon: Sparkles, trend: "Active", isPositive: true },
    { label: "Sales Volume", value: `KSh ${(totalRevenueMock / 1000000).toFixed(1)}M`, icon: TrendingUp, trend: "Total Sales", isPositive: true },
  ];

  if (loading) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <Loader2 className="animate-spin text-accent mb-4" size={48} />
        <p className="text-xs font-bold uppercase text-primary/30">Syncing Intelligence...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Dashboard Overview</h1>
          <p className="text-slate-500 font-medium">Welcome back, Admin. Real-time telemetry is active.</p>
        </div>
        <Link href="/inventory/new" className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase rounded-xl shadow-xl shadow-primary/10 flex items-center gap-3 hover:bg-black transition-all">
          <Plus size={18} /> Add New Listing
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-card border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-default">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-slate-50 rounded-xl text-primary/40 group-hover:bg-accent group-hover:text-primary transition-all">
                <stat.icon size={20} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full uppercase tabular-nums",
                stat.isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
              )}>
                {stat.trend}
              </div>
            </div>
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs font-extrabold text-slate-500 uppercase mt-2 tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Inventory */}
        <div className="admin-card bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
            <h2 className="text-sm font-bold text-primary uppercase flex items-center gap-2">
              <Car className="text-accent" size={18} /> Recent Arrivals
            </h2>
            <Link href="/inventory" className="text-xs font-extrabold text-primary/40 uppercase hover:text-accent transition-colors tracking-widest">View Showroom</Link>
          </div>
          <div className="space-y-6">
            {vehicles.slice(0, 4).map((v) => (
              <div key={v.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-10 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                    <img src={v.images[0]?.url || "/hero-car.png"} alt={v.model} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase">{v.make} {v.model}</p>
                    <p className="text-xs font-extrabold text-slate-500 uppercase mt-0.5 tracking-wider">{new Date(v.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary">KSh {(v.price / 1000000).toFixed(1)}M</p>
                  <span className={cn(
                    "text-xs font-extrabold uppercase tracking-widest",
                    v.status === 'AVAILABLE' ? "text-emerald-500" : "text-amber-500"
                  )}>{v.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Leads */}
        <div className="admin-card bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
            <h2 className="text-sm font-bold text-primary uppercase flex items-center gap-2">
              <Users className="text-accent" size={18} /> Latest Leads
            </h2>
            <Link href="/leads" className="text-xs font-extrabold text-primary/40 uppercase hover:text-accent transition-colors tracking-widest">Manage All</Link>
          </div>
          <div className="space-y-6">
            {leads.slice(0, 4).map((l) => (
              <div key={l.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary font-extrabold text-xs group-hover:bg-accent transition-colors">
                    {l.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase">{l.name}</p>
                    <p className="text-xs font-extrabold text-primary/40 uppercase tracking-wider">{l.vehicle ? `${l.vehicle.make} ${l.vehicle.model}` : 'General Inquiry'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{new Date(l.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  <span className={cn(
                    "text-xs font-extrabold uppercase tracking-widest",
                    l.status === 'NEW' ? "text-emerald-500" : "text-slate-300"
                  )}>{l.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
