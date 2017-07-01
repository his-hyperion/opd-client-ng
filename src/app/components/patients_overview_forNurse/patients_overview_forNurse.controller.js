angular
    .module('patientOverviewForNurse')
    .controller('patientsOverviewForNurseController', ['$scope', 'patientsService', 'selectedPatientService', 'allergyService', 'notesService', 'attachmentsService', '$rootScope', function ($scope, patientsService, selectedPatientService, allergyService, notesService, attachmentsService, $rootScope ) {

        $scope.patients = []

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
                    $scope.id = $scope.patients[i]._id;
                    $scope.name = $scope.patients[i].firstName + " " + $scope.patients[i].lastName;
                    $scope.HIN =  $scope.patients[i].hin;
                    $scope.gender = $scope.patients[i].gender;
                    $scope.civilStatus = $scope.patients[i].civilStatus;
                    $scope.dob = $scope.patients[i].dob;                   
                    $scope.address = $scope.patients[i].address;
                    $scope.phone = $scope.patients[i].phone;
                    $scope.mobile = $scope.patients[i].mobile;
                    $scope.bloodGroup = $scope.patients[i].bloodGroup;
                    $scope.BMI = "Not Calculated";
                }
            }
            $scope.getAllergies();
        };

        $scope.getAllergies = function () {
            $scope.allergies = [];
            allergyService.getallergiesByPatient($scope.id)
                .then(function(response){
                    $scope.allergies = response.data;
                })
        };

        $scope.getNotes= function () {
            $scope.notes = [];
            notesService.getNotesByPatient($scope.id)
                .then(function(response){
                    $scope.notes = response.data;
                })
        };

        $scope.getAttchments= function () {
            $scope.attachments = [];
            attachmentsService.getAttachmentByPatient($scope.id)
                .then(function(response){
                    $scope.attachments = response.data;
                })
        };
        
        $scope.setPaient=function(){
            //console.log($scope.id);
            selectedPatientService.setId($scope.id);
        };

        $scope.logOut = function () {
            $rootScope.$broadcast("logout");
        }
    }]);