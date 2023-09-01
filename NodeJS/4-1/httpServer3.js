const http = require('http');
const fs = require('fs');
const port = 3001;

const server = http.createServer((req, res) => {
    try{
        const data = fs.readFile('./index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        });
    } catch(err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err);
    }
});

server.listen(port, () => {
    console.log(`Server running => http://127.0.0.1:${port}`);
});