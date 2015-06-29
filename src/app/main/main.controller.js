'use strict';

angular.module('chat')
  .controller('MainCtrl', function ($scope) {
    var socket = new WebSocket('ws://localhost:8081');

    $scope.sendMessageToChat = function () {
      socket.send('testMessage');
    };
  });
