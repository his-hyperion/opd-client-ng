angular
    .module('prescribeDrugs')
    .controller('prescribeDrugsController', ['$scope', '$http', function ($scope, $http, $mdToast) {

        $scope.patients = []

        $scope.getPatients = function () {
            $http.get('http://52.15.99.209:8080/api/patients')
                .then(function (response) {
                    $scope.patients = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectPatient = function (name) {
            for (var i = 0; i < $scope.patients.length; i++) {
                if ($scope.patients[i].firstName == name) {
                    $scope.name = $scope.patients[i].firstName + " " + $scope.patients[i].lastName;
                    $scope.gender = $scope.patients[i].gender;
                    $scope.civilStatus = $scope.patients[i].civilStatus;
                    $scope.dob = $scope.patients[i].dob;
                    $scope.address = $scope.patients[i].address;
                    $scope.bloodGroup = $scope.patients[i].bloodGroup;

                }
            }
        };

        

        // $scope.dosage1 = "1";
        // $scope.dosage2 = "2";
        // $scope.dosage3 = "3";
        // $scope.dosage4 = "4";

        // $scope.frequency2 = "Twice a day";
        // $scope.frequency3 = "Thice a day";
        // $scope.frequencyMorning = "Only for Morning";
        // $scope.frequencyNight = "Only for Night";

        // $scope.period1 = "For 1 day";
        // $scope.period2 = "For 2 days";
        // $scope.period3 = "For 3 days";
        // $scope.period4 = "For 4 days";


        

        $scope.drugs = []

        $scope.getDrugs = function () {
            $http.get('http://localhost:8080/api/drugs')
                .then(function (response) {
                    $scope.drugs = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectDrug = function (drugName) {
            console.log("Print drugName : "+drugName);
            for (var i = 0; i < $scope.drugs.length; i++) {
                console.log("Print length : "+$scope.drugs.length);
                console.log($scope.drugs[i]);
                if ($scope.drugs[i].drugName == drugName) {                    
                    $scope.drugName = $scope.drugs[i].drugName;                    
                    console.log("Print $scope.drugName : "+drugName);
                }
            }
            
        };


        $scope.dosages = []

        $scope.getDosageList = function () {
            $http.get('http://localhost:8080/api/dosages')
                .then(function (response) {
                    $scope.dosages = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectDosage = function (dosageValue) {
            console.log("Print dosageValue : "+dosageValue);
            for (var i = 0; i < $scope.dosages.length; i++) {
                console.log("Print length : "+$scope.dosages.length);
                console.log($scope.dosages[i]);
                if ($scope.dosages[i].dosageValue == dosageValue) {                    
                    $scope.dosageValue = $scope.dosages[i].dosageValue;                    
                    console.log("Print $scope.dosageValue : "+dosageValue);
                }
            }
            
        };


        $scope.frequency = []

        $scope.getfrequency = function () {
            $http.get('http://localhost:8080/api/frequency')
                .then(function (response) {
                    $scope.frequency = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectfrequency = function (frequencyValue) {
            console.log("Print frequencyValue : "+frequencyValue);
            for (var i = 0; i < $scope.frequency.length; i++) {
                console.log("Print length : "+$scope.frequency.length);
                console.log($scope.frequency[i]);
                if ($scope.frequency[i].frequencyValue == frequencyValue) {                    
                    $scope.frequencyValue = $scope.frequency[i].frequencyValue;                    
                    console.log("Print $scope.frequencyValue : "+frequencyValue);
                }
            }
            
        };


        $scope.period = []

        $scope.getPeriod = function () {
            $http.get('http://localhost:8080/api/period')
                .then(function (response) {
                    $scope.period = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectPeriod = function (periodValue) {
            console.log("Print periodValue : "+periodValue);
            for (var i = 0; i < $scope.period.length; i++) {
                console.log("Print length : "+$scope.period.length);
                console.log($scope.period[i]);
                if ($scope.period[i].periodValue == periodValue) {                    
                    $scope.periodValue = $scope.period[i].periodValue;                    
                    console.log("Print $scope.periodValue : "+periodValue);
                }
            }
            
        };




    }]);