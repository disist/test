'use strict';

module.exports.init = function() {

  var express = require('express');
  var mockDB = require('../server/mockDB.json');
  var app = express();

  app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get('/users', function (req, res) {
    console.log('sended');
    res.send('users');
  });

  var server = app.listen(3002, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Express started at http://%s:%s', host, port);

  });
};
