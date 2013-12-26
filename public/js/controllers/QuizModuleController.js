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
      alert('test');


      var answers = [];

      answers[0] = {
        answer: $scope.quizmodule.answer1
      };
      answers[1] = {
        answer: $scope.quizmodule.answer2
      };
      answers[2] = {
        answer: $scope.quizmodule.answer3
      };
      answers[3] = {
        answer: $scope.quizmodule.answer4
      };


      var hints = [];

      hints[0] = {
        hint: $scope.quizmodule.hint1
      };
      hints[1] = {
        hint: $scope.quizmodule.hint2
      };
      hints[2] = {
        hint: $scope.quizmodule.hint3
      };

      $scope.quizmodule.push(answers);
      $scope.quizmodule.push(hints);

      QuizModuleModel.addQuizModule($routeParams.chapterId, $scope.quizmodule, editor.html());
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);