"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaXmark, FaPhone, FaChevronDown, FaWhatsapp, FaCalculator } from "react-icons/fa6";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

const PHONE = "0768351483";
const WHATSAPP = "254768351483";

const navCategories = [
  {
    label: "Trucks",
    items: [
      { label: "N-Series NLR", href: "/vehicles/n-series-nlr" },
      { label: "N-Series NMR 85", href: "/vehicles/n-series-nmr85" },
      { label: "N-Series NPS 81H 4×4", href: "/vehicles/n-series-nps" },
      { label: "N-Series NQR 81", href: "/vehicles/n-series-nqr81" },
      { label: "N-Series NQR Xtra", href: "/vehicles/n-series-nqr-xtra" },
      { label: "FRR 90N", href: "/vehicles/f-series-frr90n" },
      { label: "FVR 90L", href: "/vehicles/f-series-fvr90l" },
      { label: "FVR 90P", href: "/vehicles/f-series-fvr90p" },
      { label: "FVZ 34N Truck", href: "/vehicles/f-series-fvz34n" },
      { label: "FVZ 34T Tipper", href: "/vehicles/f-series-fvz34t" },
      { label: "Movers", href: "/vehicles/movers" },
    ],
  },
  {
    label: "Buses",
    items: [
      { label: "NMR 26 Seater", href: "/vehicles/bus-nmr-26" },
      { label: "NQR 29 Seater", href: "/vehicles/bus-nqr-29" },
      { label: "NQR 33 Seater", href: "/vehicles/bus-nqr-33" },
      { label: "FRR 90N 51 Seater", href: "/vehicles/bus-frr90n-51" },
      { label: "FRR 90Q 51 Seater", href: "/vehicles/bus-frr90q-51" },
      { label: "FVR 34 67 Seater 4×2", href: "/vehicles/bus-fvr34-67-4x2" },
      { label: "FVR 34 67 Seater 6×2", href: "/vehicles/bus-fvr34-67-6x2" },
    ],
  },
  {
    label: "Pickups",
    items: [
      { label: "TFR 87 Single Cab 4×2", href: "/vehicles/tfr87-4x2" },
      { label: "TFS 87 Single Cab 4×4 Manual", href: "/vehicles/tfs87-4x4-manual" },
      { label: "TFS 87 Single Cab 4×4 Auto", href: "/vehicles/tfs87-4x4-auto" },
      { label: "TFS 87 Double Cab Manual", href: "/vehicles/tfs87-double-manual" },
      { label: "TFS 87 Double Cab Auto", href: "/vehicles/tfs87-double-auto" },
      { label: "D-Max 3.0L Double Cab", href: "/vehicles/double-cabin" },
      { label: "TFS 40 Double Cab Automatic", href: "/vehicles/tfs40-double-auto" },
    ],
  },
  {
    label: "SUVs",
    items: [
      { label: "Isuzu MU-X LS-U 1900cc", href: "/vehicles/mu-x-1900cc" },
      { label: "Isuzu MU-X LS-T 3000cc", href: "/vehicles/mu-x-3000cc" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const getWhatsAppMessage = () => {
    let message = "Hi Edwin, I'm interested in buying an Isuzu vehicle and would like to get more details.";
    
    if (pathname === "/about") {
      message = "Hi Edwin, I was reading about your dealership on the About page and I'm interested in purchasing an Isuzu.";
    } else if (pathname === "/vehicles") {
      message = "Hi Edwin, I'm looking at your Isuzu Vehicle Range online and I'd like to discuss pricing and options.";
    } else if (pathname.startsWith("/vehicles/")) {
      const modelSlug = pathname.split('/').pop() || "";
      const formattedModel = modelSlug.replace(/-/g, " ").toUpperCase();
      message = `Hi Edwin, I am interested in the ${formattedModel} I saw on your website. Is it currently available for viewing/test drive?`;
    } else if (pathname === "/get-quote") {
      message = "Hi Edwin, I'm on the Get a Quote page and would like to request a custom quote for a vehicle.";
    } else if (pathname === "/contact") {
      message = "Hi Edwin, I'm reaching out from your contact page. I'd love to chat about your Isuzu vehicles.";
    }
    
    return message;
  };

  return (
    <>
      {/* ── Top Bar ── */}
      <div className="bg-secondary text-white text-xs py-2 px-4 hidden sm:block relative overflow-hidden">
        {/* Twinkle Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1.5px,_transparent_1.5px)] [background-size:24px_24px] opacity-40 animate-pulse mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_2.5px,_transparent_2px)] [background-size:37px_37px] opacity-30 animate-[pulse_3s_ease-in-out_infinite_1s] mix-blend-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <span className="font-semibold tracking-wide">
            Kenya&apos;s Trusted Authorised Isuzu Dealer — Edwin Kibira Isuzu Sales
          </span>
          <div className="flex items-center gap-6">
            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-white/80 transition-colors font-bold">
              <FaPhone size={12} /> {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(getWhatsAppMessage())}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-bold group"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <FaWhatsapp size={13} className="text-white" />
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <nav
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1a1a]",
          isScrolled ? "shadow-2xl py-1" : "py-2"
        )}
      >
        {/* Twinkle Background Effect for Black Nav */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1.5px,_transparent_1.5px)] [background-size:30px_30px] opacity-25 animate-[pulse_4s_ease-in-out_infinite] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] [background-size:45px_45px] opacity-20 animate-[pulse_3s_ease-in-out_infinite_1.5s] mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20 relative z-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-secondary group-hover:scale-105 transition-transform flex-shrink-0">
              <Image src="/logo.jpg" alt="Edwin Kibira Isuzu Sales" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-secondary font-black text-[10px] md:text-xs tracking-[0.2em] uppercase">Edwin Kibira</span>
              <span className="text-white font-black text-base md:text-xl tracking-[0.1em] uppercase leading-tight">
                ISUZU <span className="text-secondary">SALES</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0">
            <NavLink href="/">Home</NavLink>

            {navCategories.map((cat) => (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white font-bold text-sm hover:text-secondary transition-all px-4 py-6 uppercase tracking-wider">
                  {cat.label}
                  <FaChevronDown
                    size={12}
                    className={cn("transition-transform duration-200", activeDropdown === cat.label ? "rotate-180 text-secondary" : "")}
                  />
                </button>
                {activeDropdown === cat.label && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl min-w-[240px] border-t-4 border-secondary z-50">
                    {cat.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-[#1a1a1a] font-bold text-xs uppercase hover:bg-secondary hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/get-quote" 
              className="bg-[#D62B2B] text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:bg-[#b02323] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle & Quick Actions */}
          <div className="lg:hidden flex items-center gap-4">
            <a href={`tel:${PHONE}`} className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-white shadow-lg shadow-secondary/30">
              <FaPhone size={12} />
            </a>
            <button
              className="text-white p-2 border border-white/20 rounded hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-[#1a1a1a] z-50 flex flex-col pt-20 px-6 gap-2 transition-transform duration-300 overflow-y-auto",
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
          <button className="text-white p-2 border border-white/20 rounded hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            <FaXmark size={24} />
          </button>
        </div>

        <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>

        {navCategories.map((cat) => (
          <div key={cat.label} className="border-b border-white/10">
            <button
              className="w-full text-left text-white/90 text-base font-bold uppercase tracking-wide py-3 flex justify-between items-center hover:text-secondary transition-colors"
              onClick={() => setExpandedMobile(expandedMobile === cat.label ? null : cat.label)}
            >
              {cat.label}
              <FaChevronDown size={14} className={cn("transition-transform", expandedMobile === cat.label ? "rotate-180 text-secondary" : "")} />
            </button>
            {expandedMobile === cat.label && (
              <div className="pl-4 pb-2 space-y-1">
                {cat.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/60 text-sm font-bold uppercase py-2 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</MobileNavLink>
        <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        <MobileNavLink href="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</MobileNavLink>

        <Link
          href="/get-quote"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-secondary text-white text-center py-4 font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-colors mt-4 mb-6 flex items-center justify-center gap-2"
        >
          Get a Quote
        </Link>

        <div className="flex flex-col gap-3 text-white/70 text-sm pb-10">
          <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-white">
            <FaPhone size={14} className="text-secondary" /> {PHONE}
          </a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
            <FaWhatsapp size={14} className="text-secondary" /> WhatsApp Us
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
    className="text-white/90 text-base font-bold hover:text-secondary transition-colors uppercase tracking-wide block py-3 border-b border-white/10"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
