angular.module('opdClient')
    .controller('loginController', function ($scope, authenticationService, $state, $mdToast) {

        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);

        $scope.getToastPosition = function () {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function (pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        $scope.getToastPosition = function () {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function (pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };
        $scope.showSimpleToast = function () {
            var pinTo = $scope.getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent('Invalid username or password!')
                    .position(pinTo)
                    .hideDelay(3000)
            );
        };
        function sanitizePosition() {
            var current = $scope.toastPosition;

            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;

            last = angular.extend({}, current);
        }

        $scope.authenticate = function (user) {
            authenticationService.authenticate(user)
                .then(function (response) {
                    $state.transitionTo('opd.dashboard');
                    authenticationService.setLoggedInUser(response.data);
                })
                .catch(function (err) {
                    $scope.showSimpleToast();
                });
        }
    });