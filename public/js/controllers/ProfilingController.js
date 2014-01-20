CourseEditor.controller('ProfilingController',
  function ($scope, $location, $routeParams) {
    $scope.$on('$viewContentLoaded', function(){
      
    });
    
    $scope.nextStep = function(step) {
      alert(step);
    }
  }
);