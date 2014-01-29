CourseEditor.controller('ChaptersController',
  function ($scope, $http, $location, $routeParams, ChapterModel, $sce) {

    $http.get('/rest/getchapters/' + $routeParams.courseId)
      .success(function (data) {
        $scope.chapters = data;
      })
      .error(function (data) {
        alert(data);
      });

    if ($routeParams.chapterId) {
      $http.get('/rest/getchapter/' + $routeParams.chapterId)
        .success(function(data) {
          $scope.chapter = data;
        })
        .error(function(data) {
          alert(data);
        });
    }


    $scope.deleteChapter = function (chapterId) {
      var confirmDelete = confirm('Möchten Sie dieses Kapitel wirklich löschen?');

      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/delete/' + chapterId)
      }
    }

    $scope.deleteModule = function (chapterId, moduleId) {
      var confirmDelete = confirm('Are you sure, you want to delete this module?');
      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/' + chapterId + '/module/delete/' + moduleId);
      }
    }

    // TODO: put this in ModuleController
    $scope.createModule = function (moduleType) {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId + '/module/' + moduleType + '/add');
    }
  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $http, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.createChapter = function () {

      var chapterTitle = $scope.chapter.title;
      if (!chapterTitle) {
        chapterTitle = '';
      }

      var advice = $scope.chapter.advice;
      if (!advice) {
        advice = '';
      }

      var chapter = {
        course_id: $routeParams.courseId,
        title: chapterTitle,
        summary: $('.note-editable').html(),
        advice: advice
      }


      $http.post('/rest/addchapter', chapter)
        .success(function ($data) {
          $location.path('/course/' + $routeParams.courseId + '/chapter/' + $data['id']);
        })
        .error(function ($data) {
          alert($data);
        }
      );

      $location.path('/course/' + $routeParams.courseId);
    }
  }
);

CourseEditor.controller('ChapterDeleteController',
  function ($scope, $http, $location, $routeParams, ChapterModel) {
    $http.delete('/rest/deletechapter/' + $routeParams.chapterId)
      .success(function (data) {
        $location.path('/course/' + $routeParams.courseId);
      })
      .error(function (data) {
        alert(data);
      });
  }
);

CourseEditor.controller('ChapterEditController',
  function ($scope, $http, $location, $routeParams) {
    $scope.currentTask = "bearbeiten";

    if ($routeParams.chapterId) {
      $http.get('/rest/getchapter/' + $routeParams.chapterId)
        .success(function(data) {
          $('.note-editable').html(data.summary)
          $scope.chapter = data;

        })
        .error(function(data) {
          alert(data);
        });
    }

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createChapter = function () {

      var chapterTitle = $scope.chapter.title;
      if (!chapterTitle) {
        chapterTitle = '';
      }

      var advice = $scope.chapter.advice;
      if (!advice) {
        advice = '';
      }

      var chapter = {
        title: chapterTitle,
        summary: $('.note-editable').html(),
        advice: advice
      }

      $http.post('/rest/updatechapter/' + $routeParams.chapterId, chapter)
        .success(function($data){
          $location.path('/course/' + $routeParams.courseId + "/chapter/" + $routeParams.chapterId);
        })
        .error(function($data){
          alert($data);
        }
      );
    }
  }
);
