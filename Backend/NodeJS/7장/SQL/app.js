const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const static = require('serve-static');
const dbcfg = require('./config/dbconfig.json');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
res.is_logined = false;
const port = 3004;

// Pool 객체를 이용한 db 연결
const pool = mysql.createPool({
    host: dbcfg.localdb.host,
    user: dbcfg.localdb.user,
    password: dbcfg.localdb.password,
    database: dbcfg.localdb.database,
    debug: false
});

// static 미들웨어 설정
const app = express();  // express 객체 생성

// body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public",static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'abc123456',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

// 
app.post('/signup', (req, res) => {
    console.log('/signup 요청됨' + req);

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    var paramName = req.body.name || req.query.name;
    var paramEmail = req.body.email || req.query.email;

    console.log([paramId, paramPassword, paramName, paramEmail]);

    pool.getConnection((err, conn) => {
        if (err) {
            console.log('MySQL 연결 실패:', err);
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write('<h1>MySQL 연결 실패</h1>');
            res.end();
            return;
        }
        console.log('MySQL 연결 성공');
        
        var sql = 'insert into usertable(id, password, name, email) values(?, ?, ?, ?)';
        var params = [paramId, paramPassword, paramName, paramEmail]; // 파라미터 배열(쿼리에 전달할 값)

        conn.query(sql, params, (err, result, fields) => {

            console.log('실행쿼리: ' + sql);

            if (err) {
                console.log('쿼리 실행 실패:');
                console.dir(err);  // 에러 객체 출력
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>쿼리 실행 실패</h1>');
                res.end();
                return;
            }

            if (result) {
                console.log(result);
                console.log('사용자 추가 성공');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 추가 성공</h1>');
                res.end();
            } else {
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>사용자 추가 실패</h1>');
                res.end();
            }
        });

        conn.release();  // 연결 해제
    });
});

// 뷰 엔진(템플릿 엔진) ejs 설정

app.set('views', './views');
app.set('view engine', 'ejs');

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
        res.render('home/index', {
            is_logined: false
        });
    }

});

app.get('/login', (req, res) => {
    console.log('login 요청됨')
    res.render('home/login');
});

app.post('/login', (req, res) => {
    console.log('/login 요청됨' + req);

    var body = req.body;
    var paramId = body.id;
    var paramPassword = body.password;

    var sql = 'select id, password from usertable where id=?';
    var params = [paramId];

    pool.getConnection((err, conn) => {
        if (err) {
            console.log('MySQL 연결 실패:', err);
        }

        conn.query(sql, params, (err, rows, fields) => {
            if (err) {
                console.log('쿼리 실행 실패:', err);
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>쿼리 실행 오류</h1>');
                res.end();
                return;
            }

            if (rows.length > 0) {
                // console.log(rows);
                // console.log(params[0]);
                // console.log(rows[0]);
                // console.log(rows[0].id);
                // console.log(rows[0].password);
                // console.log(rows[0].password == paramPassword);
                
                if (rows[0].password === paramPassword) {
                    console.log('로그인 성공');

                    // 세션 결정
                    req.session.is_logined = true;
                    req.session.user_id = paramsId;
                    req.session.user_name = rows[0].name;

                    req.session.save(() => {
                        res.render('home/success', { 
                            id: paramId,
                            name: rows[0].name,
                            is_logined: true
                        });
                    });

                    res.render('home/success', { id: paramId });
                } else {
                    console.log('패스워드 불일치');
                    res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                    res.write('<h1>패스워드 불일치</h1>');
                    res.end();
                    return;
                }
            } else {
                console.log('일치하는 사용자 없음');
                res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
                res.write('<h1>일치하는 사용자 없음</h1>');
                res.end();
                return;
            }
        });
        
        conn.release();  // 연결 해제
    });
});

app.get('/logout', (req, res) => {
    console.log('logout 요청됨');
    req.session.destroy((err) => {
        if (err) {
            console.log('세션 삭제 실패');
            return;
        }
        console.log('세션 삭제 성공');
        res.redirect('/');
    })
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버 실행 중...port: ${port}`);
});
