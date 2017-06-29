angular
    .module('newPatients')
    .controller('newPatientsController', ['$scope', '$mdDialog', 'new_patientsService', function ($scope, $mdDialog, new_patientsService) {

        //datepicker validation not to select future dates
        $scope.myDate = new Date();
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth(),
            $scope.myDate.getDate()
        );
        // add new patients
        $scope.newPatient = {};

        $scope.AddNewPatients = function () {

            var formData = new FormData();
            angular.forEach($scope.files, function (obj) {
                //console.log($scope.files);
                formData.append('files[]', obj.lfFile);

            });
            //console.log($scope.newPatient);

            new_patientsService.addNewPatient($scope.newPatient)
                .then(function (response) {
                    // clear form
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Success')
                            .textContent('New patient details successfuly added to the database.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.Reset();
                });


        };

        //reset form
        $scope.Reset = function () {
            $scope.newPatient = {};
            $scope.patientForm.$setPristine();
            $scope.patientForm.$setUntouched();
        }
    }]);