angular
    .module('prescribeDrugs')
    .controller('prescribeDrugsController', ['$scope', '$http', 'patientsService', 'drugService', 'dosageService', 'frequencyService', 'periodService', 'drugDetailsService', '$mdDialog', function ($scope, $http, patientsService, drugService, dosageService, frequencyService, periodService, drugDetailsService, $mdDialog) {

        $scope.patients = []

        $scope.getPatients = function () {
            patientsService.getPatients()
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

                    $scope.details = $scope.name + " | " + $scope.gender + " | " + $scope.civilStatus;
                    $scope.addressDetails = "Person Address : " + $scope.address;
                    $scope.DOBdetails = " DOB : " + $scope.dob;

                }
            }
        };

        $scope.drugsDetails = {};

        $scope.drugs = []

        $scope.getDrugs = function () {
            console.log("test");
            drugService.getDrugs()
                .then(function (response) {
                    $scope.drugs = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectDrug = function (drugName) {
            $scope.drugName = drugName;
            console.log("Print drugName : " + drugName);
            for (var i = 0; i < $scope.drugs.length; i++) {
                console.log("Print length : " + $scope.drugs.length);
                console.log($scope.drugs[i]);
                if ($scope.drugs[i].drugName == drugName) {
                    $scope.drugName = $scope.drugs[i].drugName;
                    console.log("Print $scope.drugName : " + drugName);
                }
            }

        };


        $scope.dosages = []

        $scope.getDosageList = function () {
            dosageService.getDosage()
                .then(function (response) {
                    $scope.dosages = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectDosage = function (dosageValue) {
            
            console.log("Print dosageValue : " + dosageValue);
            for (var i = 0; i < $scope.dosages.length; i++) {
                console.log("Print length : " + $scope.dosages.length);
                console.log($scope.dosages[i]);
                if ($scope.dosages[i].dosageValue == dosageValue) {
                    $scope.dosageValue = $scope.dosages[i].dosageValue;
                    console.log("Print $scope.dosageValue : " + dosageValue);
                }
            }

        };


        $scope.frequency = []

        $scope.getfrequency = function () {
            frequencyService.getFrequency()
                .then(function (response) {
                    $scope.frequency = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectfrequency = function (frequencyValue) {
            console.log("Print frequencyValue : " + frequencyValue);
            for (var i = 0; i < $scope.frequency.length; i++) {
                console.log("Print length : " + $scope.frequency.length);
                console.log($scope.frequency[i]);
                if ($scope.frequency[i].frequencyValue == frequencyValue) {
                    $scope.frequencyValue = $scope.frequency[i].frequencyValue;
                    console.log("Print $scope.frequencyValue : " + frequencyValue);
                }
            }

        };


        $scope.period = []

        $scope.getPeriod = function () {
            periodService.getPeriod()
                .then(function (response) {
                    $scope.period = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        };
        $scope.selectPeriod = function (periodValue) {
            $scope.periodValuee = periodValue;
            console.log("Print periodValue : " + periodValue);
            for (var i = 0; i < $scope.period.length; i++) {
                console.log("Print length : " + $scope.period.length);
                console.log($scope.period[i]);
                if ($scope.period[i].periodValue == periodValue) {
                    $scope.periodValue = $scope.period[i].periodValue;
                    console.log("Print $scope.periodValue : " + periodValue);
                }
            }

        };

        $scope.checkAddedValues = {};
        $scope.addDrugs = function () {
            console.log("$scope.drugsDetails showing here : " + $scope.drugsDetails);
            drugDetailsService.addDrugDetails($scope.drugsDetails)
                .then(function (response) {
                    //styling
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title('Drugs')
                            .textContent(('"'+ $scope.drugName +'"'+ ' drug ' + '"'+ $scope.periodValuee +'"'+' has been issued.'))
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    $scope.checkAdded();
                });
        }

        $scope.checkAdded = function(){
            drugDetailsService.getDrugDetails()
                .then(function (response) {
                    $scope.checkAddedValues = response.data;
                    //console.log($scope.patients[0].firstName);
                });
        }

        $scope.viewBNF = function () {
            
           
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title( '"'+ $scope.drugName +'"'+ ' Drug BNF')
                            .textContent($scope.drugName + ' has the BNF approved for use as a medicine.This drug can be used by pharmacists and doctors and other healthcare professionals.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!')
                    );
                    // $scope.checkAdded();
             
        }

        

    }]);