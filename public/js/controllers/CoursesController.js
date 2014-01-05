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
      $(window).on("resize scroll",function(e) {
        var barometer = $(".activity-barometer"),
            barometer_pos = barometer.offset().top - $(window).scrollTop(),
            barometer_width = barometer.width(),
            content_left_offset = $("#content").offset().left;

        if(barometer_pos <= $(".navbar").outerHeight(true)) {
          barometer.addClass("detach");
          barometer.css("left", content_left_offset - barometer_width);
        } else {
          barometer.removeClass("detach");
          barometer.css("left", "");
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
