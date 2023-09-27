const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

// 쿠키는 name=zerocho;year=1994 처럼 문자열 형식으로 오므로 이를 { name: 'zerocho', year: '1994' }와 
// 같이 객체로 바꾸는 함수입니다.
const parseCookies = (cookie = '') =>
    cookie
        .split(';')   // [name=zerocho, year=1994]
        .map(v => v.split('=')) // [[name, zerocho], [year, 1994]]
        .reduce((acc, [k, v]) => {   // { name: 'zerocho', year: '1994' }
            acc[k.trim()] = decodeURIComponent(v); 
            return acc;
    }, {});

const server = http.createServer(async (req, res) => {
    console.log(req.url, req.headers.cookie);  // 기존 쿠기 출력
    const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
    if (req.url.startsWith('/login')) {
        // 주소가 /login으로 시작하는 경우
        const {query} = url.parse(req.url); // 주소: /login?name=zerocho&year=1994  => query: name=zerocho&year=1994
        const {name} = qs.parse(query); // query: name=zerocho&year=1994  => { name: 'zerocho', year: '1994' }
        const expires = new Date(); // 현재 날짜와 시간을 가져옵니다.

        // 쿠키 유효 시간을 현재 시간 + 5분으로 설정합니다.
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {      // 302는 리다이렉트를 의미합니다.
            Location: '/',       // /로 이동합니다.
            'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,      
        });
        res.end();
    } else if (cookies.name) { 
        // name이라는 쿠키가 있는 경우
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요.`);
    } else {
        // /login(/)로 시작하지 않고 name이라는 쿠키도 없을 때
        try {
            // cookie2.html 파일을 읽어서 전송합니다.(사용자 등록)
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err) {
            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(err.message);
        }
    }
});

server.listen(3001, () => {
    console.log('3001번 포트에서 서버가 실행 중입니다!');
});