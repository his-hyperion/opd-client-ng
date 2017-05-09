angular.module('opdClient')
    .config(['$routeProvider', '$locationProvider', '$mdThemingProvider', function ($routeProvider, $locationProvider, $mdThemingProvider) {
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
            .when('/patientOverview', {
                templateUrl: 'components/patients_overview/patients_overview.html'
            })
            .when('/questionnaire', {
                templateUrl: 'components/questionnaire/questionnaire.html'
            })
            .when('/newExaminations', {
                templateUrl: 'components/new_examinations/new_examinations.html'
            })
            
            .otherwise({
                redirectTo: '/dashboard'
            })
            
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $mdThemingProvider.theme('dark-grey')
            .backgroundPalette('grey')
            .dark();
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    }])