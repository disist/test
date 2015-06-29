'use strict';

angular.module('chat', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        data:{
          notNeedLogin: true
        },
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('home', {
        abstract: true,
        template: '<div ui-view="navbar"></div><div ui-view="main"></div>'
      })
      .state('home.main', {
        url: '/home',
        views: {
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          },
          'navbar': {
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/home');
  })
;
