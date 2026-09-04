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

  // Combine heroImage + gallery for the interactive viewer and deduplicate them
  const allImages = Array.from(new Set([
    vehicle.heroImage,
    ...(vehicle.gallery || []),
  ].filter(Boolean))) as string[];

  // Get related vehicles from same category
  const related = Object.values(VEHICLES_DATA)
    .filter((v) => v.category === vehicle.category && v.id !== vehicle.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar />
      
      {/* ── SEO SCHEMA MARKUP ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Vehicle",
            name: vehicle.title,
            image: `https://edwinkibiraisuzusales.co.ke${vehicle.heroImage}`,
            description: vehicle.description,
            brand: {
              "@type": "Brand",
              name: "Isuzu",
            },
            vehicleEngine: {
              "@type": "EngineSpecification",
              engineDisplacement: vehicle.quickSpecs.engine,
            },
            fuelType: vehicle.quickSpecs.fuel,
            vehicleTransmission: vehicle.quickSpecs.transmission,
          }),
        }}
      />

      {/* ── COMPACT HERO ── */}
      <div className="relative bg-[#0d0d0d] overflow-hidden" style={{ minHeight: 320 }}>
        {/* Show vehicle's actual hero image OR presentation video */}
        {vehicle.presentationVideo?.url ? (
          <video
            src={vehicle.presentationVideo.url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        ) : (
          <img
            src={vehicle.heroImage}
            alt={vehicle.title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        )}
        
        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-black/30" />

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

          <div className="flex gap-2 mb-4">
            <span className="inline-block bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-lg">
              {vehicle.category}
            </span>
            <span className={`inline-block text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 shadow-lg ${
              vehicle.availability === 'Order Only' ? 'bg-amber-500' :
              vehicle.availability === 'Limited Stock' ? 'bg-orange-500' :
              'bg-green-600'
            }`}>
              {vehicle.availability || 'In Stock'}
            </span>
          </div>
          
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
        vehicleId={vehicle.id}
        images={allImages}
        title={vehicle.title}
        description={vehicle.description}
        quickSpecs={vehicle.quickSpecs}
        features={vehicle.features}
        variants={vehicle.variants}
        price={vehicle.price}
      />

      {/* ── TECHNICAL SPECIFICATIONS ── */}
      <div className="bg-[#f8f9fa] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-7">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-6 h-[2.5px] bg-[#D62B2B]" />
            <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="divide-y divide-gray-100">
                <SpecRow label="Transmission" value={vehicle.quickSpecs.transmission} />
                <SpecRow label="Power" value={vehicle.detailedSpecs.engine.maxPower} />
                <SpecRow label="Displacement (Cc)" value={vehicle.detailedSpecs.engine.displacement} />
                <SpecRow label="Engine Model" value={vehicle.detailedSpecs.engine.type} />
                <SpecRow label="Torque" value={vehicle.detailedSpecs.engine.maxTorque} />
                {/* @ts-ignore */}
                <SpecRow label="Emission Standard" value={vehicle.detailedSpecs.engine?.emissionStandard} />
                <SpecRow label="Seating Capacity" value={vehicle.detailedSpecs.capacities.seating} />
              </div>
              <div className="divide-y divide-gray-100">
                {/* @ts-ignore */}
                <SpecRow label="Axle Layout / Drive" value={vehicle.detailedSpecs.chassis?.axleLayout || vehicle.variants?.[0]?.drive} />
                <SpecRow label="Gross Vehicle Weight (GVW)" value={vehicle.detailedSpecs.capacities.gvm} />
                <SpecRow label="Fuel Tank Capacity" value={vehicle.detailedSpecs.capacities.fuelTank} />
                <SpecRow 
                  label="Suspension (Front & Rear)" 
                  value={(vehicle.detailedSpecs.chassis.suspensionFront && vehicle.detailedSpecs.chassis.suspensionRear) ? `${vehicle.detailedSpecs.chassis.suspensionFront} & ${vehicle.detailedSpecs.chassis.suspensionRear}` : undefined} 
                />
                {/* @ts-ignore */}
                <SpecRow label="Clutch Diameter" value={vehicle.detailedSpecs.chassis?.clutchDiameter} />
                {/* @ts-ignore */}
                <SpecRow label="Fleet Management System" value={vehicle.detailedSpecs?.fleetManagementSystem} />
              </div>
            </div>
          </div>

          {/* Full Features Grid */}
          {vehicle.features.length > 8 && (
            <div className="mt-5 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-gray-100">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D62B2B]" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#D62B2B]">
                  All Features &amp; Highlights
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {vehicle.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-50/70 hover:bg-red-50/40 transition-colors border border-gray-100">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#D62B2B] flex items-center justify-center">
                      <FaCheck size={8} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-800 font-semibold leading-snug">{feature}</span>
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
        <div className="bg-[#f9fafb] border-b border-gray-200 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-[2.5px] bg-[#D62B2B]" />
                <h2 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#1a1a1a]">
                  Also in {vehicle.category}
                </h2>
              </div>
              <Link 
                href="/vehicles" 
                className="text-xs font-bold text-[#D62B2B] hover:text-[#b01e1e] flex items-center gap-1 uppercase tracking-wider transition-colors"
              >
                View Full Range <FaChevronRight size={10} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => {
                const price = v.price?.unitPrice ?? v.price?.chassisPrice;
                return (
                  <Link
                    key={v.id}
                    href={`/vehicles/${v.id}`}
                    className="group bg-white rounded-xl border border-gray-200/80 hover:border-[#D62B2B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden shadow-xs"
                  >
                    {/* Vehicle Image Stage */}
                    <div className="relative aspect-[16/10] bg-gradient-to-b from-gray-50 to-white p-4 overflow-hidden">
                      <Image 
                        src={v.heroImage} 
                        alt={v.title} 
                        fill 
                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" 
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[9px] font-black text-[#D62B2B] uppercase tracking-widest shadow-xs border border-gray-100">
                        {v.category}
                      </div>
                      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-widest text-white shadow-xs ${
                        v.availability === 'Order Only' ? 'bg-amber-500' :
                        v.availability === 'Limited Stock' ? 'bg-orange-500' :
                        'bg-green-600'
                      }`}>
                        {v.availability || 'In Stock'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1 border-t border-gray-100 bg-white">
                      <h3 className="text-sm font-black text-[#1a1a1a] uppercase mb-1.5 group-hover:text-[#D62B2B] transition-colors line-clamp-1">
                        {v.title}
                      </h3>
                      <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                        {v.description}
                      </p>

                      {/* Quick Specs Badges */}
                      <div className="grid grid-cols-2 gap-2 mb-4 mt-auto">
                        <div className="bg-gray-50 rounded-md px-2.5 py-1.5 border border-gray-100/80">
                          <span className="block text-[8.5px] font-bold text-gray-400 uppercase tracking-wider">Engine</span>
                          <span className="block text-xs font-black text-[#1a1a1a] truncate">{v.quickSpecs.engine}</span>
                        </div>
                        <div className="bg-gray-50 rounded-md px-2.5 py-1.5 border border-gray-100/80">
                          <span className="block text-[8.5px] font-bold text-gray-400 uppercase tracking-wider">Transmission</span>
                          <span className="block text-xs font-black text-[#1a1a1a] truncate">{v.quickSpecs.transmission}</span>
                        </div>
                      </div>

                      {/* Bottom Price & View CTA */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        {price ? (
                          <div>
                            <span className="text-[8.5px] text-gray-400 font-bold uppercase tracking-wider block">From</span>
                            <span className="text-xs sm:text-sm font-black text-[#D62B2B] tabular-nums">{price}</span>
                          </div>
                        ) : (
                          <span className="text-[10px] text-gray-400 font-bold uppercase">Price On Enquiry</span>
                        )}
                        <span className="text-xs font-bold text-gray-700 group-hover:text-[#D62B2B] flex items-center gap-1 transition-colors">
                          View Details <FaChevronRight size={10} className="transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
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

const SpecRow = ({ label, value }: { label: string; value?: string }) => {
  if (!value || value.toUpperCase() === "TBA" || value === "N/A") return null;
  return (
    <div className="flex justify-between items-center py-2.5 px-4 sm:px-5 hover:bg-gray-50/70 transition-colors gap-4">
      <span className="text-[10.5px] text-gray-400 font-bold uppercase tracking-wider flex-shrink-0">{label}</span>
      <span className="text-xs font-bold text-[#1a1a1a] text-right leading-snug">{value}</span>
    </div>
  );
};
