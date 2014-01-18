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
    }

    if ($routeParams.chapterId) {
      $http.get('/rest/getchapters/' + $routeParams.courseId)
        .success(function(data) {
          $scope.chapters = data;
        })
        .error(function(data) {
          alert(data);
        });
    }


  }
);