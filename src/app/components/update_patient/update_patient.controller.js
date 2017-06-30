angular
    .module('updatePatients')
    .controller('updatePatientsController', ['$scope', '$mdDialog', 'patientsService', function ($scope, $mdDialog, patientsService) {

        $scope.patients = {};
        $scope.Updatepatients = {};

        $scope.getPatients = function () {
            patientsService.getPatients()
                .then(function (response) {
                    $scope.patients = response.data;
                    // console.log($scope.patients[0].firstName);
                });
        };

        $scope.selectPatient = function (name) {
            for (var i = 0; i < $scope.patients.length; i++) {
                if ($scope.patients[i].firstName == name) {
                     $scope.Updatepatients = $scope.patients[i];
                }
            }

        };

        $scope.updatePatients = function () {
            patientsService.updatePatient($scope.Updatepatients._id,$scope.Updatepatients)
                .then(function (response) {
                    // clear form
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Patient details update successfuly')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                });


        };

        //reset form
        $scope.Reset = function () {
            $scope.patients = {};
            $scope.Updatepatients = {};
            $scope.patientForm.$setPristine();
            $scope.patientForm.$setUntouched();
        }
    }]);