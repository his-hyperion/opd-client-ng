angular
    .module('visits')
    .controller('visitsController', ['$scope', '$mdDialog', '$filter','selectedPatientService', function ($scope, $mdDialog, $filter, selectedPatientService) {

        $scope.visit = {};
        $scope.patientID = selectedPatientService.getId();

        $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
        $scope.visit.doctor = "Dr. A.B.C.Perera";

        //reset form
        $scope.Reset = function () {
            $scope.visit = {};
            $scope.visitsForm.$setPristine();
            $scope.visitsForm.$setUntouched();
            $scope.visit.dateTime = $filter('date')(new Date(), 'MMM d, y h:mm:ss a');
            $scope.visit.doctor = "Dr. A.B.C.Perera";

        }

    }]);