CourseEditor.controller('QuizModuleController',
  function ($scope, $location, $routeParams) {
  }
);

CourseEditor.controller('QuizModuleAddController',
  function ($scope, $location, $routeParams, QuizModuleModel) {

    $('body').removeClass('modal-open');

    $scope.$on('$viewContentLoaded', function(){
      $(".custom-checkbox-control").click(function() {
        var checkbox = $(this).children('input:checkbox');
        checkbox.attr("checked", checkbox.is(":checked"));
      });
    });


    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.addQuizModule = function () {

      var answers = {
        0: {
          answer: $scope.quizmodule.answer1,
          checked: $scope.quizmodule.checked1
        },
        1: {
          answer: $scope.quizmodule.answer2,
          checked: $scope.quizmodule.checked2
        },
        2: {
          answer: $scope.quizmodule.answer3,
          checked: $scope.quizmodule.checked3
        },
        3: {
          answer: $scope.quizmodule.answer4,
          checked: $scope.quizmodule.checked4
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
        }
      }

      QuizModuleModel.addQuizModule($routeParams.chapterId, $scope.quizmodule,  $('.note-editable').html(), answers, hints);
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);