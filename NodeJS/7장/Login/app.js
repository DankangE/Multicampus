const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const fs = require('fs');
const cookieParser = require('cookie-parser');
const e = require('express');


// express 객체 생성
const app = express();

// db 연결
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'testdb'
});

// 미들웨어 설정
app.use(express.static(path.join(__dirname, '/public')));  // 정적 파일 제공
app.use(express.urlencoded({extended: false}));    // urlencoded 형식의 데이터를 받기 위한 설정
app.use(express.json());   // json 형식의 데이터를 받기 위한 설정

app.use(session({
    secret: 'ssa123456789',     // 암호화 키, 아무거나 넣어도 됨
    resave: false,              // 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값
    saveUninitialized: true,    // 세션이 필요하면 세션을 구동시키고 아니면 구동시키지 않음
    store: new FileStore()      // 세션 데이터를 저장
}));

app.set('views', './views');   // views 폴더를 views로 설정
app.set('view engine', 'ejs'); // view engine을 ejs로 설정

// 기본 페이지 연결
app.get('/', (req, res) => {
    console.log('메인페이지 요청');
    console.log(req.session);

    if(req.session.is_logined) {
        res.render('home/index', {
            is_logined: req.session.is_logined,
            user_id: req.session.user_id,
            user_name: req.session.user_name
        });
    } else {
        res.render('home/login', {
            is_logined: false
        });
    }
});

// 로그인 페이지 연결
app.get('/login', (req, res) => {
    console.log('로그인 페이지 이동');
    res.render('home/login');
});

// 로그인 처리
app.post('/login', (req, res) => {
    console.log('로그인 요청');

    var user_id = req.body.id;
    var user_pw = req.body.password;

    console.log(user_id, user_pw);

    var sql = 'SELECT * FROM usertable WHERE id=?';
    db.query(sql, [user_id], (err, result) => {
        if(err) {
            console.log('sql 에러');
            console.log(err);
            return;
        }

        console.log(result.length);

        if (result.length > 0) {     
            console.log('아이디 일치 확인');
            if (result[0].password == user_pw) {
                console.log('비밀번호 일치 확인');
                req.session.is_logined = true;
                req.session.user_id = user_id;
                req.session.user_name = result[0].name;
                req.session.save(() => {
                    res.render('home/index', {
                        name: result[0].name,
                        id: user_id,
                        email: result[0].email,
                        is_logined: true
                    });
                });
            } else {
                console.log('로그인 실패: 비밀번호 일치하지 않음');
                res.render('home/login');
            }

        } else {
            console.log('로그인 실패: 아이디 일치하지 않습니다.');
            res.render('home/login')
        }

    });
});


app.listen(3004, () => {
    console.log('3004번 포트에서 서버 대기 중...');
});