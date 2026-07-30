"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { ChevronLeft, Plus, Trash2, Check, AlertCircle, Loader2, Image as ImageIcon } from "lucide-react";
import { createVehicleAction } from "./actions";

const FEATURES_LIST = [
  "Power Steering", "Air Conditioning", "ABS Brakes", "Dual Airbags",
  "Bluetooth", "Leather Seats", "Sunroof", "Apple CarPlay", "Android Auto",
  "Rear Camera", "Parking Sensors", "Cruise Control", "4WD / AWD",
  "Hill Descent Control", "Rear Diff Lock", "NTSA Compliant",
  "Tow Bar", "Side Steps", "Bull Bar", "Alloy Wheels",
  "Ambient Lighting", "Heated Seats", "Lane Assist", "Blind Spot Monitor",
];

interface ImageEntry {
  url: string;
  isHero: boolean;
}

export default function NewVehiclePage() {
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState<ImageEntry[]>([{ url: "/vehicles/dmax-hero.png", isHero: true }]);
  const [features, setFeatures] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const addImage = () => setImages(prev => [...prev, { url: "", isHero: false }]);
  const removeImage = (i: number) => setImages(prev => prev.filter((_, idx) => idx !== i));
  const setHero = (i: number) => setImages(prev => prev.map((img, idx) => ({ ...img, isHero: idx === i })));
  const updateImageUrl = (i: number, url: string) => setImages(prev => prev.map((img, idx) => idx === i ? { ...img, url } : img));
  const toggleFeature = (f: string) => setFeatures(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("images", JSON.stringify(images.filter(i => i.url.trim())));
    formData.set("features", JSON.stringify(features));

    startTransition(async () => {
      const result = await createVehicleAction(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        // redirect handled server-side
      }
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
          <Check size={28} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-black text-gray-800 uppercase mb-2">Vehicle Added!</h2>
        <p className="text-gray-400 mb-6">Your vehicle has been saved and is now live.</p>
        <div className="flex gap-3">
          <Link href="/admin/inventory" className="bg-secondary text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#b82222] transition-colors">
            View Inventory
          </Link>
          <button onClick={() => { setSuccess(false); setImages([{ url: "", isHero: true }]); setFeatures([]); }}
            className="border border-gray-200 text-gray-600 px-6 py-3 font-black uppercase text-sm hover:bg-gray-50 transition-colors">
            Add Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <Link href="/admin/inventory" className="inline-flex items-center gap-1 text-sm font-bold text-gray-400 hover:text-secondary transition-colors">
          <ChevronLeft size={16} /> Back to Inventory
        </Link>
      </div>

      <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide mb-6">Add New Vehicle</h1>

      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Basic Info */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-700 uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-100">Basic Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Make *</label>
              <input required name="make" defaultValue="Isuzu"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Model *</label>
              <input required name="model" placeholder="e.g. D-Max V-Cross 4x4"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Year *</label>
              <input required name="year" type="number" defaultValue="2024" min="1990" max="2030"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Price (KES) *</label>
              <input required name="price" type="number" placeholder="5000000"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Condition *</label>
              <select name="condition" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                <option value="NEW">New</option>
                <option value="USED">Used</option>
                <option value="REFURBISHED">Refurbished</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Status</label>
              <select name="status" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors">
                <option value="AVAILABLE">Available</option>
                <option value="SOLD">Sold</option>
                <option value="PENDING">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Mileage (km)</label>
              <input name="mileage" type="number" placeholder="0"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Location</label>
              <input name="location" placeholder="Nairobi, Kenya"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors" />
            </div>
          </div>
          <div className="mt-5">
            <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Description</label>
            <textarea name="description" rows={3} placeholder="Describe the vehicle..."
              className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none" />
          </div>
        </div>

        {/* Vehicle Specs */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-700 uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-100">Engine & Drivetrain</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Engine Type</label>
              <input name="engineType" defaultValue="Turbo Diesel"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Engine CC</label>
              <input name="engineCc" type="number" placeholder="2999"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Fuel Type</label>
              <select name="fuelType" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors">
                <option value="DIESEL">Diesel</option>
                <option value="PETROL">Petrol</option>
                <option value="HYBRID">Hybrid</option>
                <option value="ELECTRIC">Electric</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Transmission</label>
              <select name="transmission" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors">
                <option value="MANUAL">Manual</option>
                <option value="AUTOMATIC">Automatic</option>
                <option value="CVT">CVT</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Drivetrain</label>
              <select name="drivetrain" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors">
                <option value="4x4">4x4 (4WD)</option>
                <option value="4x2">4x2 (2WD)</option>
                <option value="AWD">AWD</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Horsepower (PS)</label>
              <input name="horsepower" type="number" placeholder="163"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Torque (Nm)</label>
              <input name="torque" type="number" placeholder="360"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Seating Capacity</label>
              <input name="seatingCapacity" type="number" defaultValue="5"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Seat Material</label>
              <input name="seatMaterial" placeholder="e.g. Leather, Fabric"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {([
              { name: "turbocharged", label: "Turbocharged" },
              { name: "appleCarplay", label: "Apple CarPlay" },
              { name: "androidAuto", label: "Android Auto" },
              { name: "abs", label: "ABS Brakes" },
              { name: "sunroof", label: "Sunroof" },
              { name: "heatedSeats", label: "Heated Seats" },
              { name: "laneAssist", label: "Lane Assist" },
              { name: "blindSpotMonitor", label: "Blind Spot" },
            ] as { name: string; label: string }[]).map(({ name, label }) => (
              <label key={name} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" name={name} value="true"
                  className="w-4 h-4 accent-secondary rounded" />
                <span className="text-xs font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Vehicle Identification */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-700 uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-100">Vehicle Identification (Optional)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">VIN</label>
              <input name="vin" placeholder="Vehicle Identification Number"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Chassis Number</label>
              <input name="chassisNumber" placeholder="Chassis Number"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">License Plate</label>
              <input name="licensePlate" placeholder="KAA 000A"
                className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-1.5">Import / Local</label>
              <select name="importOrLocal" className="w-full border border-gray-200 rounded-lg p-3 text-sm font-medium focus:border-secondary outline-none transition-colors">
                <option value="Imported">Imported</option>
                <option value="Local">Local</option>
              </select>
            </div>
          </div>
        </div>

        {/* Features Checklist */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-black text-gray-700 uppercase text-xs tracking-widest mb-5 pb-3 border-b border-gray-100">Features & Equipment</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {FEATURES_LIST.map(feature => (
              <button
                key={feature}
                type="button"
                onClick={() => toggleFeature(feature)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all text-left ${
                  features.includes(feature)
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                  features.includes(feature) ? "bg-secondary" : "border border-gray-300"
                }`}>
                  {features.includes(feature) && <Check size={10} className="text-white" />}
                </div>
                {feature}
              </button>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
            <h2 className="font-black text-gray-700 uppercase text-xs tracking-widest">Vehicle Images</h2>
            <button
              type="button"
              onClick={addImage}
              className="inline-flex items-center gap-1.5 text-xs font-black text-secondary uppercase tracking-wider hover:text-[#b82222] transition-colors"
            >
              <Plus size={14} /> Add Image
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-4">Enter image URLs (from Google Drive, Dropbox public links, or direct image URLs). Mark one as Hero (main image).</p>
          <div className="space-y-3">
            {images.map((img, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-14 h-10 relative bg-gray-100 rounded overflow-hidden flex-shrink-0 border border-gray-200">
                  {img.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img.url} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon size={14} className="text-gray-300" />
                    </div>
                  )}
                </div>
                <input
                  value={img.url}
                  onChange={e => updateImageUrl(i, e.target.value)}
                  placeholder="https://... or /vehicles/dmax-hero.png"
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium focus:border-secondary outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setHero(i)}
                  className={`px-3 py-2 text-[10px] font-black uppercase rounded border transition-colors flex-shrink-0 ${
                    img.isHero ? "bg-secondary text-white border-secondary" : "border-gray-200 text-gray-400 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {img.isHero ? "Hero ✓" : "Hero"}
                </button>
                {images.length > 1 && (
                  <button type="button" onClick={() => removeImage(i)} className="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0">
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-3 pb-8">
          <Link href="/admin/inventory" className="border border-gray-200 text-gray-600 px-6 py-3.5 font-black uppercase text-sm hover:bg-gray-50 transition-colors">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isPending}
            className="bg-secondary text-white px-8 py-3.5 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-colors disabled:opacity-60 flex items-center gap-2"
          >
            {isPending ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : "Save Vehicle"}
          </button>
        </div>
      </form>
    </div>
  );
}
