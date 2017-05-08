angular.module('opdClient')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'components/dashboard/dashboard.html'
            })
            .when('/patients', {
                templateUrl: 'components/my_patients/my_patients.html'
            })
            .when('/newPatients', {
                templateUrl: 'components/new_patients/new_patients.html'
            })
            .when('/prescribeDrugs', {
                templateUrl: 'components/prescribe_drugs/prescribe_drugs.html'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }])