const express = require('express');  // express 모듈
const morgan = require('morgan');    // 로그 모듈
const cookieParser = require('cookie-parser'); // 쿠키 모듈
const session = require('express-session');  // 세션 모듈
const dotenv = require('dotenv');   // 환경 변수 모듈
const path = require('path');    // 경로 설정 모듈

dotenv.config();          // .env 파일을 읽어서 process.env로 만듦

const app = express();   // express 객체 생성
app.set('port', process.env.PORT || 3004);   // 서버 포트 설정
// 미들웨어 설정
app.use(morgan('dev'));    // 로그 미들웨어(개발용 환경): 응답에 대한 정보를 콘솔에 기록
app.use('/', express.static(path.join(__dirname, 'public')));  // 정적 파일 제공( / 경로에 대해 public 폴더 제공)
app.use(express.json());  // JSON 형식의 본문 처리
app.use(express.urlencoded({ extended: false }));  // URL-encoded 형식의 본문 처리
app.use(cookieParser(process.env.COOKIE_SECRET));   // 쿠키 처리
app.use(session({       // 세션 처리
  resave: false,                       // 요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지 설정
  saveUninitialized: false,            // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
  secret: process.env.COOKIE_SECRET,   // cookie-parser의 비밀키와 같게 설정
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));
// router 설정
const indexRouter = require('./routes');  // indexRouter 설정
const userRouter = require('./routes/user');  // userRouter 설정

// 라우터 설정
app.use('/', indexRouter);  // indexRouter 설정
app.use('/user', userRouter);   // userRouter 설정

// 에러 처리 미들웨어
app.use((req, res, next) => {   // 404 처리 미들웨어
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {  // 에러 처리 미들웨어
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {  // 서버 실행
    console.log(app.get('port'), '번 포트에서 서버 실행 중');
});