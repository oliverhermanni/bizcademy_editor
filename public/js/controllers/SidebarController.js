CourseEditor.controller('SidebarController',
  function ($scope, $location, $routeParams, ChapterModel) {
    $scope.chapters = ChapterModel.getChapters($scope.courseId);
  }
);