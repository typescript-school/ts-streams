import {Transform, TransformCallback, Writable} from 'stream';
import fs, {WriteStream} from 'fs';
import path from 'path';

const jsonFilePath = path.join(__dirname, './sample-files/saved.json');

const largeTextFile = path.join(__dirname, './sample-files/large-text-file.txt');

const input = fs.createReadStream(largeTextFile);

class BufferToJsonStream extends Writable{
    outputFileStream: WriteStream;

    constructor(outputFileStream : WriteStream) {
        super();
        this.outputFileStream = outputFileStream;
        this.outputFileStream.write("[")
    }
    _write(chunk : Buffer, encoding: BufferEncoding){
        this.outputFileStream.write(
            JSON.stringify({value: chunk.toString()}) + ",",
            'utf-8')
    }
    _final(){
        this.outputFileStream.write("]")
        this.outputFileStream.end()
    }
}

const output = new BufferToJsonStream(fs.createWriteStream(jsonFilePath));

input.pipe(output);
