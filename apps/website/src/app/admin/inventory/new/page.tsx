"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";

import { createVehicleAction } from "./actions";
import { FaChevronLeft, FaPlus, FaTrash, FaCheck, FaCircleExclamation, FaSpinner, FaImage } from "react-icons/fa6";

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
  const [images, setImages] = useState<ImageEntry[]>([{ url: "", isHero: true }]);
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
      }
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto mt-10">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <FaCheck size={36} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Vehicle Added Successfully</h2>
        <p className="text-gray-500 mb-8 max-w-md">The vehicle has been securely saved to the inventory database and is now live on the public showroom.</p>
        <div className="flex gap-4">
          <Link href="/admin/inventory" className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-sm">
            View Inventory
          </Link>
          <button onClick={() => { setSuccess(false); setImages([{ url: "", isHero: true }]); setFeatures([]); }}
            className="border border-gray-200 text-gray-600 bg-white px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
            Add Another Vehicle
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto pb-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/inventory" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors shadow-sm">
            <FaChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Vehicle</h1>
            <p className="text-sm text-gray-500 mt-1">Fill out the details below to add a vehicle to the inventory.</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-5 mb-8 shadow-sm">
          <FaCircleExclamation size={20} className="flex-shrink-0" /> 
          <p className="font-medium text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column (Main Info) */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* General Information */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">General Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                <select name="category" required className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="">Select Category...</option>
                  <option value="Pickup">Pickup</option>
                  <option value="SUV">SUV</option>
                  <option value="Lorry">Lorry</option>
                  <option value="Bus">Bus</option>
                  <option value="Spare Parts">Spare Parts</option>
                  <option value="Other Parts">Other Parts</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Make *</label>
                <input required name="make" defaultValue="Isuzu" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Model Name *</label>
                <input required name="model" placeholder="e.g. D-Max V-Cross 4x4" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Manufacture *</label>
                <input required name="year" type="number" defaultValue="2024" min="1990" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price (KES) *</label>
                <input required name="price" type="number" placeholder="5000000" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mileage (km)</label>
                <input name="mileage" type="number" placeholder="0" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Condition *</label>
                <select name="condition" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="NEW">Brand New</option>
                  <option value="USED">Locally Used</option>
                  <option value="REFURBISHED">Foreign Used / Refurbished</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Status *</label>
                <select name="status" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="AVAILABLE">Available for Sale</option>
                  <option value="SOLD">Sold</option>
                  <option value="PENDING">Pending Payment</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Detailed Description</label>
              <textarea name="description" rows={4} placeholder="Describe the vehicle condition, history, or specific selling points..."
                className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors resize-none" />
            </div>
          </div>

          {/* Features Selection */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Key Features & Options</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {FEATURES_LIST.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-semibold border transition-all text-left ${
                    features.includes(feature)
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                    features.includes(feature) ? "bg-red-500" : "border-2 border-gray-300 bg-white"
                  }`}>
                    {features.includes(feature) && <FaCheck size={12} className="text-white font-bold" />}
                  </div>
                  {feature}
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Engine Type</label>
                <input name="engineType" defaultValue="Turbo Diesel" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Engine CC</label>
                <input name="engineCc" type="number" placeholder="2999" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Type</label>
                <select name="fuelType" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="DIESEL">Diesel</option>
                  <option value="PETROL">Petrol</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Transmission</label>
                <select name="transmission" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="MANUAL">Manual</option>
                  <option value="AUTOMATIC">Automatic</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Drivetrain</label>
                <select name="drivetrain" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors">
                  <option value="4x4">4x4 (4WD)</option>
                  <option value="4x2">4x2 (2WD)</option>
                  <option value="AWD">AWD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Horsepower (PS)</label>
                <input name="horsepower" type="number" placeholder="163" className="w-full border border-gray-200 bg-gray-50 rounded-xl p-3 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column (Images & Actions) */}
        <div className="space-y-8">
          
          {/* Images Upload */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Vehicle Images</h2>
              <button
                type="button"
                onClick={addImage}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
              >
                <FaPlus size={14} /> Add Image
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              Enter valid image URLs. One image must be marked as the Hero (Main) image for the vehicle card.
            </p>
            
            <div className="space-y-4">
              {images.map((img, i) => (
                <div key={i} className={`p-4 rounded-xl border ${img.isHero ? 'border-red-300 bg-red-50/50' : 'border-gray-100 bg-gray-50'}`}>
                  <div className="flex gap-3 mb-3">
                    <div className="w-20 h-14 relative bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 shadow-inner">
                      {img.url ? (
                        <img src={img.url} alt="" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaImage size={18} className="text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <input
                        value={img.url}
                        onChange={e => updateImageUrl(i, e.target.value)}
                        placeholder="https://... or /vehicles/dmax-hero.png"
                        className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-xs font-medium focus:border-red-500 outline-none transition-colors"
                      />
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setHero(i)}
                          className={`px-3 py-1 text-[10px] font-bold uppercase rounded-md border transition-colors ${
                            img.isHero ? "bg-red-600 text-white border-red-600" : "bg-white border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-600"
                          }`}
                        >
                          {img.isHero ? "Main Image ✓" : "Set Main Image"}
                        </button>
                        {images.length > 1 && (
                          <button type="button" onClick={() => removeImage(i)} className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-white rounded shadow-sm border border-gray-200">
                            <FaTrash size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Publish</h2>
            <p className="text-sm text-gray-500 mb-6">Ensure all required fields (*) are filled before saving.</p>
            
            <div className="space-y-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-red-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm"
              >
                {isPending ? <><FaSpinner size={18} className="animate-spin" /> Saving to Database...</> : "Publish Vehicle"}
              </button>
              
              <Link href="/admin/inventory" className="w-full border border-gray-200 text-gray-600 bg-gray-50 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Discard Draft
              </Link>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}
