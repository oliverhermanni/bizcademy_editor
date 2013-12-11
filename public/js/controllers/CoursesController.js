CourseEditor.controller('CoursesController',
  function ($scope, $location, $routeParams, CourseModel) {
    $scope.courses = CourseModel.getCourses();
  }
);

CourseEditor.controller('CourseAddController',
  function ($scope, $location, $routeParams, CourseModel) {

    $scope.currentTask = "Add";

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createCourse = function () {
      CourseModel.addCourse($scope.course);
      $location.path('/');
    }
  }
);
