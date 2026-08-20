import { VEHICLES_DATA } from "@/data/vehicles";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { FaChevronRight, FaTruck, FaCar, FaBus, FaArrowRight } from "react-icons/fa6";

export const metadata = {
  title: "Isuzu Vehicle Range | Edwin Kibira Isuzu Sales",
  description: "Browse the full Isuzu vehicle range — D-Max pickups, mu-X SUVs, N-Series trucks, F-Series buses and more. Available in Kenya.",
};

export default function ShowroomPage() {
  const vehicles = Object.values(VEHICLES_DATA);

  const groupedVehicles = {
    Pickups: vehicles.filter((v) => v.category === "Pickups"),
    SUVs: vehicles.filter((v) => v.category === "SUVs"),
    Trucks: vehicles.filter((v) => v.category === "Trucks"),
    Buses: vehicles.filter((v) => v.category === "Buses"),
  };

  const categoryMeta: Record<string, { icon: React.ReactNode; desc: string }> = {
    Pickups: { icon: <FaTruck size={18} />, desc: "Workhorse & lifestyle pickups" },
    SUVs: { icon: <FaCar size={18} />, desc: "Premium 7-seater family SUVs" },
    Trucks: { icon: <FaTruck size={18} />, desc: "Light & heavy commercial trucks" },
    Buses: { icon: <FaBus size={18} />, desc: "School, PSV & corporate buses" },
  };

  const totalModels = vehicles.length;

  return (
    <main className="min-h-screen bg-[#f8f8f8] font-sans text-[#1a1a1a]">
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative w-full overflow-hidden bg-[#0d0d0d]" style={{ minHeight: 480 }}>
        {/* Background Video */}
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight size={9} />
              <span className="text-[#D62B2B]">All Vehicles</span>
            </nav>

            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-4">
              Isuzu<br />
              <span className="text-[#D62B2B]">Vehicle</span><br />
              Range
            </h1>
            <p className="text-white/55 text-base max-w-lg leading-relaxed mb-8">
              Kenya&apos;s most trusted Isuzu dealer. Browse our full lineup — from rugged D-Max pickups to powerful F-Series trucks, all available for financing.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { val: `${totalModels}+`, label: "Models Available" },
                { val: "100%", label: "Genuine Isuzu" },
                { val: "Flexible", label: "Financing Options" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white">{s.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Category jump pills — premium style */}
            <div className="flex flex-wrap gap-3">
              {Object.entries(categoryMeta).map(([cat, meta]) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase()}`}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-[#D62B2B] hover:border-[#D62B2B] transition-all backdrop-blur-sm group"
                >
                  <span className="opacity-60 group-hover:opacity-100">{meta.icon}</span>
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Right side hero image */}
          <div className="hidden lg:block relative w-80 h-56 flex-shrink-0 opacity-90">
            <Image
              src="/vehicles/tfs40-double-auto/1.jpeg"
              alt="Isuzu TFS40"
              fill
              className="object-cover rounded-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40 rounded-sm" />
          </div>
        </div>
      </div>

      {/* ── VEHICLE SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-20">
        {Object.entries(groupedVehicles).map(([category, categoryVehicles]) => {
          if (categoryVehicles.length === 0) return null;
          const meta = categoryMeta[category];
          return (
            <section key={category} id={category.toLowerCase()} className="scroll-mt-24">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-10 bg-[#D62B2B] flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-0.5">
                      {meta.desc}
                    </p>
                    <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tight leading-none">
                      Isuzu <span className="text-[#D62B2B]">{category}</span>
                    </h2>
                  </div>
                </div>
                <span className="sm:ml-auto text-xs font-bold text-gray-400 border border-gray-200 px-3 py-1.5">
                  {categoryVehicles.length} model{categoryVehicles.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryVehicles.map((vehicle) => (
                  <Link
                    key={vehicle.id}
                    href={`/vehicles/${vehicle.id}`}
                    className="group bg-white border border-gray-200 hover:border-[#D62B2B] hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-[#f2f2f2] overflow-hidden">
                      <Image
                        src={vehicle.heroImage}
                        alt={vehicle.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Category chip */}
                      <div className="absolute top-3 left-3 bg-[#D62B2B] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                        {vehicle.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-black text-[#1a1a1a] uppercase leading-tight mb-2 group-hover:text-[#D62B2B] transition-colors">
                        {vehicle.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {vehicle.description}
                      </p>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 gap-2 mb-5">
                        {[
                          { label: "Engine", val: vehicle.quickSpecs.engine },
                          { label: "Transmission", val: vehicle.quickSpecs.transmission },
                        ].map((spec) => (
                          <div key={spec.label} className="bg-[#f5f5f5] px-3 py-2">
                            <p className="text-[9px] text-gray-400 font-bold uppercase mb-0.5">{spec.label}</p>
                            <p className="text-[10px] font-black text-[#1a1a1a] leading-tight">{spec.val}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest group-hover:text-[#D62B2B] transition-colors">
                          View Details
                        </span>
                        <div className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-[#D62B2B] flex items-center justify-center transition-colors">
                          <FaArrowRight size={13} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="bg-[#0d0d0d] py-16 px-4 sm:px-6 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D62B2B] text-xs font-black uppercase tracking-widest mb-3">Can&apos;t find what you need?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
            Talk to Our <span className="text-[#D62B2B]">Isuzu Experts</span>
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
            Our team can source any Isuzu model and walk you through financing options tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-[#D62B2B] text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#b02323] transition-all flex items-center justify-center gap-2"
            >
              Get a Quote <FaArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/254768351483"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white/20 text-white px-8 py-4 font-black uppercase text-sm tracking-widest hover:border-[#D62B2B] hover:text-[#D62B2B] transition-all flex items-center justify-center gap-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
