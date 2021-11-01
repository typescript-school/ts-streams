const fs = require('fs');
const path = require('path');

const sourcePath = path.join(process.cwd(), 'files', 'image-one.jpg');
const targetPathOne = path.join(process.cwd(), 'out', 'image-one.jpg');
const targetPathTwo = path.join(process.cwd(), 'out', 'image-two.jpg');

const inputStream = fs.createReadStream(sourcePath);
const outputStreamOne = fs.createWriteStream(targetPathOne);
const outputStreamTwo = fs.createWriteStream(targetPathTwo);

// Error, as outputStreamOne is not readable hence cannot be piped into outputStreamTwo
// inputStream.pipe(outputStreamOne).pipe(outputStreamTwo);

// Creates two copies of input stream
// inputStream.pipe(outputStreamOne);
// inputStream.pipe(outputStreamTwo);

// Works
// inputStream.pipe(outputStreamOne);
// setTimeout(() => inputStream.pipe(outputStreamTwo));

// Does not work. When second stream is piped, input is already ended
// inputStream.pipe(outputStreamOne);
// setTimeout(() => inputStream.pipe(outputStreamTwo), 10);



