const fs = require('fs');
const path = require('path');

const sourcePath = path.join(process.cwd(), 'files', 'image-one.jpg');
const targetPath = path.join(process.cwd(), 'out', 'image-one.jpg');

const inputStream = fs.createReadStream(sourcePath);
const outputStream = fs.createWriteStream(targetPath);

inputStream.on('data', (data) => {
  outputStream.write(data);
});

inputStream.on('end', () => outputStream.close())
