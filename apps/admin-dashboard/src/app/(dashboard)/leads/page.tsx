"use client";

import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  ChevronRight, 
  Search,
  Filter,
  CheckCircle2,
  Clock,
  ExternalLink,
  Car,
  Loader2,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string | null;
  status: string;
  createdAt: string;
  vehicle?: {
    make: string;
    model: string;
    year: number;
  };
}

const AdminLeadsPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const fetchLeads = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      try {
        const response = await fetch(`${apiUrl}/api/admin/leads`);
        if (!response.ok) { setLeads([]); return; }
        const data = await response.json();
        setLeads(Array.isArray(data) ? data : (data?.leads ?? data?.data ?? []));
      } catch (error) {
        console.warn("Error fetching leads:", error);
        setLeads([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/admin/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredLeads = leads.filter(l => filter === "ALL" || l.status === filter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <nav className="flex items-center gap-2 text-sm font-extrabold uppercase text-slate-500 mb-4 tracking-wider">
          <Link href="/dashboard" className="hover:text-primary transition-all">Dashboard</Link>
          <ChevronRight size={14} className="opacity-50" />
          <span className="text-primary font-extrabold">Lead Management</span>
        </nav>
        <h1 className="text-3xl font-bold text-primary tracking-tight">Customer Leads</h1>
        <p className="text-sm text-slate-500 font-bold mt-1">Manage and track customer inquiries from the website.</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Total Leads" value={leads.length} color="blue" />
        <StatCard label="New Inquiries" value={leads.filter(l => l.status === "NEW").length} color="emerald" />
        <StatCard label="In Progress" value={leads.filter(l => l.status === "CONTACTED").length} color="amber" />
        <StatCard label="Closed" value={leads.filter(l => l.status === "CLOSED").length} color="slate" />
      </div>

      {/* Filters */}
      <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200 w-fit">
        {["ALL", "NEW", "CONTACTED", "CLOSED"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={cn(
              "px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.2em] rounded-lg transition-all",
              filter === s 
                ? "bg-white text-primary shadow-sm" 
                : "text-slate-400 hover:text-primary"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Leads Grid */}
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-20 text-center">
            <Loader2 className="animate-spin text-accent mx-auto mb-4" size={32} />
            <p className="text-xs font-bold text-slate-500 uppercase">Fetching leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-20 text-center text-slate-400">
            <MessageSquare className="mx-auto mb-4 opacity-10" size={48} />
            <p className="text-sm font-bold uppercase tracking-widest">No leads found in this category</p>
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div key={lead.id} className="admin-card overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="p-6 flex flex-col lg:flex-row gap-8">
                {/* Contact Info */}
                <div className="lg:w-1/4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                      <User size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary">{lead.name}</h3>
                      <p className="text-xs font-extrabold text-slate-600 uppercase mt-0.5 tracking-wider">Customer</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-accent transition-colors">
                      <Mail size={14} className="text-slate-400" /> {lead.email}
                    </a>
                    <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-accent transition-colors">
                      <Phone size={14} className="text-slate-400" /> {lead.phone}
                    </a>
                  </div>
                </div>

                {/* Message & Vehicle */}
                <div className="lg:flex-1 space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-50">
                    <Car size={16} className="text-accent" />
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">
                      Inquiry for: {lead.vehicle ? `${lead.vehicle.year} ${lead.vehicle.make} ${lead.vehicle.model}` : "General Inquiry"}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed italic">
                    "{lead.message || "No message provided."}"
                  </p>
                  <p className="text-xs font-extrabold text-slate-500 uppercase flex items-center gap-2 tracking-wider leading-none">
                    <Clock size={12} className="text-accent" /> Received: {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {/* Status & Actions */}
                <div className="lg:w-1/4 flex flex-col justify-between items-end gap-6">
                  <span className={cn(
                    "text-xs font-extrabold px-3 py-2 rounded-sm border uppercase tracking-[0.15em] leading-none",
                    lead.status === "NEW" ? "bg-emerald-50 text-emerald-600 border-emerald-100 ring-4 ring-emerald-50/50" :
                    lead.status === "CONTACTED" ? "bg-amber-50 text-amber-600 border-amber-100" :
                    "bg-slate-50 text-slate-400 border-slate-100"
                  )}>
                    {lead.status}
                  </span>

                  <div className="flex items-center gap-2 w-full">
                    {lead.status === "NEW" && (
                      <button 
                        onClick={() => updateStatus(lead.id, "CONTACTED")}
                        className="flex-1 px-4 py-3 bg-primary text-white text-xs font-extrabold uppercase tracking-widest rounded-lg hover:bg-black transition-all shadow-lg active:scale-95"
                      >
                        Mark Contacted
                      </button>
                    )}
                    {lead.status === "CONTACTED" && (
                      <button 
                        onClick={() => updateStatus(lead.id, "CLOSED")}
                        className="flex-1 px-4 py-3 bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-widest rounded-lg hover:bg-emerald-700 transition-all shadow-lg active:scale-95"
                      >
                        Close Lead
                      </button>
                    )}
                    <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary rounded-lg transition-all border border-slate-100">
                      <MoreVertical size={16} />
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

const StatCard = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-2">
    <p className="text-xs font-extrabold text-slate-600 uppercase tracking-widest mb-1">{label}</p>
    <p className={cn(
      "text-3xl font-bold tracking-tight",
      color === "emerald" ? "text-emerald-600" :
      color === "amber" ? "text-amber-500" :
      color === "blue" ? "text-primary" :
      "text-slate-400"
    )}>{value}</p>
  </div>
);

export default AdminLeadsPage;
