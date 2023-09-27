const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Express_index', mess: 'Hello there!', data:[1, 2, 3, 4 ,5]});
});

module.exports = router;