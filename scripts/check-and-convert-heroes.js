const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const vehiclesPath = path.join(__dirname, '../apps/website/src/data/vehicles.ts');
const publicDir = path.join(__dirname, '../apps/website/public');

let content = fs.readFileSync(vehiclesPath, 'utf8');
const lines = content.split('\n');

async function processAll() {
  const imagesToConvert = new Set();
  
  for (const line of lines) {
    const match = line.match(/heroImage:\s*["']([^"']+)["']/);
    if (match) {
      imagesToConvert.add(match[1]);
    }
  }

  console.log(`Found ${imagesToConvert.size} vehicle heroImages.`);

  for (const imgPath of imagesToConvert) {
    const fullOriginalPath = path.join(publicDir, imgPath);
    if (!fs.existsSync(fullOriginalPath)) {
      console.log('File does not exist:', imgPath);
      continue;
    }

    const ext = path.extname(imgPath);
    const baseName = imgPath.slice(0, -ext.length);
    const webpRelPath = baseName + '.webp';
    const webpFullPath = path.join(publicDir, webpRelPath);

    if (!fs.existsSync(webpFullPath)) {
      try {
        const buf = await sharp(fullOriginalPath)
          .resize({ width: 800, height: 600, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 })
          .toBuffer();
        fs.writeFileSync(webpFullPath, buf);
        console.log(`Converted ${imgPath} -> ${webpRelPath} (${(buf.length/1024).toFixed(1)} KB)`);
      } catch (e) {
        console.error(`Failed to convert ${imgPath}:`, e.message);
      }
    } else {
      console.log(`Already exists: ${webpRelPath}`);
    }

    // Replace in content
    content = content.replaceAll(imgPath, webpRelPath);
  }

  fs.writeFileSync(vehiclesPath, content);
  console.log('Updated apps/website/src/data/vehicles.ts with .webp paths.');
}

processAll();

