const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ISUZU_VEHICLES = [
  // PICKUPS
  {
    make: "Isuzu",
    model: "D-Max Single Cab 4x2",
    year: 2024,
    price: 4500000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Reliable and durable single cab workhorse for your business needs.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 1898,
      fuelType: "DIESEL",
      transmission: "MANUAL",
      drivetrain: "4x2",
      seatingCapacity: 2,
    },
    images: [{ url: "/vehicles/dmax-silver.png", isHero: true, orderIndex: 0 }]
  },
  {
    make: "Isuzu",
    model: "D-Max Double Cab LS 4x4",
    year: 2024,
    price: 5900000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Versatile double cab for both family and rugged off-road work.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 1898,
      fuelType: "DIESEL",
      transmission: "AUTOMATIC",
      drivetrain: "4x4",
      seatingCapacity: 5,
    },
    images: [{ url: "/vehicles/dmax-silver.png", isHero: true, orderIndex: 0 }]
  },
  {
    make: "Isuzu",
    model: "D-Max V-Cross 3.0L 4x4",
    year: 2024,
    price: 6800000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Premium top-of-the-range D-Max with superior comfort, power, and luxury.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 2999,
      fuelType: "DIESEL",
      transmission: "AUTOMATIC",
      drivetrain: "4x4",
      seatingCapacity: 5,
      appleCarplay: true,
      androidAuto: true
    },
    images: [{ url: "/vehicles/dmax-hero.png", isHero: true, orderIndex: 0 }]
  },
  
  // SUVs
  {
    make: "Isuzu",
    model: "mu-X 3.0L SUV",
    year: 2024,
    price: 8200000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "7-seater premium family SUV with commanding presence and legendary Isuzu reliability.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 2999,
      fuelType: "DIESEL",
      transmission: "AUTOMATIC",
      drivetrain: "4x4",
      seatingCapacity: 7,
      seatMaterial: "Leather",
      appleCarplay: true,
      androidAuto: true
    },
    images: [{ url: "/vehicles/mux-hero.png", isHero: true, orderIndex: 0 }]
  },
  {
    make: "Isuzu",
    model: "mu-X LS-U 4x4",
    year: 2024,
    price: 9100000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Luxury trim mu-X with advanced safety and technology features.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 2999,
      fuelType: "DIESEL",
      transmission: "AUTOMATIC",
      drivetrain: "4x4",
      seatingCapacity: 7,
      seatMaterial: "Premium Leather",
      heatedSeats: true
    },
    images: [{ url: "/vehicles/mux-black.png", isHero: true, orderIndex: 0 }]
  },

  // COMMERCIAL TRUCKS
  {
    make: "Isuzu",
    model: "NQR N-Series Truck",
    year: 2023,
    price: 5200000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Robust NQR truck capable of hauling heavy loads safely.",
    specs: {
      engineType: "Diesel",
      engineCc: 5193,
      fuelType: "DIESEL",
      transmission: "MANUAL",
      drivetrain: "4x2",
      seatingCapacity: 3
    },
    images: [{ url: "/vehicles/nqr-hero.png", isHero: true, orderIndex: 0 }]
  },
  {
    make: "Isuzu",
    model: "NPR 75 Light Truck",
    year: 2023,
    price: 4100000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "The preferred light commercial truck for urban distribution.",
    specs: {
      engineType: "Diesel",
      engineCc: 3856,
      fuelType: "DIESEL",
      transmission: "MANUAL",
      drivetrain: "4x2",
      seatingCapacity: 3
    },
    images: [{ url: "/vehicles/fvr-truck.png", isHero: true, orderIndex: 0 }]
  },
  {
    make: "Isuzu",
    model: "FVR 90 Heavy Commercial",
    year: 2023,
    price: 7800000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Heavy-duty F-Series truck for long-haul logistics and transportation.",
    specs: {
      engineType: "Turbo Diesel",
      engineCc: 7790,
      fuelType: "DIESEL",
      transmission: "MANUAL",
      drivetrain: "4x2",
      seatingCapacity: 3
    },
    images: [{ url: "/vehicles/fvr-truck.png", isHero: true, orderIndex: 0 }]
  },
  
  // BUSES
  {
    make: "Isuzu",
    model: "MV114 Bus",
    year: 2023,
    price: 9500000,
    condition: "NEW",
    status: "AVAILABLE",
    description: "Comfortable and safe passenger bus ideal for schools and institutions.",
    specs: {
      engineType: "Diesel",
      engineCc: 5193,
      fuelType: "DIESEL",
      transmission: "MANUAL",
      drivetrain: "4x2",
      seatingCapacity: 33
    },
    images: [{ url: "/vehicles/nqr-hero.png", isHero: true, orderIndex: 0 }] // Using nqr-hero placeholder for now
  }
];

async function seed() {
  console.log('Seeding Isuzu vehicles...');
  
  // Get or create Admin user to own these listings
  let admin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
  if (!admin) {
    admin = await prisma.user.create({
      data: {
        email: 'admin@edwinkibiraisuzu.co.ke',
        fullName: 'Edwin Kibira',
        role: 'ADMIN'
      }
    });
  }

  for (const v of ISUZU_VEHICLES) {
    // Check if vehicle already exists by make and model to avoid duplicates
    const existing = await prisma.car.findFirst({
      where: { make: v.make, model: v.model, condition: v.condition }
    });

    if (!existing) {
      const car = await prisma.car.create({
        data: {
          sellerId: admin.id,
          make: v.make,
          model: v.model,
          year: v.year,
          price: v.price,
          condition: v.condition,
          status: v.status,
          description: v.description,
          specs: {
            create: v.specs
          },
          images: {
            create: v.images
          }
        }
      });
      console.log(`Created: ${car.make} ${car.model}`);
    } else {
      console.log(`Skipped (already exists): ${v.make} ${v.model}`);
    }
  }
  
  console.log('Seeding complete!');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
