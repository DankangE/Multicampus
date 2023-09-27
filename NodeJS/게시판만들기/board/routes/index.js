var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('../config/dbconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('환영합니다.');
    res.render('index');
    // res.render('login');
});


module.exports = router;
