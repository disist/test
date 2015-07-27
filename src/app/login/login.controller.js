(function() {
  'use strict';

  angular.module('chat')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['IdentityService'];

  function LoginCtrl(IdentityService) {

    var vm = this;

    vm.login = function(user) {
      IdentityService.login(user);
    }
  }
})();
