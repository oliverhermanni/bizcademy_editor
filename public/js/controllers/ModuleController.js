CourseEditor.controller('ModuleController',
  function ($scope, $location, $routeParams, ModuleModel) {

    var moduleData = ModuleModel.getModuleById($routeParams.courseId, $routeParams.chapterId, $routeParams.moduleId);

    $scope.courseId = $routeParams.courseId;
    $scope.moduleData = moduleData;
    $scope.moduleView = moduleData.moduletype;

  }
);

CourseEditor.controller('ModuleDeleteController',
  function ($scope, $location, $routeParams, ModuleModel) {
    ModuleModel.deleteModule($routeParams.chapterId, $routeParams.moduleId);
    $location.path('/course/' + $routeParams.courseId);
  }
);

/*
  id
  moduletype
  controller
  model

 */