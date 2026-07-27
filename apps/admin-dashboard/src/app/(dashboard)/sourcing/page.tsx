"use client";

import React, { useState, useEffect } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  Car,
  ChevronRight,
  Loader2,
  Sparkles,
  Phone,
  Mail,
  Fuel,
  TrendingDown,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SourcingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  make: string;
  model: string;
  fuelType: string | null;
  yearMin: number | null;
  budgetMax: number | null;
  message: string | null;
  status: string;
  createdAt: string;
}

const AdminSourcingPage = () => {
  const [requests, setRequests] = useState<SourcingRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const fetchRequests = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      try {
        const response = await fetch(`${apiUrl}/api/admin/sourcing`);
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching sourcing requests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/admin/sourcing/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredRequests = requests.filter(r => filter === "ALL" || r.status === filter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center gap-2 text-sm font-extrabold uppercase text-slate-500 mb-4 tracking-wider">
            <Link href="/dashboard" className="hover:text-primary transition-all">Dashboard</Link>
            <ChevronRight size={14} className="opacity-50" />
            <span className="text-primary font-extrabold">Sourcing Requests</span>
          </nav>
          <h1 className="text-3xl font-bold text-primary">Sourcing Requests</h1>
          <p className="text-sm text-slate-500 font-bold mt-1">Manage bespoke vehicle sourcing requests from customers.</p>
        </div>
        <div className="bg-primary px-6 py-3 rounded-xl border border-primary text-white flex items-center gap-4 shadow-xl">
          <div className="text-right border-r border-white/10 pr-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] opacity-50">Active Requests</p>
            <p className="text-xl font-bold">{requests.filter(r => r.status !== 'CLOSED').length}</p>
          </div>
          <Sparkles className="text-accent" size={24} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200 w-fit">
        {["ALL", "NEW", "IN_PROGRESS", "FULFILLED", "CLOSED"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              "px-6 py-2 text-xs font-extrabold uppercase rounded-lg transition-all tracking-widest",
              filter === s 
                ? "bg-white text-primary shadow-sm" 
                : "text-slate-500 hover:text-primary"
            )}
          >
            {s.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Requests Grid */}
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-20 text-center">
            <Loader2 className="animate-spin text-accent mx-auto mb-4" size={32} />
            <p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest leading-none">
              Accessing Procurement Database...</p>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-20 text-center text-slate-400">
            <Sparkles className="mx-auto mb-4 opacity-10" size={48} />
            <p className="text-sm font-bold uppercase tracking-widest">No sourcing requests found</p>
          </div>
        ) : (
          filteredRequests.map((request) => (
            <div key={request.id} className="admin-card overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="p-8 flex flex-col lg:flex-row gap-8">
                {/* Customer Details */}
                <div className="lg:w-1/4 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary tracking-tight uppercase leading-none">{request.name}</h3>
                    <p className="text-xs font-extrabold text-slate-500 uppercase mt-1 tracking-wider leading-none">Sourcing Lead</p>
                  </div>
                  <div className="space-y-2">
                    <a href={`mailto:${request.email}`} className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-accent transition-colors">
                      <Mail size={14} className="text-accent" /> {request.email}
                    </a>
                    <a href={`tel:${request.phone}`} className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-accent transition-colors">
                      <Phone size={14} className="text-accent" /> {request.phone}
                    </a>
                  </div>
                </div>

                {/* Requirements */}
                <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 border-l border-r border-slate-50 px-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/5 p-2 rounded-lg text-primary">
                        <Car size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase">{request.make} {request.model}</p>
                        <p className="text-xs font-extrabold text-slate-500 uppercase mt-0.5 tracking-wider">{request.category} • {request.fuelType || 'Any Fuel'}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Fuel size={12} className="text-accent" />
                        <span className="text-xs font-extrabold text-primary uppercase tracking-wider">{request.fuelType || 'Any Fuel'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-accent" />
                        <span className="text-xs font-extrabold text-primary uppercase tracking-wider">{request.yearMin ? `${request.yearMin}+` : 'Any Year'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <TrendingDown size={14} className="text-emerald-500" />
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">
                        Budget: {request.budgetMax ? `KSh ${request.budgetMax.toLocaleString()}` : 'Not Specified'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed italic border-t border-slate-50 pt-4">
                      "{request.message || 'No additional requirements provided.'}"
                    </p>
                  </div>
                </div>

                {/* Status & Control */}
                <div className="lg:w-1/4 flex flex-col justify-between items-end gap-6">
                  <span className={cn(
                    "text-xs font-extrabold px-3 py-1 rounded-sm border uppercase tracking-wider",
                    request.status === "NEW" ? "bg-emerald-50 text-emerald-600 border-emerald-100 ring-4 ring-emerald-50/50" :
                    request.status === "IN_PROGRESS" ? "bg-amber-50 text-amber-600 border-amber-100" :
                    request.status === "FULFILLED" ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" :
                    "bg-slate-50 text-slate-400 border-slate-100"
                  )}>
                    {request.status.replace('_', ' ')}
                  </span>

                  <div className="flex items-center gap-2 w-full">
                    <select 
                      onChange={(e) => updateStatus(request.id, e.target.value)}
                      value={request.status}
                      className="flex-1 bg-slate-50 border border-slate-100 p-2 text-xs font-extrabold uppercase tracking-widest rounded-lg focus:outline-none focus:border-accent transition-all cursor-pointer"
                    >
                      <option value="NEW">New</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="FULFILLED">Fulfilled</option>
                      <option value="CLOSED">Closed</option>
                    </select>
                    <button className="p-2 border border-slate-100 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminSourcingPage;
