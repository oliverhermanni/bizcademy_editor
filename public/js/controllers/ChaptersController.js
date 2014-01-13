CourseEditor.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel, $sce) {
    $scope.chapters = ChapterModel.getChapters($routeParams.courseId);

    if ($routeParams.chapterId) {
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
    }

    $scope.deleteChapter = function(chapterId) {
      var confirmDelete = confirm('Are you sure, you want to delete this chapter?');

      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/delete/' + chapterId)
      }
    }

    $scope.deleteModule = function(chapterId, moduleId) {
      var confirmDelete = confirm('Are you sure, you want to delete this module?');
      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/' + chapterId + '/module/delete/' + moduleId);
      }
    }

    // TODO: put this in ModuleController
    $scope.createModule = function(moduleType) {
      $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId + '/module/' + moduleType+ '/add');
    }
  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.createChapter = function () {
      ChapterModel.addChapter($routeParams.courseId, $scope.chapter,  $('.note-editable').html());
      $location.path('/course/' + $routeParams.courseId);
    }
  }
);

CourseEditor.controller('ChapterDeleteController',
  function ($scope, $location, $routeParams, ChapterModel) {
    ChapterModel.deleteChapter($routeParams.courseId, $routeParams.chapterId);
    $location.path('/course/' + $routeParams.courseId);
  }
);