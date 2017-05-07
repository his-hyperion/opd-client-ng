angular
    .module('sidebar')
    .directive('sideBar', function() {
        return {
            restrict: 'E',
            templateUrl: './shared/sidebar/sidebar.html'
        };
    });