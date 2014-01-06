'use strict';

CourseEditor.controller('PlayerController',
  function ($scope, $location, $routeParams, CourseModel, ChapterModel) {
		$scope.player 	= true;
    $scope.courses 	= CourseModel.getCourses();
		
    if ($routeParams.view === 'course' && $routeParams.courseId) {
      $scope.course 	= CourseModel.getCourseById($routeParams.courseId);
      $scope.chapters = ChapterModel.getChapters($routeParams.courseId);
			console.log($scope);
    }
    
    if ($routeParams.view === 'chapter' && $routeParams.courseId && $routeParams.chapterId) {
			$scope.course = {id:$routeParams.courseId};
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
      $scope.modules = ChapterModel.getModulesByChapterId($routeParams.chapterId);
			console.log($scope);
    }
		
		if ($routeParams.view === 'text' || $routeParams.view === 'quiz') {
			$scope.moduleView = $routeParams.view;
			$scope.courseId = $routeParams.courseId;
			
			$scope.chapters 		= ChapterModel.getChapters($scope.courseId);
			$scope.modules 			= ChapterModel.getModulesByChapterId($routeParams.chapterId);
			
			/* Current and Next Object */
			$scope.moduleData 	= getObjects($scope.modules, 'id', $routeParams.modulId)[0];
			$scope.nextObj 			= $scope.modules[++$scope.moduleData.index];
			$scope.prevObj			= $scope.modules[--$scope.moduleData.index];
			
			/* Create Next Link */
			if(typeof $scope.nextObj === 'undefined') { /* if Next Object isn't set then */	
				$scope.currentChapter = getObjects($scope.chapters, 'id', $routeParams.chapterId)[0];
				$scope.nextChapter = $scope.chapters[++$scope.currentChapter.index];
				if(typeof $scope.nextChapter === 'undefined') { /* if Next Chapter isn't set then */
					$scope.nextLink = 'player/course/' + $scope.courseId;
				} else {
					$scope.nextLink = 'player/chapter/' + $routeParams.courseId + '/' + $scope.nextChapter.id;
				}	
			} else {
				$scope.nextLink = 'player/' + $scope.nextObj.type+ '/' + $routeParams.courseId + '/' + $routeParams.chapterId + '/' + $scope.nextObj.id;
			}		
			/* Create Prev Link */
			if(typeof $scope.prevObj === 'undefined') { 
				$scope.currentChapter = getObjects($scope.chapters, 'id', $routeParams.chapterId)[0];
				$scope.prevChapter = $scope.chapters[--$scope.currentChapter.index];
				if(typeof $scope.prevChapter === 'undefined') {
					// $scope.prevLink = 'player/course/' + $scope.courseId;
					$scope.prevLink = 'A';
				} else {
					// $scope.prevLink = 'player/chapter/' + $routeParams.courseId + '/' + $scope.prevChapter.id;
					$scope.prevLink = 'B';
				}	
			} else {
				// $scope.prevLink = 'player/' + $scope.prevObj.type+ '/' + $routeParams.courseId + '/' + $routeParams.chapterId + '/' + $scope.prevObj.id;
				// $scope.prevLink = 'player/chapter/' + $routeParams.courseId + '/' + $scope.prevChapter.id;
				$scope.prevLink = 'player/chapter/' + $routeParams.courseId + '/' + $routeParams.chapterId;
			}
			console.log($scope);
		}
	}
);