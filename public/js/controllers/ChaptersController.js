CourseEditor.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel) {
    $scope.chapter = ChapterModel.getChapterById($scope.courseId, $routeParams.chapterId);
  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "Add";

    $scope.cancel = function () {
      $location.path('/');
    }

    $scope.createChapter = function () {

      ChapterModel.addChapter($scope.courseId, $scope.chapter.title, $scope.chapter.summary);
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