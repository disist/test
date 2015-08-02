(function () {
  'use strict';

  angular.module('chat')
    .factory('DialogService', DialogService);

  /*@ngInject*/
  function DialogService($mdToast, ChatConstants) {

    return {
      showToast: showToast,
      showServerError: showServerError
    };

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top')
          .hideDelay(3000)
      );
    }

    function showServerError() {
      showToast(ChatConstants.Response.Error);
    }
  }
})();
