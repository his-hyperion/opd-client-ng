angular.module('opdClient')
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
        function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
            var loginState = {
                name: 'login',
                url: '/login',
                templateUrl: 'components/login/login.html'
            };
            var dashboardState = {
                name: 'dashboard',
                url: '/dashboard',
                templateUrl: 'components/dashboard/dashboard.html'
            };
            var patientState = {
                name: 'patients',
                url: '/patients',
                templateUrl: 'components/my_patients/my_patients.html'
            };
            var newPatientState = {
                name: 'newPatients',
                url: '/newPatients',
                templateUrl: 'components/new_patients/new_patients.html'
            };
            var drugPrescriptionState = {
                name: 'prescribeDrugs',
                url: '/prescribeDrugs',
                templateUrl: 'components/prescribe_drugs/prescribe_drugs.html'
            };
            var patientOverviewState = {
                name: 'patientOverview',
                url: '/patientOverview',
                templateUrl: 'components/patients_overview/patients_overview.html'
            };
            var questionnaireState = {
                name: 'questionnaire',
                url: '/questionnaire',
                templateUrl: 'components/questionnaire/questionnaire.html'
            };
            var newExaminationsState = {
                name: 'newExaminations',
                url: '/newExaminations',
                templateUrl: 'components/new_examinations/new_examinations.html'
            };

            $stateProvider.state(dashboardState);
            $stateProvider.state(patientState);
            $stateProvider.state(newPatientState);
            $stateProvider.state(drugPrescriptionState);
            $stateProvider.state(patientOverviewState);
            $stateProvider.state(questionnaireState);
            $stateProvider.state(newExaminationsState);
            
            $urlRouterProvider.otherwise(function ($injector, $location) { 
                var $state = $injector.get('$state'); 
                $state.go(dashboardState);
            });

            $mdThemingProvider.theme('dark-grey')
                .backgroundPalette('grey')
                .dark();
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        }]);