"use server";

import { PrismaClient } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createVehicleAction(formData: FormData) {
  try {
    // Get or create admin user
    let admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });
    if (!admin) {
      admin = await prisma.user.create({
        data: { email: "admin@edwinkibiraisuzu.co.ke", fullName: "Edwin Kibira", role: "ADMIN" },
      });
    }

    const make = formData.get("make") as string;
    const model = formData.get("model") as string;
    const year = parseInt(formData.get("year") as string) || 2024;
    const price = parseFloat(formData.get("price") as string) || 0;
    const condition = (formData.get("condition") as any) || "NEW";
    const status = (formData.get("status") as any) || "AVAILABLE";
    const description = formData.get("description") as string || "";
    const location = formData.get("location") as string || "Nairobi, Kenya";
    const mileage = parseFloat(formData.get("mileage") as string) || null;
    const vin = formData.get("vin") as string || null;
    const chassisNumber = formData.get("chassisNumber") as string || null;
    const licensePlate = formData.get("licensePlate") as string || null;
    const importOrLocal = formData.get("importOrLocal") as string || "Imported";

    // Specs
    const engineType = formData.get("engineType") as string || null;
    const engineCc = parseInt(formData.get("engineCc") as string) || null;
    const fuelType = formData.get("fuelType") as string || "DIESEL";
    const transmission = formData.get("transmission") as string || "MANUAL";
    const drivetrain = formData.get("drivetrain") as string || "4x4";
    const horsepower = parseInt(formData.get("horsepower") as string) || null;
    const torque = parseInt(formData.get("torque") as string) || null;
    const seatingCapacity = parseInt(formData.get("seatingCapacity") as string) || null;
    const seatMaterial = formData.get("seatMaterial") as string || null;

    // Booleans
    const turbocharged = formData.get("turbocharged") === "true";
    const appleCarplay = formData.get("appleCarplay") === "true";
    const androidAuto = formData.get("androidAuto") === "true";
    const abs = formData.get("abs") !== null;
    const sunroof = formData.get("sunroof") === "true";
    const heatedSeats = formData.get("heatedSeats") === "true";
    const laneAssist = formData.get("laneAssist") === "true";
    const blindSpotMonitor = formData.get("blindSpotMonitor") === "true";

    // Images
    const imagesRaw = formData.get("images") as string;
    let imageData: Array<{ url: string; isHero: boolean }> = [];
    try { imageData = JSON.parse(imagesRaw || "[]"); } catch { imageData = []; }

    // Create car
    await prisma.car.create({
      data: {
        sellerId: admin.id,
        make,
        model,
        year,
        price,
        condition,
        status,
        description,
        location,
        mileage: mileage || undefined,
        vin: vin || undefined,
        chassisNumber: chassisNumber || undefined,
        licensePlate: licensePlate || undefined,
        importOrLocal,
        specs: {
          create: {
            engineType,
            engineCc,
            fuelType,
            transmission,
            drivetrain,
            horsepower,
            torque,
            seatingCapacity,
            seatMaterial,
            turbocharged,
            appleCarplay,
            androidAuto,
            abs,
            sunroof,
            heatedSeats,
            laneAssist,
            blindSpotMonitor,
          },
        },
        images: imageData.length > 0 ? {
          create: imageData.map((img, idx) => ({
            url: img.url,
            isHero: img.isHero,
            orderIndex: idx,
          })),
        } : undefined,
      },
    });

    revalidatePath("/admin/inventory");
    revalidatePath("/admin");
    revalidatePath("/");
  } catch (err: any) {
    console.error("createVehicleAction error:", err);
    return { error: err?.message || "Failed to save vehicle. Please try again." };
  }

  redirect("/admin/inventory");
}
