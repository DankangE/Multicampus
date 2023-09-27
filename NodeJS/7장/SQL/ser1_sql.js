const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const static = require('serve-static');

// connection 객체를 이용한 db 연결
const conn = mysql.createConnection({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'testdb',
    debug: false
});

conn.connect((err) => {
    if (err) {
        console.log('mysql 연결 실패 : ' + err);
    } else {
        console.log('mysql 연결 성공');
    }

    var sql = 'insert into usertable(id, password, name, email) values("sjd001","123456", "서정동", "test@cc.kr")';
    conn.query(sql, (err, rows, fields) => {
        if (err) {
            console.log('insert 실패 : ' + err);
        } else {
            console.log('insert 성공');
        }
    });
});