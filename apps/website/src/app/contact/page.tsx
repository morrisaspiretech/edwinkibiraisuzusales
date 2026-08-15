"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapLocationDot, FaMessage, FaClock, FaPaperPlane, FaCircleCheck, FaChevronRight } from "react-icons/fa6";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Vehicle Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* ── Page Header ── */}
        <div className="bg-primary text-white py-12 px-4 md:px-6 border-b-4 border-secondary">
          <div className="max-w-5xl mx-auto">
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-secondary tracking-widest mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={10} className="text-white/30" />
              <span className="text-white/50">Contact Us</span>
            </nav>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[3px] w-10 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-widest">Get In Touch</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Contact <span className="text-secondary">Edwin Kibira Isuzu Sales</span>
            </h1>
            <p className="text-white/60 text-xs md:text-sm mt-2 max-w-xl font-medium">
              Have questions about an Isuzu vehicle, test drive, or financing? Our team is ready to assist you.
            </p>
          </div>
        </div>

        {/* ── Main Content Container ── */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-gray-100 p-6 md:p-8 bg-surface space-y-6">
                <h3 className="text-lg font-black text-primary uppercase tracking-wide border-b border-gray-200 pb-3">
                  Showroom & Office
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <FaMapLocationDot size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Location</p>
                      <p className="text-sm font-bold text-primary mt-0.5">Edwin Kibira Isuzu Sales</p>
                      <p className="text-xs text-gray-500">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Phone Calls</p>
                      <a href="tel:+254768351483" className="text-sm font-bold text-secondary hover:underline block mt-0.5">
                        0768 351 483
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <FaMessage size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-gray-400 tracking-wider">WhatsApp Line</p>
                      <a
                        href="https://wa.me/254768351483"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-emerald-600 hover:underline block mt-0.5"
                      >
                        0768 351 483 (Chat Now)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Email Address</p>
                      <a href="mailto:info@edwinkibiraisuzu.co.ke" className="text-sm font-bold text-primary hover:text-secondary transition-colors block mt-0.5">
                        info@edwinkibiraisuzu.co.ke
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-3 border-t border-gray-200">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Opening Hours</p>
                      <p className="text-xs text-primary font-bold mt-0.5">Monday – Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-xs text-primary font-bold">Saturday: 9:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-gray-100 p-6 md:p-8 bg-white shadow-lg border-t-4 border-secondary">
                {isSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-secondary text-white flex items-center justify-center mx-auto">
                      <FaCircleCheck size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-primary uppercase">Thank You!</h3>
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                      Your message has been received. One of our Isuzu vehicle specialists will contact you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-secondary font-bold uppercase text-xs hover:underline tracking-widest pt-4 block mx-auto"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-black text-primary uppercase tracking-wide">
                        Send Us a Message
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Fill out the form below and we will get back to you as soon as possible.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Your Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Phone Number *</label>
                        <input
                          required
                          type="tel"
                          placeholder="0768 351 483"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com (optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-secondary transition-colors bg-white"
                      >
                        <option value="Vehicle Inquiry">Isuzu Vehicle Inquiry</option>
                        <option value="Test Drive">Test Drive Booking</option>
                        <option value="Fleet Purchase">Fleet / Business Purchase</option>
                        <option value="Spare Parts">Parts & After-Sales Service</option>
                        <option value="General">General Question</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Your Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us what you need or which Isuzu model you are looking for..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-secondary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-white py-4 font-black uppercase tracking-widest text-xs md:text-sm hover:bg-accent-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <FaPaperPlane size={16} />
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
