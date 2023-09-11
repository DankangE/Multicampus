var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
const port = 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var logRouter = require('./routes/login');
var usersRouter = require('./routes/singup');
var idpwRouter = require('./routes/idpw-find.js');


app.get("/", indexRouter);
app.use("/login", logRouter);
app.use("/singup", usersRouter);
app.use("/idpw-find", idpwRouter);


app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});