angular.module('opdClient', ['ngMaterial', 'ngMessages', 'md.data.table', 'lfNgMdFileInput', 'sidebar',
    'ui.router', 'myPatients', 'newPatients', 'patientOverview', 'questionnaire', 'dashboard', 'prescribeDrugs',
    'newExaminations', 'updatePatients', 'visits', 'patientOverviewForNurse', 'alergies', 'notes', 'attachments'])
    .run(function ($rootScope, $state, $stateParams, $transitions, authenticationService) {
        $transitions.onStart({  }, function (trans) {
            console.log('klklklkl')
            if (!authenticationService.isAuthenticated()) {
                $state.transitionTo('login');
            }
        });
    });