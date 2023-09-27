// html 모듈 사용하기
// 서버 실행 후 브라우저에서 http://localhost:3001/ 으로 접속하면

const http = require('http');
const port = 3001;

const server = http.createServer((요청, 응답) => {   // 요청: req, request, 응답: res, response 
    응답.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // 응답 헤더 작성
    응답.write('<h1>Hello Node!</h1>'); // 응답 본문 작성
    응답.end('<p>Hello Server!</p>'); // 응답 본문 작성 후 브라우저로 전송
});

server.listen(port, () => {
    console.log(`서버가 실행되었습니다. => http://localhost:${port}`);
});
