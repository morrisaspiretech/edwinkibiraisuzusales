"use server";

import { prisma } from "@repo/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateVehicleAction(id: string, formData: FormData) {
  try {
    const make = formData.get("make") as string;
    const model = formData.get("model") as string;
    const year = parseInt(formData.get("year") as string) || 2024;
    const price = parseFloat(formData.get("price") as string) || 0;
    const condition = (formData.get("condition") as any) || "NEW";
    const status = (formData.get("status") as any) || "AVAILABLE";
    const description = (formData.get("description") as string) || "";
    const location = (formData.get("location") as string) || "Nairobi, Kenya";
    const mileage = parseFloat(formData.get("mileage") as string) || null;
    const vin = (formData.get("vin") as string) || null;
    const chassisNumber = (formData.get("chassisNumber") as string) || null;
    const licensePlate = (formData.get("licensePlate") as string) || null;
    const importOrLocal = (formData.get("importOrLocal") as string) || "Imported";
    const category = (formData.get("category") as string) || null;

    const featuresRaw = formData.get("features") as string;
    let features: string[] = [];
    try { features = JSON.parse(featuresRaw || "[]"); } catch { features = []; }

    // Specs
    const engineType = (formData.get("engineType") as string) || null;
    const engineCc = parseInt(formData.get("engineCc") as string) || null;
    const fuelType = (formData.get("fuelType") as string) || "DIESEL";
    const transmission = (formData.get("transmission") as string) || "MANUAL";
    const drivetrain = (formData.get("drivetrain") as string) || "4x4";
    const horsepower = parseInt(formData.get("horsepower") as string) || null;
    const torque = parseInt(formData.get("torque") as string) || null;
    const seatingCapacity = parseInt(formData.get("seatingCapacity") as string) || null;
    const seatMaterial = (formData.get("seatMaterial") as string) || null;
    const turbocharged = formData.get("turbocharged") === "true";
    const appleCarplay = formData.get("appleCarplay") === "true";
    const androidAuto = formData.get("androidAuto") === "true";
    const abs = formData.get("abs") === "true";
    const sunroof = formData.get("sunroof") === "true";
    const heatedSeats = formData.get("heatedSeats") === "true";
    const laneAssist = formData.get("laneAssist") === "true";
    const blindSpotMonitor = formData.get("blindSpotMonitor") === "true";

    // Images
    const imagesRaw = formData.get("images") as string;
    let imageData: Array<{ url: string; isHero: boolean }> = [];
    try { imageData = JSON.parse(imagesRaw || "[]"); } catch { imageData = []; }

    // Update car
    await prisma.car.update({
      where: { id },
      data: {
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
        category,
        features,
      },
    });

    // Update specs (upsert)
    await prisma.carSpecs.upsert({
      where: { carId: id },
      create: {
        carId: id,
        engineType, engineCc, fuelType, transmission, drivetrain,
        horsepower, torque, seatingCapacity, seatMaterial,
        turbocharged, appleCarplay, androidAuto, abs, sunroof,
        heatedSeats, laneAssist, blindSpotMonitor,
      },
      update: {
        engineType, engineCc, fuelType, transmission, drivetrain,
        horsepower, torque, seatingCapacity, seatMaterial,
        turbocharged, appleCarplay, androidAuto, abs, sunroof,
        heatedSeats, laneAssist, blindSpotMonitor,
      },
    });

    // Replace images if provided
    if (imageData.length > 0) {
      await prisma.carImage.deleteMany({ where: { carId: id } });
      await prisma.carImage.createMany({
        data: imageData
          .filter((img) => img.url.trim())
          .map((img, idx) => ({
            carId: id,
            url: img.url,
            isHero: img.isHero,
            orderIndex: idx,
          })),
      });
    }

    revalidatePath("/admin/inventory");
    revalidatePath("/admin");
    revalidatePath(`/inventory/${id}`);
    revalidatePath("/");
  } catch (err: any) {
    console.error("updateVehicleAction error:", err);
    return { error: err?.message || "Failed to update vehicle." };
  }

  redirect("/admin/inventory");
}
