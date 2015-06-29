(function () {
  'use strict';

  angular.module('chat')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$http'];

  function MainCtrl($http) {
    var socket = new WebSocket('ws://localhost:3003');

    var vm = this;

    /*vm.sendMessage = function () {
     socket.send(this.message);
     };*/
    vm.sendMessage = function () {
      $http.get('/users')
        .success(function () {
          vm.message = 'succes';
        })
        .error(function () {
          vm.message = 'fail';
        });
    };
  }
})();
