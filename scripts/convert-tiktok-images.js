const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tiktokDir = path.join(__dirname, '../apps/website/public/tiktok');

async function convertTikToks() {
  for (let i = 1; i <= 5; i++) {
    const jpgPath = path.join(tiktokDir, `${i}.jpg`);
    const webpPath = path.join(tiktokDir, `${i}.webp`);
    if (fs.existsSync(jpgPath)) {
      const origSize = fs.statSync(jpgPath).size;
      const buf = await sharp(jpgPath)
        .resize({ width: 450, height: 700, fit: 'cover' })
        .webp({ quality: 75 })
        .toBuffer();
      fs.writeFileSync(webpPath, buf);
      console.log(`Converted ${i}.jpg (${(origSize/1024).toFixed(1)} KB) -> ${i}.webp (${(buf.length/1024).toFixed(1)} KB)`);
    }
  }
}

convertTikToks();

