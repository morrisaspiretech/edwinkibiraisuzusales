// Direct database seeder – bypasses API, writes straight to Supabase
const fs = require('fs');
const path = require('path');

async function seed() {
  // Load Prisma from the database package
  const { PrismaClient } = require(path.join(__dirname, '../database/src/generated/client'));
  
  const prisma = new PrismaClient();

  try {
    // Load real KRA data
    const dataPath = path.join(__dirname, 'crsp-mock.json');
    const crspData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`Loaded ${crspData.length} KRA CRSP models from ${dataPath}`);

    // Clear existing mock data
    const deleted = await prisma.cRSPModel.deleteMany({});
    console.log(`Deleted ${deleted.count} old entries.`);

    // Batch insert in chunks of 500
    const BATCH = 500;
    let inserted = 0;
    for (let i = 0; i < crspData.length; i += BATCH) {
      const batch = crspData.slice(i, i + BATCH);
      const result = await prisma.cRSPModel.createMany({ 
        data: batch, 
        skipDuplicates: true 
      });
      inserted += result.count;
      console.log(`  Batch ${Math.floor(i/BATCH)+1}: inserted ${result.count} (total: ${inserted})`);
    }

    console.log(`\n✅ Done! Seeded ${inserted} real KRA CRSP models into the database.`);
    
    // Quick verification
    const total = await prisma.cRSPModel.count();
    const makes = await prisma.cRSPModel.groupBy({ by: ['make'], _count: true });
    console.log(`Verification: ${total} models, ${makes.length} unique makes`);
    
    // Show top 10 makes
    const sorted = makes.sort((a, b) => b._count - a._count).slice(0, 10);
    console.log('Top 10 makes:');
    for (const m of sorted) {
      console.log(`  ${m.make}: ${m._count} models`);
    }

  } catch (err) {
    console.error('Seed failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
