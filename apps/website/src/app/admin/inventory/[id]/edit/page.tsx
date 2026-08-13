import { prisma } from "@repo/database";
import { notFound } from "next/navigation";
import EditVehicleClient from "./EditVehicleClient";

export const dynamic = "force-dynamic";

export default async function EditVehiclePage({ params }: { params: { id: string } }) {
  const vehicle = await prisma.car.findUnique({
    where: { id: params.id },
    include: { images: { orderBy: { orderIndex: "asc" } }, specs: true },
  });

  if (!vehicle) notFound();

  return <EditVehicleClient vehicle={vehicle} />;
}
