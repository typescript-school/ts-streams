```
const path = require('path');
const fs = require('fs');
sourceFilePath = path.join(process.cwd(), "files", "image-one.jpg");
targetFilePath = path.join(process.cwd(), "out", "image-one.jpg");

inputStream = fs.createReadStream(sourceFilePath);
outputStream = fs.createWriteStream(sourceFilePath);
inputStream.pipe(outputStream);

```

