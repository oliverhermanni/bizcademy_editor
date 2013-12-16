CourseEditor.controller('QuizController',
  function ($scope, $location, $routeParams) {
    $scope.$on('$viewContentLoaded', function(){
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