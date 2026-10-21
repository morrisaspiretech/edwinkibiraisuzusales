"use client";

import React, { useState } from 'react';
import { VEHICLES_DATA } from '@/data/vehicles';
import { 
  FaStore, FaHardHat, FaTractor, FaTruck, FaWater, 
  FaSchool, FaUserTie, FaBoxOpen, FaBus, FaWhatsapp,
  FaCheckCircle, FaUser, FaMapMarkerAlt, FaCreditCard,
  FaCarSide
} from 'react-icons/fa';

// Map businesses to icons
const BUSINESS_TYPES = [
  { id: 'retail', label: 'Retail / FMCG', icon: <FaStore /> },
  { id: 'construction', label: 'Construction', icon: <FaHardHat /> },
  { id: 'agriculture', label: 'Agriculture', icon: <FaTractor /> },
  { id: 'transport', label: 'Transport', icon: <FaTruck /> },
  { id: 'water', label: 'Water / Tanker', icon: <FaWater /> },
  { id: 'institution', label: 'Institution', icon: <FaSchool /> },
  { id: 'passenger', label: 'Passenger/PSV', icon: <FaBus /> },
  { id: 'logistics', label: 'Logistics', icon: <FaBoxOpen /> },
  { id: 'personal', label: 'Personal Use', icon: <FaUserTie /> },
];

export default function WhatsAppEnquiryForm() {
  const [model, setModel] = useState('');
  const [business, setBusiness] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [payment, setPayment] = useState('');

  // Extract list of vehicles
  const vehiclesList = Object.values(VEHICLES_DATA).map(v => ({
    id: v.id,
    title: v.title,
    category: v.category
  }));
  
  // Group vehicles for the dropdown
  const groupedVehicles = vehiclesList.reduce((acc, vehicle) => {
    if (!acc[vehicle.category]) acc[vehicle.category] = [];
    acc[vehicle.category].push(vehicle);
    return acc;
  }, {} as Record<string, typeof vehiclesList>);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !name) {
      alert("Please select a model and enter your name.");
      return;
    }

    const selectedVehicle = vehiclesList.find(v => v.id === model)?.title || model;
    
    // Construct WhatsApp message
    const message = `*New Website Enquiry!* 🚀\n\n*Customer Details:*\n👤 Name: ${name}\n📍 Location: ${location || 'Not provided'}\n💼 Business: ${business || 'Not selected'}\n💳 Payment: ${payment || 'Not selected'}\n\n*Vehicle of Interest:*\n🚙 Model: ${selectedVehicle}\n\nPlease assist me with a quote and availability.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254768351483?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
      
      {/* ── LEFT COLUMN: INPUT FORM ── */}
      <div className="w-full lg:w-3/5 bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100 relative overflow-hidden">
        
        <div className="bg-gradient-to-r from-[#d62b2b] to-[#ff4d4d] text-white p-5 rounded-xl shadow-md mb-10">
          <p className="font-medium text-sm sm:text-base leading-snug">
            👋 Hi! To serve you best, please fill in the details below and we&apos;ll get back to you with the perfect match.
          </p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-10">
          
          {/* STEP 1: VEHICLE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d62b2b] text-white text-xs font-bold">1</span>
              <h3 className="text-[#d62b2b] font-black uppercase tracking-wider text-sm">Which Isuzu Vehicle are you looking at?</h3>
            </div>
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 font-medium focus:ring-2 focus:ring-[#d62b2b] focus:border-transparent outline-none transition-all cursor-pointer"
              required
            >
              <option value="" disabled>— Select a model —</option>
              {Object.entries(groupedVehicles).map(([category, vehicles]) => (
                <optgroup key={category} label={category}>
                  {vehicles.map(v => (
                    <option key={v.id} value={v.id}>{v.title}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* STEP 2: BUSINESS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d62b2b] text-white text-xs font-bold">2</span>
              <h3 className="text-[#d62b2b] font-black uppercase tracking-wider text-sm">What&apos;s your current business?</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BUSINESS_TYPES.map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setBusiness(type.label)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                    business === type.label 
                      ? 'border-[#d62b2b] bg-[#d62b2b]/5 text-[#d62b2b]' 
                      : 'border-gray-100 hover:border-gray-300 text-gray-500 hover:text-gray-800'
                  }`}
                >
                  <span className={`text-2xl ${business === type.label ? 'text-[#d62b2b]' : 'text-gray-400'}`}>
                    {type.icon}
                  </span>
                  <span className="text-xs font-bold text-center mt-2">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: DETAILS */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#d62b2b] text-white text-xs font-bold">3</span>
              <h3 className="text-[#d62b2b] font-black uppercase tracking-wider text-sm">Your Details</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Name *</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full p-3.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#d62b2b] outline-none"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Location (Town/City)</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Nairobi"
                  className="w-full p-3.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#d62b2b] outline-none"
                />
              </div>
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Preferred Payment</label>
                <select 
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full p-3.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#d62b2b] outline-none cursor-pointer"
                >
                  <option value="">— Select Payment Method —</option>
                  <option value="Cash">Cash / Bank Transfer</option>
                  <option value="Asset Finance">Asset Finance (Bank Loan)</option>
                  <option value="Trade-in">Trade-in</option>
                </select>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#20b858] text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
          >
            <FaWhatsapp size={22} />
            Submit via WhatsApp
          </button>
        </form>
      </div>

      {/* ── RIGHT COLUMN: LIVE SUMMARY ── */}
      <div className="w-full lg:w-2/5 sticky top-24">
        <div className="bg-gradient-to-br from-[#d62b2b] to-[#a31b1b] rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z"/></svg>
          </div>

          <h3 className="text-2xl font-black mb-2">Your Enquiry Summary</h3>
          <p className="text-red-100 text-sm mb-8 leading-relaxed">
            Fill in the form and send your details directly to our sales team for an instant response.
          </p>

          <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-8">
            <p className="text-[10px] font-black tracking-widest text-[#ffadad] uppercase mb-5">What you&apos;ve told us</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-5 text-[#ffadad]"><FaUser size={14} /></span>
                <span className="text-sm font-bold w-20">Name</span>
                <span className={`text-sm ${name ? 'text-white' : 'text-white/40'}`}>{name || '—'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-5 text-[#ffadad]"><FaCarSide size={14} /></span>
                <span className="text-sm font-bold w-20">Model</span>
                <span className={`text-sm font-medium ${model ? 'text-white' : 'text-white/40'}`}>
                  {model ? vehiclesList.find(v => v.id === model)?.title : '—'}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-5 text-[#ffadad]"><FaStore size={14} /></span>
                <span className="text-sm font-bold w-20">Business</span>
                <span className={`text-sm ${business ? 'text-white' : 'text-white/40'}`}>{business || '—'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-5 text-[#ffadad]"><FaMapMarkerAlt size={14} /></span>
                <span className="text-sm font-bold w-20">Location</span>
                <span className={`text-sm ${location ? 'text-white' : 'text-white/40'}`}>{location || '—'}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-5 text-[#ffadad]"><FaCreditCard size={14} /></span>
                <span className="text-sm font-bold w-20">Payment</span>
                <span className={`text-sm ${payment ? 'text-white' : 'text-white/40'}`}>{payment || '—'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#ffadad]" />
              <span className="text-sm font-medium">Genuine Isuzu Kenya vehicles</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#ffadad]" />
              <span className="text-sm font-medium">Flexible financing options</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#ffadad]" />
              <span className="text-sm font-medium">Countrywide delivery available</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
