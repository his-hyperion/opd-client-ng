angular.module('opdClient')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'components/dashboard/dashboard.html'
            })
    }])