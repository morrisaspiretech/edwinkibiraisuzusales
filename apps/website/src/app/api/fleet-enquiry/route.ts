import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, contactPerson, email, phone, fleetSize, vehicleTypes, notes } = body;

    if (!contactPerson || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save as a Lead, encoding fleet-specific data into the message
    const message = [
      `Company/Organisation: ${companyName || "Not specified"}`,
      `Fleet Size Required: ${fleetSize || "Not specified"}`,
      `Vehicle Types Needed: ${vehicleTypes?.join(", ") || "Not specified"}`,
      notes ? `Additional Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await (prisma as any).lead.create({
      data: {
        name: contactPerson,
        email,
        phone,
        message: `[FLEET ENQUIRY]\n${message}`,
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Fleet enquiry error:", err);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
