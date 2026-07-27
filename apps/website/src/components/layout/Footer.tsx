"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <footer className="bg-primary text-white pt-16 pb-0 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span className="text-secondary font-black text-xs tracking-[0.3em] uppercase block">Edwin Kibira</span>
              <span className="text-white font-black text-2xl tracking-[0.1em] uppercase leading-none">
                ISUZU <span className="text-secondary">SALES</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              Kenya&apos;s trusted Isuzu dealer. We sell genuine Isuzu vehicles built for Kenya&apos;s roads — D-Max pickups, mu-X SUVs, trucks, and buses. Built Tough.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="#" className="w-9 h-9 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                <Youtube size={16} />
              </a>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded border border-white/20 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Isuzu Models */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-black uppercase tracking-widest text-secondary">Isuzu Models</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Isuzu D-Max Pickup", href: "/inventory?search=D-Max" },
                { label: "Isuzu mu-X SUV", href: "/inventory?search=mu-X" },
                { label: "N-Series Trucks", href: "/inventory?search=N-Series" },
                { label: "Buses & Coaches", href: "/inventory?search=Bus" },
                { label: "Book a Test Drive", href: "/book-test-drive" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-secondary transition-colors text-sm font-medium flex items-center gap-2 group"
                >
                  <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-black uppercase tracking-widest text-secondary">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <MapPin className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                <p className="text-white/60 text-sm font-medium">
                  Edwin Kibira Isuzu Sales<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="text-secondary flex-shrink-0" size={18} />
                <a href="tel:+254700000000" className="text-white/60 hover:text-secondary transition-colors text-sm font-medium">
                  +254 700 000 000
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <MessageSquare className="text-secondary flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-secondary transition-colors text-sm font-medium"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="text-secondary flex-shrink-0" size={18} />
                <a href="mailto:info@edwinkibiraisuzu.co.ke" className="text-white/60 hover:text-secondary transition-colors text-sm font-medium">
                  info@edwinkibiraisuzu.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-black uppercase tracking-widest text-secondary">Stay Updated</h4>
            <p className="text-white/60 text-sm font-medium">
              Get the latest Isuzu news, new arrivals, and exclusive offers straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded p-4 flex items-center gap-3 text-green-400">
                <CheckCircle2 size={20} />
                <p className="font-bold text-sm">Thanks for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-4 py-3 focus:outline-none focus:border-secondary transition-all w-full text-sm"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white font-black uppercase tracking-widest text-xs px-4 py-3 hover:bg-accent-dark transition-all w-full"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Isuzu Kenya Authorized Badge */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-secondary text-xs font-black uppercase tracking-widest mb-1">
            Authorized Isuzu Dealer — Kenya
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
          <p>&copy; {new Date().getFullYear()} Edwin Kibira Isuzu Sales. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
