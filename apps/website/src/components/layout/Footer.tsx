"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black tracking-[0.15em] text-white">
                ASPIRE<span className="text-accent">MOTORS</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed font-medium">
              Kenya's premier destination for luxury vehicles, high-performance sports cars, and premium superbikes. We don't just sell engines, we deliver milestones.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-primary transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">Showroom</h4>
            <div className="flex flex-col gap-4">
              <Link href="/inventory" className="text-white/60 hover:text-accent transition-colors font-medium flex items-center gap-2 group">
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Show All Vehicles
              </Link>
              <Link href="/inventory?search=SUV" className="text-white/60 hover:text-accent transition-colors font-medium flex items-center gap-2 group">
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Luxury SUVs
              </Link>
              <Link href="/inventory?search=Sedan" className="text-white/60 hover:text-accent transition-colors font-medium flex items-center gap-2 group">
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Performance Sedans
              </Link>
              <Link href="/bikes" className="text-white/60 hover:text-accent transition-colors font-medium flex items-center gap-2 group">
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Superbikes
              </Link>
              <Link href="/book-test-drive" className="text-white/60 hover:text-accent transition-colors font-medium flex items-center gap-2 group">
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Book a Test Drive
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start group">
                <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                <p className="text-white/60 font-medium">Aspire Tower, Mombasa Road<br />Nairobi, Kenya</p>
              </div>
              <div className="flex gap-4 items-center group">
                <Phone className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <p className="text-white/60 font-medium">+254 700 000 000</p>
              </div>
              <div className="flex gap-4 items-center group">
                <Mail className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <p className="text-white/60 font-medium">info@aspiremotors.co.ke</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold uppercase tracking-wider">Stay Updated</h4>
            <p className="text-white/60 font-medium">
              Subscribe to our newsletter for exclusive access to new arrivals, events, and special offers.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-md p-4 flex items-center gap-3 text-green-400">
                <CheckCircle2 size={24} />
                <p className="font-bold text-sm">Thanks for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  required
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-4 rounded-sm focus:outline-none focus:border-accent transition-all w-full font-bold"
                />
                <button type="submit" className="bg-accent text-primary font-black uppercase tracking-[0.2em] text-xs px-4 py-4 rounded-sm hover:bg-white transition-all shadow-xl shadow-accent/20 w-full flex items-center justify-center gap-2">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Aspire Motors Kenya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
