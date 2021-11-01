### File stream API

- `fs` module has helper method to create read or write streams from a file path

- Copy a file using pipes

  ```javascript
  const fs = require('fs');
  const path = require('path');
  
  const sourcePath = path.join(process.cwd(), 'files', 'image-one.jpg');
  const targetPath = path.join(process.cwd(), 'out', 'image-one.jpg');
  
  const inputStream = fs.createReadStream(sourcePath);
  const outputStream = fs.createWriteStream(targetPath);
  
  inputStream.pipe(outputStream);
  ```

  

- Copy a file using events

  ```javascript
  const fs = require('fs');
  const path = require('path');
  
  const sourcePath = path.join(process.cwd(), 'files', 'image-one.jpg');
  const targetPath = path.join(process.cwd(), 'out', 'image-one.jpg');
  
  const inputStream = fs.createReadStream(sourcePath);
  const outputStream = fs.createWriteStream(targetPath);
  
  inputStream.on('data', (data) => {
  	outputStream.push(data);
  });
  
  inputStream.on('end', () => outputStream.close())
  ```

  

- Some use cases 

  ```javascript
  // Error, as outputStreamOne is not readable hence cannot be piped into outputStreamTwo
  inputStream.pipe(outputStreamOne).pipe(outputStreamTwo);
  
  // Creates two copies of input stream
  inputStream.pipe(outputStreamOne);
  inputStream.pipe(outputStreamTwo);
  
  // Does not work. When second stream is piped, input is already ended
  inputStream.pipe(outputStreamOne);
  setTimeout(() => inputStream.pipe(outputStreamTwo), 10);
  ```

