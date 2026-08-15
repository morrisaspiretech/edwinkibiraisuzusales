const https = require('https');
const fs = require('fs');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const images = [
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150742/isuzu-n-series-nlr77e.webp', dest: 'nlr77e.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150745/isuzu-n-series-nmr85h.webp', dest: 'nmr85h.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150748/isuzu-n-series-nqr81k.webp', dest: 'nqr81k.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150751/isuzu-n-series-nqr-xtra.webp', dest: 'nqr-xtra.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150917/isuzu-bus-25-seater.webp', dest: '25-seater.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150920/isuzu-bus-33-seater.webp', dest: '33-seater.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150923/isuzu-bus-50-seater.webp', dest: '50-seater.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17150926/isuzu-bus-67-seater.webp', dest: '67-seater.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17151042/isuzu-mu-x-ls-t-white.webp', dest: 'mux-ls-t.webp' },
  { url: 'https://d2ekrm2045sfs2.cloudfront.net/cms/2024/04/17151045/isuzu-mu-x-ls-u-grey.webp', dest: 'mux-ls-u.webp' }
];

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.url}...`);
    try {
      await download(img.url, path.join(__dirname, 'apps/website/public/vehicles', img.dest));
      console.log(`Saved to ${img.dest}`);
    } catch (e) {
      console.error(`Failed to download ${img.url}:`, e);
    }
  }
}

main();
