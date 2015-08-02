(function () {
  'use strict';

  angular.module('chat')
    .controller('MainCtrl', MainCtrl);

  /*@ngInject*/
  function MainCtrl($stateParams, ChatService) {

    var socket;

    var vm = this;

    angular.extend(vm, {
      messages: [],
      message: '',
      sendMessage: sendMessage
    });

    activate();

    function activate() {
      socket = new WebSocket('ws://localhost:3003');

      ChatService.getMessages($stateParams.chatId)
        .then(function (messages) {
          vm.messages = messages;
        });
    }

    function sendMessage() {
      //todo find better solution
      var newMessage = ChatService.sendMessage(socket, $stateParams.chatId, vm.message);
      vm.messages.push(newMessage[$stateParams.chatId]);
    }


  }
})();
