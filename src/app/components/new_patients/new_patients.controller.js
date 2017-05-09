angular
    .module('newPatients')
    .controller('newPatientsController', ['$scope', '$mdDialog', '$http', function ($scope, $mdDialog, $http) {

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
            //console.log(formData)


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

            $http.post('http://localhost:8080/api/patients', $scope.newPatient)
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
            $scope.title = "";
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.dob = "";
            $scope.gender = "";
            $scope.civilStatus = "";
            $scope.nic = "";
            $scope.passport = "";
            $scope.citizenship = "";
            $scope.language = "";
            $scope.bloodGroup = "";
            $scope.address = "";
            $scope.phone = "";
            $scope.mobile = "";
            $scope.remark = "";

            $scope.patientForm.$setPristine();
            $scope.patientForm.$setUntouched();
        }
    }]);