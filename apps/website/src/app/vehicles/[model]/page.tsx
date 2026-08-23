import { VEHICLES_DATA, VehicleVariant } from "@/data/vehicles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { FaChevronLeft, FaCheck, FaPhone, FaMessage, FaChevronRight } from "react-icons/fa6";
import VehicleGalleryClient from "./VehicleGalleryClient";

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

  // Combine heroImage + gallery for the interactive viewer
  const allImages = [
    vehicle.heroImage,
    ...(vehicle.gallery || []),
  ].filter(Boolean) as string[];

  // Get related vehicles from same category
  const related = Object.values(VEHICLES_DATA)
    .filter((v) => v.category === vehicle.category && v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />

      {/* ── COMPACT HERO WITH VIDEO BACKGROUND ── */}
      <div className="relative bg-[#0d0d0d] overflow-hidden" style={{ minHeight: 320 }}>
        {/* Video background (fallback to hero.mp4 if presentationVideo is missing) */}
        <video
          src={vehicle.presentationVideo?.url || "/videos/hero.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Red top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#D62B2B] z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 flex flex-col justify-center items-center text-center h-full">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 w-full">
            <Link href="/" className="hover:text-[#D62B2B] transition-colors">Home</Link>
            <FaChevronRight size={9} className="opacity-40" />
            <Link href="/vehicles" className="hover:text-[#D62B2B] transition-colors">Vehicles</Link>
            <FaChevronRight size={9} className="opacity-40" />
            <span className="text-white/70">{vehicle.title}</span>
          </nav>

          <span className="inline-block bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 shadow-lg">
            {vehicle.category}
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight max-w-3xl mb-8 drop-shadow-xl">
            {vehicle.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:0768351483"
              className="flex items-center gap-2 bg-[#D62B2B] text-white px-6 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-[#b01e1e] transition-colors shadow-lg"
            >
              <FaPhone size={13} /> Call Edwin
            </a>
            <a
              href="https://wa.me/254768351483"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-[#1da851] transition-colors shadow-lg"
            >
              <FaMessage size={13} /> WhatsApp
            </a>
            <Link
              href="/vehicles"
              className="flex items-center gap-2 border border-white/30 bg-black/40 backdrop-blur-sm text-white/90 px-6 py-2.5 font-black text-xs uppercase tracking-widest hover:border-white hover:bg-white/10 transition-all shadow-lg"
            >
              <FaChevronLeft size={11} /> All Vehicles
            </Link>
          </div>
        </div>
      </div>

      {/* ── SPLIT: INTERACTIVE GALLERY + STICKY DETAILS ── */}
      <VehicleGalleryClient
        images={allImages}
        title={vehicle.title}
        description={vehicle.description}
        quickSpecs={vehicle.quickSpecs}
        features={vehicle.features}
        variants={vehicle.variants}
      />

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <div className="bg-[#f5f5f5] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[3px] bg-[#D62B2B]" />
            <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Engine */}
            <div className="bg-white border border-gray-200 p-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-3 pb-2 border-b border-gray-100">
                Engine &amp; Performance
              </h3>
              <div className="space-y-0.5">
                <SpecRow label="Type" value={vehicle.detailedSpecs.engine.type} />
                <SpecRow label="Displacement" value={vehicle.detailedSpecs.engine.displacement} />
                <SpecRow label="Max Power" value={vehicle.detailedSpecs.engine.maxPower} />
                <SpecRow label="Max Torque" value={vehicle.detailedSpecs.engine.maxTorque} />
                <SpecRow label="Fuel System" value={vehicle.detailedSpecs.engine.fuelSystem} />
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-white border border-gray-200 p-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-3 pb-2 border-b border-gray-100">
                Dimensions &amp; Capacities
              </h3>
              <div className="space-y-0.5">
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
            <div className="bg-white border border-gray-200 p-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-3 pb-2 border-b border-gray-100">
                Chassis &amp; Suspension
              </h3>
              <div className="space-y-0.5">
                <SpecRow label="Front Suspension" value={vehicle.detailedSpecs.chassis.suspensionFront} />
                <SpecRow label="Rear Suspension" value={vehicle.detailedSpecs.chassis.suspensionRear} />
                <SpecRow label="Brakes" value={vehicle.detailedSpecs.chassis.brakes} />
                <SpecRow label="Steering" value={vehicle.detailedSpecs.chassis.steering} />
              </div>
            </div>
          </div>

          {/* Full Features Grid */}
          {vehicle.features.length > 8 && (
            <div className="mt-4 bg-white border border-gray-200 p-5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B] mb-4 pb-2 border-b border-gray-100">
                All Features &amp; Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6">
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D62B2B]/10 flex items-center justify-center mt-0.5">
                      <FaCheck size={10} className="text-[#D62B2B]" />
                    </div>
                    <span className="text-sm text-gray-800 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── MODEL RANGE & PRICING TABLE (only for multi-variant vehicles) ── */}
      {vehicle.variants && vehicle.variants.length > 0 && (
        <div className="bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[3px] bg-[#D62B2B]" />
                <h2 className="text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
                  Model Range &amp; Pricing
                </h2>
              </div>
              <span className="text-[11px] text-gray-400 font-semibold italic sm:ml-auto">* Prices are indicative — contact Edwin for current offers</span>
            </div>

            <div className="overflow-x-auto rounded-sm border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#1a1a1a]">
                  <tr>
                    {["Model", "Displacement", "Payload", "Drive Config", "GVM", "Power", "Chassis Price", "With Body"].map(h => (
                      <th key={h} className="px-4 py-3.5 text-left text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {vehicle.variants.map((v, i) => (
                    <tr key={v.model} className={`transition-colors hover:bg-[#D62B2B]/5 ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#D62B2B] flex-shrink-0" />
                          <span className="font-black text-[#1a1a1a] text-sm uppercase tracking-wide">{v.model}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-700">{v.displacement}</td>
                      <td className="px-4 py-4">
                        <span className="inline-block bg-[#D62B2B]/10 text-[#D62B2B] font-black text-xs px-2.5 py-1 rounded">{v.payload}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-block px-2.5 py-1 text-xs font-black uppercase tracking-wide rounded border ${
                          v.drive === "4×4"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-50 text-gray-600 border-gray-200"
                        }`}>
                          {v.drive}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-700">{v.gvm ?? "—"}</td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-700">{v.power ?? "—"}</td>
                      <td className="px-4 py-4">
                        <span className="font-black text-[#1a1a1a] text-sm whitespace-nowrap">{v.chassisPrice}</span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-black text-[#D62B2B] text-sm whitespace-nowrap">{v.withBodyPrice}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between bg-[#f9f9f9] border border-gray-200 p-5">
              <div>
                <p className="font-black text-[#1a1a1a] text-sm uppercase tracking-tight">Ready to order your N-Series?</p>
                <p className="text-xs text-gray-500 mt-0.5">Up to 100% bank financing available. Delivery nationwide.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <a href="tel:0768351483" className="flex items-center gap-2 bg-[#D62B2B] text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-[#b01e1e] transition-colors">
                  Call Edwin
                </a>
                <a href="https://wa.me/254768351483" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 font-black text-xs uppercase tracking-widest hover:bg-[#1da851] transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── VIDEO SHOWCASE ── */}
      {vehicle.presentationVideo && (
        <div className="bg-[#111] border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-[#D62B2B]" />
              <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                {vehicle.presentationVideo.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 relative aspect-video bg-black rounded-lg overflow-hidden border border-gray-800">
                <video
                  src={vehicle.presentationVideo.url}
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {vehicle.presentationVideo.description}
                </p>
                <div className="bg-white/10 p-6 border-l-4 border-[#D62B2B]">
                  <p className="text-white font-bold uppercase tracking-widest text-xs mb-2">Experience It Live</p>
                  <p className="text-gray-400 text-xs mb-4">Book a test drive today and experience this incredible vehicle in person.</p>
                  <a href="https://wa.me/254768351483" target="_blank" rel="noreferrer" className="inline-block bg-[#D62B2B] text-white px-6 py-3 font-black text-[10px] uppercase tracking-widest hover:bg-[#b01e1e] transition-colors">Book a Test Drive</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── RELATED VEHICLES ── */}
      {related.length > 0 && (
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <div className="flex items-center gap-3 mb-8">
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
                    <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1 font-bold">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                Interested in the {vehicle.title}?
              </h2>
              <p className="text-white/80 text-sm">
                Contact Edwin Kibira for pricing, financing &amp; test drives.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="tel:0768351483"
                className="flex items-center gap-2 bg-white text-[#D62B2B] px-7 py-3.5 font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                <FaPhone size={14} /> 0768 351 483
              </a>
              <a
                href="https://wa.me/254768351483"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1a1a1a] text-white px-7 py-3.5 font-black text-xs uppercase tracking-widest hover:bg-black transition-colors"
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
  <div className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0 gap-4">
    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex-shrink-0">{label}</span>
    <span className="text-xs font-semibold text-[#1a1a1a] text-right leading-snug">{value}</span>
  </div>
);
