// 引入包文件
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入路由文件
var indexRouter = require('./routes/index');
var refRouter = require('./routes/ref');
var loginRouter=require('./routes/login');
var chartRouter=require('./routes/chart');

//生成express实例
var app = express();

// view engine setup 设置视图引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//使用上面使用引入的包文件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//让用户访问路由
app.use('/', indexRouter);
app.use('/ref', refRouter);
app.use('/login',loginRouter);
app.use('/chart',chartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
