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
        chapter_id: $routeParams['chapterId'],
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

CourseEditor.controller('TextModuleEditController',
  function ($scope, $http, $location, $routeParams, TextModuleModel) {
    $scope.currentTask = "bearbeiten";

    if ($routeParams.moduleId) {
      $http.get('/rest/getmodule/' + $routeParams.moduleId)
        .success(function(data) {
          $('.note-editable').html(data.summary)
          $scope.textmodule = data;

        })
        .error(function(data) {
          alert(data);
        });
    }

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId);
    }

    $scope.createTextModule = function () {

      var textModule = {
        chapter_id: $routeParams['chapterId'],
        module_type: 'text',
        title: $scope.textmodule.title,
        summary:  $('.note-editable').html()
      };

      $http.post('/rest/updatemodule/' + $routeParams['moduleId'], textModule)
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