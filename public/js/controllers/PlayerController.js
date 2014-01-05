CourseEditor.controller('PlayerController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel) {
    $scope.courses = CourseModel.getCourses();
		
    if ($routeParams.view === 'course' && $routeParams.courseId) {
      $scope.course = CourseModel.getCourseById($routeParams.courseId);
      $scope.chapters = ChapterModel.getChapters($routeParams.courseId);
    }
    
    if ($routeParams.view === 'chapter' && $routeParams.courseId && $routeParams.chapterId) {
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
      $scope.modules = ChapterModel.getModulesByChapterId($routeParams.chapterId);
    }
  }
);