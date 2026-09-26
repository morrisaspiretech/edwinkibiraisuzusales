import { NextResponse } from 'next/server';
import { prisma } from '@repo/database';

export const dynamic = 'force-dynamic';

export async function GET() {
  let dbStatus = 'connected';
  let carCount = 0;
  try {
    carCount = await prisma.car.count();
  } catch (err: any) {
    dbStatus = `error: ${err.message}`;
  }

  return NextResponse.json({
    status: 'ok',
    database: dbStatus,
    totalCars: carCount,
    timestamp: new Date().toISOString(),
    service: 'Edwin Kibirai Isuzu Sales'
  });
}
