import { NextResponse } from "next/server";
import { prisma } from "@repo/database";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Check if already subscribed
    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json({ success: true, message: "Already subscribed" });
    }

    // Create new subscriber
    await prisma.newsletterSubscriber.create({
      data: {
        email,
        source: source || "footer",
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
