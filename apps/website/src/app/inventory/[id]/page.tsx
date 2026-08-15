import { prisma } from "@repo/database";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function VehicleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      select: { model: true }
    });

    if (!car) {
      notFound();
    }

    const m = car.model.toLowerCase();
    let slug = "light-trucks-n-series";
    
    if (m.includes("single")) slug = "single-cabin";
    else if (m.includes("kipchoge")) slug = "kipchoge-limited-edition";
    else if (m.includes("double") || m.includes("d-max") || m.includes("dmax")) slug = "double-cabin";
    else if (m.includes("mu-x") || m.includes("mux")) {
      if (m.includes("1900")) slug = "mu-x-1900cc";
      else slug = "mu-x-3000cc";
    }
    else if (m.includes("bus")) {
      if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) slug = "f-series-buses";
      else slug = "n-series-buses";
    }
    else if (m.includes("mover") || m.includes("gxz")) slug = "movers";
    else if (m.includes("f-series") || m.includes("frr") || m.includes("fvr")) slug = "heavy-trucks-f-series";

    redirect(`/vehicles/${slug}`);
  } catch (err) {
    console.error("Error fetching vehicle:", err);
    notFound();
  }
}
