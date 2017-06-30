angular
    .module('patientOverview')
    .controller('patientsOverviewController', ['$scope', 'patientsService', 'selectedPatientService', 'visitsService', 'allergyService', 'notesService', 'attachmentsService',  function ($scope, patientsService, selectedPatientService, visitsService, allergyService, notesService, attachmentsService) {

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
                    $scope.HIN = $scope.patients[i].hin;
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
            $scope.visits = [];
            visitsService.getVisitsByPatient($scope.id)
                .then(function(response){
                    $scope.visits = response.data;
                })

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
    }]);