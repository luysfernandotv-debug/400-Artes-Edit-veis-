const fs = require('fs');
const https = require('https');

function download(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function analyze() {
  const pixelJs = await download('https://cdn.utmify.com.br/scripts/pixel/pixel.js');
  const utmsJs = await download('https://cdn.utmify.com.br/scripts/utms/latest.js');
  
  console.log('Pixel.js length:', pixelJs.length);
  console.log('UTMs.js length:', utmsJs.length);

  fs.writeFileSync('pixel.js', pixelJs);
  fs.writeFileSync('utms.js', utmsJs);

  console.log('Searching "Rate" or "exceeded" or "body" or "document.write" in pixel.js and utms.js...');
  
  const searchIn = (name, text) => {
    ['Rate', 'exceed', 'body', 'document.write', 'innerHTML', 'document.body', 'ipapi', 'ipify'].forEach(term => {
      let count = 0;
      let pos = 0;
      while ((pos = text.toLowerCase().indexOf(term.toLowerCase(), pos)) !== -1) {
        count++;
        pos += term.length;
      }
      console.log(`[${name}] '${term}': ${count} occurrences`);
    });
  };

  searchIn('pixel.js', pixelJs);
  searchIn('utms.js', utmsJs);
}

analyze();
