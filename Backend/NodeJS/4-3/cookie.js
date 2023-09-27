const http = require('http');
port = 3001;

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello Cookie')
})
.listen(port, () => {
    console.log(`서버가 연결되었습니다. : http://localhost:${port}`)
});