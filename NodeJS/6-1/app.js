// express 서버

const express = require('express');  // express 모듈
const path = require('path');        // 경로 설정 모듈


const app = express();                // express 객체 생성

app.set('port', process.env.PORT || 3001);  // 서버 포트 설정

// 미들웨어 설정
app.use('/about', express.static('public')); // /about 경로에 대해 정적 파일 제공

app.use((req, res, next) => {  // 모든 요청에 대해 실행
    console.log('모든 요청에 실행하고 싶어요');
    next();  // 다음 미들웨어로 넘어감
});

// 라우터 설정
app.get('/', (req, res, next) => {  // GET 요청
    // res.send('Hello, Express');
    res.sendFile(path.join(__dirname, 'index.html'));
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.get('/about', (req, res, next) => {  // GET 요청
    res.sendFile(path.join(__dirname, 'about.html'));
    next();
});

app.use((err, req, res, next) => {  // 에러 처리 미들웨어
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {  // 서버 실행
    console.log(app.get('port'), '번 포트에서 대기 중');
});
