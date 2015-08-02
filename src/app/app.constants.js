(function() {
  'use strict';

  angular.module('chat')
    .constant('ChatConstants', {
      LS_keys: {
        User: 'USER'
      },
      BackEndUrl: 'http://localhost:3002',
      Response: {
        Error: 'Server error'
      }
    });
})();
