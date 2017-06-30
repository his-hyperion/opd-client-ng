angular
    .module('patientOverview')
    .controller('patientsOverviewController', ['$scope', 'patientsService', 'selectedPatientService', function ($scope, patientsService, selectedPatientService) {

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

        $scope.getVisits = function () {
            $scope.visits = [{
                visitType: "OPD",
                visitNo: "001",
                dateTime: "2017-05-08",
                complaint: "aa",
                remark: ""
            },
            {
                visitType: "OPD",
                visitNo: "002",
                dateTime: "2017-05-07",
                complaint: "sdff",
                remark: "ds"
            }];
        };

        $scope.getExaminations = function () {
            $scope.examinations = [{
                date: "2017-05-08",
                weight: "78",
                height: "168",
                SBP: "33",
                DBP: "42",
                temperature: "33"
            },
            {
                date: "2017-04-23",
                weight: "78",
                height: "168",
                SBP: "35",
                DBP: "42",
                temperature: "28"
            }]
        };
        $scope.getLabs = function () {
            $scope.labs = [{
                name: "AAA",
                date: "2017-05-08",
                status: "Report issued"
            },
            {
                name: "BBB",
                date: "2017-04-23",
                status: "Testing",
            }]
        };
        $scope.getAllergies = function () {
            $scope.allergies = [{
                allergy: "a",
                status: "a",
                remark:"a"
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