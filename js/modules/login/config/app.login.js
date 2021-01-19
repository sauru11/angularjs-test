
(function () {
  'use strict';

  angular.module('com.module.login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: '/modules/login/view/login.html',
        controller: 'LoginCtrl'
      });
    }])

})();
