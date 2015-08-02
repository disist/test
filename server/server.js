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
        return res.send(userResponse);
      }
    }
    res.sendStatus(401);
  });

  app.get('/chats/:userId', function (req, res) {
    var userId = req.params.userId;
    var chats = mockDB.chats.filter(function(item) {
      return item.userId == userId;
    });
    res.send(chats);
  });

  app.get('/messages/:chatId', function(req, res) {
    var chatId = req.params.chatId;
    var messages = mockDB.messages[chatId];
    res.send(messages);
  });

  var server = app.listen(3002, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log('Express started at http://%s:%s', host, port);

  });
};
