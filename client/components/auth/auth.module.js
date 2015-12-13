'use strict';

angular.module('avantamorApp.auth', [
  'avantamorApp.constants',
  'avantamorApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
