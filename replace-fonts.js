const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('font-black') || content.includes('font-extrabold')) {
        content = content.replace(/font-black/g, 'font-bold').replace(/font-extrabold/g, 'font-bold');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Replaced in ${fullPath}`);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'apps/website/src'));
replaceInDir(path.join(__dirname, 'apps/admin-dashboard/src'));
console.log('Mass replacement finished.');
