CourseEditor.controller('CoursesController',
  function ($scope, $http, $location, $routeParams, CourseModel, ChapterModel, $sce) {

    $http.get('/rest/getcourses')
      .success(function(data) {
        $scope.courses = data;
      })
      .error(function(data) {
        alert(data);
      });

    if ($routeParams.courseId) {
      $http.get('/rest/getcourse/' + $routeParams.courseId)
        .success(function(data) {
          $scope.course = data;
        })
        .error(function(data) {
          alert(data);
        });
    }

    $scope.deleteCourse = function (courseId) {
      var confirmDelete = confirm('Möchten Sie diesen Kurs wirklich löschen?');

      if (confirmDelete) {
        $location.path('/course/delete/' + courseId);
      }
    }


  }
);

CourseEditor.controller('CourseAddController',
  function ($scope, $http, $location, $routeParams, CourseModel) {

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

      var editorContent = $('.note-editable').html() ;

      var course = {
        title: $scope.course.title ,
        summary: editorContent,
        advice: $scope.course.advice || ''
      }

      $http.post('/rest/addcourse', course)
        .success(function($data){
          $location.path('/course/' + $data['id']);
        })
        .error(function($data){
          alert($data);
        }
      );
    }
  }
);

CourseEditor.controller('CourseEditController',
  function ($scope, $http, $location, $routeParams, CourseModel) {
    $scope.currentTask = "bearbeiten";

    if ($routeParams.courseId) {
      $http.get('/rest/getcourse/' + $routeParams.courseId)
        .success(function(data) {
          $('.note-editable').html(data.summary)
          $scope.course = data;

        })
        .error(function(data) {
          alert(data);
        });
    }

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createCourse = function () {

      var course = {
        title: $scope.course.title,
        summary: $('.note-editable').html(),
        advice: $scope.course.advice || ''
      }

      $http.post('/rest/updatecourse/' + $routeParams.courseId, course)
        .success(function($data){
          $location.path('/course/' + $routeParams.courseId);
        })
        .error(function($data){
          alert($data);
        }
      );

    }
  }
);

CourseEditor.controller('CourseDeleteController',
  function ($scope, $http, $location, $routeParams) {
    $http.delete('/rest/deletecourse/' + $routeParams.courseId)
      .success(function (data) {
        $location.path('/courses/');
      })
      .error(function (data) {
        alert(data);
      });
  }
);
