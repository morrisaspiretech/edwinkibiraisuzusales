"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  MessageSquare,
  Globe,
  Share2,
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
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all text-white"
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
