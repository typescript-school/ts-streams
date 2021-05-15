# Streams 

- **Composiblity**
  - Makes it much easier to compose a system

- Best way to model a system that works on continuous data being generated and consumed.
- interact with each other using `pipe`
- Concept is borrowed from `Unix`



### Summary 

- Types of streams

  > read, write, duplex and transform

- `stream` module

  > interface for implementing streams
  >
  > All streams are instances of event emitters.
  >
  > utility functions like `stream.pipeline()`, `stream.finished()`, `stream.from()`, `stream.addAbortSignal()`

- Promise API `stream/promises`

  > Added in Node v15

- Objet Mode 

  > Streams usually operate on `string` or `Buffer` types.
  >
  > `object mode` allows using objects in streams

- Buffering

  > Ensures **data in memory is manageable**
  >
  > `highWaterMark` - size of internal buffer in bytes.
  >
  > Represents number of objects for `object mode` streams.
  >
  > `highWaterMark` is a threshold, not a limit:  usually streams don't throw error, but stops asking for more data on buffer overflow.

- ##### `PassThrough`

  > A trivial implementation of transform.



### **Types of streams**

- **Readable**  : read only stream, can pipe from it, not into it
- **Writable**   : write only stream, can pipe into it, not from it
- **Duplex**      :  read/write stream, can pipe into it, and from it
- **Transform** : modifies data that is read/written to it, can pipe into it, and from it but with transformed data.



### Object mode

- `objectMode` option when creating stream
- [ ] example of object mode



### Buffering 

- `highWaterMark`: size of internal buffer in bytes In objectMode, it is count of objects.
- Used to ensure ***data in memory is manageable***

- **Readable stream**
  - `stream.push(chunk)` : returns false if buffer overflowed.
  - `stream.push(chunk)` calls internal method`readable._read()` to put data in internal buffer
  - `readable._read()` is not invoked if size of internal buffer has reached the `highWatermark`
- **Writable stream**
  - `writable.write(chunk)` returns true if size of internal buffer is less than `highWaterMark` else false.
- Internal buffer can be retreived usng `writtable.writeBuffer` and `readable.readBuffer` (undocumented and should not be used)



### Consuming Readable Streams

- `readable.pipe()`  is the recommended way of reading streams.

- Only use events `read` , `readable` or `pipe` and `async iterator` to read.

- `.read()` method reads buffer, which might be empty returning null. Even though the stream may have data.

  ```typescript
  // WRONG LOGIC
  // .read() can return null if internal buffer is not populated
  while(buffer = readFileStream.read()){
    writeFileStream.write(buffer);
  }
  
  writeFileStream.end();
  ```



<iframe width="560" height="315" src="https://www.youtube.com/embed/rQXaDH__Suk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



### Todo 

- Play with readable : 
  - [x] Use file for http response stream
  - [ ] https://www.youtube.com/watch?v=rQXaDH__Suk
  - [ ] Use file for process.out stream
  - [ ] Use transform stream to convert to reverse lines in a text file
  - [ ] Use `objetMode` stream with transformt to read json files, modify field values and save to other file
  - [ ] Use duplex stream to create a http proxy server
  - [ ] Create a record and playback with streams.



**Setup**

- Create typescript cli app from https://github.com/typescript-school/ts-cli-app



Refer: 

- https://nodejs.org/api/stream.html#stream_stream
- https://nodejs.dev/learn/nodejs-streams
- https://nodesource.com/blog/understanding-streams-in-nodejs/



<Component>

​	<Child = ""/>

</Component>