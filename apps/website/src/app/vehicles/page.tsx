import { VEHICLES_DATA } from "@/data/vehicles";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { FaChevronRight } from "react-icons/fa6";


export default function ShowroomPage() {
  const vehicles = Object.values(VEHICLES_DATA);

  const groupedVehicles = {
    Pickups: vehicles.filter((v) => v.category === "Pickups"),
    SUVs: vehicles.filter((v) => v.category === "SUVs"),
    Trucks: vehicles.filter((v) => v.category === "Trucks"),
    Buses: vehicles.filter((v) => v.category === "Buses"),
  };

  const categoryIcons: Record<string, string> = {
    Pickups: "🛻",
    SUVs: "🚙",
    Trucks: "🚛",
    Buses: "🚌",
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      {/* Page Header — Video Hero */}
      <div className="relative w-full overflow-hidden bg-[#111]" style={{ height: "55vh", minHeight: 380 }}>
        {/* Video */}
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.20) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <FaChevronRight size={10} />
            <span className="text-[#D62B2B]">All Vehicles</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-2">
            Isuzu <span className="text-[#D62B2B]">Vehicle Range</span>
          </h1>
          <p className="text-white/60 text-sm max-w-xl mb-6">
            Browse our full range of Isuzu vehicles — pickups, SUVs, trucks and buses.
          </p>
          {/* Category Jump Links */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(groupedVehicles).map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="px-4 py-2 border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-[#D62B2B] hover:border-[#D62B2B] transition-colors backdrop-blur-sm"
              >
                {categoryIcons[cat]} {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        {Object.entries(groupedVehicles).map(([category, categoryVehicles]) => {
          if (categoryVehicles.length === 0) return null;
          return (
            <section key={category} id={category.toLowerCase()} className="scroll-mt-24">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6 pb-3 border-b-2 border-gray-100">
                <div className="w-1 h-8 bg-[#D62B2B] flex-shrink-0" />
                <h2 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight">
                  Isuzu <span className="text-[#D62B2B]">{category}</span>
                </h2>
                <span className="text-xs font-bold text-gray-400 ml-auto">{categoryVehicles.length} model{categoryVehicles.length > 1 ? "s" : ""}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryVehicles.map((vehicle) => (
                  <Link
                    key={vehicle.id}
                    href={`/vehicles/${vehicle.id}`}
                    className="group bg-white border border-gray-200 hover:border-[#D62B2B] hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                      <Image
                        src={vehicle.heroImage}
                        alt={vehicle.title}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1 border-t border-gray-100">
                      <span className="text-[10px] font-black text-[#D62B2B] uppercase tracking-widest mb-1">{vehicle.category}</span>
                      <h3 className="text-base font-black text-[#1a1a1a] uppercase leading-tight mb-2 group-hover:text-[#D62B2B] transition-colors">
                        {vehicle.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {vehicle.description}
                      </p>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 gap-1.5 mb-4">
                        <div className="bg-[#f5f5f5] px-2 py-1.5">
                          <p className="text-[9px] text-gray-400 font-bold uppercase">Engine</p>
                          <p className="text-[10px] font-black text-[#1a1a1a] leading-tight">{vehicle.quickSpecs.engine}</p>
                        </div>
                        <div className="bg-[#f5f5f5] px-2 py-1.5">
                          <p className="text-[9px] text-gray-400 font-bold uppercase">Power</p>
                          <p className="text-[10px] font-black text-[#1a1a1a] leading-tight">{vehicle.quickSpecs.power}</p>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest group-hover:text-[#D62B2B] transition-colors">
                          Explore Vehicle
                        </span>
                        <div className="w-8 h-8 bg-[#1a1a1a] group-hover:bg-[#D62B2B] flex items-center justify-center transition-colors">
                          <FaChevronRight size={14} className="text-white group-hover:translate-x-0.5 transition-transform" />
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
    </main>
  );
}
