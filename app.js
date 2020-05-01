const path = require('path');

const express = require('express');
const config = require('./config/config');
const favicon = require('serve-favicon');
const cacheResponseDirective = require('express-cache-response-directive');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const https = require('https');

const app = express();

// CONFIGURATIONS
app.set('port', config.port);
app.set('https', config.https);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('etag', false);
app.set('x-powered-by', false);

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cacheResponseDirective());
app.use(compression({ threshold: 0 }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTING
const indexRoute = require('./routes/index');
const isActiveRoute = require('./routes/is-active');
const buildInfoRoute = require('./routes/build-info');

app.use('/', indexRoute);
app.use('/isActive', isActiveRoute);
app.use('/buildInfo', buildInfoRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'production' ? {} : err
  });
});

module.exports = app;
