angular
    .module('alergies')
    .controller('allergiesController', ['$scope', '$mdDialog',  function ($scope, $mdDialog) {

        $scope.allergy = {};

        //reset form
        $scope.Reset = function () {
            $scope.allergy = {};
            $scope.allergiesForm.$setPristine();
            $scope.allergiesForm.$setUntouched();   

        }

    }]);