const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      getFiles(full, files);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

const files = getFiles('C:/Users/morri/Music/edwinisuzusales/apps/website/src');
const hrefs = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /href=["'](\/[a-zA-Z0-9_\-\/#\?]*)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    hrefs.add(match[1]);
  }
}
console.log('Total unique internal links:', hrefs.size);
console.log(Array.from(hrefs).sort());
