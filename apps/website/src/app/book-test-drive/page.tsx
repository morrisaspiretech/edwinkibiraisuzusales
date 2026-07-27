"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ChevronRight, Calendar, User, Phone, Mail, Car, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="pt-24 pb-8 bg-primary px-6 relative overflow-hidden border-b border-accent/10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-accent mb-4 tracking-[0.2em]">
            <Link href="/" className="hover:text-white transition-all">Home</Link>
            <ChevronRight size={10} className="opacity-50" />
            <span className="text-white">Book Test Drive</span>
          </nav>
          <h1 className="text-5xl md:text-8xl font-bold text-white uppercase leading-[0.85] tracking-tighter">
            Book a <br /> <span className="text-accent">Test Drive</span>
          </h1>
          <p className="text-white/60 mt-6 max-w-xl font-bold uppercase tracking-wider text-sm">
            Experience the vehicle of your choice firsthand. Our team will prepare it for your scheduled drive.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Info Panel */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-primary uppercase tracking-tight mb-4">
                What to Expect
              </h2>
              <p className="text-text-dark/60 font-medium leading-relaxed">
                Our knowledgeable advisors will walk you through the vehicle's features, 
                answer all your questions, and arrange a personalised test drive at our showroom.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Car size={20} />, title: "Vehicle Prepared", desc: "Your chosen vehicle will be fully cleaned and ready." },
                { icon: <Calendar size={20} />, title: "Flexible Scheduling", desc: "Mon–Sat: 8:00 AM – 6:00 PM. We work with your schedule." },
                { icon: <User size={20} />, title: "Personal Advisor", desc: "A dedicated advisor accompanies you throughout the experience." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-accent/10 text-accent rounded-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-primary uppercase text-sm">{item.title}</p>
                    <p className="text-text-dark/50 text-sm font-medium mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary p-8 text-white space-y-4 border-l-4 border-accent">
              <p className="font-bold uppercase text-sm tracking-widest text-accent">Contact Directly</p>
              <a href="tel:+254700000000" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors font-bold">
                <Phone size={16} /> +254 700 000 000
              </a>
              <a href="https://wa.me/254700000000" target="_blank" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors font-bold">
                <MessageSquare size={16} /> WhatsApp Us
              </a>
              <a href="mailto:info@aspiremotors.co.ke" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors font-bold">
                <Mail size={16} /> info@aspiremotors.co.ke
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6 py-20"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary uppercase">Booking Confirmed!</h2>
                <p className="text-text-dark/60 font-medium max-w-md leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We've received your request and will confirm your test drive shortly via phone or email.
                </p>
                <Link href="/inventory" className="bg-primary text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-accent hover:text-primary transition-all">
                  Browse More Vehicles
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-surface p-10 border border-primary/5">
                <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">Your Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+254..."
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Vehicle of Interest</label>
                  <input
                    type="text"
                    placeholder="e.g. Toyota Land Cruiser V8 2011"
                    value={formData.vehicleInterest}
                    onChange={e => setFormData(p => ({ ...p, vehicleInterest: e.target.value }))}
                    className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Preferred Date *</label>
                    <input
                      required
                      type="date"
                      value={formData.preferredDate}
                      onChange={e => setFormData(p => ({ ...p, preferredDate: e.target.value }))}
                      className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Preferred Time</label>
                    <select
                      value={formData.preferredTime}
                      onChange={e => setFormData(p => ({ ...p, preferredTime: e.target.value }))}
                      className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-bold focus:outline-none focus:border-accent transition-colors appearance-none"
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

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-text-dark/60">Additional Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Any specific requirements or questions..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-white border border-primary/5 px-4 py-4 text-sm font-medium focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent hover:text-primary transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin" size={18} /> Booking...</>
                  ) : (
                    <><Calendar size={18} /> Confirm Test Drive Booking</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookTestDrivePage;
