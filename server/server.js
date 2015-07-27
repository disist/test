'use strict';

module.exports.init = function () {

  var express = require('express');
  var bodyParser = require("body-parser");
  var mockDB = require('../server/mockDB.json');
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/auth', function (req, res) {
    var user = req.body.user;
    if (user) {
      var userFromServer = mockDB.users.filter(function(item) {
        return item.login === user.login && item.password === user.password;
      });
      if (userFromServer.length !== 0) {
        //todo
        var token = (Math.random()*100000000).toFixed();
        userFromServer.token = token;
        var userResponse = {
          userId: userFromServer[0].userId,
          name: userFromServer[0].name,
          chatIds: userFromServer[0].chatIds,
          token: token
        };
        res.send(userResponse);
        return;
      }
    }
    res.sendStatus(401);
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
