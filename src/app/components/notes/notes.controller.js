angular
    .module('notes')
    .controller('notesController', ['$scope', '$mdDialog','$filter', 'selectedPatientService', function ($scope, $mdDialog, $filter, selectedPatientService) {

        $scope.notes = {};
        $scope.patientID = selectedPatientService.getId();
        $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        //reset form
        $scope.Reset = function () {
            $scope.notes = {};
            $scope.notesForm.$setPristine();
            $scope.notesForm.$setUntouched();   
            $scope.notes.dateTime = $filter('date')(new Date(), 'MMM d, y');

        }

    }]);