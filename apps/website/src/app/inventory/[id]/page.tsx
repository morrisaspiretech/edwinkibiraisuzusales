"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import ImageGallery from "@/components/inventory/ImageGallery";
import { Vehicle } from "@/types/vehicle";
import { 
  ChevronRight, 
  MapPin, 
  Share2, 
  Heart, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings2, 
  ShieldCheck,
  CheckCircle2,
  Info
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import LeadForm from "@/components/inventory/LeadForm";

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
        const response = await fetch(`${apiUrl}/api/vehicles/${id}`, { cache: 'no-store' });
        if (!response.ok) {
          setVehicle(null); // Explicitly set to null if not found
          return;
        }
        const data = await response.json();
        setVehicle(data);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
        setVehicle(null); // Set to null on error as well
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchVehicle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-40 px-6 max-w-7xl mx-auto animate-pulse">
          <div className="h-10 w-64 bg-surface mb-8" />
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 h-[500px] bg-surface" />
            <div className="lg:w-1/3 h-[500px] bg-surface" />
          </div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold uppercase text-primary mb-4">Vehicle Not Found</h1>
          <Link href="/inventory" className="btn-primary">Back to Inventory</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-24">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-32 pb-8 px-6 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <nav className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 text-accent">
            <Link href="/" className="underline-offset-4 hover:underline transition-all">Home</Link>
            <ChevronRight size={16} className="opacity-50" />
            <Link href="/inventory" className="underline-offset-4 hover:underline transition-all">Inventory</Link>
            <ChevronRight size={16} className="opacity-50" />
            <span className="text-white font-extrabold">{vehicle.make} {vehicle.model}</span>
          </nav>
          <div className="flex items-center gap-4 text-white">
            <button className="p-2 border border-white/10 hover:bg-white/10 transition-colors"><Share2 size={16} /></button>
            <button className="p-2 border border-white/10 hover:bg-white/10 transition-colors"><Heart size={16} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Gallery & Details */}
          <div className="lg:w-2/3 space-y-12">
            <ImageGallery images={vehicle.images} />

            <section>
              <h2 className="text-3xl font-bold text-primary uppercase mb-6 flex items-center gap-3">
                <Info className="text-accent" /> Description
              </h2>
              <p className="text-text-dark/70 text-lg leading-relaxed font-medium">
                {vehicle.description || "No description provided for this vehicle."}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-primary tracking-tight uppercase mb-8 flex items-center gap-3">
                <Settings2 className="text-accent" /> Specifications
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <SpecItem label="Mileage" value={`${vehicle.mileage.toLocaleString()} km`} icon={<Gauge size={20} />} />
                <SpecItem label="Year" value={vehicle.year.toString()} icon={<Calendar size={20} />} />
                <SpecItem label="Fuel Type" value={vehicle.fuelType} icon={<Fuel size={20} />} />
                <SpecItem label="Engine Size" value={`${vehicle.engineCC} CC`} icon={<Settings2 size={20} />} />
                <SpecItem label="Transmission" value={vehicle.transmission} icon={<Settings2 size={20} />} />
                <SpecItem label="Body Type" value={vehicle.bodyType} icon={<Settings2 size={20} />} />
              </div>
            </section>

            {vehicle.features && vehicle.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-primary tracking-tight uppercase mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent" /> Features
                </h2>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {vehicle.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-dark/80 font-bold">
                      <CheckCircle2 size={16} className="text-accent/60" /> {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="bg-primary p-8 text-white border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 uppercase">
                <ShieldCheck className="text-accent" /> Aspire Certified Guarantee
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['KRA Verified', 'Accident Free History', '150-Point Inspection', 'Mileage Certified'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70 font-bold uppercase tracking-wide">
                    <CheckCircle2 size={16} className="text-accent" /> {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Pricing & Contact */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white border border-primary/5 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-accent uppercase px-4 py-1.5 border-2 border-accent/30 tracking-widest leading-none">
                    {vehicle.status}
                  </span>
                  <div className="flex items-center gap-2 text-text-dark/60 text-xs font-extrabold uppercase tracking-widest">
                    <MapPin size={14} className="text-accent" /> Nairobi, Kenya
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold text-primary mb-2">
                  {vehicle.make} <span className="text-accent">{vehicle.model}</span>
                </h1>
                <p className="text-3xl font-bold text-primary mb-8">
                  KSh {vehicle.price.toLocaleString()}
                </p>

                <div className="space-y-3">
                  <Link 
                    href="/book-test-drive"
                    className="w-full bg-accent text-primary py-5 font-bold uppercase hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <Calendar size={18} /> Book Test Drive
                  </Link>
                  
                  <LeadForm vehicleId={vehicle.id} vehicleName={`${vehicle.make} ${vehicle.model}`} />
                  
                  <a
                    href={`https://wa.me/254700000000?text=Hi Aspire Motors, I am interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 text-white py-5 font-bold uppercase hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={18} /> Inquire via WhatsApp
                  </a>
                  <a
                    href="tel:+254700000000"
                    className="w-full border-2 border-primary/5 py-5 font-bold uppercase hover:border-accent hover:text-accent transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={18} /> Call Advisor
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/5">
                  <p className="text-xs font-extrabold text-text-dark/60 uppercase mb-4 tracking-widest">Location & Opening Hours</p>
                  <div className="space-y-2 text-sm font-medium text-text-dark/70">
                    <p>Ngong Road, Nairobi</p>
                    <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Finance Teaser */}
              <div className="bg-surface p-8 border border-primary/5">
                <h3 className="font-bold text-primary uppercase mb-4">Financing Options</h3>
                <p className="text-sm text-text-dark/60 font-medium leading-relaxed mb-6">
                  Get pre-approved in minutes with our bank partners. Monthly payments starting from KSh {(vehicle.price * 0.02).toLocaleString()}.
                </p>
                <Link href="/finance" className="text-xs font-bold text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                  Calculate Payments <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const SpecItem = ({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-surface text-primary/30 rounded-sm">
      {icon}
    </div>
    <div>
      <p className="text-xs font-extrabold text-text-dark/50 uppercase tracking-wider mb-1">{label}</p>
      <p className="text-base font-bold text-primary uppercase">{value}</p>
    </div>
  </div>
);

export default VehicleDetailsPage;
