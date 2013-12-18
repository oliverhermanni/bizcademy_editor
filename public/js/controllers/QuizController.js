CourseEditor.controller('QuizController',
  function ($scope, $location, $routeParams) {
    $scope.$on('$viewContentLoaded', function(){
      $("button[data-toggle='pointUp']").click(function() {
        $(".total-point-count").toggleClass("point-up");
        if ($(".progress").hasClass("active")) {
          $(".progress-bar").css("width","50%");
        } else {
          $(".progress-bar").css("width","65%");
        }
        $(".progress").toggleClass("progress-striped active");
      });
      $(".custom-checkbox").click(function() {
        var checkbox = $(this).prev();

        if (checkbox.is(":checked")) {
          checkbox.removeAttr("checked");
          $(this).removeClass("checked");
        } else {
          checkbox.attr("checked","checked");
          $(this).addClass("checked");
        }
      });
    });
  }
);