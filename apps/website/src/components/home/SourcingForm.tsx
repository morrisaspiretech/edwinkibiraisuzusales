"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Sparkles, Fuel } from "lucide-react";

const SourcingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "CAR",
    make: "",
    model: "",
    fuelType: "Petrol",
    yearMin: "",
    budgetMax: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/sourcing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "CAR",
          make: "",
          model: "",
          fuelType: "Petrol",
          yearMin: "",
          budgetMax: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Sourcing error:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-[2rem] text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto shadow-xl shadow-emerald-500/20">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-emerald-900 tracking-tight">Request Received</h3>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-emerald-600 font-extrabold uppercase text-xs hover:underline tracking-widest"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
        <Sparkles size={80} className="group-hover:rotate-12 transition-transform duration-1000" />
      </div>

      <div className="relative z-10">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white uppercase leading-none mb-4">
            Request <span className="text-accent">A Car</span>
          </h3>
          <p className="text-xs md:text-sm text-white/60 font-medium">
            Can't find it in our showroom? We'll source it specifically for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="+254..."
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Vehicle Make</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Toyota"
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.make}
                onChange={(e) => setFormData(prev => ({ ...prev, make: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Specific Model</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Land Cruiser"
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50 flex items-center gap-2">
                <Fuel size={14} className="text-accent" /> Fuel Type
              </label>
              <select 
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all appearance-none cursor-pointer"
                value={formData.fuelType}
                onChange={(e) => setFormData(prev => ({ ...prev, fuelType: e.target.value }))}
              >
                <option value="Petrol" className="bg-primary hover:bg-black/50">Petrol</option>
                <option value="Diesel" className="bg-primary hover:bg-black/50">Diesel</option>
                <option value="Electric" className="bg-primary hover:bg-black/50">Electric / EV</option>
                <option value="Hybrid" className="bg-primary hover:bg-black/50">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Minimum Year</label>
              <input 
                type="number" 
                placeholder="e.g. 2020"
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.yearMin}
                onChange={(e) => setFormData(prev => ({ ...prev, yearMin: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Max Budget (KSh)</label>
              <input 
                type="number" 
                placeholder="Your budget limit"
                className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all placeholder:text-white/20"
                value={formData.budgetMax}
                onChange={(e) => setFormData(prev => ({ ...prev, budgetMax: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
              <label className="text-xs font-extrabold uppercase tracking-widest text-white/50">Additional Requirements</label>
            <textarea 
              rows={3} 
              placeholder="Tell us more about your ideal car..."
              className="w-full bg-black/20 border border-white/10 p-4 text-sm font-bold text-white/90 focus:outline-none focus:border-accent focus:bg-white/5 transition-all resize-none placeholder:text-white/20"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            />
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full bg-accent text-primary py-5 font-extrabold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            Submit Sourcing Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default SourcingForm;
