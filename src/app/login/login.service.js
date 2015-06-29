(function() {
  'use strict';

  angular.module('chat')
    .factory('LoginService', LoginService);

  LoginService.$inject = ['$http', '$state', 'ChatConstants'];

  function LoginService($http, $state, ChatConstants) {

    return {
      checkLogged: checkLogged,
      login: login
    };

    var cashedUser;

    function checkLogged() {
      cashedUser = cashedUser
        ? cashedUser
        : angular.fromJson(localStorage.getItem(ChatConstants.Login.USER_LOGIN));

      return !!cashedUser;
    }

    function login(user) {
      //ToDo $http to server
      if (user && user.login == 1 && user.password == 1) {
        $state.go('home.main');
        localStorage.setItem(ChatConstants.Login.USER_LOGIN, user.login);
      }
    }
  }
})();
