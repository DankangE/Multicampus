var express = require('express');
var router = express.Router();
// const mysql = require('mysql2');
// const dbconfig = require('../config/dbconfig');

// const conn = mysql.createConnection(
//     host = dbconfig.host,
//     user = dbconfig.user,
//     password = dbconfig.password,
//     database = dbconfig.database
// );

// conn.connect( (err) => {
//     if(err) {
//         console.error('mysql 연결 실패');
//         console.error(err);
//         throw err;
//     }
//     console.log('mysql 연결 성공');
// });


var conn = require('../model/db.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  sql = 'select * from users';
  conn.query(sql, (err, rows, fields) => {
    if(err) {
      console.error('쿼리 실패');
      console.error(err);
      res.render('index', {title: 'Express', data: '데이터 조회 실패'});
    }
    console.log(rows);
    res.render('index', { title: 'Express', data: rows });
  });

});

module.exports = router;
