(function() {
  'use strict';

  angular.module('chat')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$state'];

  function LoginCtrl($scope, $state) {
    $scope.update = function(user) {
      //TODO
      //LoginService.login
      if (user && user.login == 1 && user.password == 1) {
        $state.go('home.main');
      }

    }
  }
})();
