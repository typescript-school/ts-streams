import http from 'http';
import path from 'path';
import fs from 'fs';

// Strt a server at 3009
import './HttpStreamsReflet';

const remoteConfig = {
    host: 'localhost',
    port: 3009,
};

const server = http.createServer((request, response) => {

    const requestPath  = request.method + " " +encodeURI(request.url!).substr(1).replace(/\//g, '--');
    const requestFile  = path.join(__dirname, 'sample-files/recorder', `${requestPath}-request.json`);
    const responseFile = path.join(__dirname, 'sample-files/recorder', `${requestPath}-response.json`);

    const requestFileStream  = fs.createWriteStream(requestFile);
    const responseFileStream  = fs.createWriteStream(responseFile);

    const options = {
        ...remoteConfig,
        path: request.url,
        method: request.method,
    };

    const httpRequest = http.request(options, (httpResponse) => {
        httpResponse.pipe(response)
        httpResponse.pipe(responseFileStream);
    });

    request.pipe(httpRequest);
    request.pipe(requestFileStream);
});

server.listen(3010);
