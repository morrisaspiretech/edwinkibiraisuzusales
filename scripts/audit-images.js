const fs = require('fs');
const path = require('path');

const postsFile = fs.readFileSync('C:/Users/morri/Music/edwinisuzusales/apps/website/src/data/posts.ts', 'utf-8');
const vehiclesFile = fs.readFileSync('C:/Users/morri/Music/edwinisuzusales/apps/website/src/data/vehicles.ts', 'utf-8');

const publicDir = 'C:/Users/morri/Music/edwinisuzusales/apps/website/public';

const imgMatches = new Set();
const regex = /["'](\/vehicles\/[^"']+)["']/g;
let m;
while ((m = regex.exec(postsFile)) !== null) imgMatches.add(m[1]);
while ((m = regex.exec(vehiclesFile)) !== null) imgMatches.add(m[1]);

let missing = 0;
for (const imgPath of imgMatches) {
  const localFile = path.join(publicDir, imgPath);
  if (!fs.existsSync(localFile)) {
    console.log('❌ Missing image:', imgPath);
    missing++;
  }
}

if (missing === 0) {
  console.log('✅ ALL', imgMatches.size, 'vehicle and blog images exist in public directory!');
} else {
  console.log('Total missing images:', missing);
}
