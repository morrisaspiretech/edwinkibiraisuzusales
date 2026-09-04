import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import { FaChevronRight, FaGlobe, FaGears, FaTruck, FaWrench, FaCircleQuestion } from "react-icons/fa6";

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

  const navLinks = [
    { id: "history", label: "History of Isuzu", icon: <FaGlobe /> },
    { id: "global-reach", label: "Global Reach", icon: <FaGlobe /> },
    { id: "engine-tech", label: "Engine Technology", icon: <FaGears /> },
    { id: "commercial-lineup", label: "Commercial Trucks", icon: <FaTruck /> },
    { id: "passenger-lineup", label: "Passenger Lineup", icon: <FaTruck /> },
    { id: "maintenance", label: "Maintenance & Parts", icon: <FaWrench /> },
    { id: "faq", label: "Frequently Asked Questions", icon: <FaCircleQuestion /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-[#D62B2B] selection:text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-[#1a1a1a] flex items-center overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <span className="inline-block py-1 px-3 bg-[#D62B2B] text-white text-[10px] font-black uppercase tracking-widest rounded mb-6">Editorial Guide</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tighter">
            THE ULTIMATE <br/><span className="text-[#D62B2B]">ISUZU GUIDE</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/80 max-w-2xl leading-relaxed">
            From the origins of Japan's oldest automaker to the forefront of global commercial transport. Welcome to the most comprehensive encyclopedia of Isuzu vehicles, engines, and heritage.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 relative">
        
        {/* STICKY SIDEBAR NAVIGATION */}
        <aside className="w-full lg:w-1/4 flex-shrink-0">
          <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">Quick Navigation</h3>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#D62B2B] hover:bg-red-50 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-[#D62B2B] transition-colors">{link.icon}</span>
                  {link.label}
                  <FaChevronRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <Link href="/inventory" className="block w-full bg-[#1a1a1a] text-white text-center py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#D62B2B] transition-colors">
                View Inventory
              </Link>
            </div>
          </div>
        </aside>

        {/* ARTICLES */}
        <article className="w-full lg:w-3/4 pb-24 space-y-20">
          
          {/* History */}
          <section id="history" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaGlobe />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">The History of Isuzu</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
              <p className="lead text-xl text-gray-800 font-medium">
                Isuzu Motors Ltd., headquartered in Yokohama, Japan, holds the prestigious title of Japan's oldest automaker.
              </p>
              <p>
                The story began in 1916 when Tokyo Ishikawajima Shipbuilding and Engineering Co., Ltd. partnered with Tokyo Gas and Electric Industrial Co. to build automobiles. By 1922, they produced Japan's first domestically produced car, the Wolseley model A-9.
              </p>
              <p>
                The name "Isuzu" (meaning "fifty bells") was officially adopted in 1949, named after the Isuzu River that flows past the Grand Shrine of Ise, one of Japan's most sacred sites.
              </p>
              <p>
                Over the decades, Isuzu shifted its focus from passenger cars to becoming a global titan in commercial vehicles and diesel engine manufacturing. Their philosophy, <strong>"Trucks for Life,"</strong> reflects a commitment to building durable, reliable, and efficient vehicles that drive the global economy forward. Today, Isuzu diesel engines are so respected that they are used by dozens of other manufacturers worldwide.
              </p>
            </div>
          </section>

          {/* Global Reach */}
          <section id="global-reach" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaGlobe />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Global Reach & Dealerships</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
              <p>
                Isuzu's presence is truly global, with a massive market share in Asia, Africa, Australia, and the Americas. The brand is synonymous with logistics and heavy lifting. 
              </p>
              <div className="bg-[#1a1a1a] text-white p-8 rounded-xl my-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D62B2B] rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10 text-white">Why Global Buyers Trust Edwin Kibira Isuzu</h3>
                <p className="text-white/80 mb-6 relative z-10">Based in Nairobi, Kenya, we serve not just the local market, but act as a pivotal hub for East Africa and beyond.</p>
                <ul className="space-y-4 relative z-10 text-white/90">
                  <li className="flex items-start gap-3">
                    <FaChevronRight className="text-[#D62B2B] mt-1.5 flex-shrink-0" size={14} />
                    <span>Unmatched inventory of N-Series, F-Series, and specialized heavy-duty commercial chassis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaChevronRight className="text-[#D62B2B] mt-1.5 flex-shrink-0" size={14} />
                    <span>Expert export consultation for cross-border African logistics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaChevronRight className="text-[#D62B2B] mt-1.5 flex-shrink-0" size={14} />
                    <span>State-of-the-art diagnostic and service center capable of handling the most advanced Isuzu telematics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Engine Tech */}
          <section id="engine-tech" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaGears />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Legendary Engine Tech</h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl">
              Isuzu is arguably the world's leading manufacturer of diesel engines, having produced over 25 million engines. Their powerplants are famous for low-end torque, incredible fuel efficiency, and bulletproof reliability.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D62B2B] hover:shadow-md transition-all group">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 group-hover:bg-red-50 group-hover:text-[#D62B2B] transition-colors">Found in: D-Max, mu-X</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The 4JJ3-TCX (3.0L)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  An evolution of the legendary 4JJ1, this 3.0-liter turbo-diesel is a masterpiece. It features a new engine block, cylinder head, and a high-pressure common-rail fuel injection system. It delivers 140kW of power and 450Nm of torque.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D62B2B] hover:shadow-md transition-all group">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 group-hover:bg-red-50 group-hover:text-[#D62B2B] transition-colors">Found in: N-Series, F-Series</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The 4HK1-TCC (5.2L)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A workhorse of the commercial fleet. This 5.2-liter, 4-cylinder, 16-valve engine uses a Variable Geometry System (VGS) turbocharger. It offers massive flat-torque curves, ensuring commercial trucks can pull maximum payloads up steep gradients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D62B2B] hover:shadow-md transition-all group">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 group-hover:bg-red-50 group-hover:text-[#D62B2B] transition-colors">Found in: F-Series (FVR, FVZ)</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The 6HK1-TCN (7.8L)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A massive 6-cylinder powerplant for heavy-duty applications. Renowned for its durability in harsh environments, it provides the brute force needed for tippers, mixers, and long-haul cargo transport.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#D62B2B] hover:shadow-md transition-all group">
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 group-hover:bg-red-50 group-hover:text-[#D62B2B] transition-colors">Found in: Select D-Max, mu-X</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The RZ4E-TC (1.9L)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Isuzu's answer to modern emission standards. This compact, highly efficient 1.9L engine uses advanced friction-reduction tech to deliver impressive power (110kW/350Nm) with incredibly low fuel consumption.
                </p>
              </div>

            </div>
          </section>

          {/* Commercial */}
          <section id="commercial-lineup" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaTruck />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">The Commercial Titans</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative min-h-[250px] bg-gray-100">
                  <Image src="/vehicles/n-series-truck.webp" alt="N-Series" fill className="object-cover" />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">N-Series (Light-Duty)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The N-Series (known globally as the Elf) is the world's best-selling light-duty truck. Models like the <strong>NLR</strong>, <strong>NMR</strong>, and the powerhouse <strong>NQR</strong> offer incredible maneuverability for urban environments. They feature spacious Hexapod cabins, excellent visibility, and chassis designed for easy body-building.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row-reverse">
                <div className="w-full md:w-2/5 relative min-h-[250px] bg-gray-100">
                  <Image src="/vehicles/f-series-truck.webp" alt="F-Series" fill className="object-cover" />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-3">F-Series (Medium to Heavy-Duty)</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The F-Series (Forward) is built for serious tonnage.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong className="text-[#1a1a1a]">FRR 90:</strong> The undisputed king of medium-duty. Highly versatile for cargo and often converted into 33-seater buses.</li>
                    <li><strong className="text-[#1a1a1a]">FVR 90:</strong> A heavier 4x2 rigid chassis designed for regional haulage.</li>
                    <li><strong className="text-[#1a1a1a]">FVZ / FTS:</strong> 6x4 and 4x4 configurations designed for off-road, construction, and severe-duty.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Passenger */}
          <section id="passenger-lineup" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaTruck />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Passenger & Lifestyle</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-64 bg-gray-100">
                  <Image src="/vehicles/dmax-hero.png" alt="D-Max" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The Isuzu D-Max</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The D-Max is a global phenomenon. Available in Single Cab, Extended Cab, and Double Cab configurations, it serves both as a rugged farm implement and a luxurious family vehicle. The latest generation features Advanced Driver Assistance Systems (ADAS), a massive infotainment screen, and a wading depth of 800mm.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-64 bg-gray-100">
                  <Image src="/vehicles/mux-hero.png" alt="mu-X" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-3">The Isuzu mu-X</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The mu-X is a 7-seater SUV built on the D-Max chassis. It offers a luxurious interior, superior ride comfort via a multi-link coil suspension, and the same bulletproof 3.0L engine. It is the vehicle of choice for families demanding safety, space, and off-road capability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance */}
          <section id="maintenance" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaWrench />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Maintenance & Genuine Parts</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Owning an Isuzu is an investment. Protecting that investment requires proper care and adherence to factory maintenance schedules.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1a1a1a] font-black">1</div>
                  <div>
                    <h4 className="font-black text-[#1a1a1a] text-lg mb-2">Genuine Parts Only</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Always use Isuzu Best Value Parts (BVP) or Genuine Parts. They undergo rigorous testing to meet Isuzu's exact specifications. Non-genuine oil filters, for example, can restrict flow and cause catastrophic turbo failure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1a1a1a] font-black">2</div>
                  <div>
                    <h4 className="font-black text-[#1a1a1a] text-lg mb-2">MaxIT Telematics</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Modern Isuzu commercial vehicles can be fitted with MaxIT, a sophisticated fleet management system. It provides real-time data on fuel consumption, driver behavior, and engine health.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-[#1a1a1a] font-black">3</div>
                  <div>
                    <h4 className="font-black text-[#1a1a1a] text-lg mb-2">Authorized Service Centers</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Edwin Kibira Isuzu Sales boasts diagnostic equipment (like the Isuzu G-IDSS) that unauthorized mechanics simply do not have access to, ensuring accurate troubleshooting and software updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[#D62B2B] flex items-center justify-center text-xl">
                <FaCircleQuestion />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Global Isuzu FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-black text-[#1a1a1a] mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#1a1a1a] p-10 rounded-2xl text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/vehicles/f-series-truck.webp')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Ready to experience Isuzu excellence?</h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto relative z-10">Whether you are expanding a logistics fleet or looking for a durable passenger vehicle, we have the perfect Isuzu for you.</p>
              <Link href="/contact" className="relative z-10 inline-block bg-[#D62B2B] text-white font-black text-sm uppercase tracking-widest py-4 px-10 rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-900/50 hover:-translate-y-0.5">
                Contact Us Today
              </Link>
            </div>
          </section>

        </article>

      </div>
    </div>
  );
}
