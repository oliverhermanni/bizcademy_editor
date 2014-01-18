CourseEditor.controller('QuizModuleController',
  function ($scope, $location, $routeParams) {
  }
);

CourseEditor.controller('QuizModuleAddController',
  function ($scope, $http, $location, $routeParams, QuizModuleModel) {

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

      var quizModule = {
        chapter_id: $routeParams['chapterId'],
        module_type: 'quiz',
        title: $scope.quizmodule.title,
        summary:  $('.note-editable').html(),
        advice: $scope.quizmodule.advice,
        theme: $scope.quizmodule.theme,
        answers: answers,
        hints: hints
      }

      $http.post('/rest/addmodule', quizModule)
        .success(function ($data) {
          $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
        })
        .error(function ($data) {
          alert($data);
        }
      );
    }
  }
);

CourseEditor.controller('QuizModuleEditController',
  function ($scope, $http, $location, $routeParams, QuizModuleModel) {

    if ($routeParams.moduleId) {
      $http.get('/rest/getmodule/' + $routeParams.moduleId)
        .success(function(data) {
          $('.note-editable').html(data.summary)
          $scope.quizmodule = data;

          $scope.quizmodule.answer1 = data.answers[0].answer;
          $scope.quizmodule.checked1 = data.answers[0].checked;

          $scope.quizmodule.answer2 = data.answers[1].answer;
          $scope.quizmodule.checked2 = data.answers[1].checked;

          $scope.quizmodule.answer3 = data.answers[2].answer;
          $scope.quizmodule.checked3 = data.answers[2].checked;

          $scope.quizmodule.answer4 = data.answers[3].answer;
          $scope.quizmodule.checked4 = data.answers[3].checked;

          $scope.quizmodule.hint1 = data.hints[0].hint;
          $scope.quizmodule.hint2 = data.hints[1].hint;
          $scope.quizmodule.hint3 = data.hints[2].hint;
        })
        .error(function(data) {
          alert(data);
        });
    }

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

      var quizModule = {
        chapter_id: $routeParams['chapterId'],
        module_type: 'quiz',
        title: $scope.quizmodule.title,
        summary:  $('.note-editable').html(),
        advice: $scope.quizmodule.advice,
        theme: $scope.quizmodule.theme,
        answers: answers,
        hints: hints
      }

      $http.post('/rest/updatemodule/' + $routeParams['moduleId'], quizModule)
        .success(function ($data) {
          $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
        })
        .error(function ($data) {
          alert($data);
        }
      );
    }
  }
);