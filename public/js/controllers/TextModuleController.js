CourseEditor.controller('TextModuleController',
  function ($scope, $location, $routeParams) {

  }
);

CourseEditor.controller('TextModuleAddController',
  function ($scope, $location, $routeParams, TextModuleModel) {
    $scope.currentTask = "hinzufügen";

    $('body').removeClass('modal-open');

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.createTextModule = function () {
      TextModuleModel.addTextModule($routeParams.chapterId, $scope.textmodule, $('.note-editable').html());
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }
  }
);