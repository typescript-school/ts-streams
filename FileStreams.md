### Files as streams

```typescript
const readFileStream  = fs.createReadStream(readFilePath);
const writeFileStream = fs.createWriteStream(writeFilePath);
```





### Copy files

```typescript
//Using pipe
readFileStream.pipe(writeFileStream);
```



```typescript
// Using events
readFileStream.on('data', (buffer) => writeFileStream.write(buffer));
readFileStream.on('close', () => writeFileStream.close())
```



Copy to multiple files at once

```
```



refer : [src/FileStream.ts](src/FileStream.ts)