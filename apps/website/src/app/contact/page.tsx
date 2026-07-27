"use client";

import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight, Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-primary">
      {/* Header */}
      <header className="pt-20 pb-8 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex items-center justify-center gap-2 text-xs font-black uppercase text-accent mb-4 tracking-[0.2em]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Get In Touch</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">Contact <span className="text-accent">Us</span></h1>
          <p className="text-white/40 font-bold mt-2 uppercase tracking-[0.1em]">We are available 24/7 for your luxury needs.</p>
        </motion.div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <ContactMethod 
              icon={<Phone className="text-accent" />}
              title="Give us a call"
              value="+254 700 000 000"
              sub="Sales and Test Drive Booking"
            />
            <ContactMethod 
              icon={<MessageCircle className="text-accent" />}
              title="WhatsApp Us"
              value="+254 711 222 333"
              sub="Instant Support available"
            />
            <ContactMethod 
              icon={<Mail className="text-accent" />}
              title="Email Inquiry"
              value="info@aspiremotors.co.ke"
              sub="General and Fleet services"
            />
            <ContactMethod 
              icon={<MapPin className="text-accent" />}
              title="Visit Showroom"
              value="Aspire Tower, Mombasa Road"
              sub="Nairobi, Kenya"
            />
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-4 group hover:border-accent/40 transition-all">
              <Clock className="text-accent" size={24} />
              <div>
                <p className="text-xs font-black text-white/40 uppercase tracking-widest">Opening Hours</p>
                <p className="text-sm font-black text-white uppercase mt-1">Mon - Sat: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32" />
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">Message Sent</h3>
                  <p className="text-white/40 font-bold uppercase text-xs tracking-widest">We will get back to you shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-accent font-black uppercase text-[10px] tracking-widest hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white font-bold focus:outline-none focus:border-accent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white font-bold focus:outline-none focus:border-accent transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black text-white/30 uppercase tracking-[0.2em] ml-1">How can we help?</label>
                    <textarea required rows={6} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white font-bold focus:outline-none focus:border-accent transition-all resize-none" placeholder="I am interested in the 2024 BMW M4..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-accent text-primary p-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white transition-all shadow-xl shadow-accent/10 disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

const ContactMethod = ({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group hover:border-accent/40 transition-all">
    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all mb-4">
      {icon}
    </div>
    <p className="text-xs font-black text-white/40 uppercase tracking-widest">{title}</p>
    <p className="text-xl font-black text-white mt-2 tracking-tight">{value}</p>
    <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mt-1">{sub}</p>
  </div>
);
