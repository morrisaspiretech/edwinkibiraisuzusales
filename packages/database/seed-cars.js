const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
  const gWagon = await prisma.vehicle.create({
    data: {
      make: 'Mercedes-Benz',
      model: 'G-Class G 63 AMG',
      year: 2024,
      price: 45000000,
      fuelType: 'Petrol',
      engineCC: 3982,
      transmission: 'Automatic',
      bodyType: 'SUV',
      mileage: 1500,
      color: 'Obsidian Black',
      category: 'CAR',
      status: 'AVAILABLE',
      condition: 'FOREIGN',
      description: 'The ultimate luxury off-roader with unparalleled performance and road presence.',
      vin: `W1N${Math.floor(Math.random() * 100000000000)}`,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }
        ]
      }
    }
  });

  const sedan = await prisma.vehicle.create({
    data: {
      make: 'Mercedes-Benz',
      model: 'S-Class S 580 4MATIC',
      year: 2024,
      price: 35000000,
      fuelType: 'Petrol',
      engineCC: 3982,
      transmission: 'Automatic',
      bodyType: 'Sedan',
      mileage: 200,
      color: 'Diamond White',
      category: 'CAR',
      status: 'AVAILABLE',
      condition: 'FOREIGN',
      description: 'Experience absolute executive luxury, cutting-edge technology, and unmatched comfort.',
      vin: `W1N${Math.floor(Math.random() * 100000000000)}`,
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop', isPrimary: true, position: 0 }
        ]
      }
    }
  });
  
  console.log("Successfully seeded:");
  console.log("1. G-Wagon created with ID:", gWagon.id);
  console.log("2. S-Class created with ID:", sedan.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
