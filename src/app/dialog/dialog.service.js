(function () {
  'use strict';

  angular.module('chat')
    .factory('DialogService', DialogService);

  /*@ngInject*/
  function DialogService($mdToast) {

    return {
      showToast: showToast
    };

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top')
          .hideDelay(3000)
      );
    }
  }
})();
