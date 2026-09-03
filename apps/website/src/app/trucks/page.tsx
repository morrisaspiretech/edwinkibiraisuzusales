import { Metadata } from "next";
import Link from "next/link";
import { FaTruck, FaIndustry, FaCogs, FaGasPump, FaCheckCircle, FaPhoneAlt, FaFileAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Isuzu Trucks Kenya | N-Series, F-Series & GXZ Commercial Trucks",
  description: "Official specs & price guide for Isuzu Trucks in Kenya. NLR77E, NMR85H, NQR81K, NQR Xtra, NPS81H, FRR90N, FVR90, FTS, FVZ Tipper/Cargo and GXZ heavy haulage.",
  keywords: [
    "Isuzu trucks Kenya", "Isuzu commercial vehicles Kenya", "Isuzu N-Series Kenya", "Isuzu F-Series Kenya",
    "Isuzu FRR90 price Kenya", "Isuzu NQR81K", "Isuzu NMR85H", "Isuzu NLR77E", "Isuzu FVR90L", "Isuzu FVZ34N Tipper",
    "Isuzu GXZ prime mover Kenya", "Isuzu truck financing Kenya", "Isuzu tipper Kenya", "Isuzu refrigerated truck"
  ],
  alternates: {
    canonical: "/trucks",
  },
};

export default function TrucksHub() {
  const lightDuty = [
    {
      model: "Isuzu NLR 77 E",
      category: "Light Duty (N-Series)",
      engine: "4JH1-TC 3.0L Turbo Diesel",
      power: "130 HP @ 2,800 rpm | 380 Nm",
      gvw: "4,500 kg (4.5 Ton)",
      payload: "Approx 2.5 - 3.0 Ton",
      transmission: "5-Speed Manual (MYY5T)",
      idealFor: "Urban courier, bakery, FMCG distribution, narrow city access",
    },
    {
      model: "Isuzu NMR 85 H",
      category: "Light Duty (N-Series)",
      engine: "4JJ1-TC 3.0L Common Rail",
      power: "130 HP @ 2,800 rpm | 380 Nm",
      gvw: "5,500 kg (5.5 Ton)",
      payload: "Approx 3.5 Ton",
      transmission: "5-Speed Manual",
      idealFor: "Supermarket logistics, furniture transport, medium urban deliveries",
    },
    {
      model: "Isuzu NQR 81 K",
      category: "Light-to-Medium Duty (N-Series)",
      engine: "4HK1-TCN 5.2L Turbo Intercooled",
      power: "150 HP @ 2,600 rpm | 404 Nm",
      gvw: "8,500 kg (8.5 Ton)",
      payload: "Approx 5.5 - 6.0 Ton",
      transmission: "6-Speed Manual (MYY6S)",
      idealFor: "Hardware cargo, beverage distribution, medium box body logistics",
    },
    {
      model: "Isuzu NQR Xtra Long",
      category: "High Volume Light Duty",
      engine: "4HK1-TCN 5.2L Turbo Intercooled",
      power: "150 HP @ 2,600 rpm | 404 Nm",
      gvw: "9,000 kg (9.0 Ton)",
      payload: "Approx 6.0 Ton (Extended Deck)",
      transmission: "6-Speed Manual",
      idealFor: "High volume, low density goods (mattresses, plastics, agricultural cartons)",
    },
    {
      model: "Isuzu NPS 81 H (4x4)",
      category: "All-Terrain 4WD Truck",
      engine: "4HK1-TCN 5.2L Turbo Diesel",
      power: "150 HP @ 2,600 rpm | 404 Nm",
      gvw: "7,500 kg (7.5 Ton 4x4)",
      payload: "Approx 4.5 Ton Off-Road",
      transmission: "5-Speed Manual with High/Low Transfer Case",
      idealFor: "Remote telecoms maintenance, power lines, NGO desert relief, safari support",
    },
  ];

  const mediumHeavyDuty = [
    {
      model: "Isuzu FRR 90 N",
      category: "Medium Duty King (F-Series)",
      engine: "4HK1-TCC 5.2L Turbo Intercooled",
      power: "190 HP @ 2,600 rpm | 510 Nm",
      gvw: "11,000 kg (11.0 Ton)",
      payload: "Approx 7.0 - 8.0 Ton",
      transmission: "6-Speed Manual (MZW6P)",
      idealFor: "Inter-county long haul, grain transport, 33-seater bus chassis, general cargo",
    },
    {
      model: "Isuzu FVR 90 L / P",
      category: "Heavy Medium Duty (4x2)",
      engine: "6HK1-TCN 7.8L 6-Cylinder Diesel",
      power: "240 HP @ 2,400 rpm | 706 Nm",
      gvw: "15,000 kg - 18,000 kg",
      payload: "Approx 10.0 - 12.0 Ton",
      transmission: "6-Speed Manual",
      idealFor: "Heavy bulk cargo, medium fuel tankers, flatbeds with crane",
    },
    {
      model: "Isuzu FTS 34 K / L (4x4)",
      category: "Severe-Duty 4WD Heavy Truck",
      engine: "6HK1-TCN 7.8L 6-Cylinder Turbo",
      power: "240 HP @ 2,400 rpm | 706 Nm",
      gvw: "14,000 kg (4x4 Heavy)",
      payload: "Approx 8.0 Ton Severe Duty",
      transmission: "6-Speed Manual with 4x4 Transfer Case",
      idealFor: "Military, disaster response, unpaved mining & drilling corridors",
    },
    {
      model: "Isuzu FVZ 34 N Tipper",
      category: "Heavy Tipper Chassis (6x4)",
      engine: "6HK1-TCS 7.8L Heavy Duty Turbo",
      power: "280 HP @ 2,400 rpm | 882 Nm",
      gvw: "26,000 kg (26.0 Ton)",
      payload: "Approx 16.0 - 18.0 Ton (10-14 CBM)",
      transmission: "9-Speed Manual (ZF / Isuzu)",
      idealFor: "Quarries, sand harvesting, road construction, heavy ballast transport",
    },
    {
      model: "Isuzu FVZ 34 T Cargo",
      category: "Heavy Long-Wheelbase Cargo (6x4)",
      engine: "6HK1-TCS 7.8L 6-Cylinder Turbo",
      power: "280 HP @ 2,400 rpm | 882 Nm",
      gvw: "26,000 kg (26.0 Ton)",
      payload: "Approx 16.0 - 18.0 Ton",
      transmission: "9-Speed Manual",
      idealFor: "Heavy agricultural haulage (tea, coffee, sugarcane), drop side and container chassis",
    },
    {
      model: "Isuzu GXZ Prime Mover",
      category: "Extra Heavy Commercial (6x4 Tractor)",
      engine: "6UZ1-TCN 9.8L or 6WG1 15.6L Heavy Industrial",
      power: "360 HP - 420 HP | 1,422+ Nm",
      gvw: "Up to 50,000 kg Gross Combination Mass (GCM)",
      payload: "Semi-trailer heavy container haulage",
      transmission: "9 to 16-Speed Heavy Haulage Manual",
      idealFor: "Mombasa-to-Malaba corridor, container freight stations, cross-border transit",
    },
  ];

  const applications = [
    { name: "Box Body & Courier", desc: "Dry freight transport with aerodynamic cab fairings and security roller shutters." },
    { name: "Refrigerated (Cold Chain)", desc: "Insulated polyurethane panels with Carrier or Thermo King refrigeration units down to -20°C." },
    { name: "Hydraulic Tipper", desc: "Hardox reinforced steel dump bodies for aggregate, ballast, sand, and excavation." },
    { name: "Fuel & Water Bowser", desc: "Epoxy-lined potable water tanks or multi-compartment certified petroleum tanks." },
    { name: "Dropside & Flatbed", desc: "Heavy hardwood or high-tensile steel folding dropsides for general open freight." },
    { name: "Curtainsider", desc: "Fast-loading tautliner bodies optimized for beverage crates and palletized distribution." },
  ];

  return (
    <div className="bg-white min-h-screen text-[#1a1a1a]">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-black text-white py-20 px-6 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-500 font-black tracking-widest text-xs uppercase mb-3 block">
            Authorized Dealer • Kenya & East Africa
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Isuzu Commercial Trucks <span className="text-red-500 block">N-Series, F-Series & GXZ</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            From 4.5-ton inner-city distribution vans to 26-ton heavy-duty construction tippers and cross-border 6x4 prime movers. Edwin Kibira Isuzu Sales supplies Kenya&apos;s leading logistics, manufacturing, and agricultural transport operators.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-quote"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase px-8 py-3.5 rounded shadow-lg transition-all"
            >
              Request Price List & Quotation
            </Link>
            <Link
              href="/loan-calculator"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase px-8 py-3.5 rounded border border-white/20 transition-all"
            >
              Asset Financing Options (Up to 95%)
            </Link>
          </div>
        </div>
      </section>

      {/* Model Spec Section: Light Duty */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="border-b pb-4 mb-10">
          <span className="text-red-600 font-bold text-xs uppercase tracking-wider">Payload 2.5T to 6.0T</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mt-1">
            Isuzu N-Series (Light Duty / Elf)
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Engineered with high-torque common-rail engines, high agility, and the lowest cost per kilometer in urban logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lightDuty.map((truck, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-gray-900">{truck.model}</h3>
                <span className="bg-red-100 text-red-700 font-bold text-[11px] px-2.5 py-1 rounded">
                  {truck.gvw}
                </span>
              </div>
              <p className="text-xs text-red-600 font-semibold mb-4">{truck.category}</p>

              <div className="space-y-2 text-xs text-gray-700 border-t border-gray-200 pt-3 mb-4">
                <div><strong>Engine:</strong> {truck.engine}</div>
                <div><strong>Power & Torque:</strong> {truck.power}</div>
                <div><strong>Typical Payload:</strong> {truck.payload}</div>
                <div><strong>Gearbox:</strong> {truck.transmission}</div>
                <div className="pt-2 text-gray-600 italic">
                  <strong>Best for:</strong> {truck.idealFor}
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-3 border-t border-gray-200">
                <Link
                  href={`/get-quote?model=${encodeURIComponent(truck.model)}`}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-center text-xs py-2 rounded transition"
                >
                  Get Quote
                </Link>
                <Link
                  href="/book-test-drive"
                  className="px-3 py-2 border border-gray-300 hover:bg-white text-xs font-semibold rounded text-gray-700 transition"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Model Spec Section: Medium & Heavy Duty */}
      <section className="py-16 px-6 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="border-b pb-4 mb-10">
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">Payload 7.0T to 26.0T+</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mt-1">
              Isuzu F-Series & GXZ (Medium, Heavy & Prime Mover)
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              The backbone of Kenya&apos;s commercial economy. Legendary Isuzu 6HK1 and 6UZ1 powertrains built for millions of heavy duty kilometers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumHeavyDuty.map((truck, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-black text-gray-900">{truck.model}</h3>
                  <span className="bg-neutral-900 text-white font-bold text-[11px] px-2.5 py-1 rounded">
                    {truck.gvw}
                  </span>
                </div>
                <p className="text-xs text-red-600 font-semibold mb-4">{truck.category}</p>

                <div className="space-y-2 text-xs text-gray-700 border-t border-gray-200 pt-3 mb-4">
                  <div><strong>Engine:</strong> {truck.engine}</div>
                  <div><strong>Power & Torque:</strong> {truck.power}</div>
                  <div><strong>Net Payload Capacity:</strong> {truck.payload}</div>
                  <div><strong>Transmission:</strong> {truck.transmission}</div>
                  <div className="pt-2 text-gray-600 italic">
                    <strong>Commercial Role:</strong> {truck.idealFor}
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-3 border-t border-gray-200">
                  <Link
                    href={`/get-quote?model=${encodeURIComponent(truck.model)}`}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-center text-xs py-2 rounded transition"
                  >
                    Request Proforma
                  </Link>
                  <Link
                    href="/loan-calculator"
                    className="px-3 py-2 border border-gray-300 hover:bg-gray-100 text-xs font-semibold rounded text-gray-700 transition"
                  >
                    Finance
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Building Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Custom Fabrications</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 mt-2">
            Isuzu Certified Truck Body Building
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3">
            We partner with Kenya&apos;s certified body builders (Labh Singh Harnam Singh - LSHS, Banbros, Mastermind, Central Motor Service) to deliver turnkey commercial solutions directly to your premises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-red-500 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{app.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-red-50 border border-red-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-red-900 uppercase">Need A Custom Body Built For Your Operation?</h3>
            <p className="text-sm text-red-800 mt-1 max-w-2xl">
              From hydraulic tail-lifts to crane attachments, fuel calibration tanks, and mining dump beds, our technical engineers prepare complete chassis-to-body compliance drawings.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase px-8 py-3.5 rounded shadow-lg whitespace-nowrap transition"
          >
            Consult Fleet Engineer
          </Link>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="bg-neutral-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-black uppercase">Speak With Edwin Kibira — Isuzu Truck Specialist</h2>
            <p className="text-gray-400 text-sm mt-2">Enterprise Road, Industrial Area, Nairobi. Fleet delivery available across all 47 counties in Kenya.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:+254768351483"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3.5 rounded transition"
            >
              <FaPhoneAlt /> Call 0768 351 483
            </a>
            <a
              href="https://wa.me/254768351483?text=Hello%20Edwin,%20I%20am%20interested%20in%20an%20Isuzu%20Truck"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded transition"
            >
              WhatsApp Commercial Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
