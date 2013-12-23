CourseEditor.controller('QuizModuleController',
  function ($scope, $location, $routeParams) {

  }
);

CourseEditor.controller('QuizModuleAddController',
  function ($scope, $location, $routeParams, QuizModuleModel) {
    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.createQuizModule = function () {
      QuizModuleModel.addQuizModule($routeParams.chapterId, $scope.textmodule);
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);