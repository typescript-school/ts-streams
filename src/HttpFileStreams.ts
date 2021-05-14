import http from 'http';
import path from 'path';
import fs from 'fs';

const recordedRequestFile = path.join(__dirname, 'sample-files/recorded-request.json');
const playBackResponseFile = path.join(__dirname, 'sample-files/playback-response.json');

const server = http.createServer((request, response) => {
    const recordStream  = fs.createWriteStream(recordedRequestFile);
    const playbackStream  = fs.createReadStream(playBackResponseFile);
    request.pipe(recordStream);
    playbackStream.pipe(response);
});

server.listen(3009);
