angular.module('opdClient')
    .config(['$stateProvider', '$mdThemingProvider',
        function ($stateProvider, $mdThemingProvider) {
            var dashboardState = {
                name: 'dashboard',
                url: 'dashboard',
                templateUrl: 'components/dashboard/dashboard.html'
            };
            var patientState = {
                name: 'patients',
                url: 'patients',
                templateUrl: 'components/my_patients/my_patients.html'
            };
            var newPatientState = {
                name: 'newPatients',
                url: 'newPatients',
                templateUrl: 'components/new_patients/new_patients.html'
            };
            var drugPrescriptionState = {
                name: 'prescribeDrugs',
                url: 'prescribeDrugs',
                templateUrl: 'components/prescribe_drugs/prescribe_drugs.html'
            };
            var patientOverviewState = {
                name: 'patientOverview',
                url: 'patientOverview',
                templateUrl: 'components/patients_overview/patients_overview.html'
            };
            var questionnaireState = {
                name: 'questionnaire',
                url: 'questionnaire',
                templateUrl: 'components/questionnaire/questionnaire.html'
            };
            var newExaminationsState = {
                name: 'newExaminations',
                url: 'newExaminations',
                templateUrl: 'components/new_examinations/new_examinations.html'
            };
            var updatePatientState = {
                name: 'updatePatient',
                url: 'updatePatient',
                templateUrl: 'components/update_patient/update_patient.html'
            };

            $stateProvider.state(dashboardState);
            $stateProvider.state(patientState);
            $stateProvider.state(newPatientState);
            $stateProvider.state(drugPrescriptionState);
            $stateProvider.state(patientOverviewState);
            $stateProvider.state(questionnaireState);
            $stateProvider.state(newExaminationsState);
            $stateProvider.state(updatePatientState);

            $mdThemingProvider.theme('dark-grey')
                .backgroundPalette('grey')
                .dark();
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        }])