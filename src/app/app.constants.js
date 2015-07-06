(function() {
  'use strict';

  angular.module('chat')
    .constant('ChatConstants', {
      Login: {
        USER_LOGIN: 'User_login'
      },
      BackEndUrl: 'http://localhost:3002'
    });
})();
