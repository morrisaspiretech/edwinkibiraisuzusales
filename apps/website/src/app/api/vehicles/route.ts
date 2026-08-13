import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export const dynamic = "force-dynamic";


export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: { images: true, specs: true },
      orderBy: { createdAt: "desc" },
    });

    const mapped = cars.map((car: any) => ({
      ...car,
      price: Number(car.price),
      mileage: car.mileage ? Number(car.mileage) : 0,
      fuelType: car.specs?.fuelType || "Diesel",
      engineCC: car.specs?.engineCc || 0,
      transmission: car.specs?.transmission || "Manual",
      bodyType: car.model.toLowerCase().includes("mu-x")
        ? "SUV"
        : car.model.toLowerCase().includes("d-max")
        ? "Pickup"
        : "Truck",
      category: "CAR",
    }));

    return NextResponse.json(mapped);
  } catch (err) {
    console.error("vehicles API error:", err);
    return NextResponse.json({ error: "Failed to fetch vehicles" }, { status: 500 });
  }
}
