const express = require('express');
const morgan = require('morgan');  // 로그를 출력해주는 미들웨어
const path = require('path');
const nunjucks = require('nunjucks'); // 템플릿 엔진

// 라우터 연결
const connectDB = require('./module'); // 몽고디비 연결
const indexRouter = require('./routes/index'); // 라우터
const usersRouter = require('./routes/users'); // 라우터
const commentsRouter = require('./routes/comments'); // 라우터


const app = express();
app.set('port', process.env.PORT || 3005);
app.set('view engine', 'html'); // 템플릿 엔진을 html로 설정

nunjucks.configure('views', { // views 폴더를 템플릿 폴더로 지정
    express: app, // app 객체를 템플릿 엔진에 연결
    watch: true, // 템플릿 파일이 변경될 때 템플릿 엔진을 다시 렌더링
});

connectDB(); // 몽고디비 연결

app.use(morgan('dev')); // 로그를 출력해주는 미들웨어
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일을 제공하는 라우터 역할을 한다.
app.use(express.json()); // JSON 형식의 데이터를 처리하는 미들웨어
app.use(express.urlencoded({ extended: false })); // URL-encoded 형식의 데이터를 처리하는 미들웨어

app.use('/', indexRouter); // 라우터 연결
app.use('/users', usersRouter); // 라우터 연결
app.use('/comments', commentsRouter); // 라우터 연결


app.use((req, res, next) => { // 404 처리 미들웨어(라우터 없음)
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`); // 에러 메시지
    error.status = 404;
    next(error); // 에러 처리 미들웨어로 넘김
});

app.use((err, req, res, next) => { // 에러 처리 미들웨어
    res.locals.message = err.message; // res.locals 객체에 속성을 설정하면 템플릿 엔진에서 사용 가능
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 개발 환경일 때만 에러 스택 추적
    res.status(err.status || 500); // 에러 발생 시 500 상태 코드를 응답
    res.render('error'); // 에러 페이지 렌더링
});

app.listen(app.get('port'), () => { // 서버 실행
    console.log(app.get('port'), '번 포트에서 대기 중');
});