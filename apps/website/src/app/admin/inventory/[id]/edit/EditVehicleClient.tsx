"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";

import { updateVehicleAction } from "./actions";
import { FaChevronLeft, FaPlus, FaTrash, FaCheck, FaCircleExclamation, FaSpinner, FaImage, FaCircleCheck } from "react-icons/fa6";

const FEATURES_LIST = [
  "Power Steering", "Air Conditioning", "ABS Brakes", "Dual Airbags",
  "Bluetooth", "Leather Seats", "Sunroof", "Apple CarPlay", "Android Auto",
  "Rear Camera", "Parking Sensors", "Cruise Control", "4WD / AWD",
  "Hill Descent Control", "Rear Diff Lock", "NTSA Compliant",
  "Tow Bar", "Side Steps", "Bull Bar", "Alloy Wheels",
  "Ambient Lighting", "Heated Seats", "Lane Assist", "Blind Spot Monitor",
];

interface ImageEntry { url: string; isHero: boolean; }

export default function EditVehicleClient({ vehicle }: { vehicle: any }) {
  const [isPending, startTransition] = useTransition();
  const [images, setImages] = useState<ImageEntry[]>(
    vehicle.images?.length > 0
      ? vehicle.images.map((img: any) => ({ url: img.url, isHero: img.isHero }))
      : [{ url: "", isHero: true }]
  );
  const [features, setFeatures] = useState<string[]>(vehicle.features || []);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const specs = vehicle.specs || {};

  const addImage = () => setImages((prev) => [...prev, { url: "", isHero: false }]);
  const removeImage = (i: number) => setImages((prev) => prev.filter((_, idx) => idx !== i));
  const setHero = (i: number) => setImages((prev) => prev.map((img, idx) => ({ ...img, isHero: idx === i })));
  const updateImageUrl = (i: number, url: string) =>
    setImages((prev) => prev.map((img, idx) => (idx === i ? { ...img, url } : img)));
  const toggleFeature = (f: string) =>
    setFeatures((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("images", JSON.stringify(images.filter((i) => i.url.trim())));
    formData.set("features", JSON.stringify(features));

    startTransition(async () => {
      const result = await updateVehicleAction(vehicle.id, formData);
      if (result?.error) {
        setError(result.error);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSuccess(true);
      }
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
          <FaCircleCheck size={40} className="text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Vehicle Updated!</h2>
        <p className="text-gray-500 mb-8">The changes have been saved to the database and are live on the website.</p>
        <div className="flex gap-4">
          <Link href="/admin/inventory" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
            Back to Inventory
          </Link>
          <Link href={`/inventory/${vehicle.id}`} target="_blank" className="border border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-colors">
            View on Website
          </Link>
        </div>
      </div>
    );
  }

  const inputCls = "w-full border border-gray-200 bg-gray-50 rounded-xl p-3.5 text-sm font-medium focus:border-red-500 focus:bg-white outline-none transition-colors";
  const labelCls = "block text-sm font-semibold text-gray-700 mb-2";
  const sectionCls = "bg-white rounded-2xl border border-gray-100 shadow-sm p-7";

  return (
    <div className="max-w-[1200px] pb-12">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/inventory" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors shadow-sm">
          <FaChevronLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Vehicle</h1>
          <p className="text-sm text-gray-500 mt-0.5">{vehicle.make} {vehicle.model} · {vehicle.year}</p>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link href={`/inventory/${vehicle.id}`} target="_blank" className="border border-gray-200 text-gray-600 bg-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
            View Live ↗
          </Link>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
          <FaCircleExclamation size={18} className="flex-shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:grid-cols-3 gap-7">
        {/* LEFT: Main info */}
        <div className="xl:col-span-2 space-y-7">

          {/* Basic Information */}
          <div className={sectionCls}>
            <h2 className="text-base font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Basic Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>Category *</label>
                <select name="category" required defaultValue={vehicle.category || ""} className={inputCls}>
                  <option value="">Select Category...</option>
                  <option value="Pickup">Pickup / Double Cab</option>
                  <option value="SUV">SUV</option>
                  <option value="Lorry">Lorry / Truck</option>
                  <option value="Bus">Bus / Matatu</option>
                  <option value="Spare Parts">Spare Parts</option>
                  <option value="Other Parts">Other Parts</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Make *</label>
                <input required name="make" defaultValue={vehicle.make} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Model *</label>
                <input required name="model" defaultValue={vehicle.model} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Year of Manufacture *</label>
                <input required name="year" type="number" defaultValue={vehicle.year} min="1990" max="2030" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Price (KES) *</label>
                <input required name="price" type="number" defaultValue={Number(vehicle.price)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Mileage (km)</label>
                <input name="mileage" type="number" defaultValue={vehicle.mileage ? Number(vehicle.mileage) : ""} placeholder="0 for new" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Condition *</label>
                <select name="condition" defaultValue={vehicle.condition} className={inputCls}>
                  <option value="NEW">Brand New</option>
                  <option value="USED">Locally Used</option>
                  <option value="REFURBISHED">Foreign Used / Refurbished</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Stock Status *</label>
                <select name="status" defaultValue={vehicle.status} className={inputCls}>
                  <option value="AVAILABLE">Available for Sale</option>
                  <option value="PENDING">Pending / Reserved</option>
                  <option value="SOLD">Sold</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Location</label>
                <input name="location" defaultValue={vehicle.location || "Nairobi, Kenya"} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Import / Local</label>
                <select name="importOrLocal" defaultValue={vehicle.importOrLocal || "Imported"} className={inputCls}>
                  <option value="Imported">Imported / Foreign Used</option>
                  <option value="Local">Locally Assembled</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label className={labelCls}>Description / Selling Points</label>
              <textarea name="description" rows={4} defaultValue={vehicle.description || ""}
                placeholder="Describe the vehicle in detail — condition, history, unique features..."
                className={`${inputCls} resize-none`} />
            </div>
          </div>

          {/* Features */}
          <div className={sectionCls}>
            <h2 className="text-base font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              Features & Equipment
              <span className="ml-2 text-xs text-gray-400 font-normal">({features.length} selected)</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {FEATURES_LIST.map((feature) => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl text-sm font-semibold border transition-all text-left ${
                    features.includes(feature)
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                    features.includes(feature) ? "bg-red-500" : "border-2 border-gray-300 bg-white"
                  }`}>
                    {features.includes(feature) && <FaCheck size={11} className="text-white" />}
                  </div>
                  <span className="leading-tight text-xs">{feature}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div className={sectionCls}>
            <h2 className="text-base font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div>
                <label className={labelCls}>Engine Type</label>
                <input name="engineType" defaultValue={specs.engineType || ""} placeholder="e.g. Turbo Diesel" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Engine CC</label>
                <input name="engineCc" type="number" defaultValue={specs.engineCc || ""} placeholder="2999" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Fuel Type</label>
                <select name="fuelType" defaultValue={specs.fuelType || "DIESEL"} className={inputCls}>
                  <option value="DIESEL">Diesel</option>
                  <option value="PETROL">Petrol</option>
                  <option value="HYBRID">Hybrid</option>
                  <option value="ELECTRIC">Electric</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Transmission</label>
                <select name="transmission" defaultValue={specs.transmission || "MANUAL"} className={inputCls}>
                  <option value="MANUAL">Manual</option>
                  <option value="AUTOMATIC">Automatic</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Drivetrain</label>
                <select name="drivetrain" defaultValue={specs.drivetrain || "4x4"} className={inputCls}>
                  <option value="4x4">4x4 (4WD)</option>
                  <option value="4x2">4x2 (2WD)</option>
                  <option value="AWD">AWD</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Horsepower (PS)</label>
                <input name="horsepower" type="number" defaultValue={specs.horsepower || ""} placeholder="163" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Torque (Nm)</label>
                <input name="torque" type="number" defaultValue={specs.torque || ""} placeholder="360" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Seating Capacity</label>
                <input name="seatingCapacity" type="number" defaultValue={specs.seatingCapacity || ""} placeholder="5" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Seat Material</label>
                <input name="seatMaterial" defaultValue={specs.seatMaterial || ""} placeholder="e.g. Leather" className={inputCls} />
              </div>
            </div>
          </div>

          {/* Vehicle ID */}
          <div className={sectionCls}>
            <h2 className="text-base font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">Vehicle Identification (Optional)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelCls}>VIN</label>
                <input name="vin" defaultValue={vehicle.vin || ""} placeholder="Vehicle Identification Number" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Chassis Number</label>
                <input name="chassisNumber" defaultValue={vehicle.chassisNumber || ""} placeholder="Chassis Number" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>License Plate</label>
                <input name="licensePlate" defaultValue={vehicle.licensePlate || ""} placeholder="KAA 000A" className={inputCls} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Images + Actions */}
        <div className="space-y-7">
          {/* Images */}
          <div className={sectionCls}>
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">Vehicle Images</h2>
              <button type="button" onClick={addImage} className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1">
                <FaPlus size={13} /> Add Image
              </button>
            </div>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              Enter image URLs or local paths. Mark one as the Main Image shown on listings.
            </p>
            <div className="space-y-4">
              {images.map((img, i) => (
                <div key={i} className={`p-4 rounded-xl border transition-colors ${img.isHero ? "border-red-300 bg-red-50/40" : "border-gray-100 bg-gray-50"}`}>
                  <div className="flex gap-3">
                    <div className="w-20 h-14 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
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
                        onChange={(e) => updateImageUrl(i, e.target.value)}
                        placeholder="https://... or /vehicles/dmax-hero.png"
                        className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2 text-xs font-medium focus:border-red-500 outline-none"
                      />
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setHero(i)}
                          className={`px-3 py-1.5 text-[10px] font-bold uppercase rounded-lg border transition-colors ${
                            img.isHero ? "bg-red-600 text-white border-red-600" : "bg-white border-gray-200 text-gray-500 hover:border-red-300 hover:text-red-600"
                          }`}
                        >
                          {img.isHero ? "Main ✓" : "Set Main"}
                        </button>
                        {images.length > 1 && (
                          <button type="button" onClick={() => removeImage(i)} className="p-1.5 text-gray-400 hover:text-red-500 bg-white rounded-lg border border-gray-200 transition-colors">
                            <FaTrash size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className={sectionCls}>
            <h2 className="text-base font-bold text-gray-900 mb-5">Save Changes</h2>
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-red-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm"
              >
                {isPending ? (
                  <><FaSpinner size={18} className="animate-spin" /> Saving Changes...</>
                ) : (
                  "Save All Changes"
                )}
              </button>
              <Link href="/admin/inventory" className="w-full border border-gray-200 text-gray-600 bg-gray-50 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center text-sm">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
