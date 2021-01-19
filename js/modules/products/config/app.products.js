
(function () {
  'use strict';

angular.module('com.module.products', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/products', {
      templateUrl: '/modules/products/view/products.html',
      controller: 'ProductsCtrl'
    })

    .when('/add-product', {
        templateUrl: '/modules/products/view/add-product.html',
        controller: 'AddProductCtrl'
    })

    .when('/view-product/:id', {
        templateUrl: '/modules/products/view/view-product.html',
        controller: 'ViewProductCtrl'
    })

  }])

})();
