(function () {
  'use strict';

  angular.module('chat')
    .factory('IdentityService', IdentityService);

  /*@ngInject*/
  function IdentityService($http, $state, DialogService, ChatConstants) {

    var loggedUser;

    return {
      checkLogged: checkLogged,
      login: login,
      getLoggedUser: getLoggedUser
    };

    function getLoggedUser() {
      if (!loggedUser) {
        loggedUser = angular.fromJson(localStorage.getItem(ChatConstants.LS_keys.User));
      }
      return loggedUser;
    }

    function checkLogged() {
      //todo
      return true;
    }

    function login(user) {
      if (!user || !user.login || !user.password) {
        return;
      }
      $http.post('/auth', {user: user})
        .success(function (response) {
          loggedUser = response;
          localStorage.setItem(ChatConstants.LS_keys.User, angular.toJson(response));
          $state.go('main.list');
        }).error(function (reason) {
          DialogService.showToast(reason);
        });
    }
  }
})();
