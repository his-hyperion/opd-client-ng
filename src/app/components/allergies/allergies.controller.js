angular
    .module('alergies')
    .controller('allergiesController', ['$scope', '$mdDialog', 'selectedPatientService',  function ($scope, $mdDialog, selectedPatientService) {

        $scope.allergy = {};
        $scope.patientID = selectedPatientService.getId();
        console.log($scope.patientID);

        //reset form
        $scope.Reset = function () {
            $scope.allergy = {};
            $scope.allergiesForm.$setPristine();
            $scope.allergiesForm.$setUntouched();   

        }

    }]);