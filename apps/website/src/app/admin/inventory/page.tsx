import { PrismaClient } from "@repo/database";
import Link from "next/link";
import { Plus, Trash2, Eye, Car } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import StatusSelect from "./StatusSelect";

export const dynamic = "force-dynamic";
const prisma = new PrismaClient();

async function deleteCar(formData: FormData) {
  "use server";
  const id = formData.get("id") as string;
  if (id) {
    // Cascade deletes handled by Prisma schema onDelete: Cascade
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
    <div className="space-y-6 max-w-7xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-wide">Inventory</h1>
          <p className="text-gray-400 text-sm mt-1">{cars.length} vehicle{cars.length !== 1 ? "s" : ""} in your fleet</p>
        </div>
        <Link
          href="/admin/inventory/new"
          className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 font-black text-sm uppercase tracking-widest hover:bg-[#b82222] transition-colors"
        >
          <Plus size={16} /> Add Vehicle
        </Link>
      </div>

      {cars.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center">
          <Car size={48} className="mx-auto mb-4 text-gray-200" />
          <p className="text-lg font-black text-gray-400 uppercase mb-2">No Vehicles Yet</p>
          <p className="text-sm text-gray-400 mb-6">Add your first Isuzu vehicle to get started.</p>
          <Link href="/admin/inventory/new" className="bg-secondary text-white px-6 py-3 font-black uppercase text-sm tracking-widest hover:bg-[#b82222] transition-colors">
            + Add First Vehicle
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left p-4 font-black text-xs uppercase tracking-wider text-gray-400">Vehicle</th>
                  <th className="text-left p-4 font-black text-xs uppercase tracking-wider text-gray-400 hidden md:table-cell">Specs</th>
                  <th className="text-left p-4 font-black text-xs uppercase tracking-wider text-gray-400">Price</th>
                  <th className="text-left p-4 font-black text-xs uppercase tracking-wider text-gray-400">Status</th>
                  <th className="text-right p-4 font-black text-xs uppercase tracking-wider text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-11 relative bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          {car.images[0] ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={car.images[0].url} alt={car.model} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                              <Car size={16} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-black text-gray-800">{car.make} {car.model}</p>
                          <p className="text-xs text-gray-400">{car.year} · {car.condition}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <div className="text-xs text-gray-500 space-y-0.5">
                        <p>{car.specs?.fuelType || "Diesel"} · {car.specs?.transmission || "Manual"}</p>
                        <p>{car.specs?.engineCc ? `${car.specs.engineCc}cc` : "—"}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-black text-secondary">KES {Number(car.price).toLocaleString()}</p>
                    </td>
                    <td className="p-4">
                      <StatusSelect
                        carId={car.id}
                        currentStatus={car.status}
                        updateStatusAction={updateStatus}
                      />
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/inventory/${car.id}`}
                          target="_blank"
                          className="text-gray-400 hover:text-secondary transition-colors p-1"
                          title="View on site"
                        >
                          <Eye size={17} />
                        </Link>
                        <form action={deleteCar} className="inline">
                          <input type="hidden" name="id" value={car.id} />
                          <button
                            type="submit"
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title={`Delete ${car.make} ${car.model}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
