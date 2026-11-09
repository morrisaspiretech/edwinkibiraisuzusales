import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { FaTruck, FaPhone, FaArrowLeft, FaCar, FaBus } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Edwin Kibirai Isuzu Sales Kenya",
  description: "The page you are looking for has moved or does not exist. Browse our brand-new Isuzu trucks, D-Max pickups, and buses in Nairobi, Kenya.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col justify-between">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-28 text-center">
        <span className="text-[#D62B2B] font-black text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full">
          Error 404 · Page Moved or Updated
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-[#1a1a1a] mt-6 tracking-tight">
          Vehicle Page <span className="text-[#D62B2B]">Not Found</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-4 text-base leading-relaxed">
          The Isuzu vehicle or page you requested may have been updated, redirected, or relocated in our latest 2026 showroom inventory.
        </p>

        {/* Quick Route Navigations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-10">
          <Link
            href="/vehicles/"
            className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#D62B2B] hover:bg-red-50/50 transition font-bold text-sm"
          >
            <FaCar className="text-[#D62B2B]" /> All Vehicles Showroom
          </Link>
          <Link
            href="/trucks/"
            className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#D62B2B] hover:bg-red-50/50 transition font-bold text-sm"
          >
            <FaTruck className="text-[#D62B2B]" /> Isuzu Commercial Trucks
          </Link>
          <Link
            href="/buses/"
            className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#D62B2B] hover:bg-red-50/50 transition font-bold text-sm"
          >
            <FaBus className="text-[#D62B2B]" /> Isuzu Passenger Buses
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#D62B2B] hover:bg-[#b82222] text-white px-6 py-3 font-black uppercase text-xs tracking-widest rounded transition"
          >
            <FaArrowLeft /> Return Home
          </Link>
          <a
            href="tel:+254768351483"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-black text-white px-6 py-3 font-black uppercase text-xs tracking-widest rounded transition"
          >
            <FaPhone /> Direct Desk 0768 351 483
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        Edwin Kibirai Isuzu Sales · Enterprise Road, Industrial Area, Nairobi, Kenya
      </div>
    </main>
  );
}
