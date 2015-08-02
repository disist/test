(function () {
  'use strict';

  angular.module('chat')
    .factory('ChatService', ChatService);

  /*@ngInject*/
  function ChatService($http, IdentityService, DialogService) {

    return {
      getList: getList,
      getMessages: getMessages,
      sendMessage: sendMessage
    };

    function getList() {
      var user = IdentityService.getLoggedUser();
      return $http.get('/chats/' + user.userId)
        .then(function success(response) {
          return response.data;
        }, function fail() {
          DialogService.showServerError();
        });
    }

    function getMessages(chatId) {
      return $http.get('/messages/' + chatId)
        .then(function success(response) {
          return response.data;
        }, function fail() {
          DialogService.showServerError();
        });
    }

    function sendMessage(socket, chatId, message) {
      var user = IdentityService.getLoggedUser();
      var newMessage = {};
      newMessage[chatId] = {
        message: message,
        time: Date.now(),
        userName: user.name,
        userId: user.userId
      };
      socket.send(JSON.stringify(newMessage));
      return newMessage;
    }
  }
})();
