CourseEditor.controller('TextModuleController',
  function ($scope, $location, $routeParams) {

  }
);

CourseEditor.controller('TextModuleAddController',
  function ($scope, $location, $routeParams, TextModuleModel) {
    $scope.currentTask = "Add";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.createTextModule = function () {

      TextModuleModel.addTextModule($routeParams.chapterId, $scope.textmodule);
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);