const express = require('express');
const mysql = require('mysql2');
const dbconfig = require('../config/dbconfig');
const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next)  => {
  res.render('singup', {msg: ''});
});

router.get('/singup', async (req, res, next) => {
  res.render('singup', {msg: ''});
});


router.post('/insert', (req, res, next) => {
  const conn = mysql.createConnection(dbconfig);

  console.log('singup post 연결');

  const body = req.body;
  const id = body.id;
  const pw = body.pwd;
  const name = body.name;
  const hp = body.hp;
  const email = body.emailid + '@' + body.email;
  const params = [id, pw, name, hp, email];

  const sql = 'insert into users (_id, _password, _name, _hp, _email) values (?, ?, ?, ?, ?)';
    conn.query(sql, params , (err, result) => {
      if(err) {
        console.error(err);
        conn.end();
        res.render('singup', {msg: '회원가입 실패(아이디 중복)'});
      }
      console.log('회원가입 완료');
      res.hasHeader('Content-Type', 'text/html; charset=utf-8');
      res.write('<2>회원가입이 완료되었습니다.</h2>');
      res.write('<a href="/login">로그인</a>');
      res.end();
    });
  conn.end();
});

module.exports = router;
