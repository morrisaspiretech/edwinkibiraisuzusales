"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black text-white tracking-[0.15em]">
            ASPIRE<span className="text-accent">MOTORS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/inventory">Showroom</NavLink>
          <NavLink href="/new-arrivals">New Arrivals</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/bikes">Bikes</NavLink>
        </div>

        {/* Action Icons & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-5 text-white/90">
            <Heart className="w-5 h-5 cursor-pointer hover:text-accent transition-all hover:scale-110" />
            <User className="w-5 h-5 cursor-pointer hover:text-accent transition-all hover:scale-110" />
          </div>
          <div className="flex items-center gap-3 ml-2 border-l border-white/20 pl-6">
            <a href="https://wa.me/254123456789" target="_blank" className="bg-secondary p-2.5 rounded-full text-white hover:scale-110 transition-transform shadow-lg shadow-secondary/20">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
        <MobileNavLink href="/inventory" onClick={() => setIsMobileMenuOpen(false)}>All Vehicles</MobileNavLink>
        <MobileNavLink href="/bikes" onClick={() => setIsMobileMenuOpen(false)}>Bikes</MobileNavLink>
        <MobileNavLink href="/new-arrivals" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</MobileNavLink>
        <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
        <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-white font-black text-sm hover:text-accent transition-all relative group tracking-wider uppercase"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
  </Link>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick: () => void }) => (
  <Link
    href={href}
    className="text-white text-3xl font-black hover:text-accent transition-colors uppercase tracking-widest"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
