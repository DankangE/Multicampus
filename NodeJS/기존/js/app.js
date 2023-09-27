let http = require('http');
let url = require('url');

let app = http.createServer((req, res) => {
    let queryData = url.parse(req.url, true).query;
    let template = `
    <head></head>
    <body>
        <h2>${queryData.id}</h2>
        <ul>
            <li><a href="/?id=Node.js">Node.js</li>
            <li><a href="/?id=SQL">SQL</li>
            <li><a href="/?id=HTML">HTML.js</li>
        </ul>
    </body>
    `
    res.end(template);
});

app.listen(3000, function() {
    console.log('Server is running... http://localhost:3000');
});