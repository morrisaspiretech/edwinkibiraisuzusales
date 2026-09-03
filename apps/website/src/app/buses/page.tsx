import { Metadata } from "next";
import Link from "next/link";
import { FaBus, FaGraduationCap, FaUsers, FaRoad, FaShieldAlt, FaPhoneAlt, FaFileInvoiceDollar } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Isuzu Buses Kenya | 25, 33, 50 & 67 Seater School & PSV Buses",
  description: "Authorized dealer for Isuzu Buses in Kenya. Complete specs & financing for 25-seater (NMR/NPS), 33-seater (NQR/FRR90), 50-seater and 67-seater school buses, PSV matatus, and executive staff shuttles.",
  keywords: [
    "Isuzu bus Kenya", "Isuzu school bus Kenya", "Isuzu PSV bus Kenya", "Isuzu 33 seater price Kenya",
    "Isuzu FRR bus Kenya", "Isuzu NQR bus", "Isuzu 50 seater bus", "Isuzu 67 seater bus",
    "Isuzu bus body building Kenya", "Isuzu bus financing Kenya", "Isuzu matatu price Kenya"
  ],
  alternates: {
    canonical: "/buses",
  },
};

export default function BusesHub() {
  const busCategories = [
    {
      seats: "25 - 29 Seater",
      chassis: "Isuzu NMR 85H / NPS 81H (4x4)",
      engine: "4JJ1 / 4HK1-TCN Turbo Diesel",
      power: "130 HP - 150 HP",
      useCase: "Hotel shuttles, luxury private charters, primary school mini-buses, remote tour transfers (4WD).",
      features: "High maneuverability in tight estate streets, lower initial investment, low fuel consumption.",
    },
    {
      seats: "31 - 33 Seater (Kenya's #1 Choice)",
      chassis: "Isuzu NQR 81K / Isuzu FRR 90 Bus Chassis",
      engine: "4HK1-TCC (5.2L Turbo Intercooled)",
      power: "190 HP @ 2,600 rpm | 510 Nm Torque",
      useCase: "Standard Kenya school bus, urban PSV matatus (Nairobi CBD & suburban routes), staff corporate shuttles.",
      features: "Robust rear air brakes or hydraulic assist, heavy leaf springs built for rough terrain, high resale value.",
    },
    {
      seats: "45 - 51 Seater",
      chassis: "Isuzu FVR 34S / FVR 90 Bus Chassis",
      engine: "6HK1-TCN 7.8L 6-Cylinder Heavy Diesel",
      power: "240 HP @ 2,400 rpm | 706 Nm",
      useCase: "Secondary schools & colleges, inter-county transport, corporate staff fleets, faith-based organizations.",
      features: "Extra underfloor luggage space, heavy-duty chassis rails, dual circuit air brakes with ABS.",
    },
    {
      seats: "62 - 67 Seater (Heavy Capacity)",
      chassis: "Isuzu FVR 34 Bus / Heavy Inter-City Chassis",
      engine: "6HK1-TCS Heavy Commercial Powertrain",
      power: "240 HP - 280 HP",
      useCase: "Large national boarding schools, universities, mass PSV long-distance routes (Nairobi - Western - Coast).",
      features: "Maximum passenger earning capacity per trip, heavy-duty suspension, speed governor ready, NTSA compliant.",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#1a1a1a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-neutral-900 text-white py-20 px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <span className="text-white/80 font-bold tracking-widest text-xs uppercase mb-3 block">
            National Transport & Safety Authority (NTSA) Ready
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
            Isuzu Buses in Kenya <span className="text-yellow-400 block">25, 33, 50 & 67 Seater Chassis</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
            The undisputed market leader in Kenyan passenger transport. Powered by high-torque Isuzu commercial engines and built in partnership with Kenya&apos;s most accredited bus body fabricators.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-quote?category=Isuzu+Bus"
              className="bg-black hover:bg-neutral-800 text-white font-bold text-sm uppercase px-8 py-3.5 rounded shadow-lg transition-all"
            >
              Get Bus Quotation
            </Link>
            <Link
              href="/loan-calculator"
              className="bg-white hover:bg-gray-100 text-red-800 font-bold text-sm uppercase px-8 py-3.5 rounded shadow-lg transition-all"
            >
              Calculate School / PSV Finance
            </Link>
          </div>
        </div>
      </section>

      {/* Capacity Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Seating Configurations</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mt-1">
            Choose Your Bus Capacity
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Every bus chassis is tailored for durability on Kenyan asphalt and murram roads, paired with full factory warranties and genuine spare parts availability nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {busCategories.map((bus, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-8 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-red-600 transition">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-red-600 text-white font-black text-sm px-3.5 py-1 rounded-full">
                  {bus.seats}
                </span>
                <span className="text-xs font-bold text-gray-500">{bus.power}</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">{bus.chassis}</h3>
              <p className="text-xs text-red-700 font-semibold mb-4">Engine: {bus.engine}</p>
              
              <div className="space-y-3 text-xs text-gray-700 border-t border-gray-200 pt-4 mb-6">
                <div>
                  <strong className="text-gray-900 block mb-0.5">Primary Applications:</strong>
                  {bus.useCase}
                </div>
                <div>
                  <strong className="text-gray-900 block mb-0.5">Engineering Highlights:</strong>
                  {bus.features}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/get-quote?model=${encodeURIComponent(bus.chassis)}`}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-center text-xs py-2.5 rounded transition"
                >
                  Request Proforma Invoice
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2.5 border border-gray-300 hover:bg-gray-100 text-xs font-semibold rounded text-gray-700 transition"
                >
                  Enquire Body Spec
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* School Bus Special Scheme */}
      <section className="py-16 px-6 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded text-xs font-black uppercase mb-3">
              <FaGraduationCap size={16} /> Kenya School Bus Financing Program
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900">
              Special Institutional Finance For Schools & Churches
            </h2>
            <p className="text-sm md:text-base text-gray-700 mt-3 leading-relaxed">
              We partner with Co-operative Bank, Equity Bank, KCB, and NCBA to offer termly installment repayment plans tailored to school calendar fees collections. Get up to 95% asset financing with extended repayment tenures of up to 60 months.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-gray-800 font-semibold">
              <li>✓ Termly payment holidays aligned with school fee collections</li>
              <li>✓ Standard NTSA safety package: 3-point seatbelts, speed governors, emergency exits</li>
              <li>✓ High-visibility yellow exterior coating complying with Ministry of Transport guidelines</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-300 min-w-[300px] text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Speak With An Institutional Bus Manager</h3>
            <p className="text-xs text-gray-600 mb-6">Receive proforma invoices for school board and ministry approval within 2 hours.</p>
            <a
              href="tel:+254768351483"
              className="block bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-6 rounded shadow transition mb-2"
            >
              Call 0768 351 483
            </a>
            <a
              href="https://wa.me/254768351483?text=Hello%20Edwin,%20I%20would%20like%20a%20quotation%20for%20a%20School%20Bus"
              target="_blank"
              rel="noreferrer"
              className="block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-6 rounded shadow transition"
            >
              WhatsApp School Desk
            </a>
          </div>
        </div>
      </section>

      {/* Sacco / PSV Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest">Public Service Vehicles</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 mt-2">
              PSV Sacco & Matatu Fleet Solutions
            </h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Why do over 70% of Kenyan Matatu Saccos (Super Metro, 2NK, Lopha, Embassava, Metro Trans) rely on the Isuzu FRR and NQR?
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-lg">01.</span>
                <div>
                  <strong className="text-sm text-gray-900 block">Lowest Operating Cost Per Passenger-Km</strong>
                  <span className="text-xs text-gray-600">The 4HK1 common-rail engine delivers optimal fuel returns even in severe stop-and-go Nairobi city traffic.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-lg">02.</span>
                <div>
                  <strong className="text-sm text-gray-900 block">Highest Resale Value in East Africa</strong>
                  <span className="text-xs text-gray-600">An Isuzu FRR or NQR maintains over 65% of its initial purchase value even after 5 years of commercial PSV service.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 font-black text-lg">03.</span>
                <div>
                  <strong className="text-sm text-gray-900 block">Spare Parts Readily Available Everywhere</strong>
                  <span className="text-xs text-gray-600">From Nairobi to Lodwar, Kisumu to Mombasa, genuine consumables (filters, brake linings, clutch kits) are available off-the-shelf.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-black uppercase mb-3">Certified Bus Fabricators</h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              We coordinate end-to-end fabrication with Kenya&apos;s leading NTSA-certified builders:
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-200 mb-8">
              <div className="bg-white/10 p-3 rounded text-center">Labh Singh Harnam Singh (LSHS)</div>
              <div className="bg-white/10 p-3 rounded text-center">Banbros Coachbuilders</div>
              <div className="bg-white/10 p-3 rounded text-center">Mastermind Coachbuilders</div>
              <div className="bg-white/10 p-3 rounded text-center">Central Motor Service</div>
            </div>
            <Link
              href="/contact"
              className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase py-3.5 rounded transition"
            >
              Order Complete Turnkey Bus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
