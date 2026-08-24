const fs = require('fs'); const txt = fs.readFileSync('apps/website/src/components/home/Hero.tsx', 'utf8'); console.log(txt.includes('.id'));
