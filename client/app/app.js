'use strict';

angular.module('avantamorApp', [
  'avantamorApp.auth',
  'avantamorApp.admin',
  'avantamorApp.constants',
  //'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
