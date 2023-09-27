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
app.use(morgan('dev'));    // 로그 미들웨어(개발용 환경) // combined : 배포용 환경
app.use('/', express.static(path.join(__dirname, 'public')));  // 정적 파일 제공( / 경로에 대해 public 폴더 제공)
app.use('/upload', express.static(__dirname));  // 정적 파일 제공( /uploads 경로에 대해 uploads 폴더 제공
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

const multer = require('multer');  // multer 모듈(파일 업로드)
const fs = require('fs');       // 파일 시스템 모듈

try {
    fs.readdirSync('uploads');  // uploads 폴더가 있는지 확인
} catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');    // uploads 폴더 생성
}

// multer 설정(파일 업로드)
const upload = multer({
    storage: multer.diskStorage({  // 파일 저장 방식
      destination(req, file, done) {   // 파일 저장 경로
        done(null, 'uploads/');    // uploads 폴더에 저장
      },
      filename(req, file, done) {   
        const ext = path.extname(file.originalname);   // 파일 확장자
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);  // 파일 이름
      },  
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  });

// 라우터 설정
app.get('/upload', (req, res) => {  // GET 요청
    res.sendFile(path.join(__dirname, '/multipart.html'));
});

// 파일 업로드 (파일 하나)
// app.post('/upload', upload.single('image1'), (req, res) => {  // POST 요청
//     console.log(req.file);  // 업로드 정보
//     res.send('ok');
// });

// 파일 업로드 (파일 여러 개)
app.post('/upload', upload.fields([{name:'image1'},{name:'image2'}]), (req, res) => {  // POST 요청
  console.log(req.file, req.body);  // 업로드 정보
  res.send('ok');
});


// 에러 처리 미들웨어   
app.get('/', (req, res, next) => {  // 모든 GET 요청에 대해
    console.log('GET / 요청에 대해 실행됩니다.');
    next();  // 다음 미들웨어로 넘어감
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');  // 에러 발생
});

app.use((err, req, res, next) => {  // 에러 처리 미들웨어
    console.error(err);
    res.status(500).send(err.message);
});

// 서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});