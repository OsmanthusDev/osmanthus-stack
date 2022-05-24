const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const responseTime = require('response-time');
const compression = require('compression');
const timeout = require('connect-timeout');
const createError = require('http-errors');
const apiRouter = require('./api/index.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(helmet());
app.use(responseTime());
app.use(compression());
app.use(timeout('10s'));
app.use(logger('dev'));
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// app.get('/', (req, res) => {
//   res.send('hello world');
// })

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
