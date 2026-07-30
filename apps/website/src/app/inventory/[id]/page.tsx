import { PrismaClient } from "@repo/database";
import { notFound } from "next/navigation";
import VehicleClientView from "./VehicleClientView";
import { Vehicle } from "@/types/vehicle";

const prisma = new PrismaClient();

export default async function VehicleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      include: {
        images: { orderBy: { orderIndex: 'asc' } },
        specs: true
      }
    });

    if (!car) {
      notFound();
    }

    const mappedVehicle = {
      ...car,
      price: Number(car.price),
      mileage: car.mileage ? Number(car.mileage) : 0,
      fuelType: car.specs?.fuelType || 'Diesel',
      engineCC: car.specs?.engineCc || 0,
      transmission: car.specs?.transmission || 'Manual',
      bodyType: car.model.toLowerCase().includes('mu-x') ? 'SUV' : car.model.toLowerCase().includes('d-max') ? 'Pickup' : 'Truck',
      category: 'CAR'
    } as unknown as Vehicle;

    return <VehicleClientView initialVehicle={mappedVehicle} />;
  } catch (err) {
    console.error("Error fetching vehicle:", err);
    notFound();
  }
}
