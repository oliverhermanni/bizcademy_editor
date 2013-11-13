var editorApp = angular.module('editorApp', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.initialize = function() {
        $http.get('/api/dashboard')
            .success(function(data) {
                $scope.infos = data
                console.log('Success: ' + $scope.infos);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })

    }
}