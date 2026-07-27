const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding KRA CRSP models (July 2025 - Real Data)...');
  
  const crspDataPath = path.join(__dirname, '../../kra-crsp-data/crsp-mock.json');
  const crspData = JSON.parse(fs.readFileSync(crspDataPath, 'utf8'));
  console.log(`Found ${crspData.length} models to seed...`);

  for (const item of crspData) {
    await prisma.cRSPModel.upsert({
      where: { make_model: { make: item.make, model: item.model } },
      update: {},
      create: item,
    });
  }

  console.log('Seeding sample vehicles...');

  const vehicles = [
    {
      make: 'Toyota',
      model: 'Land Cruiser Prado TX',
      year: 2021,
      price: 7900000,
      fuelType: 'Diesel',
      engineCC: 2800,
      transmission: 'Automatic',
      bodyType: 'SUV',
      mileage: 45000,
      color: 'Pearl White',
      driveType: '4WD',
      description: 'Excellent condition 2021 Toyota Prado TX. Clean interior, well maintained.',
      status: 'AVAILABLE',
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&q=80', isPrimary: true },
          { url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80', isPrimary: false },
        ]
      }
    },
    {
      make: 'Mazda',
      model: 'CX-5',
      year: 2018,
      price: 2850000,
      fuelType: 'Petrol',
      engineCC: 2000,
      transmission: 'Automatic',
      bodyType: 'SUV',
      mileage: 62000,
      color: 'Soul Red',
      driveType: 'AWD',
      description: 'Stylish and performance-driven Mazda CX-5. Great for family use.',
      status: 'AVAILABLE',
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80', isPrimary: true },
        ]
      }
    }
  ];

  for (const vehicle of vehicles) {
    await prisma.vehicle.create({
      data: vehicle,
    });
  }

  console.log('Seed complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
