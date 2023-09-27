const express = require('express');
const mysql = require('mysql2');
const dbconfig = require('../config/dbconfig');
const router = express.Router();

//get
router.get('/', (req, res, next) => {
    console.log('login get');
    res.render('login', {msg: '로그인을 해주세요.'});
});

router.get('/login', (req, res, next) => {
    console.log('login get');
    res.render('login', {msg: '로그인을 해주세요.'});
});

//post
router.post('/login_process', (req, res, next) => {
    const conn = mysql.createConnection(dbconfig);

    console.log('login post 연결');

    console.log(req.body);

    let id = req.body.id;
    let pw = req.body.pw;

    console.log(req.body.id, req.body.pw);

    if (id == '' || pw == '') {
        console.log('아이디 또는 비밀번호를 입력해주세요.');
        res.render('login', { msg: '아이디 또는 비밀번호를 입력해주세요.' });
        return;
    }

    let sql = `select * from users where _id = ?`;
    conn.query(sql, [id], (err, result ) => {
        if(err) {
            console.error(err);
            throw err;
        }
        // id 확인
        if(result.length > 0) {
            // pw 확인
            if (result[0]._password == pw) {
                // 로그인 성공
                console.log('로그인 성공');
                res.render('notices.ejs');
            } else {
                // 패스워드 오류
                console.log('비밀번호가 틀렸습니다.');
                res.render('login', {msg: '비밀번호 오류입니다.'});
            }
        } else {
            // 아이디 오류
            console.log('아이디가 존재하지 않음');
            res.render('login', {msg: '아이디가 존재하지 않습니다.'});
        }
    });
    conn.end();
});



module.exports = router;

