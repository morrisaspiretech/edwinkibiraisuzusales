"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/posts";
import { 
  FaCalendar, 
  FaUser, 
  FaArrowRight, 
  FaMagnifyingGlass, 
  FaTruckFront, 
  FaBusSimple, 
  FaCar, 
  FaMoneyBillTrendUp, 
  FaScaleBalanced, 
  FaWhatsapp, 
  FaPhone,
  FaShieldHalved,
  FaClock
} from "react-icons/fa6";

interface BlogClientProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  { id: "all", label: "All Guides", icon: null },
  { id: "trucks", label: "Commercial Trucks", icon: FaTruckFront },
  { id: "buses", label: "PSV & School Buses", icon: FaBusSimple },
  { id: "pickups", label: "Pickups & SUVs", icon: FaCar },
  { id: "financing", label: "Asset Financing", icon: FaMoneyBillTrendUp },
  { id: "comparisons", label: "Comparisons", icon: FaScaleBalanced },
];

export default function BlogClient({ posts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q || 
        post.title.toLowerCase().includes(q) || 
        post.excerpt.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (selectedCategory === "all") return true;
      if (selectedCategory === "trucks") {
        return (
          post.slug.includes("frr") || 
          post.slug.includes("fvr") || 
          post.slug.includes("fvz") || 
          post.slug.includes("gxz") || 
          post.slug.includes("nlr") || 
          post.slug.includes("truck") ||
          post.slug.includes("tipper")
        );
      }
      if (selectedCategory === "buses") {
        return (
          post.slug.includes("bus") || 
          post.slug.includes("nqr") || 
          post.slug.includes("nmr85") || 
          post.slug.includes("seater") ||
          post.slug.includes("psv")
        );
      }
      if (selectedCategory === "pickups") {
        return (
          post.slug.includes("dmax") || 
          post.slug.includes("d-max") || 
          post.slug.includes("mux") || 
          post.slug.includes("mu-x") ||
          post.slug.includes("hilux")
        );
      }
      if (selectedCategory === "financing") {
        return (
          post.slug.includes("financing") || 
          post.slug.includes("loan") || 
          post.slug.includes("sacco") || 
          post.slug.includes("insurance") ||
          post.slug.includes("deposit")
        );
      }
      if (selectedCategory === "comparisons") {
        return (
          post.slug.includes("vs") || 
          post.slug.includes("comparison") || 
          post.slug.includes("new-vs-used")
        );
      }
      return true;
    });
  }, [posts, selectedCategory, searchQuery]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 0 ? filteredPosts.slice(1) : [];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative bg-gradient-to-b from-[#111215] via-[#16171C] to-[#0E0F12] pt-32 pb-20 px-4 sm:px-8 border-b-4 border-[#D62B2B] overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D62B2B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D62B2B] animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-widest text-white/90">
              Kenya Commercial Vehicle Intelligence • 2026 Verified
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight max-w-4xl mb-6">
            Official Isuzu <span className="text-[#D62B2B]">Buyer Guides</span> & Price Reports
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            Real 2026 pricing in KES, bank & SACCO financing requirements, operational costs, and expert specs for Isuzu trucks, buses, and pickups in Kenya.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mb-10">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white">{posts.length}+</div>
              <div className="text-[11px] text-white/60 font-semibold uppercase tracking-wider">Buyer Guides</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-[#D62B2B]">2026</div>
              <div className="text-[11px] text-white/60 font-semibold uppercase tracking-wider">Prices Verified</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white">Up to 80%</div>
              <div className="text-[11px] text-white/60 font-semibold uppercase tracking-wider">Asset Finance</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-xl sm:text-2xl font-black text-white">Direct</div>
              <div className="text-[11px] text-white/60 font-semibold uppercase tracking-wider">Dealer Support</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl relative">
            <div className="relative flex items-center">
              <FaMagnifyingGlass className="absolute left-4 text-gray-400 text-base pointer-events-none" />
              <input
                type="text"
                placeholder="Search by model (e.g., FRR 90, NMR85, D-Max, 33-seater bus, financing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-400 font-medium text-sm sm:text-base shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D62B2B] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-black uppercase text-gray-400 hover:text-gray-700 bg-gray-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY TABS ================= */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#D62B2B] text-white shadow-md shadow-red-500/20 scale-100"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {Icon && <Icon size={12} />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header count indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-4 w-1.5 bg-[#D62B2B] rounded-full" />
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
                {selectedCategory === "all" ? "All Buyer Guides" : CATEGORIES.find(c => c.id === selectedCategory)?.label}
              </h2>
              <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2.5 py-0.5 rounded-full">
                {filteredPosts.length} {filteredPosts.length === 1 ? "Article" : "Articles"}
              </span>
            </div>
            {searchQuery && (
              <p className="text-xs text-gray-500 font-medium">
                Showing results for <span className="font-bold text-gray-900">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {/* EMPTY STATE */}
          {filteredPosts.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-lg mx-auto shadow-sm">
              <div className="w-16 h-16 bg-red-50 text-[#D62B2B] rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-black">
                🔍
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">No Guides Found</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                We couldn't find any articles matching "{searchQuery}". Try searching for another vehicle model or clearing filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#D62B2B] transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* ================= FEATURED POST (ONLY ON ALL / NO SEARCH) ================= */}
          {featuredPost && !searchQuery && selectedCategory === "all" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                  Featured Guide
                </span>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-red-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden bg-gray-100">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/20">
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold mb-4">
                        <span className="flex items-center gap-1.5 text-gray-700">
                          <FaCalendar className="text-[#D62B2B]" /> {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-700">
                          <FaClock className="text-[#D62B2B]" /> 5 min read
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#D62B2B] transition-colors">
                        {featuredPost.title}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-8">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-300">
                          <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-gray-900">{featuredPost.author.name}</div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{featuredPost.author.role}</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 bg-[#D62B2B] text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider group-hover:bg-red-700 transition-colors shadow-md shadow-red-500/20">
                        <span>Read Guide</span>
                        <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ================= REGULAR POSTS GRID ================= */}
          {((searchQuery || selectedCategory !== "all") ? filteredPosts : regularPosts).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {((searchQuery || selectedCategory !== "all") ? filteredPosts : regularPosts).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/90 hover:border-red-400/50 flex flex-col h-full"
                >
                  {/* Card Media */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-md border border-white/20">
                      {post.category}
                    </div>

                    <div className="absolute bottom-3 left-3 text-[11px] font-bold text-white/90 flex items-center gap-1.5">
                      <FaCalendar className="text-[#D62B2B]" /> {post.date}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-lg font-black text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#D62B2B] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gray-100 overflow-hidden relative border border-gray-300">
                          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <span className="text-[11px] font-bold text-gray-700">{post.author.name}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-[#D62B2B] font-black text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                        <span>Read</span>
                        <FaArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ================= DIRECT QUOTATION CTA ================= */}
          <div className="bg-gradient-to-br from-[#1A1A1A] via-[#242429] to-[#121214] rounded-3xl p-8 sm:p-12 text-white border-l-8 border-[#D62B2B] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D62B2B]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#D62B2B] px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                  Personalized Buyer Assistance
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  Need an Official 2026 Isuzu Quotation or Asset Finance Advisory?
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Edwin Kibira provides tailored proforma invoices, body building consultations, and expedited bank/SACCO asset finance approvals across Kenya.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href="https://wa.me/254768351483?text=Hello%20Edwin,%20I%20am%20interested%20in%20an%20Isuzu%20quotation%20and%20financing%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors shadow-lg"
                >
                  <FaWhatsapp size={16} /> WhatsApp Edwin
                </a>
                <a
                  href="tel:0768351483"
                  className="bg-white text-[#1A1A1A] px-6 py-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <FaPhone size={14} /> Call 0768 351483
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
