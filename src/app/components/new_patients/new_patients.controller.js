angular
    .module('newPatients')
    .controller('newPatientsController', ['$scope', '$mdDialog', function ($scope, $mdDialog) {
        console.log('newPatientsController');

        // add new patients
        $scope.AddNewPatients = function () {
            //console.log('add AddNewPatients function');
            $scope.newPatient = {};

            $scope.newPatient.title = $scope.title;
            $scope.newPatient.firstName = $scope.firstName;
            $scope.newPatient.lastName = $scope.lastName;
            $scope.newPatient.dob = $scope.dob;
            $scope.newPatient.gender = $scope.gender;
            $scope.newPatient.civilStatus = $scope.civilStatus;
            $scope.newPatient.nic = $scope.nic;
            $scope.newPatient.passport = $scope.passport;
            $scope.newPatient.citizenship = $scope.citizenship;
            $scope.newPatient.language = $scope.language;
            $scope.newPatient.bloodGroup = $scope.bloodGroup;
            $scope.newPatient.address = $scope.address;
            $scope.newPatient.phone = $scope.phone;
            $scope.newPatient.mobile = $scope.mobile;
            $scope.newPatient.remark = $scope.remark;

            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Success')
                    .textContent('New patient details successfuly added to the database.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
            );
            console.log($scope.newPatient);
            // $scope.title = "";
            // $scope.firstName = "";
            // $scope.lastName = "";
            // $scope.dob = "";
            // $scope.gender = "";
            // $scope.civilStatus = "";
            // $scope.nic = "";
            // $scope.passport = "";
            // $scope.citizenship = "";
            // $scope.language = "";
            // $scope.bloodGroup = "";
            // $scope.address = "";
            // $scope.phone = "";
            // $scope.mobile = "";
            // $scope.remark = "";
        }
    }]);