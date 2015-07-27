(function () {
  'use strict';

  angular.module('chat')
    .controller('NavbarCtrl', NavbarCtrl);

  /*@ngInject*/
  function NavbarCtrl(IdentityService) {
    var vm = this;

    angular.extend(vm, {
      getUserName: getUserName
    });

    function getUserName() {
      var loggedUser = IdentityService.getLoggedUser();
      return loggedUser && loggedUser.name ? loggedUser.name : '';
    }

  }


})();


