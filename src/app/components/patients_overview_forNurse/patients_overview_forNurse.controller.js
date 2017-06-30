angular
    .module('patientOverviewForNurse')
    .controller('patientsOverviewForNurseController', ['$scope', 'patientsService', 'selectedPatientService', function ($scope, patientsService, selectedPatientService) {

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
                    $scope.HIN = "12542252";
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
            $scope.allergies = [{
                allergy: "aaa",
                status: "aaa",
                remark:"aaa"
            },
            {
                allergy: "b",
                status: "b",
                remark:"b"
            }]
        };

        $scope.getNotes= function () {
            $scope.notes = [{
                note: "Test note",
                date: "2017/06/29"  
            },
            {
                note: "Test note 2",
                date: "2017/06/28"  
            }]
        };

        $scope.getAttchments= function () {
            $scope.attachments = [{
                file: "Test file",
                type: "PDF",
                name: "Test Name",
                description: "Test",
                remark: "aa",
                attchedBy: "D.Silva"          
            },
            {
                file: "Test file2",
                type: "PNG",
                name: "Test Name",
                description: "Test",
                remark: "bb",
                attchedBy: "R.A.Perera"  
            }]
        };
        
        $scope.setPaient=function(){
            //console.log($scope.id);
            selectedPatientService.setId($scope.id);
        };
    }]);