/*global angular */

/**
 * The main app module
 *
 * @type {angular.Module}
 */

(function () {
	'use strict';

	angular.module('my-app', ['ngRoute', 'ngCookies', 'com.module.login', 'com.module.products', 'com.module.navbar'])
		.run(['$rootScope', '$location', '$cookieStore', function ($rootScope, $location, $cookieStore) {
			$rootScope.$on('$routeChangeStart', function (e, toState) {
				// redirect to login page if not logged in and trying to access a restricted page

				$rootScope.globals = $cookieStore.get('sl_globals') || {};

				if (!$rootScope.globals.loggedIn) {
					$location.path('/login');
				}

			});

		}])
		.config(function ($routeProvider) {
			'use strict';

			$routeProvider
				.otherwise({
					redirectTo: '/login'
				});

		})
})();


