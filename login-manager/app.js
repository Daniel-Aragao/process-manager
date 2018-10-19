var express = require('express');
var path = require('path');
var app = express();

var mongodb = require('./infra/database/database')();
mongodb.collection('user').insertMany([{a:1}]);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// restful api error handler
app.use(function(err, req, res, next) {
  console.log(err);

  if (req.app.get('env') !== 'development') {
      delete err.stack;
  }

    res.status(err.statusCode || 500).json(err);
});

module.exports = app;
