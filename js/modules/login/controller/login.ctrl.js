'use.strict'

angular.module("com.module.login")
.controller('LoginCtrl',  LoginCtrl )

LoginCtrl.$inject = ['$scope', '$rootScope', '$location', '$cookieStore', 'DbServices']

function LoginCtrl($scope, $rootScope, $location, $cookieStore, DbServices) {
    
    $scope.email = "hello@hello.com";
    $scope.password = "hello";

    $scope.showError = "";

    $scope.login = function() {

        if($scope.email === "hello@hello.com" && $scope.password === "hello") {
            $scope.showError = "";
            $rootScope.globals = {
                loggedIn: true
            };
            $cookieStore.put('sl_globals', $rootScope.globals);
            DbServices.auth.isLoggedIn = true;
            $location.path('/products');
        } else {
            $scope.showError = "Email or Password is incorrect";
        }

        console.log($scope.email, $scope.password);

    }

};