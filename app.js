var createError = require('http-errors');
var http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// setup firebase admin
var admin = require('firebase-admin');

var serviceAccount = require("./private/firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://innovationapp-e8135.firebaseio.com"
});

/*var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.set({id:20, name:"testname"});

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
}); */

// Routes
var indexRouter = require('./routes/index');
var workspaceRouter = require('./routes/workspace');
var risksRouter = require('./routes/risks');
var dependenciesRouter = require('./routes/dependencies');
var calendarRouter = require('./routes/calendar');

// Initialize database defaults
var initializer = require('./public/javascripts/initializer');
initializer.init();

// Initialize ExpressJS
var app = express();

// Set up View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Link routers to urls
app.use('/', indexRouter);
app.use('/workspace', workspaceRouter);
app.use('/risks', risksRouter);
app.use('/dependencies', dependenciesRouter);
app.use('/calendar', calendarRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(typeof req.next);
  next(createError(404));
});

// Set up error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
