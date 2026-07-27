"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
      {/* Top Bar */}
      <div className="bg-secondary text-white text-xs py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-medium tracking-wide">
            Kenya&apos;s Trusted Isuzu Dealer — Serving Kenyans with Pride
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:+254700000000" className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-semibold">
              <Phone size={12} /> +254 700 000 000
            </a>
            <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-semibold">
              <MessageSquare size={12} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-primary shadow-2xl"
            : "bg-primary"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start leading-none">
            <span className="text-secondary font-black text-xs tracking-[0.3em] uppercase">Edwin Kibira</span>
            <span className="text-white font-black text-xl tracking-[0.12em] uppercase leading-none">
              ISUZU <span className="text-secondary">SALES</span>
            </span>
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
              <button className="flex items-center gap-1 text-white font-bold text-sm hover:text-secondary transition-all px-4 py-7 uppercase tracking-wider">
                Vehicles <ChevronDown size={14} className={cn("transition-transform duration-200", activeDropdown === "vehicles" ? "rotate-180" : "")} />
              </button>
              {activeDropdown === "vehicles" && (
                <div className="absolute top-full left-0 bg-white shadow-2xl min-w-[220px] border-t-4 border-secondary z-50">
                  {vehicleCategories.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-primary font-semibold text-sm hover:bg-secondary hover:text-white transition-colors border-b border-gray-100 last:border-0"
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
              className="bg-secondary text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-accent-dark transition-all"
            >
              Book Test Drive
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-primary z-40 flex flex-col pt-24 px-8 gap-2 transition-transform duration-500 overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="border-b border-white/10 pb-2 mb-2">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Navigation</p>
          <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/inventory" onClick={() => setIsMobileMenuOpen(false)}>All Vehicles</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        </div>

        <div className="border-b border-white/10 pb-4 mb-4">
          <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-4">Isuzu Models</p>
          {vehicleCategories.map((item) => (
            <MobileNavLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </MobileNavLink>
          ))}
        </div>

        <Link
          href="/book-test-drive"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-secondary text-white text-center py-5 font-black uppercase tracking-widest text-lg mt-4 hover:bg-accent-dark transition-colors"
        >
          Book a Test Drive
        </Link>

        <div className="mt-8 flex flex-col gap-3 text-white/60 text-sm">
          <a href="tel:+254700000000" className="flex items-center gap-3 hover:text-white">
            <Phone size={16} className="text-secondary" /> +254 700 000 000
          </a>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-white font-bold text-sm hover:text-secondary transition-all relative group tracking-wider uppercase px-4 py-7 block"
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
    className="text-white/80 text-lg font-bold hover:text-secondary transition-colors uppercase tracking-wide block py-2.5 border-b border-white/5"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
