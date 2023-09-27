const express = require('express');
const User = require('../module/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({});  // 몽고디비에서 데이터를 조회
        res.render('mongoose', { users }); // 조회한 데이터를 템플릿에 넣어 렌더링
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;