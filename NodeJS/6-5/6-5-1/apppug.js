const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();


app.set('port', process.env.PORT || 3004);
app.set('views', './views'); // path.join(__dirname, 'views')
app.set('view engine', 'pug');

app.engine('html', engines.mustache); // 화면 엔진을 html로 설정
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: '123456789qwerty',
    resave: false,
    saveUninitialized: true
}));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const port = 3004;
app.listen(port, ()=> {
    console.log(`서버 실행 중 port ${port}`);
});














// const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('test', {title: 'Hey', message: 'Hello there!'});
// });

// module.exports = router;