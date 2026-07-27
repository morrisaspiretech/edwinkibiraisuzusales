const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

function convert() {
  const workbook = xlsx.readFile(path.join(__dirname, 'crsp-2025.xlsx'));

  // ── Sheet 1: Motor Vehicles ──────────────────────────────────
  const carSheet = workbook.Sheets[workbook.SheetNames[0]]; // 'M.Vehicle CRSP July 2025'
  const carRange = xlsx.utils.decode_range(carSheet['!ref']);
  const cars = [];

  for (let r = 2; r <= carRange.e.r; r++) {
    const cell = (c) => {
      const ref = xlsx.utils.encode_cell({ r, c });
      return carSheet[ref] ? carSheet[ref].v : null;
    };

    const make = cell(0);
    const model = cell(1);
    const crsp = cell(10);

    if (!make || !model) continue;

    // Parse engine capacity – can be "63 kWh" for electric or a number
    let engineCC = 0;
    const rawEngine = cell(5);
    if (typeof rawEngine === 'number') {
      engineCC = rawEngine;
    } else if (typeof rawEngine === 'string') {
      const num = parseInt(rawEngine);
      if (!isNaN(num)) engineCC = num;
    }

    cars.push({
      make: String(make).trim(),
      model: String(model).trim(),
      bodyType: cell(6) ? String(cell(6)).trim() : '',
      fuelType: cell(9) ? String(cell(9)).trim() : '',
      engineCC: engineCC,
      transmission: cell(3) ? String(cell(3)).trim() : '',
      driveConfig: cell(4) ? String(cell(4)).trim() : '',
      seating: typeof cell(8) === 'number' ? cell(8) : 0,
      referencePrice: typeof crsp === 'number' ? Math.round(crsp) : 0,
      category: 'CAR',
      yearStart: 2018,
      yearEnd: 2025
    });
  }

  console.log(`Parsed ${cars.length} motor vehicle models.`);

  // ── Sheet 2: Motor Cycles ────────────────────────────────────
  const bikeSheet = workbook.Sheets[workbook.SheetNames[1]]; // 'Motor Cycles July 2025'
  const bikeRange = xlsx.utils.decode_range(bikeSheet['!ref']);
  const bikes = [];

  for (let r = 2; r <= bikeRange.e.r; r++) {
    const cell = (c) => {
      const ref = xlsx.utils.encode_cell({ r, c });
      return bikeSheet[ref] ? bikeSheet[ref].v : null;
    };

    const make = cell(0);
    const model = cell(1);
    const crsp = cell(7);

    if (!make || !model) continue;

    let engineCC = 0;
    const rawEngine = cell(4);
    if (typeof rawEngine === 'number') {
      engineCC = rawEngine;
    } else if (typeof rawEngine === 'string') {
      const num = parseInt(rawEngine);
      if (!isNaN(num)) engineCC = num;
    }

    bikes.push({
      make: String(make).trim(),
      model: String(model).trim(),
      bodyType: 'MOTORCYCLE',
      fuelType: cell(6) ? String(cell(6)).trim() : '',
      engineCC: engineCC,
      transmission: cell(3) ? String(cell(3)).trim() : '',
      driveConfig: '',
      seating: typeof cell(5) === 'number' ? cell(5) : 0,
      referencePrice: typeof crsp === 'number' ? Math.round(crsp) : 0,
      category: 'BIKE',
      yearStart: 2018,
      yearEnd: 2025
    });
  }

  console.log(`Parsed ${bikes.length} motorcycle models.`);

  // ── Combine & Deduplicate by make+model (keep highest CRSP) ──
  const allModels = [...cars, ...bikes];

  // Deduplicate: keep entry with highest referencePrice per make+model
  const deduped = new Map();
  for (const item of allModels) {
    const key = `${item.make}|||${item.model}`;
    const existing = deduped.get(key);
    if (!existing || item.referencePrice > existing.referencePrice) {
      deduped.set(key, item);
    }
  }

  const finalData = Array.from(deduped.values());
  console.log(`After deduplication: ${finalData.length} unique models.`);

  // ── Write outputs ────────────────────────────────────────────
  // Full dataset
  fs.writeFileSync(
    path.join(__dirname, 'crsp-real.json'),
    JSON.stringify(finalData, null, 2)
  );

  // Compact version for the seed endpoint (smaller fields for DB)
  const dbSeed = finalData.map(item => ({
    make: item.make,
    model: item.model,
    bodyType: item.bodyType,
    fuelType: item.fuelType,
    engineCC: item.engineCC,
    referencePrice: item.referencePrice,
    yearStart: item.yearStart,
    yearEnd: item.yearEnd
  }));

  fs.writeFileSync(
    path.join(__dirname, 'crsp-mock.json'),
    JSON.stringify(dbSeed, null, 2)
  );

  // Print some stats
  const makeCount = new Set(finalData.map(m => m.make)).size;
  console.log(`\n=== KRA CRSP July 2025 Summary ===`);
  console.log(`Total unique models: ${finalData.length}`);
  console.log(`Total makes/brands: ${makeCount}`);
  console.log(`Cars: ${finalData.filter(m => m.category === 'CAR').length}`);
  console.log(`Bikes: ${finalData.filter(m => m.category === 'BIKE').length}`);

  // Top 10 makes by model count
  const makeCounts = {};
  for (const m of finalData) {
    makeCounts[m.make] = (makeCounts[m.make] || 0) + 1;
  }
  const topMakes = Object.entries(makeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);
  console.log(`\nTop 15 Makes by model count:`);
  topMakes.forEach(([make, count]) => console.log(`  ${make}: ${count} models`));

  console.log(`\nFiles written:`);
  console.log(`  crsp-real.json (${(fs.statSync(path.join(__dirname, 'crsp-real.json')).size / 1024).toFixed(1)} KB)`);
  console.log(`  crsp-mock.json (${(fs.statSync(path.join(__dirname, 'crsp-mock.json')).size / 1024).toFixed(1)} KB)`);
}

convert();
