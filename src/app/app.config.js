angular.module('opdClient')
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
        function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
            var loginState = {
                name: 'login',
                url: '/login',
                templateUrl: 'components/login/login.html'
            };
            var templateState = {
                name: 'opd',
                url: '/opd',
                templateUrl: 'components/opd/opd.html'
            };
            var dashboardState = {
                name: 'opd.dashboard',
                url: '/dashboard',
                templateUrl: 'components/dashboard/dashboard.html'
            };
            var patientState = {
                name: 'opd.patients',
                url: '/patients',
                templateUrl: 'components/my_patients/my_patients.html'
            };
            var newPatientState = {
                name: 'opd.newPatients',
                url: '/newPatients',
                templateUrl: 'components/new_patients/new_patients.html'
            };
            var drugPrescriptionState = {
                name: 'opd.prescribeDrugs',
                url: '/prescribeDrugs',
                templateUrl: 'components/prescribe_drugs/prescribe_drugs.html'
            };
            var patientOverviewState = {
                name: 'opd.patientOverview',
                url: '/patientOverview',
                templateUrl: 'components/patients_overview/patients_overview.html'
            };
            var questionnaireState = {
                name: 'opd.questionnaire',
                url: '/questionnaire',
                templateUrl: 'components/questionnaire/questionnaire.html'
            };
            var newExaminationsState = {
                name: 'opd.newExaminations',
                url: '/newExaminations',
                templateUrl: 'components/new_examinations/new_examinations.html'
            };
            var updatePatientState = {
                name: 'opd.updatePatient',
                url: '/updatePatient',
                templateUrl: 'components/update_patient/update_patient.html'
            };
            var visitsState = {
                name: 'opd.visits',
                url: '/visits',
                templateUrl: 'components/visits/visits.html'
            };
            var patientOverviewForNurseState = {
                name: 'opd.patientOverviewForNurse',
                url: '/patientOverviewForNurse',
                templateUrl: 'components/patients_overview_forNurse/patients_overview_forNurse.html'
            };
            var allergyState = {
                name: 'opd.allergies',
                url: '/allergies',
                templateUrl: 'components/allergies/allergies.html'
            };
            var noteState = {
                name: 'opd.notes',
                url: '/notes',
                templateUrl: 'components/notes/notes.html'
            };
            var attachmentsState = {
                name: 'opd.attachments',
                url: '/attachments',
                templateUrl: 'components/attachments/attachments.html'
            };
            var labTestRequestState = {
                name: 'opd.labTestRequest',
                url: '/labTestRequest',
                templateUrl: 'components/lab_test_request/lab_test_request.html'
            };
            
            var queuesState = {
                name: 'opd.queues',
                url: '/queues',
                templateUrl: 'components/queues/queues.html'
            };
            var myQueueState = {
                name: 'opd.myqueue',
                url: '/myqueue',
                templateUrl: 'components/myqueue/myqueue.html'
            };

            $stateProvider.state(loginState);
            $stateProvider.state(templateState);
            $stateProvider.state(dashboardState);
            $stateProvider.state(patientState);
            $stateProvider.state(newPatientState);
            $stateProvider.state(drugPrescriptionState);
            $stateProvider.state(patientOverviewState);
            $stateProvider.state(questionnaireState);
            $stateProvider.state(newExaminationsState);
            $stateProvider.state(updatePatientState);
            $stateProvider.state(visitsState);
            $stateProvider.state(patientOverviewForNurseState);
            $stateProvider.state(allergyState);
            $stateProvider.state(noteState);
            $stateProvider.state(attachmentsState);
            $stateProvider.state(labTestRequestState);
            $stateProvider.state(queuesState);
            $stateProvider.state(myQueueState);
            
            $urlRouterProvider.otherwise(function ($injector, $location) { 
                var $state = $injector.get('$state'); 
                $state.go(loginState);
            });

            $mdThemingProvider.theme('dark-grey')
                .backgroundPalette('grey')
                .dark();
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        }]);