const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.engine('html', engines.mastache);
// app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({
    secret: '123456abcdef',
    resave: false,
    saveUninitialized: true
}));

// 라우터
var router = require('./routes/index')(app, fs);

app.listen(3004, () => {
    console.log('서버 실행 중 port 3004');
});