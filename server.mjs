import {createServer} from 'http';

// const server = createServer((request, response) => {
//     response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8'});
//     response.write('Hello there...');
//     response.end('\n...Goodbye!');
// });

const server = createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8'});

    const url = new URL(request.url, 'http://localhost:8080');

    const body = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Node.js Demo From Book</title>
        </head>
        <body>
            <h1>Hello ${url.searchParams.get('name')}</h1>
        </body>
    </html>`;
    response.end(body);
});
server.listen(8080, () => {
    console.log('Server is listening to http://localhost:' + server.address().port);
});