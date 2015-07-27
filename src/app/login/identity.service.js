(function () {
  'use strict';

  angular.module('chat')
    .factory('IdentityService', IdentityService);

  function IdentityService($http, $state) {

    var loggedUser;

    return {
      checkLogged: checkLogged,
      login: login,
      getLoggedUser: getLoggedUser
    };

    function getLoggedUser() {
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
          $state.go('home.main');
        }).error(function (reason) {
          console.log(reason);
        });
    }
  }
})();
