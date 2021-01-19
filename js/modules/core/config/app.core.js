
(function () {
  'use strict';

  angular.module('com.module.navbar', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/navbar', {
        templateUrl: '/modules/core/view/navbar.html',
        controller: 'NavbarCtrl'
      });
    }])

})();
