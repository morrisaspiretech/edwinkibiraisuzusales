const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const vehicleCount = await prisma.vehicle.count();
  const imageCount = await prisma.vehicleImage.count();
  
  console.log(`Vehicles: ${vehicleCount}`);
  console.log(`Images: ${imageCount}`);
  
  if (imageCount > 0) {
    const images = await prisma.vehicleImage.findMany({ take: 5 });
    console.log("Sample images:", images);
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
