CourseEditor.controller('TextModuleController',
  function ($scope, $location, $routeParams) {

  }
);

CourseEditor.controller('TextModuleAddController',
  function ($scope, $http, $location, $routeParams, TextModuleModel) {
    $scope.currentTask = "hinzufügen";

    $('body').removeClass('modal-open');

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.createTextModule = function () {

      var textModule = {
        chapter_id: $routeParams['courseId'],
        module_type: 'text',
        title: $scope.textmodule.title,
        summary:  $('.note-editable').html()
      };

      $http.post('/rest/addmodule', textModule)
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