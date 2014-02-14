CourseEditor.controller('SidebarController',
  function ($scope, $http, $location, $routeParams, CourseModel) {
    if ($routeParams.courseId) {
      $http.get('/rest/getcourse/' + $routeParams.courseId)
        .success(function(data) {
          $scope.course = data;
        })
        .error(function(data) {
          alert(data);
        });

      $http.get('/rest/getchapters/' + $routeParams.courseId)
        .success(function(data) {
          $scope.chapters = data;
          !$routeParams.modulId ? $scope.mId = $routeParams.moduleId : $scope.mId = $routeParams.modulId;
        })
        .error(function(data) {
          alert(data);
        });

    }

  }
);