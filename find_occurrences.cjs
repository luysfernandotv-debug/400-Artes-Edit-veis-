const fs = require('fs');

const pixel = fs.readFileSync('pixel.js', 'utf8');

let pos = 0;
while ((pos = pixel.toLowerCase().indexOf('rate', pos)) !== -1) {
  console.log('--- occurrence of rate ---');
  console.log(pixel.substring(Math.max(0, pos - 100), Math.min(pixel.length, pos + 100)));
  pos += 4;
}
