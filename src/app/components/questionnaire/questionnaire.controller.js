angular
    .module('questionnaire')
    .controller('questionnaireController', ['$scope', '$http', function ($scope, $http) {
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
            clearQuestions();
        }

        $scope.removeQuestion = function (key) {
            delete $scope.questions[key];
            $scope.questionCount = Object.keys($scope.questions).length;
        }

        function clearQuestions () {
            $scope.question = {};
        }

        function clearForm () {
            $scope.questionnaire = {};
            var count = $scope.questionCount;
            for(var i = 0; i < count; i++) {
                console.log(i);
                $scope.removeQuestion(i);
            }
        }

        $scope.saveQuestionnaire = function() {
            var payload = $scope.questionnaire;
            payload.questions = [];

            for (var q in $scope.questions) {
                if ($scope.questions.hasOwnProperty(q)) {
                    payload.questions.push($scope.questions[q]);
                }
            }

            $http.post('http://localhost:8080/api/questionnaires', payload)
            .then(function (response) {
                // clear form
                clearForm();
                clearQuestions();
            });
        }
    }]);