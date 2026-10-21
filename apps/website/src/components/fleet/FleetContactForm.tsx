"use client";

import React, { useState } from "react";
import { FaBuilding, FaUser, FaPhone, FaEnvelope, FaTruck, FaCircleCheck, FaSpinner } from "react-icons/fa6";

const vehicleTypeOptions = [
  "D-Max Pickups",
  "Light Trucks (N-Series NLR/NMR)",
  "Medium Trucks (N-Series NQR/NPS)",
  "Heavy Trucks (F-Series FRR/FVR/FVZ)",
  "Buses & Matatus",
  "Tipper Trucks",
  "Open to Recommendation",
];

const fleetSizeOptions = [
  "1–5 Vehicles",
  "6–10 Vehicles",
  "11–20 Vehicles",
  "21–50 Vehicles",
  "50+ Vehicles",
];

export default function FleetContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    fleetSize: "",
    vehicleTypes: [] as string[],
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleVehicleType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      vehicleTypes: prev.vehicleTypes.includes(type)
        ? prev.vehicleTypes.filter((t) => t !== type)
        : [...prev.vehicleTypes, type],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/fleet-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");
      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-green-100 rounded-2xl p-10 text-center shadow-xl">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <FaCircleCheck size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-black text-[#1a1a1a] uppercase mb-3">Enquiry Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you for your fleet enquiry. Our dedicated Fleet Sales Manager, Edwin, will personally contact you within 24 hours to discuss your requirements and pricing.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:0768351483"
            className="flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors rounded"
          >
            <FaPhone size={12} /> Call Now: 0768 351 483
          </a>
          <a
            href="https://wa.me/254768351483?text=Hi%20Edwin%2C%20I%20just%20submitted%20a%20fleet%20enquiry%20and%20would%20like%20to%20discuss%20further."
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-colors rounded"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10 space-y-6">
      <div>
        <h3 className="text-xl font-black text-[#1a1a1a] uppercase tracking-tight mb-1">Fleet Enquiry Form</h3>
        <p className="text-sm text-gray-500">Tell us about your requirements and we'll come back to you with a tailored proposal.</p>
      </div>

      {/* Company & Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Company / Organisation</label>
          <div className="relative">
            <FaBuilding size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g., XYZ Logistics Ltd"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Contact Person <span className="text-[#D62B2B]">*</span></label>
          <div className="relative">
            <FaUser size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Phone Number <span className="text-[#D62B2B]">*</span></label>
          <div className="relative">
            <FaPhone size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="07XX XXX XXX"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Email Address <span className="text-[#D62B2B]">*</span></label>
          <div className="relative">
            <FaEnvelope size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@company.com"
              className="w-full pl-9 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Fleet Size */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Estimated Fleet Size</label>
        <select
          name="fleetSize"
          value={formData.fleetSize}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors bg-white"
        >
          <option value="">Select number of vehicles...</option>
          {fleetSizeOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Vehicle Types */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Vehicle Types Required (Select all that apply)</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {vehicleTypeOptions.map((type) => {
            const selected = formData.vehicleTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleVehicleType(type)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-left text-xs font-bold transition-all ${
                  selected
                    ? "bg-[#D62B2B] border-[#D62B2B] text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#D62B2B] hover:text-[#D62B2B]"
                }`}
              >
                <FaTruck size={11} className="flex-shrink-0" />
                <span className="leading-tight">{type}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">Additional Requirements</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="e.g., Custom body building needed, specific delivery timeline, regions of operation, financing preferences..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#D62B2B] transition-colors resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D62B2B] text-white py-4 font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-colors rounded-lg disabled:opacity-70 flex items-center justify-center gap-3 shadow-lg shadow-red-200"
      >
        {isSubmitting ? (
          <><FaSpinner className="animate-spin" size={16} /> Submitting...</>
        ) : (
          "Submit Fleet Enquiry"
        )}
      </button>

      <p className="text-center text-[11px] text-gray-400">
        Or call us directly: <a href="tel:0768351483" className="font-bold text-[#D62B2B] hover:underline">0768 351 483</a>
      </p>
    </form>
  );
}
