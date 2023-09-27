const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const static = require('serve-static');
const dbcfg = require('./config/dbconfig.json');

// Pool 객체를 이용한 db 연결
const pool = mysql.createPool({
    host: dbcfg.localdb.host,
    user: dbcfg.localdb.user,
    password: dbcfg.localdb.password,
    database: dbcfg.localdb.database,
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('MySQL 연결 실패:', err);
    } else {
        console.log('MySQL 연결 성공');
        var sql = 'select id, password from usertable where id="sjd001"';
        conn.query(sql, (err, result, fields) => {
            if (err) {
                console.log('쿼리 실패:', err);
            } else {
                console.log('쿼리 성공:', result.length);
                console.log(result);
                conn.release();  // 연결 해제
            }
        });
    }
});

// const app = express();

// // body-parser를 사용해 application/x-www-form-urlencoded 파싱
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use("/public",static(path.join(__dirname, 'public')));