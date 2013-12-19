CourseEditor.controller('GametypeController',
  function ($scope, $location, $routeParams) {

    $scope.createModule = function(moduleType) {
      switch(moduleType) {
        case 'text':
          $('#myModal').modal('hide');
          $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId + '/module/text/add');
          break;
        case 'quiz':
          break;
      }
    }
  }
);

/*
  id
  moduletype
  controller
  model

 */