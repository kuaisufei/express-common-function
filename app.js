var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//引入路由
var routes = require('./routes/index');
var sql = require('./routes/sql');
var loggerroute = require('./routes/logger');
var exec = require('./routes/exec');
var cheerio = require('./routes/cheerio');
var mongo = require('./routes/mongo');
var eventproxy = require('./routes/eventproxy');
const mail = require('./routes/mail');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/sql', sql);
app.use('/logger',loggerroute);
app.use('/exec',exec);
app.use('/cheerio',cheerio);
app.use('/mongodb',mongo);
app.use('/eventproxy',eventproxy);
app.use('/mail', mail);
app.use('/test', function(res,req){
    req.send({status:1,msg:'测试'});
});
// app.use('/chat',chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
