import { Metadata } from 'next';
import { calculateTaxes } from '@repo/utils/src/crsp/calculator';
import Image from 'next/image';

interface Props {
    params: {
        make: string;
        model: string;
        year: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { make, model, year } = params;
    const title = `${make.toUpperCase()} ${model.toUpperCase()} ${year} for Sale in Kenya | Price, Specs & CRSP Value`;
    const description = `Get detailed specifications, CRSP valuation, and import duty calculation for the ${year} ${make} ${model} in Kenya. Explore the best car marketplace in Africa.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
        }
    };
}

export default function CarDetailPage({ params }: Props) {
    const { make, model, year } = params;

    // Mock data for initial implementation
    // In a real scenario, this would be fetched from Supabase
    const mockCar = {
        price: 8500000,
        engineCc: 2800,
        transmission: "Automatic",
        fuelType: "Diesel",
        mileage: "45,000 km",
        color: "Pearl White",
        specs: {
            horsepower: 201,
            torque: 500,
            seating: 7,
            drivetrain: "4WD"
        }
    };

    const taxes = calculateTaxes({
        originalCrsp: mockCar.price,
        engineCapacityCc: mockCar.engineCc,
        yearOfManufacture: parseInt(year),
        isCommercial: false
    });

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="flex items-center justify-center h-full bg-slate-900">
                    <span className="text-2xl font-bold uppercase tracking-widest text-white/20">360° View Placeholder</span>
                </div>

                <div className="absolute bottom-10 left-10 z-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
                        {make} <span className="text-primary">{model}</span>
                    </h1>
                    <p className="text-xl text-white/60 mt-2 font-medium">Model Year: {year}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-8 bg-primary block" /> Technical Specifications
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Engine", value: `${mockCar.engineCc}cc` },
                                { label: "Transmission", value: mockCar.transmission },
                                { label: "Fuel", value: mockCar.fuelType },
                                { label: "Drivetrain", value: mockCar.specs.drivetrain },
                                { label: "Power", value: `${mockCar.specs.horsepower} hp` },
                                { label: "Torque", value: `${mockCar.specs.torque} Nm` },
                                { label: "Seating", value: `${mockCar.specs.seating} Seats` },
                                { label: "Mileage", value: mockCar.mileage },
                            ].map((spec) => (
                                <div key={spec.label} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-primary/50 transition-colors">
                                    <p className="text-xs text-white/40 uppercase font-bold tracking-wider">{spec.label}</p>
                                    <p className="text-lg font-semibold mt-1">{spec.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-primary/10 border border-primary/20 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg size={120} />
                        </div>
                        <h2 className="text-2xl font-bold mb-6">Import Duty Estimate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/60">CRSP Value (KRA)</span>
                                    <span className="font-mono">KES {mockCar.price.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/60">Depreciation ({taxes.depreciationRate * 100}%)</span>
                                    <span className="font-mono text-red-400">-{(mockCar.price * taxes.depreciationRate).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/60">Customs Value</span>
                                    <span className="font-mono">KES {taxes.depreciatedCrsp.toLocaleString()}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Import Duty (35%)</span>
                                    <span>KES {taxes.importDuty.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Excise Duty</span>
                                    <span>KES {taxes.exciseDuty.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">VAT (16%)</span>
                                    <span>KES {taxes.vat.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between pt-4 border-t border-white/20 text-xl font-bold">
                                    <span>Total Landing Cost</span>
                                    <span className="text-primary uppercase">KES {taxes.estimatedTotal.toLocaleString()}*</span>
                                </div>
                                <p className="text-[10px] text-white/40 italic mt-2">*Subject to NTSA & KRA verification at the port.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl text-black">
                        <p className="text-sm font-bold uppercase tracking-wider text-black/40 mb-1">Asking Price</p>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl font-black">8.5M</span>
                            <span className="text-lg font-bold text-black/60">KES</span>
                            <div className="ml-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Great Deal</div>
                        </div>

                        <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-transform active:scale-95 mb-3">
                            Contact Seller
                        </button>
                        <button className="w-full bg-slate-100 text-black font-bold py-4 rounded-xl hover:bg-slate-200 transition-transform active:scale-95">
                            Book Inspection
                        </button>

                        <div className="mt-8 pt-8 border-t border-black/5 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full" />
                                <div>
                                    <p className="font-bold">Premium Motors Ltd</p>
                                    <p className="text-xs text-black/40">Verified Dealer • 4.9/5 ★</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                        <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">AI Vehicle Insights</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                            This {model} is priced 12% below market average in Nairobi. It features the rare GR-Sport trim package which usually retains 8% more value over 5 years.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
