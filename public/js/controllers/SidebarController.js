CourseEditor.controller('SidebarController',
  function ($scope, $location, $routeParams, CourseModel) {
    $scope.course = CourseModel.getCourseById($routeParams.courseId);
  }
);