const mysql = require('mysql2');
const dbconfig = require('../config/dbconfig');

const conn = mysql.createConnection(
    host = dbconfig.host,
    user = dbconfig.user,
    password = dbconfig.password,
    database = dbconfig.database
);

conn.connect( (err) => {
    if(err) {
        console.error('mysql 연결 실패');
        console.error(err);
        throw err;
    }
    console.log('mysql 연결성공');
});

module.exports = conn;