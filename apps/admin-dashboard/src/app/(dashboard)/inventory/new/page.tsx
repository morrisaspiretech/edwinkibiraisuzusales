"use client";

import React, { useState, useEffect } from "react";
import { 
  Save, 
  X, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  Database,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/inventory/ImageUpload";
import { cn } from "@/lib/utils";

interface CRSPModel {
  make: string;
  model: string;
  bodyType: string;
  fuelType: string;
  engineCC: number;
  referencePrice: number;
}

const InventoryNewPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [crspModels, setCrspModels] = useState<CRSPModel[]>([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState<CRSPModel | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [modelSearch, setModelSearch] = useState("");

  const [formData, setFormData] = useState({
    model: "",
    year: "2024",
    price: "",
    mileage: "",
    fuelType: "Petrol",
    engineCC: "",
    transmission: "Automatic",
    bodyType: "",
    color: "",
    driveType: "",
    description: "",
    category: "CAR",
    status: "AVAILABLE",
    features: [] as string[],
    images: [] as { url: string; isPrimary: boolean }[]
  });

  useEffect(() => {
    const fetchCRSP = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      try {
        const response = await fetch(`${apiUrl}/api/crsp`);
        const data = await response.json();
        setCrspModels(data);
      } catch (error) {
        console.error("Error fetching CRSP data:", error);
      }
    };
    fetchCRSP();
  }, []);

  const handleSeedCRSP = async () => {
    setIsSeeding(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
    try {
      const response = await fetch(`${apiUrl}/api/admin/seed-crsp`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to seed database");
      
      const data = await response.json();
      alert(data.message);
      
      // Refresh the CRSP list
      const crspResponse = await fetch(`${apiUrl}/api/crsp`);
      const crspData = await crspResponse.json();
      setCrspModels(crspData);
    } catch (error) {
      console.error("Seeding error:", error);
      alert("Failed to seed database. Please check if the API server has access to the seed file.");
    } finally {
      setIsSeeding(false);
    }
  };

  const makes = Array.from(new Set(crspModels.map(m => m.make))).sort();
  const filteredModels = crspModels
    .filter(m => m.make === selectedMake)
    .filter(m => !modelSearch || m.model.toLowerCase().includes(modelSearch.toLowerCase()));

  const handleModelChange = (modelName: string) => {
    const model = crspModels.find(m => m.make === selectedMake && m.model === modelName);
    setSelectedModel(model || null);
    if (model) {
      setFormData(prev => ({
        ...prev,
        fuelType: model.fuelType || "Petrol",
        engineCC: model.engineCC?.toString() || "",
        bodyType: model.bodyType || ""
      }));
    }
  };

  const handlePublish = async () => {
    if (formData.category === 'CAR' && !selectedModel) {
      alert("Please select a Make and Model first.");
      return;
    }

    if (formData.category === 'BIKE' && (!formData.model || !selectedMake)) {
      alert("Please enter both Make and Model for the bike.");
      return;
    }

    if (formData.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    if (!formData.price || !formData.year) {
      alert("Please enter a price and year.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        make: selectedMake,
        model: formData.category === 'CAR' ? selectedModel?.model : formData.model
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:4000";
      const response = await fetch(`${apiUrl}/api/admin/vehicles`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Failed to publish vehicle");

      router.push("/inventory");
    } catch (error) {
      console.error("Error publishing:", error);
      alert("Failed to publish vehicle. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <nav className="flex items-center gap-2 text-xs font-extrabold uppercase text-slate-500 mb-4 tracking-wider">
            <Link href="/inventory" className="hover:text-primary transition-colors">Inventory</Link>
            <ChevronRight size={14} />
            <span className="text-primary tracking-tight">New Listing</span>
          </nav>
          <h1 className="text-3xl font-bold text-primary">Post New Vehicle</h1>
          <p className="text-sm text-slate-500 font-bold mt-1 tracking-tight">Fill in the details to publish a new vehicle to the website.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 text-xs font-bold uppercase text-slate-500 hover:text-red-500 transition-all flex items-center gap-2">
            <X size={16} /> Discard Draft
          </button>
          <button 
            onClick={handlePublish}
            disabled={isSubmitting}
            className="px-8 py-3.5 bg-accent text-primary text-xs font-bold uppercase hover:bg-black hover:text-white transition-all shadow-xl shadow-accent/20 flex items-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
            Publish Listing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Section: Basic Info */}
          <div className="admin-card space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <Database className="text-accent" size={20} />
                <h2 className="text-sm font-bold uppercase text-primary">Listing Category</h2>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setFormData(prev => ({ ...prev, category: "CAR" }))}
                  className={cn("px-4 py-2 text-xs font-extrabold uppercase rounded-md transition-all tracking-wider", formData.category === "CAR" ? "bg-white text-primary shadow-sm" : "text-slate-500")}
                >
                  Car
                </button>
                <button 
                  onClick={() => setFormData(prev => ({ ...prev, category: "BIKE" }))}
                  className={cn("px-4 py-2 text-xs font-extrabold uppercase rounded-md transition-all tracking-wider", formData.category === "BIKE" ? "bg-white text-primary shadow-sm" : "text-slate-500")}
                >
                  Bike
                </button>
              </div>
            </div>

            {formData.category === "CAR" ? (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-600 text-xs">Make / Brand</label>
                    <select 
                      className="w-full bg-slate-50 border border-slate-200 p-3 text-sm font-bold focus:outline-none focus:border-accent"
                      value={selectedMake}
                      onChange={(e) => {
                        setSelectedMake(e.target.value);
                        setSelectedModel(null);
                        setModelSearch("");
                      }}
                    >
                      <option value="">{crspModels.length === 0 ? "Loading models..." : "Select Make"}</option>
                      {makes.map(make => <option key={make} value={make}>{make}</option>)}
                    </select>
                    {crspModels.length === 0 && (
                      <div className="space-y-4 mt-2">
                        <p className="text-[9px] font-bold text-red-500 uppercase flex items-center gap-2">
                          <AlertCircle size={12} /> CRSP Database empty. Click below to populate.
                        </p>
                        <button 
                          onClick={handleSeedCRSP}
                          disabled={isSeeding}
                          className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white text-[10px] font-bold uppercase rounded-lg hover:bg-black transition-all disabled:opacity-50"
                        >
                          {isSeeding ? <Loader2 className="animate-spin" size={14} /> : <Database size={14} className="text-accent" />}
                          Populate Car Database
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold uppercase text-slate-600 text-xs">Model</label>
                      {selectedMake && (
                        <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          {crspModels.filter(m => m.make === selectedMake).length} models
                        </span>
                      )}
                    </div>
                    {selectedMake && (
                      <input
                        type="text"
                        placeholder="Search models..."
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        className="w-full bg-white border border-slate-200 p-2 text-xs font-bold focus:outline-none focus:border-accent rounded-md"
                      />
                    )}
                    <select 
                      className="w-full bg-slate-50 border border-slate-200 p-3.5 text-sm font-bold focus:outline-none focus:border-accent disabled:opacity-50 tracking-tight"
                      disabled={!selectedMake}
                      onChange={(e) => handleModelChange(e.target.value)}
                      size={selectedMake && filteredModels.length > 0 ? Math.min(8, filteredModels.length) : 1}
                    >
                      <option value="">Select Model</option>
                      {filteredModels.map(m => <option key={m.model} value={m.model}>{m.model} — {m.fuelType} ({m.engineCC || 'EV'}cc)</option>)}
                    </select>
                  </div>
                </div>

                {selectedModel && (
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-lg flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1" size={18} />
                    <div>
                      <p className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest">CRSP Data Synced</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
                        <p className="text-xs font-extrabold text-emerald-800/60 uppercase tracking-tight">Body: {selectedModel.bodyType}</p>
                        <p className="text-xs font-extrabold text-emerald-800/60 uppercase tracking-tight">Fuel: {selectedModel.fuelType}</p>
                        <p className="text-xs font-extrabold text-emerald-800/60 uppercase tracking-tight">Engine: {selectedModel.engineCC} CC</p>
                        <p className="text-xs font-extrabold text-emerald-800/60 uppercase tracking-tight">Ref Price: KSh {selectedModel.referencePrice.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-600">Make / Brand</label>
                    <input 
                      type="text" 
                      placeholder="e.g. BMW, Kawasaki" 
                      className="w-full bg-slate-50 border border-slate-200 p-3 text-sm font-bold focus:outline-none focus:border-accent"
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase text-slate-600">Model</label>
                    <input 
                      type="text" 
                      placeholder="e.g. S1000RR, Ninja" 
                      className="w-full bg-slate-50 border border-slate-200 p-3 text-sm font-bold focus:outline-none focus:border-accent"
                      value={formData.model}
                      onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="admin-card space-y-6">
            <h2 className="text-xs font-bold uppercase text-primary border-b border-slate-50 pb-4">Detailed Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <Input label="Year" value={formData.year} onChange={(v) => setFormData(prev => ({ ...prev, year: v }))} type="number" />
              <Input label="Price (KSh)" value={formData.price} onChange={(v) => setFormData(prev => ({ ...prev, price: v }))} type="number" />
              <Input label="Mileage (KM)" value={formData.mileage} onChange={(v) => setFormData(prev => ({ ...prev, mileage: v }))} type="number" />
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-600">Transmission</label>
                <select 
                  className="w-full bg-slate-50 border border-slate-200 p-3 text-sm font-bold focus:outline-none focus:border-accent"
                  value={formData.transmission}
                  onChange={(e) => setFormData(prev => ({ ...prev, transmission: e.target.value }))}
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
              <Input label="Fuel Type" value={formData.fuelType} onChange={(v) => setFormData(prev => ({ ...prev, fuelType: v }))} />
              <Input label="Engine CC" value={formData.engineCC} onChange={(v) => setFormData(prev => ({ ...prev, engineCC: v }))} type="number" />
              <Input label="Body Type" value={formData.bodyType} onChange={(v) => setFormData(prev => ({ ...prev, bodyType: v }))} />
              <Input label="Color" value={formData.color} onChange={(v) => setFormData(prev => ({ ...prev, color: v }))} />
              <Input label="Drive Type" value={formData.driveType} onChange={(v) => setFormData(prev => ({ ...prev, driveType: v }))} />
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase text-slate-600">Full Description</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 p-4 text-sm font-bold focus:outline-none focus:border-accent resize-none"
                placeholder="Describe the vehicle condition, features, and history..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
            <div className="admin-card space-y-6">
            <h2 className="text-xs font-bold uppercase text-primary border-b border-slate-50 pb-4">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Air Conditioning", "Airbags", "Alloy Wheels", "AM/FM Radio", 
                "Anti-Lock Brakes", "Armrests", "CD Player", "Cup Holders",
                "Electric Mirrors", "Electric Windows", "Fog Lights", "Keyless Entry",
                "Power Steering", "Rear Camera", "Sidesteps", "Spoilers",
                "Thumbstart Ignition", "Tinted Windows", "Traction Control", "Turbo Charged", "Xenon Lights"
              ].map(feature => (
                <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                  <div className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center transition-all",
                    formData.features.includes(feature) 
                      ? "bg-accent border-accent text-primary" 
                      : "bg-slate-50 border-slate-200 group-hover:border-accent"
                  )}>
                    {formData.features.includes(feature) && <CheckCircle2 size={12} strokeWidth={4} />}
                  </div>
                  <span className="text-xs font-bold text-slate-600">{feature}</span>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={formData.features.includes(feature)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData(prev => ({ ...prev, features: [...prev.features, feature] }));
                      } else {
                        setFormData(prev => ({ ...prev, features: prev.features.filter(f => f !== feature) }));
                      }
                    }}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Right Column: Media */}
        <div className="space-y-8">
          <div className="admin-card space-y-6">
            <h2 className="text-xs font-bold uppercase text-primary border-b border-slate-50 pb-4">Vehicle Status</h2>
            <div className="grid grid-cols-3 gap-2">
              {["AVAILABLE", "RESERVED", "SOLD"].map(status => (
                <button
                  key={status}
                  onClick={() => setFormData(prev => ({ ...prev, status }))}
                  className={cn(
                    "py-3 text-[9px] font-bold uppercase border transition-all",
                    formData.status === status 
                      ? "bg-primary border-primary text-white" 
                      : "bg-white border-slate-100 text-slate-500 hover:border-primary/20"
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="admin-card space-y-6">
            <h2 className="text-xs font-bold uppercase text-primary border-b border-slate-50 pb-4">Photo Gallery</h2>
            <ImageUpload 
              onImagesChange={(images) => setFormData(prev => ({ ...prev, images }))} 
            />
          </div>

          <div className="bg-primary p-8 rounded-2xl text-white space-y-4">
            <AlertCircle className="text-accent" size={24} />
            <h3 className="text-sm font-bold uppercase">Quality Assurance</h3>
            <p className="text-xs text-white/70 leading-relaxed font-bold">
              Ensure all information is accurate to KRA CRSP standards. High-quality photos increase sale conversion by up to 80%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div className="space-y-2">
    <label className="text-xs font-extrabold uppercase text-slate-600 tracking-wider">{label}</label>
    <input 
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-50 border border-slate-200 p-4 text-sm font-bold focus:outline-none focus:border-accent group-hover:bg-white transition-all tracking-tight"
    />
  </div>
);

export default InventoryNewPage;
