source: https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/



Why ? 

- Use it when you need to deal with pure binary data.



**Buffer**

- Is a `class` in NodeJs for handling raw binary data.
- Acts as an `array of integers`
- Uses ***integers to represent bytes*** (hence integers are `0`-` 256`(`2^8`)
- On console.log, it is shown as list of hexadecimals.



- Creating buffer 

  ```javascript
  // js-runner
  
  
  // Create buffer with 8 bytes (each element zero)
  let buffer = Buffer.alloc(8);
  
  // With 8 bytes, as passed
  let buffer = Buffer.from([ 8, 6, 7, 5, 3, 0, 9]);
  
  // With a utf-8 string converted to buffer
  let buffer = Buffer.from("I'm a string!", "utf-8");
  
  // Array of integers
  let buffer = Buffer.alloc(1);
  buffer[0] = 65;
  
  // Hexadecimal on console.log
  console.log(buffer);
  // out : [String: 'A']
  ```

- Writting to a buffer

  ```javascript
  // Create buffer with 10 bytes
  let buffer = Buffer.alloc(16);
  
  // Convert utf8 string to binary and write to buffer
  buffer.write("hello", "utf-8");
  
  // Write to buffer with an offset of 5
  buffer.write("world", 5, "utf-8");
  
  // Convert buffer to string
  buffer.toString("utf-8");
  // 'helloworld\x00\x00\x00\x00\x00\x00'
  
  // Indices 0-10 only
  buffer.toString("utf-8", 0, 10);
  
  
  ```

  

Cheatsheet: 

```javascript
// Check if buffer
Buffer.isBuffer(object)
```



History: 

- NodeJs dealt with reading files, TCP streams data as string in behinging. 
- But needed a way to efficiently/correctly handle binary data.