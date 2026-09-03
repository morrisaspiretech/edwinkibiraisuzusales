import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt, FaSuitcase, FaMountain, FaChild } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Isuzu mu-X Kenya | 7-Seater Family SUV Price & Specs",
  description: "Discover the Isuzu mu-X 7-seater SUV in Kenya. Compare the 1.9L and 3.0L engines, 4x2 vs 4x4, safety features, towing capacity and off-road capability.",
  keywords: [
    "Isuzu mu-X Kenya", "Isuzu mu-X price Kenya", "Isuzu mu-X for sale",
    "Isuzu mu-X SUV Kenya", "Isuzu mu-X 3.0", "Isuzu mu-X 1.9",
    "Isuzu mu-X 4x4", "Isuzu mu-X 4x2", "Isuzu mu-X seven seater",
    "family SUV Kenya", "Isuzu mu-X specifications", "Isuzu mu-X interior",
    "Isuzu mu-X safety features"
  ],
  alternates: {
    canonical: "/vehicles/mu-x",
  },
};

export default function MuXHub() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight text-white">
              Isuzu mu-X <span className="text-red-600 block">Go Your Own Way.</span>
            </h1>
            <p className="text-xl font-light text-gray-300 mb-8">
              The ultimate 7-seater family SUV. Combining D-MAX commercial toughness with executive luxury, advanced safety features, and unparalleled off-road capability.
            </p>
            <div className="flex gap-4">
              <Link href="/book-test-drive" className="bg-red-600 text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition">Test Drive</Link>
              <Link href="/get-quote" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-black transition">Get Price</Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px]">
            {/* Using hero-car.png as placeholder */}
            <Image src="/hero-car.png" alt="Isuzu mu-X SUV" fill className="object-contain" priority />
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="bg-gray-100 border-b border-gray-200 sticky top-0 z-40 overflow-x-auto whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 text-sm font-bold uppercase tracking-wider text-gray-600">
          <a href="#engines" className="hover:text-red-600">1.9L vs 3.0L Engines</a>
          <a href="#interior" className="hover:text-red-600">7-Seater Comfort</a>
          <a href="#safety" className="hover:text-red-600">Safety & ADAS</a>
          <a href="#capability" className="hover:text-red-600">Off-Road & Towing</a>
        </div>
      </nav>

      {/* Engines */}
      <section id="engines" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Power</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Available in both 4x2 and 4x4 configurations, the mu-X offers two exceptional turbo-diesel powertrains.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-red-600 mb-2">1.9L RZ4E-TC</h3>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">The Efficiency Master</h4>
            <p className="text-gray-600 mb-6">Perfect for urban commuting, executive transport, and school runs. This advanced lightweight engine delivers incredible fuel economy while still producing 110kW of power and 350Nm of torque.</p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>✓ Exceptional fuel consumption</li>
              <li>✓ Lower emissions</li>
              <li>✓ Smooth 6-speed automatic</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-red-600 mb-2">3.0L 4JJ3-TCX</h3>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">The Safari Powerhouse</h4>
            <p className="text-gray-600 mb-6">Built for cross-country touring, heavy towing, and steep off-road inclines. Derived from Isuzu's commercial trucks, this 140kW / 450Nm engine is virtually indestructible.</p>
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li>✓ Massive low-end torque</li>
              <li>✓ 3,500kg towing capacity</li>
              <li>✓ Built for severe off-road use</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lifestyle & Interior */}
      <section id="interior" className="py-20 px-6 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">Built For Every Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaChild className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Family Comfort</h3>
              <p className="text-gray-400">True 7-seater capability. The mu-X features tiered seating ensuring even the 3rd row has excellent visibility. Roof-mounted air conditioning vents keep every passenger cool on hot Kenyan safaris.</p>
            </div>
            <div className="text-center">
              <FaSuitcase className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Executive Luxury</h3>
              <p className="text-gray-400">Premium leather interiors, 8-way power-adjustable driver's seat, ambient lighting, and a massive 9-inch infotainment system with wireless Apple CarPlay and Android Auto.</p>
            </div>
            <div className="text-center">
              <FaMountain className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Safari Ready</h3>
              <p className="text-gray-400">Fold down the 2nd and 3rd rows for a cavernous flat cargo area. Perfect for loading camping gear, sports equipment, or luggage for long cross-country tours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & ADAS */}
      <section id="safety" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">5-Star Safety (ADAS)</h2>
            <p className="text-lg text-gray-600 mb-6">The Isuzu mu-X features Isuzu's Intelligent Driver Assistance System (IDAS), making it one of the safest SUVs on Kenyan roads.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaShieldAlt className="text-red-600 mt-1 text-xl" />
                <div>
                  <strong className="block text-gray-900">Autonomous Emergency Braking (AEB)</strong>
                  <span className="text-gray-600">Automatically applies brakes if a potential collision is detected.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaShieldAlt className="text-red-600 mt-1 text-xl" />
                <div>
                  <strong className="block text-gray-900">Blind Spot Monitoring (BSM)</strong>
                  <span className="text-gray-600">Alerts you to vehicles in your blind spot, crucial for highway driving.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaShieldAlt className="text-red-600 mt-1 text-xl" />
                <div>
                  <strong className="block text-gray-900">Adaptive Cruise Control</strong>
                  <span className="text-gray-600">Maintains a set distance from the vehicle ahead, reducing driver fatigue on long journeys.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-8 rounded-xl border border-red-100">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Robust Foundation</h3>
            <p className="text-gray-700 mb-4">Underneath the luxury is a rugged ladder-frame chassis with extensive underbody protection. The mu-X features an 80-litre fuel tank for exceptional range, making it ideal for traversing East Africa.</p>
            <p className="text-gray-700 font-bold">Wading Depth: 800mm</p>
            <p className="text-gray-700 font-bold">Ground Clearance: 235mm</p>
          </div>
        </div>
      </section>

      {/* Financing CTA */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-6">Drive Away in a mu-X Today</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          We offer flexible asset financing, trade-in options, and comprehensive insurance packages for corporate fleets and families.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/loan-calculator" className="bg-red-600 text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-red-700 transition">
            Calculate Finance
          </Link>
          <Link href="/contact" className="bg-white border-2 border-red-600 text-red-600 font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-50 transition">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
