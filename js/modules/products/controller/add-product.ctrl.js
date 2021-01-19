'use.strict'

angular.module("com.module.products")
    .controller('AddProductCtrl', AddProductCtrl)

    AddProductCtrl.$inject = ['$scope', '$location', 'DbServices'];

function AddProductCtrl($scope, $location, DbServices) {
    

    $scope.product = {
        name: "paper",
        type: "stationary",
        price: 10
    };

    $scope.addProduct = function () {

        $scope.product._id = new Date().getTime().toString();

        DbServices.addNewProduct($scope.product, function(err, doc){
            console.log(err, doc);
        });

        $location.path("/products");

    }
    

};