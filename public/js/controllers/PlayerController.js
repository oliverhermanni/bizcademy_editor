'use strict';

CourseEditor.controller('PlayerController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel) {
    $scope.courses = CourseModel.getCourses();
		
    if ($routeParams.view === 'course' && $routeParams.courseId) {
      $scope.course = CourseModel.getCourseById($routeParams.courseId);
      $scope.chapters = ChapterModel.getChapters($routeParams.courseId);
    }
    
    if ($routeParams.view === 'chapter' && $routeParams.courseId && $routeParams.chapterId) {
			$scope.course = {id:$routeParams.courseId};
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
      $scope.modules = ChapterModel.getModulesByChapterId($routeParams.chapterId);
    }
		
		if ($routeParams.modulId) {
			$scope.modules = ChapterModel.getModulesByChapterId($routeParams.chapterId);
			$scope.currentObj = getObjects($scope.modules, 'id', '5cvxy5pnwmi')[0];
			$scope.nextObj = $scope.modules[++$scope.currentObj.index];
			$scope.nextLink = '';
			console.log($scope);
		}
		
		
		
		
  }
);