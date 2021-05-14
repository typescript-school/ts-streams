import fs from 'fs';
import path from 'path';

const readFilePath = path.join(__dirname, './sample-files/file1.txt')
const writeFilePath = path.join(__dirname, './sample-files/file2.txt')

const readFileStream  = fs.createReadStream(readFilePath);
const writeFileStream = fs.createWriteStream(writeFilePath);

//Using pipe
readFileStream.pipe(writeFileStream);

// Only read once file is readable
// readFileStream.on('readable', () => {
//     let buffer;
//     while(buffer = readFileStream.read()){
//         writeFileStream.write(buffer);
//     }
//
//     writeFileStream.end();
// });



// // Using events
// readFileStream.on('data', (buffer) => writeFileStream.write(buffer));
// readFileStream.on('close', () => writeFileStream.close())
