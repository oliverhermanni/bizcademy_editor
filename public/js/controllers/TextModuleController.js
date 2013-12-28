CourseEditor.controller('TextModuleController',
  function ($scope, $location, $routeParams) {

  }
);

CourseEditor.controller('TextModuleAddController',
  function ($scope, $location, $routeParams, TextModuleModel) {
    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.createTextModule = function () {
      TextModuleModel.addTextModule($routeParams.chapterId, $scope.textmodule, editor.getValue());
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);