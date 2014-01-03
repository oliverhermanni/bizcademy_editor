CourseEditor.controller('ModuleController',
  function ($scope, $location, $routeParams, ModuleModel) {

    var moduleData = ModuleModel.getModelbyId($routeParams.courseId, $routeParams.chapterId, $routeParams.moduleId);
    alert(moduleData);
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