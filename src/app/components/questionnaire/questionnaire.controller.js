angular
    .module('questionnaire')
    .controller('questionnaireController', ['$scope', function ($scope) {
        $scope.questions = {};
        $scope.questionCount = 0;
        $scope.ans_types = ['Text'];
        $scope.relatedToOptions = ['OPD Visit', 'Prescription'];

        $scope.questionnaire = {};

        $scope.question = {
            'q_text': '',
            'ans_type': '',
            'answer': ''
        }

        $scope.addQuestion = function () {
            var index = Object.keys($scope.questions).length;
            $scope.questionCount = index + 1;
            $scope.questions[index] = angular.copy($scope.question);
        }

        $scope.removeQuestion = function (key) {
            delete $scope.questions[key];
            $scope.questionCount = Object.keys($scope.questions).length;
        }
    }]);