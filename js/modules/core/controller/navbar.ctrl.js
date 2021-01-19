'use.strict'

angular.module('my-app')
.controller('NavbarCtrl', NavbarCtrl);

NavbarCtrl.$inject = ['$scope', '$rootScope', '$location', '$cookieStore', 'DbServices']

function NavbarCtrl ($scope, $rootScope, $location, $cookieStore, DbServices){
    
    $scope.layout = {
        navbarUrl: 'modules/core/view/navbar.html',
    };

    DbServices.auth.isLoggedIn = $cookieStore.get('sl_globals') && $cookieStore.get('sl_globals').loggedIn

    $scope.auth = DbServices.auth;

    $scope.logout = function() {
        $rootScope.globals = {};
        $cookieStore.remove('sl_globals');
        DbServices.auth.isLoggedIn = false;
        $location.path('/login');
    }

}