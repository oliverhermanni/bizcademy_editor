CourseEditor.controller('ModuleController',
  function ($scope, $http, $location, $routeParams, ModuleModel) {

    $http.get('/rest/getmodule/'+$routeParams['moduleId'])
      .success(function(moduleData) {
        $scope.courseId = $routeParams.courseId;
        $scope.moduleData = moduleData;
        $scope.moduleView = moduleData.module_type;
      })
      .error(function(moduleData){
        alert(moduleData);
      })

  }
);

CourseEditor.controller('ModuleDeleteController',
  function ($scope, $http, $location, $routeParams, ModuleModel) {
    $http.delete('/rest/deletemodule/' + $routeParams.moduleId)
      .success(function (data) {
        $location.path('/course/' + $routeParams.courseId);
      })
      .error(function (data) {
        alert(data);
      });
  }
);

/*
  id
  moduletype
  controller
  model

 */