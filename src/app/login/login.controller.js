(function() {
  'use strict';

  angular.module('chat')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['LoginService'];

  function LoginCtrl(LoginService) {

    var vm = this;

    vm.login = function(user) {
      LoginService.login(user);
    }
  }
})();
