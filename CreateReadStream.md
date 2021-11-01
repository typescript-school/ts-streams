# Creating Read Stream



```javascript
const Stream = require('stream');

const readableStream = new Stream.Readable({
  read() {}
});

readableStream.push('hi!')
```

