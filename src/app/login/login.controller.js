(function() {
  'use strict';

  angular.module('chat')
    .controller('LoginCtrl', LoginCtrl);

  /*@ngInject*/
  function LoginCtrl(IdentityService) {

    var vm = this;

    angular.extend(vm, {
      login: login
    });


    function login(user) {
      IdentityService.login(user);
    }

  }
})();
