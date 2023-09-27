var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('id/pw 찾기 페이지');
    res.send('id/pw 찾기 페이지입니다.');
});

module.exports = router;