import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, vehicleId } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    await (prisma as any).lead.create({
      data: {
        name,
        email: email || "noemail@lead.local",
        phone,
        message: message || "",
        vehicleId: vehicleId || null,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead creation error:", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
