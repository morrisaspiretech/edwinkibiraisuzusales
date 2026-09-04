import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaTools, FaTractor, FaShieldAlt, FaGasPump } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Isuzu D-MAX Kenya | Price, Specs, Single & Double Cab For Sale",
  description: "Explore the new Isuzu D-MAX in Kenya. Comprehensive guide on D-MAX Single Cab, Double Cab, 4x4, payload, fuel consumption, and accessories at Edwin Kibira Isuzu Sales.",
  keywords: [
    "Isuzu D-MAX Kenya", "Isuzu D-Max price Kenya", "Isuzu D-Max for sale Kenya",
    "new Isuzu D-Max Kenya", "Isuzu D-Max pickup", "Isuzu D-Max single cab",
    "Isuzu D-Max double cab", "Isuzu D-Max 4x4", "Isuzu D-Max 4x2", "Isuzu D-Max diesel",
    "Isuzu D-Max specifications", "Isuzu D-Max payload", "Isuzu D-Max fuel consumption",
    "D-MAX vs Toyota Hilux", "Isuzu D-Max accessories", "Isuzu D-Max financing"
  ],
  alternates: {
    canonical: "/vehicles/d-max",
  },
};

export default function DMaxHub() {
  const models = [
    { name: "D-MAX Single Cab 4x2", use: "Urban deliveries, light commercial", payload: "1,150 kg", engine: "1.9L / 2.5L Turbo Diesel" },
    { name: "D-MAX Single Cab 4x4", use: "Farming, construction, off-road cargo", payload: "1,100 kg", engine: "3.0L Turbo Diesel (4JJ3)" },
    { name: "D-MAX Double Cab 4x2", use: "Family & business hybrid, fleet supervisors", payload: "1,050 kg", engine: "1.9L / 2.5L Turbo Diesel" },
    { name: "D-MAX Double Cab 4x4", use: "Extreme off-road, premium lifestyle, NGOs", payload: "1,000 kg", engine: "3.0L Turbo Diesel (4JJ3)" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight text-white">
              Isuzu D-MAX <span className="text-red-600 block">Unbreakable.</span>
            </h1>
            <p className="text-xl font-light text-gray-300 mb-8">
              The ultimate 1-ton pickup in Kenya. Whether for farming, construction, NGO fleet use, or extreme off-roading, the D-MAX is engineered for unmatched durability and payload capacity.
            </p>
            <div className="flex gap-4">
              <Link href="/book-test-drive" className="bg-red-600 text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition">Test Drive</Link>
              <Link href="/get-quote" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-black transition">Get Price</Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px]">
            {/* Using an actual D-Max image instead of the AI placeholder */}
            <Image src="/vehicles/grouped/batch3/3.jpeg" alt="Isuzu D-MAX Double Cab" fill className="object-contain" priority />
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="bg-gray-100 border-b border-gray-200 sticky top-0 z-40 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-600">
          <a href="#models" className="hover:text-red-600">Single & Double Cab</a>
          <a href="#applications" className="hover:text-red-600">Industry Applications</a>
          <a href="#specs" className="hover:text-red-600">Specs & Payload</a>
          <a href="#comparisons" className="hover:text-red-600">Hilux / Ranger Comparison</a>
          <a href="#financing" className="hover:text-red-600">Financing</a>
        </div>
      </nav>

      {/* Overview & Models */}
      <section id="models" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">The D-MAX Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From spartan workhorses to luxurious off-road warriors, there is a D-MAX configuration for every Kenyan requirement.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-red-600 mb-2">{model.name}</h3>
              <p className="text-sm font-medium text-gray-800 mb-4">{model.use}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-bold">Engine:</span> {model.engine}</p>
                <p><span className="font-bold">Payload:</span> {model.payload}</p>
                <p><span className="font-bold">Transmission:</span> Manual / Auto</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20 px-6 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Built For Your Industry</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <FaTractor className="text-4xl text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Farming & Agriculture</h3>
              <p className="text-gray-400">With 800mm wading depth, high ground clearance, and a massive 1+ ton payload, the D-MAX Single Cab 4x4 is the undisputed king of Kenyan farms, easily navigating muddy access roads while carrying heavy produce or inputs.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <FaShieldAlt className="text-4xl text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">NGOs & Government</h3>
              <p className="text-gray-400">Reliability in the harshest terrains is why NGOs trust the D-MAX Double Cab 4x4. Featuring a reinforced chassis, underbody protection, and long-range fuel capability for remote field missions in arid regions.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <FaTools className="text-4xl text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Construction & Fleet</h3>
              <p className="text-gray-400">Low Total Cost of Ownership (TCO). The Isuzu D-MAX requires minimal downtime. Fleet managers love the easily accessible service points and the bulletproof 4JJ3 engine that runs for millions of kilometers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Fuel */}
      <section id="specs" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">Technical Specifications</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <div>
                  <strong className="block text-gray-900">Fuel Consumption</strong>
                  <span className="text-gray-600">Averaging 7.5L to 8.5L per 100km (depending on engine and payload). The aerodynamic design and advanced common-rail injection make it incredibly efficient.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <div>
                  <strong className="block text-gray-900">Towing Capacity</strong>
                  <span className="text-gray-600">Up to 3,500 kg braked towing capacity for the 3.0L 4x4 models, featuring Trailer Sway Control (TSC) for safety.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-red-600 mt-1" />
                <div>
                  <strong className="block text-gray-900">Ground Clearance</strong>
                  <span className="text-gray-600">A towering 240mm of ground clearance ensures you never get stuck on rutted up-country roads.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 text-center">Accessories & Parts</h3>
            <p className="text-gray-600 mb-6 text-center">Customize your D-MAX directly at Edwin Kibira Isuzu Sales with genuine accessories that don't void your warranty.</p>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold text-gray-800">
              <div className="bg-white p-3 text-center border rounded shadow-sm">Canopies & Tonneau Covers</div>
              <div className="bg-white p-3 text-center border rounded shadow-sm">Bull Bars & Nudge Bars</div>
              <div className="bg-white p-3 text-center border rounded shadow-sm">Snorkels & Off-road Kits</div>
              <div className="bg-white p-3 text-center border rounded shadow-sm">Bed Liners & Roll Bars</div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/contact" className="text-red-600 font-bold hover:underline">Enquire about genuine spare parts →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section id="comparisons" className="py-20 px-6 bg-gray-50 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-12 text-center">D-MAX Competitor Comparison</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">D-MAX vs Toyota Hilux</h3>
              <p className="text-gray-600 mb-4">
                Both are legendary pickups in Kenya. While the Hilux is renowned globally, the Isuzu D-MAX has distinct commercial advantages. The D-MAX utilizes an engine block derived directly from Isuzu's heavy-duty N-Series trucks, giving it unmatched longevity and low-end torque. Furthermore, the D-MAX often offers a slightly larger load box dimensions in the single cab format compared to the Hilux.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">D-MAX vs Ford Ranger</h3>
              <p className="text-gray-600 mb-4">
                The Ford Ranger leans heavily into passenger comfort and advanced tech features. However, for sheer durability, Total Cost of Ownership (TCO), and fuel economy in severe fleet applications, the Isuzu D-MAX remains the superior utilitarian choice. The D-MAX's simpler, over-engineered 3.0L turbo-diesel is preferred by mechanics across East Africa for its ease of maintenance.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">D-MAX vs Mitsubishi L200 (Triton)</h3>
              <p className="text-gray-600 mb-4">
                The L200 is agile and capable, but the D-MAX generally provides a higher payload capacity and a vastly superior dealer network across rural Kenya. When you are 500km from Nairobi, finding genuine Isuzu parts and qualified technicians is significantly easier than for Mitsubishi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-6">Finance Your Isuzu D-MAX</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Through Edwin Kibira Isuzu Sales, access competitive Asset Finance options from leading Kenyan banks. Get up to 95% financing with flexible repayment periods of up to 60 months.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/loan-calculator" className="bg-red-600 text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-red-700 transition">
            Use Loan Calculator
          </Link>
          <Link href="/get-quote" className="bg-white border-2 border-red-600 text-red-600 font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-50 transition">
            Request Official Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
