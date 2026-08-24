"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaMapLocationDot, FaPhone, FaEnvelope, FaCircleCheck, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
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
              <a href="https://www.facebook.com/share/1H61ocz1S5/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all text-white">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.instagram.com/edwinkibiraisuzu?igsh=Y21sYWwwNXF6aXB5" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] transition-all text-white">
                <FaInstagram size={14} />
              </a>
              <a href="https://www.tiktok.com/@edwinkibiraisuzusales?_r=1&_t=ZS-98qpjrR3C8y" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-black hover:border-black transition-all text-white">
                <FaTiktok size={14} />
              </a>
              <a
                href="https://wa.me/254768351483"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded border border-white/20 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all text-white"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-secondary">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Isuzu D-Max Pickups", href: "/vehicles/double-cabin" },
                { label: "Isuzu mu-X SUV", href: "/vehicles/mu-x-3000cc" },
                { label: "F-Series Heavy Trucks", href: "/vehicles/heavy-trucks-f-series" },
                { label: "N-Series Light Trucks", href: "/vehicles/light-trucks-n-series" },
                { label: "Fleet & Corporate Sales", href: "/fleet-sales" },
                { label: "Blog & News", href: "/blog" },
                { label: "Book a Test Drive", href: "/book-test-drive" },
                { label: "FAQ", href: "/faq" },
                { label: "Calculate Financing", href: "/loan-calculator" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-secondary transition-colors text-xs md:text-sm font-medium flex items-center gap-2 group"
                >
                  <FaArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
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
                <FaMapLocationDot className="text-secondary flex-shrink-0 mt-0.5" size={16} />
                <p className="text-white/70 font-medium">
                  Edwin Kibira Isuzu Sales<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FaPhone className="text-secondary flex-shrink-0" size={16} />
                <a href="tel:+254768351483" className="text-white/70 hover:text-secondary transition-colors font-medium">
                  0768 351 483
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FaWhatsapp className="text-secondary flex-shrink-0" size={16} />
                <a
                  href="https://wa.me/254768351483"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-secondary transition-colors font-medium"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-secondary flex-shrink-0" size={16} />
                <a href="mailto:edwinkibiracfg@gmail.com" className="text-white/70 hover:text-secondary transition-colors font-medium">
                  edwinkibiracfg@gmail.com
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
                <FaCircleCheck size={18} />
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
                  disabled={isLoading}
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 px-3.5 py-3 focus:outline-none focus:border-secondary transition-all w-full text-xs disabled:opacity-50"
                />
                {error && <p className="text-red-400 text-[10px] font-bold">{error}</p>}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-secondary text-white font-black uppercase tracking-widest text-[11px] px-4 py-3 hover:bg-accent-dark transition-all w-full disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
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
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
