angular
    .module('alergies')
    .controller('allergiesController', ['$scope', '$mdDialog', 'selectedPatientService', 'allergyService', function ($scope, $mdDialog, selectedPatientService, allergyService) {

        $scope.allergy = {};
        $scope.allergy.patientID = selectedPatientService.getId();

        //add allergy
        $scope.AddAllergy = function () {
            allergyService.addNewAllergy($scope.allergy)
                .then(function (response) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('Allergy details successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                }); 
        }

        //reset form
        $scope.Reset = function () {
            $scope.allergy = {};
            $scope.allergiesForm.$setPristine();
            $scope.allergiesForm.$setUntouched();

        }

    }]);