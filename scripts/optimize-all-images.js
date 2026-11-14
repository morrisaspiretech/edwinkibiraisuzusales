const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetImages = [
  'vehicles/fvr-truck.png',
  'vehicles/dmax-silver.png',
  'vehicles/movers/ud-quester-tractor-rear.png',
  'vehicles/movers/ud-quester-fleet.png',
  'vehicles/n-series/nqr-xtra-real.png',
  'vehicles/n-series/nqr-xtra.jpg',
  'vehicles/movers/ud-quester-460-hero.png',
  'vehicles/movers/ud-quester-side.png',
  'vehicles/n-series/nps-81h-real.png',
  'vehicles/n-series/nps-81h.jpg',
  'vehicles/dmax-hero.png',
  'vehicles/mux-black.png',
  'vehicles/nqr-hero.png',
  'vehicles/mux-hero.png',
  'vehicles/n-series/nlr-canopy.jpg',
  'vehicles/n-series/nlr-chassis.png',
  'vehicles/mux-3000cc.png',
  'vehicles/mux-1900cc.png',
  'vehicles/f-series-truck.webp',
  'vehicles/frr90-bus.webp',
  'vehicles/dmax-double.webp',
  'vehicles/buses/nmr26/1.jpg',
  'vehicles/buses/nqr29/2.jpg',
  'vehicles/buses/nqr33/1.jpeg',
  'vehicles/buses/frr90n-51/1.jpg',
  'vehicles/buses/frr90q-51/2.jpg',
  'vehicles/buses/fvr34-4x2/10.jpg',
  'vehicles/buses/fvr34-6x2/10.jpg',
  'vehicles/f-series/frr90n/1.jpeg',
  'vehicles/f-series/fvr90l/1.jpeg',
  'vehicles/f-series/fvr90p/1.jpg',
  'vehicles/f-series/fvz34n/1.jpeg',
  'vehicles/f-series/fvz34t/1.jpeg',
  'vehicles/n-series/nmr85/1.jpeg'
];

const publicDir = path.join(__dirname, '../apps/website/public');

async function optimize() {
  let totalSaved = 0;
  for (const relPath of targetImages) {
    const fullPath = path.join(publicDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.log('Skipping (not found):', relPath);
      continue;
    }
    const stat = fs.statSync(fullPath);
    const origSize = stat.size;
    
    // Determine output path: if it's already .webp, optimize in-place (via temp file)
    // If it's png/jpg, create a .webp counterpart and also compress original if needed
    const parsed = path.parse(fullPath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    
    try {
      const buffer = await sharp(fullPath)
        .resize({ width: 800, height: 600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toBuffer();
        
      fs.writeFileSync(webpPath, buffer);
      const newSize = buffer.length;
      const saved = origSize - newSize;
      totalSaved += saved;
      console.log(`Optimized ${relPath}: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (Saved ${(saved/1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error optimizing ${relPath}:`, err.message);
    }
  }
  console.log(`\nTOTAL SAVINGS: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB!`);
}

optimize();

