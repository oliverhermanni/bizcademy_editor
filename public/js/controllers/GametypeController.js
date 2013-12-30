CourseEditor.controller('GametypeController',
  function ($scope, $location, $routeParams, GametypeModel) {

    var moduleData = GametypeModel.getModelbyId($routeParams.courseId, $routeParams.chapterId, $routeParams.moduleId);
    alert(moduleData);
  }
);

/*
  id
  moduletype
  controller
  model

 */