"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, Phone, Mail, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  vehicleId: string;
  vehicleName: string;
}

const LeadForm = ({ vehicleId, vehicleName }: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I am interested in the ${vehicleName}. Please provide more details.`
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicleId
        })
      });

      if (!response.ok) throw new Error("Failed to send inquiry");
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending lead:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-emerald-900">Inquiry Sent!</h3>
        <p className="text-sm text-emerald-700 font-medium">
          Thank you for your interest. One of our agents will contact you shortly regarding the **{vehicleName}**.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-primary tracking-tight">Request More Info</h3>
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 pl-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              required
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all focus:bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 pl-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                required
                type="email" 
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all focus:bg-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 pl-1">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                required
                type="tel" 
                placeholder="+254..."
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent transition-all focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 pl-1">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 text-slate-400" size={16} />
            <textarea 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm font-medium focus:outline-none focus:border-accent transition-all focus:bg-white resize-none"
            />
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-primary text-white p-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-primary/10 group disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (
            <>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Send Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
