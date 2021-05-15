import fs from 'fs';
import path from 'path';

const readFilePath = path.join(__dirname, './sample-files/file1.txt')
const readFileStream     = fs.createReadStream(readFilePath);

// stream 10000 times
readFileStream.setMaxListeners(10005);
for(let i =0; i < 10000; i ++){
    const filePath = path.join(__dirname, `./sample-files/ignored/file-${i}.txt`)
    const outStream = fs.createWriteStream(filePath);
    readFileStream.pipe(outStream);
}
