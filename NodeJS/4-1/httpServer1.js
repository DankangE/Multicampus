const http = require('http');   // http 모듈을 가져옴
const port = 3000;  // 포트 번호
// 웹 서버 생성
const server = http.createServer(); // createServer 메서드로 서버 객체를 만듦

// server 객체에 이벤트 연결
// on(이벤트, 콜백)
server.on('request', (code) => { // request: 클라이언트가 요청할 때 발생하는 이벤트
    console.log('Request 이벤트 발생');
});

server.on('connection', (code) => { // connection : 클라이언트가 접속할 때 발생하는 이벤트
    console.log('Connection 이벤트 발생');
});

// 웹 서버 실행
// listen(포트, 콜백)
server.listen(port, () => { // listen 메서드로 8080번 포트에서 대기하도록 설정
    console.log(`서버가 실행되었습니다. => http://localhost:${port}`);
});