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
  Loader2
} from "lucide-react";
import Link from "next/link";
import { Vehicle } from "@/types";
import { cn } from "@/lib/utils";

const AdminInventoryPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("CAR");

  useEffect(() => {
    const fetchVehicles = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      try {
        const response = await fetch(`${apiUrl}/api/vehicles`);
        if (!response.ok) {
          console.warn(`API responded with ${response.status}. Showing empty inventory.`);
          setVehicles([]);
          return;
        }
        const data = await response.json();
        // API may return an array directly or nest it in a vehicles/data key
        const list = Array.isArray(data) ? data : (data.vehicles ?? data.data ?? []);
        setVehicles(list);
      } catch (error) {
        console.warn("Could not reach API. Showing empty inventory.");
        setVehicles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter(v => {
    const matchesSearch = v.make.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         v.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || v.status === statusFilter;
    const matchesCategory = categoryFilter === "ALL" || v.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this vehicle from inventory?")) return;
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      const response = await fetch(`${apiUrl}/api/admin/vehicles/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        setVehicles(prev => prev.filter(v => v.id !== id));
      } else {
        alert("Failed to delete vehicle.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <nav className="flex items-center gap-2 text-xs font-extrabold uppercase text-slate-500 mb-4 tracking-wider">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Inventory Management</span>
          </nav>
          <h1 className="text-3xl font-bold text-primary">Inventory</h1>
        </div>
        <Link href="/inventory/new" className="btn-admin-primary shadow-lg shadow-primary/10 px-6 py-3 rounded-xl flex items-center gap-2">
          <Plus size={18} /> Add New Vehicle
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="admin-card rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between bg-white border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by make or model..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 p-3 pl-12 rounded-xl text-sm font-medium focus:outline-none focus:border-accent transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {["CAR", "BIKE", "ALL"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={cn(
                  "px-6 py-2.5 text-xs font-extrabold uppercase rounded-lg transition-all tracking-wider",
                  categoryFilter === cat 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-400 hover:text-primary"
                )}
              >
                {cat === "ALL" ? "All Items" : cat === "CAR" ? "Cars Only" : "Bikes Only"}
              </button>
            ))}
          </div>

          <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200">
            {["ALL", "AVAILABLE", "SOLD", "RESERVED"].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={cn(
                  "px-4 py-2.5 text-xs font-extrabold uppercase rounded-lg transition-all tracking-wider",
                  statusFilter === status 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-400 hover:text-primary"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Inventory Table/Grid */}
      <div className="admin-card overflow-hidden border border-slate-100 shadow-xl rounded-2xl bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-6 py-4 text-xs font-extrabold uppercase text-slate-600 tracking-wider">Vehicle</th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase text-slate-600 tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase text-slate-600 tracking-wider">Year/KM</th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase text-slate-600 tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-extrabold uppercase text-slate-600 tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center">
                    <Loader2 className="animate-spin text-accent mx-auto mb-2" size={32} />
                    <p className="text-xs font-bold text-slate-500 uppercase">Loading Inventory...</p>
                  </td>
                </tr>
              ) : filteredVehicles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-500">
                    <Car className="mx-auto mb-4 opacity-10" size={48} />
                    <p className="text-sm font-bold uppercase tracking-widest">No matching vehicles found</p>
                  </td>
                </tr>
              ) : (
                filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                          {vehicle.images[0] ? (
                            <img src={vehicle.images[0].url} alt={vehicle.model} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <Car size={20} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary">{vehicle.make} {vehicle.model}</p>
                          <p className="text-xs font-extrabold text-slate-500 uppercase mt-0.5 tracking-tight">{vehicle.bodyType} • {vehicle.fuelType}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-primary">KSh {vehicle.price.toLocaleString()}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-primary">{vehicle.year}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">{vehicle.mileage.toLocaleString()} KM</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "text-[11px] font-bold px-3 py-1.5 rounded-md border uppercase tracking-wider shadow-sm",
                        vehicle.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                        vehicle.status === "SOLD" ? "bg-red-50 text-red-600 border-red-100" :
                        "bg-amber-50 text-amber-600 border-amber-100"
                      )}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/inventory/${vehicle.id}`}
                          className="p-2 text-slate-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
                          title="Edit Vehicle"
                        >
                          <Edit size={16} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(vehicle.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete Vehicle"
                        >
                          <Trash2 size={16} />
                        </button>
                        <a 
                          href={`${process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://127.0.0.1:3000'}/inventory/${vehicle.id}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 rounded-lg transition-all"
                          title="View on Website"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {!loading && filteredVehicles.length > 0 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
            <p className="text-xs font-extrabold text-slate-500 uppercase tracking-widest">
              Showing {filteredVehicles.length} of {vehicles.length} total vehicles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInventoryPage;
