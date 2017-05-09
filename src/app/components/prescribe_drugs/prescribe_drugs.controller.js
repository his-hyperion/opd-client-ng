angular
    .module('prescribeDrugs')
    .controller('prescribeDrugsController', ['$scope', function ($scope) {
        $scope.patientName = "Ms. Sara";
        $scope.patientGender = "Female";
        $scope.patientAge = "25Yrs";
        $scope.patientMaritualState = "Single";
        $scope.personID = "1234XXXXX";
        $scope.Methildropa = "Methildropa";
        $scope.Captropin = "Captropin";
        $scope.Asprin = "Asprin";
        $scope.Deliphilin = "Deliphilin";
        $scope.Clarithomycin = "Clarithomycin";

        $scope.dosage1 = "1";
        $scope.dosage2 = "2";
        $scope.dosage3 = "3";
        $scope.dosage4 = "4";

        $scope.frequency2 = "Twice a day";
        $scope.frequency3 = "Thice a day";
        $scope.frequencyMorning = "Only for Morning";
        $scope.frequencyNight = "Only for Night";

        $scope.period1 = "For 1 day";
        $scope.period2 = "For 2 day";
        $scope.period3 = "For 3 day";
        $scope.period4 = "For 4 day";

    }]);