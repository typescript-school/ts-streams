import http from 'http';

const server = http.createServer((request, response) => {
    request.pipe(response);
});

server.listen(3009);
