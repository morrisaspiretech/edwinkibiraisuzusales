import { PrismaClient } from "@repo/database";
import Link from "next/link";
import { Car, TrendingUp, CheckCircle2, AlertCircle, Plus } from "lucide-react";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

export default async function AdminDashboardPage() {
  const [totalCars, availableCars, soldCars, recentCars] = await Promise.all([
    prisma.car.count(),
    prisma.car.count({ where: { status: "AVAILABLE" } }),
    prisma.car.count({ where: { status: "SOLD" } }),
    prisma.car.findMany({
      include: { images: true, specs: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const allCarsForValue = await prisma.car.findMany({ select: { price: true } });
  const totalValue = allCarsForValue.reduce((sum, c) => sum + Number(c.price), 0);

  const allCarsForBreakdown = await prisma.car.findMany({ select: { model: true } });

  const stats = [
    { label: "Total Vehicles", value: totalCars, icon: Car, color: "bg-blue-50 text-blue-600", trend: "In Stock" },
    { label: "Available", value: availableCars, icon: CheckCircle2, color: "bg-emerald-50 text-emerald-600", trend: "Ready to Sell" },
    { label: "Sold Units", value: soldCars, icon: TrendingUp, color: "bg-secondary/10 text-secondary", trend: "All Time" },
    { label: "Portfolio Value", value: `KES ${(totalValue / 1_000_000).toFixed(1)}M`, icon: TrendingUp, color: "bg-purple-50 text-purple-600", trend: "Total Asking" },
  ];

  const categories = [
    { label: "Pickups (D-Max)", count: allCarsForBreakdown.filter(c => c.model.toLowerCase().includes("d-max")).length, color: "bg-blue-500" },
    { label: "SUVs (mu-X)", count: allCarsForBreakdown.filter(c => c.model.toLowerCase().includes("mu-x")).length, color: "bg-secondary" },
    { label: "Trucks", count: allCarsForBreakdown.filter(c => ["nqr", "npr", "fvr", "truck"].some(k => c.model.toLowerCase().includes(k))).length, color: "bg-orange-500" },
    { label: "Buses", count: allCarsForBreakdown.filter(c => ["bus", "mv114"].some(k => c.model.toLowerCase().includes(k))).length, color: "bg-emerald-500" },
  ];

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">Welcome back, Edwin. Here&apos;s your dealership overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, trend }) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                <Icon size={20} />
              </div>
            </div>
            <p className="text-2xl font-black text-gray-900">{value}</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">{label}</p>
            <p className="text-[10px] text-gray-300 mt-1 uppercase tracking-widest">{trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Vehicles */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between p-5 border-b border-gray-50">
            <h2 className="font-black text-gray-800 uppercase text-sm tracking-wide">Recent Vehicles</h2>
            <Link href="/admin/inventory" className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline">
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentCars.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                <Car size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm font-bold">No vehicles yet.</p>
                <Link href="/admin/inventory/new" className="text-xs text-secondary font-bold hover:underline">Add your first vehicle →</Link>
              </div>
            ) : recentCars.map((car) => (
              <div key={car.id} className="flex items-center gap-4 p-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-14 h-10 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  {car.images[0] ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={car.images[0].url} alt={car.model} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <Car size={14} />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-gray-800 text-sm truncate">{car.make} {car.model}</p>
                  <p className="text-xs text-gray-400">{car.year} · {car.condition}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-black text-secondary text-sm">KES {Number(car.price).toLocaleString()}</p>
                  <span className={`inline-block text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    car.status === "AVAILABLE" ? "bg-emerald-50 text-emerald-600" :
                    car.status === "SOLD" ? "bg-gray-100 text-gray-500" :
                    "bg-yellow-50 text-yellow-700"
                  }`}>{car.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Fleet Breakdown */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-black text-gray-800 uppercase text-sm tracking-wide mb-4">Fleet Breakdown</h2>
            <div className="space-y-3">
              {categories.map(({ label, count, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                    <span>{label}</span>
                    <span>{count}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${color}`}
                      style={{ width: totalCars > 0 ? `${Math.round((count / totalCars) * 100)}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-black text-gray-800 uppercase text-sm tracking-wide mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Link
                href="/admin/inventory/new"
                className="flex items-center gap-3 p-3 bg-secondary text-white rounded-lg font-bold text-sm hover:bg-[#b82222] transition-colors"
              >
                <Plus size={16} /> Add New Vehicle
              </Link>
              <Link
                href="/admin/inventory"
                className="flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                <Car size={16} /> Manage Inventory
              </Link>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
              >
                <AlertCircle size={16} /> View Live Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
