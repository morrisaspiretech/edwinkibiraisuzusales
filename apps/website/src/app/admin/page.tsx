import { prisma } from "@repo/database";
import Link from "next/link";
import { FaCar, FaArrowTrendUp, FaCircleCheck, FaClock, FaCircleExclamation, FaPlus, FaArrowRight, FaEye } from "react-icons/fa6";


export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  // Fetch real data from database
  const [allCars, recentCars] = await Promise.all([
    prisma.car.findMany({ include: { images: true } }),
    prisma.car.findMany({
      include: { images: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);

  const totalVehicles = allCars.length;
  const available = allCars.filter((c) => c.status === "AVAILABLE").length;
  const sold = allCars.filter((c) => c.status === "SOLD").length;
  const pending = allCars.filter((c) => c.status === "PENDING").length;

  // Revenue from sold vehicles
  const revenue = allCars
    .filter((c) => c.status === "SOLD")
    .reduce((sum, c) => sum + Number(c.price), 0);

  // Category breakdown
  const categories: Record<string, number> = {};
  for (const car of allCars) {
    const cat = car.category || "Uncategorized";
    categories[cat] = (categories[cat] || 0) + 1;
  }

  const formatPrice = (p: number) =>
    p >= 1_000_000
      ? `KES ${(p / 1_000_000).toFixed(1)}M`
      : `KES ${p.toLocaleString()}`;

  const statusColor: Record<string, string> = {
    AVAILABLE: "bg-emerald-50 text-emerald-700 border-emerald-200",
    SOLD: "bg-blue-50 text-blue-700 border-blue-200",
    PENDING: "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <div className="space-y-8 max-w-[1400px]">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-2xl p-6 text-white flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">Good day, Edwin 👋</p>
          <h2 className="text-2xl font-bold">Welcome to your Dealership Dashboard</h2>
          <p className="text-white/50 text-sm mt-1">
            You have {available} vehicle{available !== 1 ? "s" : ""} available for sale
          </p>
        </div>
        <Link
          href="/admin/inventory/new"
          className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-red-900/30 whitespace-nowrap"
        >
          <FaPlus size={18} /> Add Vehicle
        </Link>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <FaCar size={20} className="text-gray-600" />
            </div>
            <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2 py-1 rounded-md">Fleet</span>
          </div>
          <p className="text-3xl font-black text-gray-900">{totalVehicles}</p>
          <p className="text-sm text-gray-500 mt-1 font-medium">Total Vehicles</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
              <FaCircleCheck size={20} className="text-emerald-600" />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Live</span>
          </div>
          <p className="text-3xl font-black text-gray-900">{available}</p>
          <p className="text-sm text-gray-500 mt-1 font-medium">Available for Sale</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <FaArrowTrendUp size={20} className="text-blue-600" />
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Sold</span>
          </div>
          <p className="text-3xl font-black text-gray-900">{sold}</p>
          <p className="text-sm text-gray-500 mt-1 font-medium">Units Sold</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <FaClock size={20} className="text-amber-600" />
            </div>
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">Pending</span>
          </div>
          <p className="text-3xl font-black text-gray-900">{pending}</p>
          <p className="text-sm text-gray-500 mt-1 font-medium">Pending Sales</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Inventory */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h3 className="font-bold text-gray-900">Recent Inventory</h3>
            <Link href="/admin/inventory" className="text-sm text-red-600 font-semibold hover:underline flex items-center gap-1">
              View All <FaArrowRight size={14} />
            </Link>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Vehicle</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentCars.map((car) => {
                const heroImg = car.images.find((i) => i.isHero) || car.images[0];
                return (
                  <tr key={car.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          {heroImg ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={heroImg.url} alt={car.model} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FaCar size={16} className="text-gray-300" />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[13px] leading-tight">{car.model}</p>
                          <p className="text-gray-400 text-[11px]">{car.make} · {car.year}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                        {car.category || "—"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-900 text-[13px]">
                        KES {Number(car.price).toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${statusColor[car.status] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
                        {car.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/inventory/${car.id}/edit`} className="text-gray-400 hover:text-red-600 transition-colors">
                        <FaEye size={15} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Stock by Category */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-5">Stock by Category</h3>
            <div className="space-y-4">
              {Object.entries(categories).map(([cat, count]) => {
                const pct = Math.round((count / totalVehicles) * 100);
                const colors: Record<string, string> = {
                  Pickup: "bg-blue-500",
                  SUV: "bg-purple-500",
                  Lorry: "bg-red-500",
                  Bus: "bg-amber-500",
                  "Spare Parts": "bg-teal-500",
                  "Other Parts": "bg-gray-400",
                };
                const barColor = colors[cat] || "bg-gray-400";
                return (
                  <div key={cat}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-gray-700">{cat}</span>
                      <span className="text-sm font-bold text-gray-900">{count} <span className="text-gray-400 font-normal">units</span></span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${barColor}`} style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link href="/admin/inventory/new" className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-red-200 bg-red-50 hover:bg-red-100 transition-colors group">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPlus size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Add New Vehicle</p>
                  <p className="text-xs text-gray-500">Add a car, bus, truck or parts</p>
                </div>
              </Link>
              <Link href="/admin/inventory" className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCar size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Manage Inventory</p>
                  <p className="text-xs text-gray-500">Edit, update or remove vehicles</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Revenue Summary */}
          {sold > 0 && (
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1e3a5f] rounded-2xl p-6 text-white">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">Revenue from Sales</p>
              <p className="text-3xl font-black">{formatPrice(revenue)}</p>
              <p className="text-white/50 text-xs mt-1">From {sold} sold unit{sold !== 1 ? "s" : ""}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
