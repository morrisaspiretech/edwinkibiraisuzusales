"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapLocationDot, FaMessage, FaClock, FaPaperPlane, FaCircleCheck, FaChevronRight, FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "254768351483";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Isuzu Vehicle Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build a clear, structured WhatsApp message from all form fields
    const lines = [
      `👋 *New Inquiry — Edwin Kibira Isuzu Website*`,
      ``,
      `📋 *Subject:* ${formData.subject}`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      formData.email ? `📧 *Email:* ${formData.email}` : null,
      ``,
      `💬 *Message:*`,
      formData.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const encodedMsg = encodeURIComponent(lines);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(waUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* ── Page Header ── */}
      <div className="bg-[#1a1a1a] text-white py-12 px-4 md:px-6 border-b-4 border-[#D62B2B]">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase text-[#D62B2B] tracking-widest mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={10} className="text-white/30" />
            <span className="text-white/50">Contact Us</span>
          </nav>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-10 bg-[#D62B2B]" />
            <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest">Get In Touch</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
            Contact <span className="text-[#D62B2B]">Edwin Kibira Isuzu Sales</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm mt-2 max-w-xl font-medium">
            Have questions about an Isuzu vehicle, test drive, or financing? Our team is ready to assist you.
          </p>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-gray-100 p-6 md:p-8 bg-gray-50 space-y-6">
              <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-wide border-b border-gray-200 pb-3">
                Showroom & Office
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D62B2B]/10 text-[#D62B2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapLocationDot size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Location</p>
                    <p className="text-sm font-bold text-[#1a1a1a] mt-0.5">Edwin Kibira Isuzu Sales</p>
                    <p className="text-xs text-gray-500">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D62B2B]/10 text-[#D62B2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Phone Calls</p>
                    <a href="tel:+254768351483" className="text-sm font-bold text-[#D62B2B] hover:underline block mt-0.5">
                      0768 351 483
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-wider">WhatsApp Line</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-emerald-600 hover:underline block mt-0.5"
                    >
                      0768 351 483 (Chat Now)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D62B2B]/10 text-[#D62B2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Email Address</p>
                    <a href="mailto:info@edwinkibiraisuzu.co.ke" className="text-sm font-bold text-[#1a1a1a] hover:text-[#D62B2B] transition-colors block mt-0.5">
                      info@edwinkibiraisuzu.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-gray-200">
                  <div className="w-10 h-10 bg-[#D62B2B]/10 text-[#D62B2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-400 tracking-wider">Opening Hours</p>
                    <p className="text-xs text-[#1a1a1a] font-bold mt-0.5">Monday – Friday: 8:00 AM – 6:00 PM</p>
                    <p className="text-xs text-[#1a1a1a] font-bold">Saturday: 9:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form → WhatsApp */}
          <div className="lg:col-span-7">
            <div className="border border-gray-100 p-6 md:p-8 bg-white shadow-lg border-t-4 border-[#D62B2B]">
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500 text-white flex items-center justify-center mx-auto rounded-full">
                    <FaCircleCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] uppercase">WhatsApp Opened!</h3>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Your message was pre-filled in WhatsApp. Just tap <strong>Send</strong> to reach Edwin directly.
                  </p>
                  <button
                    onClick={() => { setIsSuccess(false); setFormData({ name: "", email: "", phone: "", subject: "Isuzu Vehicle Inquiry", message: "" }); }}
                    className="text-[#D62B2B] font-bold uppercase text-xs hover:underline tracking-widest pt-4 block mx-auto"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-[#1a1a1a] uppercase tracking-wide">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Fill out the form — your message will open directly in WhatsApp, ready to send to Edwin.
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
                        className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-[#D62B2B] transition-colors"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="0712 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-[#D62B2B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-[#D62B2B] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-black uppercase tracking-wider text-gray-500">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-[#D62B2B] transition-colors bg-white"
                    >
                      <option value="Isuzu Vehicle Inquiry">Isuzu Vehicle Inquiry</option>
                      <option value="Test Drive Booking">Test Drive Booking</option>
                      <option value="Fleet / Business Purchase">Fleet / Business Purchase</option>
                      <option value="Parts & After-Sales Service">Parts & After-Sales Service</option>
                      <option value="Financing Options">Financing Options</option>
                      <option value="General Question">General Question</option>
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
                      className="w-full border border-gray-200 px-3.5 py-3 text-xs md:text-sm font-medium focus:outline-none focus:border-[#D62B2B] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D62B2B] text-white py-4 font-black uppercase tracking-widest text-xs md:text-sm hover:bg-[#b82222] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <FaWhatsapp size={18} />
                    {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
                  </button>
                  <p className="text-center text-[10px] text-gray-400">
                    Clicking Send will open WhatsApp with your message pre-filled — just press Send.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
