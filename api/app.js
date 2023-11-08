var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var mongoose  = require('mongoose');
mongoose.connect('mongodb+srv://dhingraketan:1234@maincluster.5r9bj70.mongodb.net/dealWithIt?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var customersRouter = require('./routes/customers');
var phonesRouter = require('./routes/phones');
var repsRouter = require('./routes/reps');

var app = express();

// app.use(
//   cors({
//     origin: 'http://0.0.0.0:4200',
//     origin: 'http://localhost:4200',
//     origin: 'http://192.168.1.97:4200',
//     credentials: true,
//     methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
//   }
// ));





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'deal-with-it')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'deal-with-it'));
});


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customers', customersRouter);
app.use('/phones', phonesRouter);
app.use('/reps', repsRouter);

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
