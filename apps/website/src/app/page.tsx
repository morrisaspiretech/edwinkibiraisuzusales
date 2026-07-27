import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import SourcingForm from "@/components/home/SourcingForm";
import { Vehicle } from "@/types/vehicle";

const DEFAULT_ISUZU_VEHICLES: Vehicle[] = [
  {
    id: 'isuzu-dmax-vcross',
    make: 'Isuzu',
    model: 'D-Max V-Cross 4x4',
    year: 2024,
    price: 6800000,
    engineCC: 2999,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'PICKUP',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-1', url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-mux',
    make: 'Isuzu',
    model: 'M-UX 3.0L SUV',
    year: 2024,
    price: 8200000,
    engineCC: 2999,
    transmission: 'AUTOMATIC',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'SUV',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-2', url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  },
  {
    id: 'isuzu-nqr',
    make: 'Isuzu',
    model: 'NQR Commercial Bus/Truck',
    year: 2023,
    price: 5200000,
    engineCC: 5193,
    transmission: 'MANUAL',
    fuelType: 'DIESEL',
    condition: 'FOREIGN',
    bodyType: 'TRUCK',
    mileage: 0,
    category: 'CAR',
    status: 'AVAILABLE',
    createdAt: new Date().toISOString(),
    images: [{ id: 'img-3', url: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }]
  }
];

async function getVehicles() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    const res = await fetch(`${apiUrl}/api/vehicles`, { next: { revalidate: 0 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
    return DEFAULT_ISUZU_VEHICLES;
  } catch (error) {
    console.error("Error fetching vehicles, using default Isuzu collection:", error);
    return DEFAULT_ISUZU_VEHICLES;
  }
}

export default async function Home() {
  const vehicles: Vehicle[] = await getVehicles();
  const featuredVehicles = vehicles.filter(v => v.status === 'AVAILABLE' && v.category === 'CAR').slice(0, 3);
  const latestVehicles = [...vehicles].filter(v => v.category === 'CAR').sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero featuredVehicles={featuredVehicles} />
      
      <NewArrivals vehicles={latestVehicles} />

      {/* Sourcing Section */}
      <section id="sourcing-section" className="py-16 bg-primary px-6 overflow-hidden relative border-b border-white/5">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs">Bespoke Sourcing</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
              Define Your <br />
              <span className="text-accent">Dream.</span> We'll <br />
              Find It. 
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/70 font-medium leading-relaxed max-w-lg">
                Aspire Motors offers a world-class global sourcing service. Whether it's a rare supercar, a specific luxury SUV, or a limited edition bike, our procurement team handles everything from inspection to rigorous paperwork and seamless delivery. Let us find your perfect match.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-white/60 mt-2">Verified Quality</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">Global</p>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-white/60 mt-2">Logistics Network</p>
                </div>
              </div>
            </div>
          </div>
          <SourcingForm />
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-16 bg-primary px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4 uppercase">
            Curated Excellence
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12" />
          <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto font-medium">
            Explore our meticulously selected collection of premium vehicles, from luxury SUVs to high-performance sedans and grand tourers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-10 border border-white/10 hover:border-accent/30 transition-all group backdrop-blur-sm rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors uppercase">Certified Luxury</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Every vehicle in our collection undergoes a rigorous 150-point inspection to ensure absolute quality and peace of mind.
              </p>
            </div>
            <div className="bg-white/5 p-10 border border-white/10 hover:border-accent/30 transition-all group backdrop-blur-sm rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors uppercase">Nationwide Delivery</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                No matter where you are in Kenya, your dream car is just a call away. We deliver excellence directly to your doorstep.
              </p>
            </div>
            <div className="bg-white/5 p-10 border border-white/10 hover:border-accent/30 transition-all group backdrop-blur-sm rounded-[2rem]">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors uppercase">Tailored Financing</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Our bespoke financial solutions make owning a premium vehicle seamless. Competitive rates and flexible terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / Philosophy Section */}
      <section className="py-24 px-6 bg-primary overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-accent font-extrabold tracking-[0.4em] uppercase text-sm mb-10 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.95] max-w-5xl mx-auto">
            We don't just sell <span className="text-accent italic">engines.</span> <br /> 
            We deliver <span className="relative inline-block">
              milestones.
              <span className="absolute bottom-2 left-0 w-full h-1 bg-accent/30 -z-10" />
            </span>
          </h2>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold text-white/[0.02] select-none pointer-events-none uppercase">
          ASPIRE
        </div>
      </section>

      {/* Visit Our Showroom Section */}
      <section className="py-16 bg-primary px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <span className="text-accent font-extrabold tracking-[0.4em] uppercase text-sm">Experience Excellence</span>
              <h2 className="text-5xl font-bold text-white uppercase leading-[0.9] tracking-tighter">
                Visit Our <br />
                <span className="text-accent">Showroom.</span>
              </h2>
              <p className="text-lg text-white/50 max-w-sm font-medium">
                Step into a world of curated luxury. Our Mombasa showroom houses the finest selection of premium vehicles in East Africa.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                <a 
                  href="https://maps.google.com/?q=Nyali+Road,Mombasa,Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">Location</h4>
                    <p className="text-white/40 text-sm font-medium">Nyali Road, Mombasa, Kenya</p>
                  </div>
                </a>
                <a 
                  href="tel:+254700000000" 
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-wider">Contact</h4>
                    <p className="text-white/40 text-sm font-medium">+254 700 000 000</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-7 w-full">
              <div className="bg-white/5 p-12 border border-white/10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                </div>
                <div className="relative z-10 space-y-10">
                  <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Business Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <p className="text-accent font-extrabold uppercase text-sm tracking-widest">Monday - Friday</p>
                      <p className="text-2xl font-bold text-white">08:00 — 18:00</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-accent font-extrabold uppercase text-sm tracking-widest">Saturday</p>
                      <p className="text-2xl font-bold text-white">09:00 — 16:00</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <a 
                      href="#sourcing-section"
                      className="w-full bg-accent text-primary px-10 py-5 font-bold uppercase text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(234,179,8,0.2)]"
                    >
                      Book a Private Viewing
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
