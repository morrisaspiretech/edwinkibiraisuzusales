"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, User, Phone, Mail, MessageSquare } from "lucide-react";

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
    message: `I'm interested in the ${vehicleName}. Please contact me.`
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for now since backend might be offline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center space-y-3">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="text-sm font-black text-primary uppercase">Request Received</h3>
        <p className="text-xs text-gray-500 font-medium">
          Our team will contact you shortly regarding the {vehicleName}.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-[10px] font-bold uppercase tracking-widest text-secondary hover:underline transition-all pt-2"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="mb-4">
        <h3 className="font-black text-primary uppercase text-sm tracking-wide">Request More Info</h3>
        <p className="text-[11px] text-gray-500 mt-1">Leave your details and we will get back to you fast.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              required
              type="text" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-gray-50 border border-gray-200 py-2.5 pl-9 pr-3 rounded text-xs font-bold focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              required
              type="tel" 
              placeholder="+254..."
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-gray-50 border border-gray-200 py-2.5 pl-9 pr-3 rounded text-xs font-bold focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={14} />
            <textarea 
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full bg-gray-50 border border-gray-200 py-2.5 pl-9 pr-3 rounded text-xs font-medium focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 rounded font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all mt-2 disabled:opacity-50"
        >
          {isSubmitting ? <Loader2 className="animate-spin" size={14} /> : (
            <>
              <Send size={14} /> Send
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
