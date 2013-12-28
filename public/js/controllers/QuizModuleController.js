CourseEditor.controller('QuizModuleController',
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

CourseEditor.controller('QuizModuleAddController',
  function ($scope, $location, $routeParams, QuizModuleModel) {
    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.addQuizModule = function () {

      var answers = {
        0: {
          answer: $scope.quizmodule.answer1
        },
        1: {
          answer: $scope.quizmodule.answer2
        },
        2: {
          answer: $scope.quizmodule.answer3
        },
        3: {
          answer: $scope.quizmodule.answer4
        }
      };

      var hints = {
        0: {
          hint: $scope.quizmodule.hint1
        },
        1: {
          hint: $scope.quizmodule.hint2
        },
        2: {
          hint: $scope.quizmodule.hint3
        },
        3: {
          hint: $scope.quizmodule.hint4
        }
      }

      QuizModuleModel.addQuizModule($routeParams.chapterId, $scope.quizmodule, editor.getValue(), answers, hints);
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);