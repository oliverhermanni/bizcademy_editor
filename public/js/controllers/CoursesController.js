CourseEditor.controller('CoursesController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel, $sce) {

    $scope.courses = CourseModel.getCourses();

    if ($routeParams.courseId) {
      $scope.course = CourseModel.getCourseById($routeParams.courseId);
    }

  }
);

CourseEditor.controller('CourseAddController',
  function ($scope, $location, $routeParams, CourseModel) {

    $scope.$on('$viewContentLoaded', function(){
      // detach navbar on scrollling downnnn
      $(window).scroll(function () {
        var barometer_pos = $(".activity-barometer").offset().top - $(window).scrollTop();
        console.log(barometer_pos);
        console.log($(".navbar").outerHeight(true));
        if(barometer_pos <= $(".navbar").outerHeight(true)) {
          $(".activity-barometer").addClass("detach");
        } else {
          $(".activity-barometer").removeClass("detach");
        }
      });
    });


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
