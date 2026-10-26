import { prisma } from "@repo/database";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function VehicleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let car: { model: string } | null = null;

  try {
    car = await prisma.car.findUnique({
      where: { id },
      select: { model: true }
    });
  } catch (err) {
    console.error("Error fetching vehicle:", err);
    redirect("/vehicles/");
  }

  if (!car) {
    redirect("/vehicles/");
  }

  const m = car.model.toLowerCase();
  let target = "/trucks/";
  
  if (m.includes("single")) target = "/vehicles/tfr87-4x2/";
  else if (m.includes("tfs40") || m.includes("tfs 40")) target = "/vehicles/tfs40-double-auto/";
  else if (m.includes("double") || m.includes("d-max") || m.includes("dmax")) target = "/vehicles/d-max/";
  else if (m.includes("mu-x") || m.includes("mux")) {
    if (m.includes("1900")) target = "/vehicles/mu-x-1900cc/";
    else target = "/vehicles/mu-x-3000cc/";
  }
  else if (m.includes("bus")) {
    target = "/buses/";
  }
  else if (m.includes("mover") || m.includes("gxz") || m.includes("quester") || m.includes("gwe") || m.includes("ud")) {
    target = "/vehicles/movers/";
  }
  else if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) {
    target = "/trucks/";
  }

  redirect(target);
}
