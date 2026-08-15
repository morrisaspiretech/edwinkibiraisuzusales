import { VEHICLES_DATA } from "@/data/vehicles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { FaChevronLeft, FaCheck, FaPhone, FaMessage, FaChevronRight } from "react-icons/fa6";


export const dynamic = "force-dynamic";

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model } = await params;
  const vehicle = VEHICLES_DATA[model];

  if (!vehicle) {
    notFound();
  }

  // Get related vehicles from same category
  const related = Object.values(VEHICLES_DATA)
    .filter((v) => v.category === vehicle.category && v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#f5f5f5] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <Link href="/" className="hover:text-[#D62B2B] transition-colors">Home</Link>
          <FaChevronRight size={12} />
          <Link href="/vehicles" className="hover:text-[#D62B2B] transition-colors">Vehicles</Link>
          <FaChevronRight size={12} />
          <span className="text-[#D62B2B]">{vehicle.title}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      {vehicle.category === "Pickups" ? (
        /* ── VIDEO HERO for Pickups ── */
        <div className="relative w-full overflow-hidden bg-[#111]" style={{ height: "80vh", minHeight: 500 }}>
          {/* Video background */}
          <video
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 mb-4 shadow-lg">
                {vehicle.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight mb-4">
                {vehicle.title}
              </h1>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-6 max-w-xl">
                {vehicle.description}
              </p>

              {/* Quick Specs Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { label: "Engine", value: vehicle.quickSpecs.engine },
                  { label: "Transmission", value: vehicle.quickSpecs.transmission },
                  { label: "Power", value: vehicle.quickSpecs.power },
                  { label: "Fuel", value: vehicle.quickSpecs.fuel },
                ].map((spec) => (
                  <div key={spec.label} className="bg-white/10 backdrop-blur-sm border-l-4 border-[#D62B2B] px-4 py-3">
                    <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest mb-0.5">{spec.label}</p>
                    <p className="text-xs font-black text-white uppercase leading-tight">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0768351483"
                  className="flex items-center gap-2 bg-[#D62B2B] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#b01e1e] transition-colors"
                >
                  <FaPhone size={14} /> Call Us
                </a>
                <a
                  href="https://wa.me/254768351483"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#1da851] transition-colors"
                >
                  <FaMessage size={14} /> WhatsApp
                </a>
                <Link
                  href="/vehicles"
                  className="flex items-center gap-2 border-2 border-white/60 text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-colors"
                >
                  <FaChevronLeft size={14} /> All Vehicles
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ── STANDARD HERO for other categories ── */
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* Left: Info */}
              <div>
                <span className="inline-block bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4">
                  {vehicle.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase leading-tight tracking-tight mb-4">
                  {vehicle.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 max-w-xl">
                  {vehicle.description}
                </p>

                {/* Quick Specs Strip */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Engine", value: vehicle.quickSpecs.engine },
                    { label: "Transmission", value: vehicle.quickSpecs.transmission },
                    { label: "Power", value: vehicle.quickSpecs.power },
                    { label: "Fuel", value: vehicle.quickSpecs.fuel },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-[#f5f5f5] border-l-4 border-[#D62B2B] px-4 py-3">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">{spec.label}</p>
                      <p className="text-sm font-black text-[#1a1a1a] uppercase leading-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:0768351483"
                    className="flex items-center gap-2 bg-[#D62B2B] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#b01e1e] transition-colors"
                  >
                    <FaPhone size={14} /> Call Us
                  </a>
                  <a
                    href="https://wa.me/254768351483"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#1da851] transition-colors"
                  >
                    <FaMessage size={14} /> WhatsApp
                  </a>
                  <Link
                    href="/vehicles"
                    className="flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    <FaChevronLeft size={14} /> All Vehicles
                  </Link>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative bg-[#f5f5f5] rounded-sm overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={vehicle.heroImage}
                    alt={vehicle.title}
                    fill
                    className="object-contain p-6"
                    priority
                  />
                </div>
                <div className="absolute top-4 right-4 bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">
                  {vehicle.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SPECS + FEATURES ── */}
      <div className="bg-[#f9f9f9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-1 bg-[#D62B2B]" />
            <h2 className="text-xl font-black uppercase tracking-tight text-[#1a1a1a]">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Engine */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#D62B2B] mb-4 pb-2 border-b border-gray-100">
                Engine &amp; Performance
              </h3>
              <div className="space-y-3">
                <SpecRow label="Type" value={vehicle.detailedSpecs.engine.type} />
                <SpecRow label="Displacement" value={vehicle.detailedSpecs.engine.displacement} />
                <SpecRow label="Max Power" value={vehicle.detailedSpecs.engine.maxPower} />
                <SpecRow label="Max Torque" value={vehicle.detailedSpecs.engine.maxTorque} />
                <SpecRow label="Fuel System" value={vehicle.detailedSpecs.engine.fuelSystem} />
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#D62B2B] mb-4 pb-2 border-b border-gray-100">
                Dimensions &amp; Capacities
              </h3>
              <div className="space-y-3">
                <SpecRow label="Length" value={vehicle.detailedSpecs.dimensions.length} />
                <SpecRow label="Width" value={vehicle.detailedSpecs.dimensions.width} />
                <SpecRow label="Height" value={vehicle.detailedSpecs.dimensions.height} />
                <SpecRow label="Wheelbase" value={vehicle.detailedSpecs.dimensions.wheelbase} />
                <SpecRow label="Ground Clearance" value={vehicle.detailedSpecs.dimensions.groundClearance} />
                <SpecRow label="Fuel Tank" value={vehicle.detailedSpecs.capacities.fuelTank} />
                <SpecRow label="Seating" value={vehicle.detailedSpecs.capacities.seating} />
                <SpecRow label="GVM" value={vehicle.detailedSpecs.capacities.gvm} />
              </div>
            </div>

            {/* Chassis */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#D62B2B] mb-4 pb-2 border-b border-gray-100">
                Chassis &amp; Suspension
              </h3>
              <div className="space-y-3 mb-6">
                <SpecRow label="Front Suspension" value={vehicle.detailedSpecs.chassis.suspensionFront} />
                <SpecRow label="Rear Suspension" value={vehicle.detailedSpecs.chassis.suspensionRear} />
                <SpecRow label="Brakes" value={vehicle.detailedSpecs.chassis.brakes} />
                <SpecRow label="Steering" value={vehicle.detailedSpecs.chassis.steering} />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 bg-white border border-gray-200 p-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#D62B2B] mb-4 pb-2 border-b border-gray-100">
              Key Features &amp; Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {vehicle.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5">
                  <FaCheck size={14} className="text-[#D62B2B] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── GALLERY ── */}
      {vehicle.gallery && vehicle.gallery.length > 0 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-[#D62B2B]" />
              <h2 className="text-xl font-black uppercase tracking-tight text-[#1a1a1a]">
                Photo Gallery
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {vehicle.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] bg-[#f5f5f5] rounded-xl overflow-hidden border border-gray-100 hover:border-[#D62B2B] hover:shadow-md transition-all group">
                  <Image src={img} alt={`${vehicle.title} Gallery ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── RELATED VEHICLES ── */}
      {related.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-[#D62B2B]" />
              <h2 className="text-xl font-black uppercase tracking-tight text-[#1a1a1a]">
                Also in {vehicle.category}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => (
                <Link
                  key={v.id}
                  href={`/vehicles/${v.id}`}
                  className="group flex gap-4 bg-[#f9f9f9] border border-gray-200 hover:border-[#D62B2B] transition-colors p-4"
                >
                  <div className="relative w-24 h-20 flex-shrink-0 bg-white">
                    <Image src={v.heroImage} alt={v.title} fill className="object-contain p-2" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-bold text-[#D62B2B] uppercase tracking-widest mb-1">{v.category}</p>
                    <p className="text-sm font-black text-[#1a1a1a] uppercase leading-tight group-hover:text-[#D62B2B] transition-colors">{v.title}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 font-bold">
                      View Details <FaChevronRight size={10} />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT CTA ── */}
      <div className="bg-[#D62B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                Interested in the {vehicle.title}?
              </h2>
              <p className="text-white/80 text-sm">
                Contact Edwin Kibira for pricing, financing &amp; test drives.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="tel:0768351483"
                className="flex items-center gap-2 bg-white text-[#D62B2B] px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                <FaPhone size={14} /> 0768 351 483
              </a>
              <a
                href="https://wa.me/254768351483"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 font-black text-xs uppercase tracking-widest hover:bg-black transition-colors"
              >
                <FaMessage size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-start gap-2 border-b border-gray-50 pb-2 last:border-0">
    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide w-2/5 flex-shrink-0 pt-0.5">{label}</span>
    <span className="text-xs font-bold text-[#1a1a1a] text-right leading-tight">{value}</span>
  </div>
);
