```
const path = require('path');
const fs = require('fs');
const {EventEmitter} = require('events');


```



### Copy File

```

sourceFilePath = path.join(process.cwd(), "files", "image-one.jpg");
targetFilePath = path.join(process.cwd(), "out", "image-one.jpg");

inputStream = fs.createReadStream(sourceFilePath);
outputStream = fs.createWriteStream(targetFilePath);
inputStream.pipe(outputStream);

```



### Copy file and print bytes copied

```
inputStream = fs.createReadStream(sourceFilePath);
outputStream = fs.createWriteStream(targetFilePath);

let bytesProcessed = 0;

inputStream.on('data', (buffer) => {
	bytesProcessed += buffer.length;
	console.log(`${bytesProcessed} bytes done.`)
	outputStream.write(buffer)
});

inputStream.on('close', () => outputStream.close())

```



### Streams as emitters

```
inputStream = fs.createReadStream(sourceFilePath);
outputStream = fs.createWriteStream(targetFilePath);

let bytesProcessed = 0;

inputStream.on('data', (buffer) => {
	bytesProcessed += buffer.length;
	console.log(`${bytesProcessed} bytes done.`)
	outputStream.write(buffer)
});

inputStream.on('close', () => outputStream.close())


```



Try Stream with event emitter

```
class PassThroughStream extends EventEmitter{
	constructor(outputStream){
		this._out = outputStream;
	}
}


const helloEmitter = new PassThroughStream();

// An events that takes a string arg
PassThroughStream.on('data', (data) => {
    this._out.emit('data', data);
});

// An events that takes a string arg
PassThroughStream.on('data', (data) => {
    this._out.emit('data', data);
});

helloEmitter.emit("hello", "nishants");
```

