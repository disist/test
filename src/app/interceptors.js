(function () {
  'use strict';

  angular.module('chat')
    .config(function ($httpProvider, ChatConstants) {

      $httpProvider.interceptors.push(function ($q) {
        return {
          'request': function (config) {
            if (!/[\s\S]*.html/.test(config.url)) {
              config.url = ChatConstants.BackEndUrl + config.url;
            }
            return config || $q.when(config);
          }
        }
      });
    });
})();
