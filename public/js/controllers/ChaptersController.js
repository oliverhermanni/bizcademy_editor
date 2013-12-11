CourseEditor.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel) {
    $scope.chapters = ChapterModel.getChapters($scope.courseId);

    if ($routeParams.chapterId) {
      $scope.chapter = ChapterModel.getChapterById($scope.courseId, $routeParams.chapterId);
    }

    $scope.showChapter = function(chapterId) {
      $scope.chapter = ChapterModel.getChapterById($scope.courseId, chapterId);
    }

    $scope.onDelete = function(chapterId) {
      var confirmDelete = confirm('Are you sure, you want to delete this chapter?');
      alert(chapterId);

      if (confirmDelete) {
        $location.path('deletechapter/' + chapterId)
      }
    }

  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "Add";

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createChapter = function () {

      ChapterModel.addChapter($scope.courseId, $scope.chapter);
      $location.path('/');
    }
  }
);

CourseEditor.controller('ChapterDeleteController',
  function ($scope, $location, $routeParams, ChapterModel) {
    var chapterId = $routeParams.chapterId;

    ChapterModel.deleteChapter($scope.courseId, chapterId);
    $location.path('/');
  }
);