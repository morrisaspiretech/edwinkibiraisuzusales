const https = require('https');
const fs = require('fs');

https.get('https://www.isuzu.co.ke/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const imgRegex = /https:\/\/[^"']+\.(png|webp|jpg|jpeg)/gi;
    const matches = data.match(imgRegex);
    if (matches) {
      const unique = [...new Set(matches)];
      fs.writeFileSync('isuzu-images.txt', unique.join('\n'));
      console.log('Found ' + unique.length + ' images');
    }
  });
});
