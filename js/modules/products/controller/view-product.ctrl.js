(function () {
    'use strict';
    angular.module("com.module.products")
        .controller('ViewProductCtrl', ViewProductCtrl)
    ViewProductCtrl.$inject = ['$scope', '$routeParams', 'DbServices'];
    function ViewProductCtrl($scope, $routeParams, DbServices) {
        console.log($routeParams);
        const productId = $routeParams.id.toString();
        $scope.product = {}
        function viewProduct(productId) {
            DbServices.viewProduct(productId).then((doc) => {
                $scope.product = doc;
                $scope.$apply();
            }).catch(err => console.error(err))
        }
        viewProduct(productId);
    };
})();