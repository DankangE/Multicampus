const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('users.html', {title: '사용자 정보', 
                            users:[{id: 1, name: 'Alice'},
                                   {id: 2, name: 'Beck'}, 
                                   {id: 3, name: 'Chris'}]})
});

module.exports = router;