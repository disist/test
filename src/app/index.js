(function() {
  'use strict';

  angular.module('chat', ['ui.router', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.rule(function($injector, $location) {
        var identityService = $injector.get('IdentityService');
        if (!identityService.checkLogged() && $location.$$path !== '/login') {
          return '/login';
        }
      });

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'loginCtrl'
        })
        .state('home', {
          abstract: true,
          template: '<div ui-view="navbar"></div><div ui-view="main"></div>'
        })
        .state('home.main', {
          url: '/main:chatName',
          views: {
            'main': {
              templateUrl: 'app/main/main.html',
              controller: 'MainCtrl',
              controllerAs: 'mainCtrl'
            },
            'navbar': {
              templateUrl: 'app/components/navbar/navbar.html',
              controller: 'NavbarCtrl',
              controllerAs: 'navBarCtrl'
            }
          }
        });

      $urlRouterProvider.otherwise('/main');
    });
})();
