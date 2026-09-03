import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Ultimate Isuzu Guide: History, Specs & Global Sales | Edwin Kibira",
  description: "The most comprehensive Isuzu guide online. Explore Isuzu's history, global commercial vehicle lineup, engine specs (4JJ3, 4HK1), maintenance tips, and more.",
  keywords: [
    "Isuzu global", "Isuzu history", "Isuzu commercial vehicles", "Isuzu D-Max specs", "Isuzu mu-X", 
    "Isuzu N-Series", "Isuzu F-Series", "Isuzu 4JJ3 engine", "Isuzu 4HK1 engine", "Edwin Kibira Isuzu",
    "Isuzu trucks for sale", "International Isuzu dealer", "Isuzu payload capacity", "Genuine Isuzu parts"
  ],
  alternates: {
    canonical: "/ultimate-isuzu-guide",
  },
};

export default function UltimateIsuzuGuide() {
  const faqData = [
    {
      question: "Where are Isuzu vehicles manufactured?",
      answer: "Isuzu vehicles are primarily manufactured in Japan, with major production facilities in Fujisawa and Tochigi. However, Isuzu has a massive global footprint with assembly plants in countries like Thailand (a major hub for the D-Max), China, India, and Kenya, ensuring localized production for global markets."
    },
    {
      question: "What makes the Isuzu D-Max so reliable?",
      answer: "The Isuzu D-Max's legendary reliability stems from its commercial vehicle DNA. Unlike many competitors, the D-Max is built on a truck chassis and utilizes engines like the 3.0L 4JJ3-TCX, which are derived from heavy-duty commercial truck engines, designed for millions of kilometers of abuse."
    },
    {
      question: "What is the difference between Isuzu N-Series and F-Series?",
      answer: "The N-Series (Elf) represents Isuzu's light-duty truck range, perfect for urban deliveries, retail distribution, and lighter payloads. The F-Series (Forward) is the medium-duty range, designed for heavier payloads, longer inter-city hauls, and more demanding construction or logistical applications."
    },
    {
      question: "How often should I service my Isuzu truck?",
      answer: "Service intervals depend on the specific model, engine, and operating conditions. Generally, for commercial trucks operating in severe conditions, servicing every 10,000 to 15,000 kilometers is recommended. Always consult your owner's manual or an authorized dealer like Edwin Kibira Isuzu Sales for a tailored maintenance plan."
    },
    {
      question: "Are genuine Isuzu parts worth the cost?",
      answer: "Absolutely. Genuine Isuzu parts are engineered specifically for your vehicle, ensuring exact fitment, optimal performance, and longevity. Using aftermarket parts can lead to premature wear, reduced fuel efficiency, and potentially voiding your warranty."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-red-700 text-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">The Ultimate Isuzu Guide</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            From the origins of Japan's oldest automaker to the forefront of global commercial transport. Welcome to the most comprehensive encyclopedia of Isuzu vehicles, engines, and heritage.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('/hero-car.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-100 py-12 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="#history" className="text-red-600 font-semibold hover:underline">1. The History of Isuzu</a>
            <a href="#global-reach" className="text-red-600 font-semibold hover:underline">2. Isuzu's Global Reach</a>
            <a href="#engine-tech" className="text-red-600 font-semibold hover:underline">3. Legendary Engine Technology</a>
            <a href="#commercial-lineup" className="text-red-600 font-semibold hover:underline">4. Commercial Trucks (N & F Series)</a>
            <a href="#passenger-lineup" className="text-red-600 font-semibold hover:underline">5. Passenger Vehicles (D-Max & mu-X)</a>
            <a href="#maintenance" className="text-red-600 font-semibold hover:underline">6. Maintenance & Genuine Parts</a>
            <a href="#faq" className="text-red-600 font-semibold hover:underline">7. Frequently Asked Questions</a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24 text-gray-800">
        
        {/* History */}
        <section id="history" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">1. The History of Isuzu: A Century of Excellence</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Isuzu Motors Ltd., headquartered in Yokohama, Japan, holds the prestigious title of Japan's oldest automaker. The story began in 1916 when Tokyo Ishikawajima Shipbuilding and Engineering Co., Ltd. partnered with Tokyo Gas and Electric Industrial Co. to build automobiles.
            </p>
            <p>
              By 1922, they produced Japan's first domestically produced car, the Wolseley model A-9. The name "Isuzu" (meaning "fifty bells") was officially adopted in 1949, named after the Isuzu River that flows past the Grand Shrine of Ise, one of Japan's most sacred sites.
            </p>
            <p>
              Over the decades, Isuzu shifted its focus from passenger cars to becoming a global titan in commercial vehicles and diesel engine manufacturing. Their philosophy, "Trucks for Life," reflects a commitment to building durable, reliable, and efficient vehicles that drive the global economy forward. Today, Isuzu diesel engines are so respected that they are used by dozens of other manufacturers worldwide.
            </p>
          </div>
        </section>

        {/* Global Reach */}
        <section id="global-reach" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">2. Isuzu's Global Reach & Edwin Kibira Isuzu Sales</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Isuzu's presence is truly global, with a massive market share in Asia, Africa, Australia, and the Americas. The brand is synonymous with logistics and heavy lifting. 
            </p>
            <p>
              <strong>Edwin Kibira Isuzu Sales</strong> stands as a beacon of this global excellence. Based in Nairobi, Kenya, we serve not just the local market, but act as a pivotal hub for East Africa and beyond. Our multi-award-winning dealership is recognized globally for unparalleled customer experience, comprehensive vehicle servicing, and being the premier destination for genuine Isuzu parts. 
            </p>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-700 my-8">
              <h3 className="text-2xl font-bold text-red-800 mb-2">Why Global Buyers Trust Us</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unmatched inventory of N-Series, F-Series, and specialized heavy-duty commercial chassis.</li>
                <li>Expert export consultation for cross-border African logistics.</li>
                <li>State-of-the-art diagnostic and service center capable of handling the most advanced Isuzu telematics.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Engine Tech */}
        <section id="engine-tech" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">3. Legendary Isuzu Engine Technology</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Isuzu is arguably the world's leading manufacturer of diesel engines, having produced over 25 million engines. Their powerplants are famous for low-end torque, incredible fuel efficiency, and bulletproof reliability.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3">The 4JJ3-TCX (3.0L)</h3>
                <p className="text-sm text-gray-600 mb-4">Found in: D-Max, mu-X</p>
                <p>An evolution of the legendary 4JJ1, this 3.0-liter turbo-diesel is a masterpiece. It features a new engine block, cylinder head, and a high-pressure common-rail fuel injection system. It delivers 140kW of power and 450Nm of torque, designed to haul heavy loads while remaining surprisingly quiet and efficient.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3">The 4HK1-TCC (5.2L)</h3>
                <p className="text-sm text-gray-600 mb-4">Found in: N-Series (NQR), F-Series (FRR)</p>
                <p>A workhorse of the commercial fleet. This 5.2-liter, 4-cylinder, 16-valve engine uses a Variable Geometry System (VGS) turbocharger. It offers massive flat-torque curves, ensuring commercial trucks can pull maximum payloads up steep gradients without straining.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3">The 6HK1-TCN (7.8L)</h3>
                <p className="text-sm text-gray-600 mb-4">Found in: F-Series (FVR, FVZ)</p>
                <p>A massive 6-cylinder powerplant for heavy-duty applications. Renowned for its durability in harsh environments, it provides the brute force needed for tippers, mixers, and long-haul cargo transport.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-3">The RZ4E-TC (1.9L)</h3>
                <p className="text-sm text-gray-600 mb-4">Found in: D-Max, mu-X (Select Markets)</p>
                <p>Isuzu's answer to modern emission standards. This compact, highly efficient 1.9L engine uses advanced friction-reduction tech to deliver impressive power (110kW/350Nm) with incredibly low fuel consumption.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial */}
        <section id="commercial-lineup" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">4. The Commercial Titans: N-Series & F-Series</h2>
          <div className="prose prose-lg max-w-none">
            <p>Isuzu's commercial trucks are the backbone of global logistics.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">N-Series (Light-Duty)</h3>
            <p>The N-Series (known globally as the Elf) is the world's best-selling light-duty truck. Models like the <strong>NLR</strong>, <strong>NMR</strong>, and the powerhouse <strong>NQR</strong> offer incredible maneuverability for urban environments. They feature spacious Hexapod cabins, excellent visibility, and chassis designed for easy body-building (box bodies, flatbeds, refrigerated units).</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">F-Series (Medium to Heavy-Duty)</h3>
            <p>The F-Series (Forward) is built for serious tonnage. </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>FRR 90:</strong> The undisputed king of medium-duty. Highly versatile for cargo and often converted into the highly popular 33-seater buses seen across Africa.</li>
              <li><strong>FVR 90:</strong> A heavier 4x2 rigid chassis designed for regional haulage.</li>
              <li><strong>FVZ / FTS:</strong> 6x4 and 4x4 configurations designed for off-road, construction, and severe-duty applications.</li>
            </ul>
          </div>
        </section>

        {/* Passenger */}
        <section id="passenger-lineup" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">5. Passenger & Lifestyle: D-Max & mu-X</h2>
          <div className="prose prose-lg max-w-none">
            <p>Isuzu brings its commercial toughness to the passenger market.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The Isuzu D-Max</h3>
            <p>The D-Max is a global phenomenon. Available in Single Cab, Extended Cab, and Double Cab configurations, it serves both as a rugged farm implement and a luxurious family vehicle. The latest generation features Advanced Driver Assistance Systems (ADAS), a massive 9-inch infotainment screen, and a wading depth of 800mm, making it arguably the most capable pickup truck on the market.</p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The Isuzu mu-X</h3>
            <p>The mu-X is a 7-seater SUV built on the D-Max chassis. It offers a luxurious interior, superior ride comfort via a multi-link coil suspension, and the same bulletproof 3.0L engine. It is the vehicle of choice for families demanding safety, space, and off-road capability.</p>
          </div>
        </section>

        {/* Maintenance */}
        <section id="maintenance" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-8 text-red-700 border-b-4 border-red-700 pb-2 inline-block">6. Maintenance, Telematics & Genuine Parts</h2>
          <div className="prose prose-lg max-w-none">
            <p>Owning an Isuzu is an investment. Protecting that investment requires proper care.</p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Genuine Parts:</strong> Always use Isuzu Best Value Parts (BVP) or Genuine Parts. They undergo rigorous testing to meet Isuzu's exact specifications. Non-genuine oil filters, for example, can restrict flow and cause catastrophic turbo failure.</li>
              <li><strong>MaxIT Telematics:</strong> Modern Isuzu commercial vehicles can be fitted with MaxIT, a sophisticated fleet management system. It provides real-time data on fuel consumption, driver behavior (harsh braking/acceleration), and engine health, allowing fleet managers to drastically reduce operational costs.</li>
              <li><strong>Service Centers:</strong> Edwin Kibira Isuzu Sales boasts diagnostic equipment (like the Isuzu G-IDSS) that unauthorized mechanics simply do not have access to, ensuring accurate troubleshooting and software updates.</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 border-b-4 border-red-700 pb-2 inline-block">7. Global Isuzu FAQ</h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to experience Isuzu excellence?</p>
            <Link href="/contact" className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded shadow hover:bg-red-700 transition-colors">
              Contact Edwin Kibira Isuzu Sales Today
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
