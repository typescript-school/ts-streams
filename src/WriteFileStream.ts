import fs from 'fs';
import path from 'path';

const largeTextFile = path.join(__dirname, './sample-files/large-text-file.txt');

const out = fs.createWriteStream(largeTextFile);
for(let i =0; i < 1001; i++){
    out.write( `${i}\n`);
}
// End stream
out.end();
