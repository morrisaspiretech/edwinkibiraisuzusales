const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create default dealer user if not present
  const user = await prisma.user.upsert({
    where: { email: 'sales@edwinkibiraisuzu.co.ke' },
    update: {},
    create: {
      email: 'sales@edwinkibiraisuzu.co.ke',
      fullName: 'Edwin Kibirai Isuzu Sales',
      role: 'DEALER',
    },
  });

  console.log('Seeding Isuzu vehicles for', user.fullName);

  // Clear existing car entries to prevent outdated/incorrect images from persisting in database
  await prisma.carImage.deleteMany({});
  await prisma.carSpecs.deleteMany({});
  await prisma.car.deleteMany({});

  const cars = [
    {
      make: 'Isuzu',
      model: 'D-Max V-Cross 4x4',
      year: 2024,
      price: 6800000,
      description: 'Brand new Isuzu D-Max V-Cross 3.0L 4x4 Automatic. Ultimate toughness, luxury interior, and advanced safety features.',
      location: 'Nairobi',
      condition: 'NEW',
      status: 'AVAILABLE',
      specs: {
        create: {
          engineCc: 2999,
          fuelType: 'Diesel',
          transmission: 'Automatic',
          drivetrain: '4WD',
          horsepower: 190,
          seatingCapacity: 5,
        },
      },
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
            isHero: true,
            type: 'HERO',
          },
        ],
      },
    },
    {
      make: 'Isuzu',
      model: 'mu-X LS-T 7-Seater SUV',
      year: 2024,
      price: 8200000,
      description: '7-seater luxury SUV powered by Isuzu legendary 3.0L turbo-diesel engine. Premium leather seating and 4x4 capability.',
      location: 'Nairobi',
      condition: 'NEW',
      status: 'AVAILABLE',
      specs: {
        create: {
          engineCc: 2999,
          fuelType: 'Diesel',
          transmission: 'Automatic',
          drivetrain: '4WD',
          horsepower: 190,
          seatingCapacity: 7,
        },
      },
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1000&auto=format&fit=crop',
            isHero: true,
            type: 'HERO',
          },
        ],
      },
    },
    {
      make: 'Isuzu',
      model: 'NQR 75 Commercial Truck',
      year: 2023,
      price: 5200000,
      description: 'Reliable Isuzu NQR Commercial chassis. High payload capacity, fuel-efficient 5.2L engine, built for heavy-duty Kenyan transport.',
      location: 'Nairobi',
      condition: 'NEW',
      status: 'AVAILABLE',
      specs: {
        create: {
          engineCc: 5193,
          fuelType: 'Diesel',
          transmission: 'Manual',
          drivetrain: 'RWD',
          horsepower: 155,
          seatingCapacity: 3,
        },
      },
      images: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1586191583539-be21063b00da?q=80&w=1000&auto=format&fit=crop',
            isHero: true,
            type: 'HERO',
          },
        ],
      },
    },
  ];

  for (const carData of cars) {
    const createdCar = await prisma.car.create({
      data: {
        ...carData,
        sellerId: user.id,
      },
    });
    console.log(`Created car listing: ${createdCar.make} ${createdCar.model} (${createdCar.id})`);
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
