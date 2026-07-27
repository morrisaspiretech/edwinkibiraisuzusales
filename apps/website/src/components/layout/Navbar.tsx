"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vehicleCategories = [
    { label: "Isuzu mu-X (SUV)", href: "/inventory?search=mu-X" },
    { label: "Isuzu D-Max (Pickup)", href: "/inventory?search=D-Max" },
    { label: "N-Series Trucks", href: "/inventory?search=N-Series" },
    { label: "Buses & Coaches", href: "/inventory?search=Bus" },
    { label: "All Vehicles", href: "/inventory" },
  ];

  return (
    <>
      {/* Top Bar - Responsive font size & padding */}
      <div className="bg-secondary text-white text-xs py-2 px-4 md:px-6 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-semibold tracking-wide truncate max-w-[60%] sm:max-w-none">
            Kenya&apos;s Trusted Isuzu Dealer — Serving Kenyans with Pride
          </span>
          <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
            <a href="tel:+254700000000" className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-bold">
              <Phone size={12} /> +254 700 000 000
            </a>
            <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-bold">
              <MessageSquare size={12} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Header */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary",
          isScrolled ? "shadow-2xl py-1" : "py-2"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          
          {/* Logo with uploaded Official Logo Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-secondary group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Edwin Kibira Isuzu Sales"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.2em] uppercase">Edwin Kibira</span>
              <span className="text-white font-black text-base md:text-xl tracking-[0.1em] uppercase leading-tight">
                ISUZU <span className="text-secondary">SALES</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>

            {/* Vehicles Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("vehicles")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white font-bold text-sm hover:text-secondary transition-all px-4 py-6 uppercase tracking-wider">
                Vehicles <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === "vehicles" ? "rotate-180 text-secondary" : "")} />
              </button>
              {activeDropdown === "vehicles" && (
                <div className="absolute top-full left-0 bg-white shadow-2xl min-w-[230px] border-t-4 border-secondary z-50">
                  {vehicleCategories.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-primary font-bold text-xs uppercase hover:bg-secondary hover:text-white transition-colors border-b border-gray-100 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/inventory">Showroom</NavLink>
            <NavLink href="/book-test-drive">Test Drive</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book-test-drive"
              className="bg-secondary text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-accent-dark transition-all"
            >
              Book Test Drive
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-white p-2 border border-white/20 rounded hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-primary z-50 flex flex-col pt-20 px-6 gap-2 transition-transform duration-300 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-secondary">
              <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="text-white font-black text-base uppercase">Edwin Kibira Isuzu</span>
          </div>
          <button
            className="text-white p-2 border border-white/20 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="border-b border-white/10 pb-4 mb-2 space-y-1">
          <p className="text-secondary text-[10px] font-black uppercase tracking-widest mb-2">Navigation</p>
          <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/inventory" onClick={() => setIsMobileMenuOpen(false)}>Showroom</MobileNavLink>
          <MobileNavLink href="/book-test-drive" onClick={() => setIsMobileMenuOpen(false)}>Book Test Drive</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        </div>

        <div className="border-b border-white/10 pb-4 mb-4 space-y-1">
          <p className="text-secondary text-[10px] font-black uppercase tracking-widest mb-2">Isuzu Range</p>
          {vehicleCategories.map((item) => (
            <MobileNavLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </MobileNavLink>
          ))}
        </div>

        <Link
          href="/book-test-drive"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-secondary text-white text-center py-4 font-black uppercase tracking-widest text-sm hover:bg-accent-dark transition-colors mb-6"
        >
          Book a Test Drive
        </Link>

        <div className="flex flex-col gap-3 text-white/70 text-xs pb-10">
          <a href="tel:+254700000000" className="flex items-center gap-3 hover:text-white">
            <Phone size={14} className="text-secondary" /> +254 700 000 000
          </a>
          <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
            <MessageSquare size={14} className="text-secondary" /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-white font-bold text-sm hover:text-secondary transition-all relative group tracking-wider uppercase px-4 py-6 block"
  >
    {children}
    <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="text-white/90 text-base font-bold hover:text-secondary transition-colors uppercase tracking-wide block py-2 border-b border-white/5"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
