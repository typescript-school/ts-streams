import http from 'http';
import path from 'path';
import fs from 'fs';

const base = path.join(__dirname, 'sample-files/website');

const resolveFile = (uri: string) => {
    const extension = path.extname(uri);
    if(path.extname(uri)) {
        const file = path.join(base, uri);
        return fs.existsSync(file) ? file : null ;
    }

    const htmlFile = path.join(base, uri + '.html');
    const targetFile = fs.existsSync(htmlFile) ?
        htmlFile
        : path.join(base, uri, 'index.html');

    return fs.existsSync(targetFile) ? targetFile : null;
};

const server = http.createServer((request, response) => {
    const file = resolveFile(decodeURI(request.url!));
    if(request.method === 'GET' && file){
        fs.createReadStream(file).pipe(response);
        return;
    }
    response.statusCode = 404;
    response.end();
});

server.listen(3011);
