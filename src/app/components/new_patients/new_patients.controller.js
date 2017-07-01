angular
    .module('newPatients')
    .controller('newPatientsController', ['$scope', '$mdDialog', 'patientsService', 'uniqueIdService', '$rootScope', function ($scope, $mdDialog, patientsService, uniqueIdService, $rootScope) {

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

            $scope.newPatient.hin = uniqueIdService.new();

            var formData = new FormData();
            angular.forEach($scope.files, function (obj) {
                //console.log($scope.files);
                formData.append('files[]', obj.lfFile);

            });

            patientsService.addNewPatient($scope.newPatient)
                .then(function (response) {
                    $mdDialog.show({
                        clickOutsideToClose: true,
                        scope: $scope,
                        preserveScope: true,
                        template: '<md-dialog><md-toolbar>' +
                        '<div class="md-toolbar-tools">' +
                        '<h2>Patient Card</h2>' +
                        '<span flex></span></div>' +
                        '</md-toolbar>' +
                        '<md-dialog-content>' +
                        '<md-input-container flex=25"></md-input-container>'+
                        '<md-input-container flex="120">'+
                        '<table><tbody>'+
                        '<tr>'+
                        '<td><h4> Patient Name :</h4></td>'+
                        '<td><h4>'+ $scope.newPatient.title +$scope.newPatient.firstName +'</h4></td>'+
                        '<td><h4>'+ $scope.newPatient.lastName +'</h4></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td><h4> Patient Hin :</h4></td>'+
                        '<td><h4>'+ $scope.newPatient.hin +'</h4></td>'+
                        '</tr>'+
                        '<tr>'+
                        '<td><h4></h4></td>'+
                        '<td><img src="./src/assets/img/barcode.jpg" height="52" width="100" class="md-card-image"></td>'+
                        '</tr>'+
                        '</tbody></table>'+
                        '</md-input-container><br/>'+
                        '<md-input-container flex=25"></md-input-container>'+
                        '<md-input-container flex="120">'+
                        '<h4>Bring this card with you on every visit to the hospital.</h4>'+
                        '</md-input-container><br/>'+
                        '</md-dialog-content>' +
                        '</md-dialog>',
                        controller: function DialogController($scope, $mdDialog) {
                            $scope.closeDialog = function () {
                                $mdDialog.hide();
                            }
                        }
                    });
                    $scope.Reset();
                });


        };

        //reset form
        $scope.Reset = function () {
            $scope.newPatient = {};
            $scope.patientForm.$setPristine();
            $scope.patientForm.$setUntouched();
        }

        $scope.logOut = function () {
            $rootScope.$broadcast("logout");
        }
    }]);