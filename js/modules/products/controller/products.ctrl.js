(function () {
    'use strict';
    angular.module("com.module.products")
        .controller('ProductsCtrl', ProductsCtrl)
    ProductsCtrl.$inject = ['$scope', '$location', 'DbServices'];
    function ProductsCtrl($scope, $location, DbServices) {
        $scope.products = [];
        $scope.productsToDelete = {};
        $scope.product = {
            name: "paper",
            type: "stationary",
            price: 10
        };
        $scope.getProducts = function () {
            DbServices.getProducts().then((doc) => {
                $scope.products = doc.rows.map(x => x.doc);
                $scope.$apply();
            }).catch(err => console.error(err));
        }
        $scope.getProducts();
        $scope.checkboxChange = function (product) {
            console.log(product);
            var index = $scope.productsToDelete[product._id] ? true : false;
            if (product.isChecked && !index) {
                $scope.productsToDelete[product._id] = product;
            } else if (!product.isChecked && index) {
                delete $scope.productsToDelete[product._id];
            }
        }
        $scope.deleteProducts = function () {
            var bulkArr = [];
            for (let key in $scope.productsToDelete) {
                $scope.productsToDelete[key]["_deleted"] = true;
                bulkArr.push($scope.productsToDelete[key]);
            }
            console.log(bulkArr);
            if (bulkArr.length) {
                DbServices.bulkDelete(bulkArr).then(() => {
                    $scope.getProducts();
                }).catch(err => console.error(err));
            }
        }
    };
})();