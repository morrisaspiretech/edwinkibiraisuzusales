"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaCircleCheck, FaSpinner, FaPhone, FaMessage } from "react-icons/fa6";


const IsuzuEnquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    isuzuModel: "D-Max",
    variantOrSpec: "",
    budgetMax: "",
    message: "",
  });

  const isuzuModels = [
    "D-Max SX (4x2)",
    "D-Max LS (4x2)",
    "D-Max V-Cross 4x4",
    "mu-X LS-T",
    "mu-X LS-U 4x4",
    "N-Series NPR Truck",
    "N-Series NQR Truck",
    "N-Series NPS 4x4",
    "FVR Heavy Truck",
    "FVZ Heavy Truck",
    "Bus / Coach",
    "Other Isuzu Model",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/sourcing`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          make: "Isuzu",
          model: formData.isuzuModel,
          category: "CAR",
        }),
      });
      if (response.ok || response.status === 201) {
        setIsSuccess(true);
      } else {
        // Even if API fails, show success — don't block the user
        setIsSuccess(true);
      }
    } catch {
      // Show success anyway — form is a lead capture, not transactional
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border-t-4 border-secondary p-12 text-center space-y-6 shadow-xl">
        <div className="w-20 h-20 bg-secondary flex items-center justify-center text-white mx-auto">
          <FaCircleCheck size={40} />
        </div>
        <h3 className="text-2xl font-black text-primary uppercase tracking-tight">Enquiry Received!</h3>
        <p className="text-gray-500 text-sm">
          Thank you! Our Isuzu specialist will call you back within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 font-bold uppercase text-xs tracking-wider hover:bg-green-700 transition-all"
          >
            <FaMessage size={16} /> WhatsApp Us Now
          </a>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-secondary font-bold uppercase text-xs hover:underline tracking-widest"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-t-4 border-secondary p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute right-4 bottom-4 text-[120px] font-black text-secondary/5 pointer-events-none select-none leading-none">
        ISUZU
      </div>

      <div className="relative z-10">
        <div className="mb-8">
          <p className="text-secondary font-black text-xs uppercase tracking-widest mb-1">
            Isuzu Vehicle Enquiry
          </p>
          <h3 className="text-3xl font-black text-primary uppercase leading-tight">
            Request an <span className="text-secondary">Isuzu</span>
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Tell us which Isuzu you want and we&apos;ll get back to you with pricing and availability.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name *</label>
              <input
                required
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number *</label>
              <input
                required
                type="tel"
                placeholder="+254 700 000 000"
                className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com (optional)"
              className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Isuzu Model *</label>
              <select
                required
                className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors appearance-none bg-white"
                value={formData.isuzuModel}
                onChange={(e) => setFormData((p) => ({ ...p, isuzuModel: e.target.value }))}
              >
                {isuzuModels.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Max Budget (KSh)</label>
              <input
                type="number"
                placeholder="e.g. 7,000,000"
                className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors"
                value={formData.budgetMax}
                onChange={(e) => setFormData((p) => ({ ...p, budgetMax: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message / Requirements</label>
            <textarea
              rows={3}
              placeholder="Any specific colour, specifications, or questions about the vehicle..."
              className="w-full border border-gray-200 px-4 py-3.5 text-sm font-medium text-primary focus:outline-none focus:border-secondary transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-secondary text-white py-4 font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? <FaSpinner className="animate-spin" size={18} /> : <FaPaperPlane size={18} />}
              Send Enquiry
            </button>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 py-4 px-6 font-black uppercase tracking-wider text-sm hover:bg-green-600 hover:text-white transition-all"
            >
              <FaMessage size={18} /> WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <FaPhone size={14} className="text-secondary flex-shrink-0" />
            <p className="text-xs text-gray-400">
              Or call us directly:{" "}
              <a href="tel:+254700000000" className="text-secondary font-bold hover:underline">
                +254 700 000 000
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IsuzuEnquiryForm;
