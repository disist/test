'use strict';

module.exports.init = function() {

  var WebSocketServer = new require('ws');

  // подключенные клиенты
  var clients = {};

  var webSocketServer = new WebSocketServer.Server({
    port: 3003
  });
  webSocketServer.on('connection', function (ws) {

    var id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    ws.on('message', function (message) {
      console.log(message);
      console.log('получено сообщение ' + message);

      for (var key in clients) {
        clients[key].send(message);
      }
    });

    ws.on('close', function () {
      console.log('соединение закрыто ' + id);
      delete clients[id];
    });

  });
};
