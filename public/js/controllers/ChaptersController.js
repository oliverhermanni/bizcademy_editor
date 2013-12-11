CourseEditor.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel) {
    $scope.chapters = ChapterModel.getChapters($routeParams.courseId);

    if ($routeParams.chapterId) {
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
    }

    $scope.onDelete = function(chapterId) {
      var confirmDelete = confirm('Are you sure, you want to delete this chapter?');

      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/delete/' + chapterId)
      }
    }

  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "Add";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.createChapter = function () {

      ChapterModel.addChapter($routeParams.courseId, $scope.chapter);
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