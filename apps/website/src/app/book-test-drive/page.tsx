"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { FaChevronRight, FaCalendarDay, FaUser, FaPhone, FaCar, FaCircleCheck, FaWhatsapp, FaEnvelope, FaShieldHalved, FaClock, FaTruckFront, FaSpinner } from "react-icons/fa6";
import { motion } from "framer-motion";

const isuzuModels = [
  "Isuzu D-Max SX 4x2",
  "Isuzu D-Max LS 4x2",
  "Isuzu D-Max V-Cross 4x4",
  "Isuzu mu-X LS-T",
  "Isuzu mu-X LS-U 4x4",
  "Isuzu NPR Light Truck",
  "Isuzu NQR Medium Truck",
  "Other Isuzu Model",
];

const BookTestDrivePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleInterest: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Header ── */}
      <div className="pb-12 bg-primary px-6 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto pt-10">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-secondary tracking-widest mb-4">
            <Link href="/" className="hover:text-white transition-all">Home</Link>
            <FaChevronRight size={10} className="text-white/30" />
            <span className="text-white/50">Book Test Drive</span>
          </nav>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[3px] w-12 bg-secondary" />
            <span className="text-secondary font-black text-xs uppercase tracking-widest">Free Test Drive</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
            Drive an <span className="text-secondary">Isuzu</span><br />
            Before You Buy
          </h1>
          <p className="text-white/50 mt-4 max-w-xl font-medium text-sm leading-relaxed">
            Experience the legendary Isuzu D-Max, mu-X SUV, or any of our commercial vehicles firsthand. No obligation — just pure Isuzu performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* ── Left: Info Panel ── */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-8 bg-secondary" />
                <span className="text-secondary font-black text-xs uppercase tracking-widest">What to Expect</span>
              </div>
              <h2 className="text-2xl font-black text-primary uppercase mb-3">Your Isuzu Test Drive Experience</h2>
              <p className="text-[#1a1a1a] font-medium leading-relaxed text-sm">
                Our trained Isuzu advisors will prepare your chosen vehicle and guide you through all its features. We&apos;ll answer every question and make sure you leave confident in your choice.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <FaTruckFront size={20} />, title: "Any Isuzu Model", desc: "Test the D-Max, mu-X, or any commercial vehicle in our range." },
                { icon: <FaCalendarDay size={20} />, title: "Flexible Scheduling", desc: "Mon–Sat: 8:00 AM – 6:00 PM. We work around you." },
                { icon: <FaUser size={20} />, title: "Isuzu-Trained Advisor", desc: "A specialist accompanies you to answer all your questions." },
                { icon: <FaShieldHalved size={20} />, title: "No Obligation", desc: "Take your time — zero pressure to buy on the day." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-secondary/10 group-hover:bg-secondary text-secondary group-hover:text-white transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-black text-primary text-sm uppercase tracking-wide">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Box */}
            <div className="bg-primary p-8 text-white space-y-4 border-l-4 border-secondary">
              <p className="font-black uppercase text-xs tracking-widest text-secondary">Or Contact Us Directly</p>
              <a href="tel:+254768351483" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors font-bold text-sm">
                <FaPhone size={16} className="text-secondary" /> 0768 351 483
              </a>
              <a href="https://wa.me/254768351483" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors font-bold text-sm">
                <FaWhatsapp size={16} className="text-secondary" /> WhatsApp Us
              </a>
              <a href="mailto:edwinkibiracfg@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors font-bold text-sm">
                <FaEnvelope size={16} className="text-secondary" /> edwinkibiracfg@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm pt-2 border-t border-white/10">
                <FaClock size={14} className="text-secondary flex-shrink-0" />
                <span>Mon–Fri: 8AM–6PM | Sat: 9AM–4PM</span>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6 py-20 border-t-4 border-secondary bg-white shadow-xl px-10"
              >
                <div className="w-20 h-20 bg-secondary flex items-center justify-center text-white">
                  <FaCircleCheck size={40} />
                </div>
                <h2 className="text-3xl font-black text-primary uppercase">Test Drive Booked!</h2>
                <p className="text-gray-500 max-w-md leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! We&apos;ve received your request and will confirm your Isuzu test drive shortly via phone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
                  <Link
                    href="/inventory"
                    className="flex-1 bg-secondary text-white px-6 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-accent-dark transition-all text-center"
                  >
                    Browse Vehicles
                  </Link>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="flex-1 border-2 border-primary text-primary px-6 py-3.5 font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    Book Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-surface p-8 md:p-10 border-t-4 border-secondary">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-primary uppercase tracking-tight">Book Your Free Test Drive</h2>
                  <p className="text-sm text-gray-400 mt-1">Fill in your details and we&apos;ll call to confirm.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="0768 351 483"
                      value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com (optional)"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Isuzu Model of Interest *</label>
                  <select
                    required
                    value={formData.vehicleInterest}
                    onChange={(e) => setFormData((p) => ({ ...p, vehicleInterest: e.target.value }))}
                    className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors appearance-none"
                  >
                    <option value="">Select an Isuzu model...</option>
                    {isuzuModels.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Preferred Date *</label>
                    <input
                      required
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData((p) => ({ ...p, preferredDate: e.target.value }))}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Preferred Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData((p) => ({ ...p, preferredTime: e.target.value }))}
                      className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors appearance-none"
                    >
                      <option value="">Select time</option>
                      <option>8:00 AM</option>
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>2:00 PM</option>
                      <option>4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Additional Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific questions or requirements about the vehicle..."
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-white border border-gray-200 px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white py-5 font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <><FaSpinner className="animate-spin" size={18} /> Booking...</>
                  ) : (
                    <><FaCalendarDay size={18} /> Confirm Isuzu Test Drive</>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Free of charge. No obligation to buy. Our team will call to confirm within 1 hour.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookTestDrivePage;
