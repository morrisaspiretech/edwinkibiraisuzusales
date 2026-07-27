"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

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
    <footer className="bg-primary text-white pt-12 md:pt-16 pb-0 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">

          {/* Brand Info with Logo */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-secondary flex-shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Edwin Kibira Isuzu Sales"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-secondary font-black text-[10px] tracking-[0.2em] uppercase">Edwin Kibira</span>
                <span className="text-white font-black text-lg tracking-[0.1em] uppercase leading-tight">
                  ISUZU <span className="text-secondary">SALES</span>
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed text-xs md:text-sm">
              Kenya&apos;s trusted Isuzu dealer — bringing durable, reliable Isuzu vehicles (D-Max, mu-X, trucks, and buses) to Kenyans across the country.
            </p>
            <div className="flex gap-2.5 mt-1">
              <a href="#" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Youtube size={14} />
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"
              >
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Isuzu Models */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary">Isuzu Models</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Isuzu D-Max Pickup", href: "/inventory?search=D-Max" },
                { label: "Isuzu mu-X SUV", href: "/inventory?search=mu-X" },
                { label: "N-Series Commercial Trucks", href: "/inventory?search=N-Series" },
                { label: "Buses & Coaches", href: "/inventory?search=Bus" },
                { label: "Book a Test Drive", href: "/book-test-drive" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-secondary transition-colors text-xs md:text-sm font-medium flex items-center gap-2 group"
                >
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary">Contact Us</h4>
            <div className="flex flex-col gap-3.5 text-xs md:text-sm">
              <div className="flex gap-3 items-start">
                <MapPin className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                <p className="text-white/70 font-medium">
                  Edwin Kibira Isuzu Sales<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-secondary flex-shrink-0" size={16} />
                <a href="tel:+254700000000" className="text-white/70 hover:text-secondary transition-colors font-medium">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MessageSquare className="text-secondary flex-shrink-0" size={16} />
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors font-medium"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-secondary flex-shrink-0" size={16} />
                <a href="mailto:info@edwinkibiraisuzu.co.ke" className="text-white/70 hover:text-secondary transition-colors font-medium">
                  info@edwinkibiraisuzu.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary">Stay Updated</h4>
            <p className="text-white/70 text-xs md:text-sm font-medium">
              Subscribe for the latest Isuzu arrivals, prices, and special dealer offers.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 p-3 flex items-center gap-2 text-green-400">
                <CheckCircle2 size={18} />
                <p className="font-bold text-xs">Subscribed successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-3.5 py-3 focus:outline-none focus:border-secondary transition-all w-full text-xs"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white font-black uppercase tracking-widest text-[11px] px-4 py-3 hover:bg-accent-dark transition-all w-full"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Authorized Dealer Ribbon */}
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-secondary text-[11px] font-black uppercase tracking-widest">
            Authorized Isuzu Dealer — Kenya
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Edwin Kibira Isuzu Sales. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
