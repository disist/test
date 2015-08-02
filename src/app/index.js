(function () {
  'use strict';

  angular.module('chat', ['ui.router', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.rule(function ($injector, $location) {
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
        .state('main', {
          abstract: true,
          templateUrl: 'app/navbar/navbar.html',
          controller: 'NavbarCtrl',
          controllerAs: 'navBarCtrl'
        })
        .state('main.list', {
          url: '/list',
          templateUrl: 'app/list/list.html',
          controller: 'ListController',
          controllerAs: 'listCtrl'
        })
        .state('main.chat', {
          url: '/chat:chatId',
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'mainCtrl'
        });

      $urlRouterProvider.otherwise('/list');
    });
})();
