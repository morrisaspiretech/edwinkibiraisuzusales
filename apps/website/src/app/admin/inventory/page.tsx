import { prisma } from "@repo/database";
import Link from "next/link";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import StatusSelect from "./StatusSelect";
import { FaPlus, FaTrash, FaEye, FaCar, FaMagnifyingGlass, FaFilter } from "react-icons/fa6";

export const dynamic = "force-dynamic";

async function deleteCar(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  if (id) {
    await prisma.car.delete({ where: { id } });
    revalidatePath("/admin/inventory");
    revalidatePath("/");
  }
  redirect("/admin/inventory");
}

async function updateStatus(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  const status = formData.get("status") as string;
  if (id && status) {
    await prisma.car.update({ where: { id }, data: { status: status as any } });
    revalidatePath("/admin/inventory");
    revalidatePath("/");
  }
  redirect("/admin/inventory");
}

export default async function AdminInventoryPage() {
  const cars = await prisma.car.findMany({
    include: { images: true, specs: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Vehicle Inventory</h1>
          <p className="text-gray-500 text-sm mt-1">{cars.length} vehicle{cars.length !== 1 ? "s" : ""} in stock</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search vehicles..." 
              className="pl-9 pr-4 py-2 border border-gray-200 bg-gray-50 rounded-xl text-sm outline-none focus:border-red-500 transition-colors w-64"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-gray-50 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors">
            <FaFilter size={16} />
            Filter
          </button>
          
          <Link
            href="/admin/inventory/new"
            className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-sm"
          >
            <FaPlus size={16} /> Add Vehicle
          </Link>
        </div>
      </div>

      {/* Main Table */}
      {cars.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-20 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <FaCar size={32} className="text-gray-400" />
          </div>
          <p className="text-xl font-bold text-gray-900 mb-2">No Vehicles Found</p>
          <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">Your inventory is currently empty. Add your first vehicle to start tracking your stock.</p>
          <Link href="/admin/inventory/new" className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors shadow-sm inline-flex items-center gap-2">
            <FaPlus size={16} /> Add First Vehicle
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="py-5 px-6 font-semibold text-gray-500 w-[400px]">Vehicle Details</th>
                  <th className="py-5 px-6 font-semibold text-gray-500">Category</th>
                  <th className="py-5 px-6 font-semibold text-gray-500">Price (KES)</th>
                  <th className="py-5 px-6 font-semibold text-gray-500">Status</th>
                  <th className="py-5 px-6 font-semibold text-gray-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-14 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                          {car.images[0] ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={car.images[0].url} alt={car.model} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                              <FaCar size={20} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[15px]">{car.make} {car.model}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-medium">
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{car.year}</span>
                            <span>·</span>
                            <span>{car.condition === 'NEW' ? 'Brand New' : car.condition === 'USED' ? 'Locally Used' : 'Foreign Used'}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md">
                        {car.category || "Uncategorized"}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-gray-900">KES {Number(car.price).toLocaleString()}</p>
                    </td>
                    <td className="py-4 px-6">
                      <StatusSelect
                        carId={car.id}
                        currentStatus={car.status}
                        updateStatusAction={updateStatus}
                      />
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/inventory/${car.id}/edit`}
                          className="px-3 py-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                          title="Edit Vehicle"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/inventory/${car.id}`}
                          target="_blank"
                          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-white hover:text-blue-600 hover:shadow-sm border border-transparent hover:border-gray-200 transition-all"
                          title="View Live on Website"
                        >
                          <FaEye size={16} />
                        </Link>
                        <form action={deleteCar} className="inline">
                          <input type="hidden" name="id" value={car.id} />
                          <button
                            type="submit"
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-white hover:text-red-600 hover:shadow-sm border border-transparent hover:border-gray-200 transition-all"
                            title="Delete Vehicle"
                            onClick={(e) => { if (!confirm(`Delete ${car.make} ${car.model}? This cannot be undone.`)) e.preventDefault(); }}
                          >
                            <FaTrash size={16} />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Showing {cars.length} results</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">Previous</button>
              <button className="px-3 py-1.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors">Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
