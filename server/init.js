'use strict';

module.exports.run = function () {

  var server = require('../server/server.js');
  var socket = require('../server/socket.js');

  server.init();
  socket.init();

};

