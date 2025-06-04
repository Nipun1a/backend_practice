const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// create an HTTP server

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    }else if (req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('About Page\n');}
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n');
    }
});

// start the server

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

