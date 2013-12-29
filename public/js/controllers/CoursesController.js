CourseEditor.controller('CoursesController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel, $sce) {

    // TODO: make this a global function
    $scope.to_trusted = function()  {
      return $sce.trustAsHtml($scope.course.summary);
    }

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
      var course_id = CourseModel.addCourse($scope.course, editor.getValue());
      $location.path('/course/' + course_id);
    }
  }
);
