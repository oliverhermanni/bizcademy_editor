CourseEditor.controller('CoursesController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel) {
    $scope.courses = CourseModel.getCourses();

    if ($routeParams.courseId) {
      $scope.course = CourseModel.getCourseById($routeParams.courseId);
    }
  }
);

CourseEditor.controller('CourseAddController',
  function ($scope, $location, $routeParams, CourseModel) {

    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createCourse = function () {
      CourseModel.addCourse($scope.course);
      $location.path('/');
    }
  }
);
