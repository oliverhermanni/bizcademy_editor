'use strict';

/* CourseEditor 
 * Change Log: - 20. January 2014: Umstellung auf MySQL Datenbank
  						 - 20. January 2014: Funktionen seperariert
 * To Do: - Hooks einbauen
 * author Benedict Ernst
 * date 06. January 2014 
 */
CourseEditor.controller('PlayerController',
  function ($scope, $location, $http, $routeParams, CourseModel, ChapterModel) {
		
		/* Variablen */
		var courseId, course, courses,
				chapter, chapters,
				modules;

    /* Course is not completed in the beginning */
    $scope.chapter_completed = false;
		
		/* Default Scope Variables */ 
		$scope.player 	= true;		
		
		/* Init 
		 * Init wird zum Start des Controllers aufgerufen.
		 * author Benedict Ernst
		 * date 20. January 2014
		 */ 
		var init = function() {
			
			/* Accessing Courses Data */
			$http.get('/rest/getcourses')
				.success(function(data) {
					
					/* Variable */
					courses = data;
					
					/* Bind Courses Data to $scope */
					$scope.courses = courses;
				})
				.error(function(data) {
					console.log(' Error: ' + JSON.stringify(data));
				});
		}; /* end _init */
		
		/* Courses Overview 
		 * Die Funktion holt die Daten aller Kurse und bindet diese an den $scope. 
		 * author Benedict Ernst
		 * date 20. January 2014
		 */
		var coursesOverview = function() {
			
			/* Accessing Course Data */
			$http.get('/rest/getcourse/' + $routeParams.courseId)
        .success(function(data) {
          course = data;
					
					/* Bind Course Data to $scope */
					$scope.course = course;
					
					/* Accessing Chapter Data */
					$http.get('/rest/getchapters/' + $routeParams.courseId)
						.success(function (data) {
							
							/* Variable*/
							chapters = data;
							
							/* Bind Chapters Data to $scope */
							$scope.chapters = chapter;
						})
						.error(function (data) {
							console.log(' Error: ' + JSON.stringify(data));
						});
        })
        .error(function(data) {
          console.log(' Error: ' + JSON.stringify(data));
        });
		}; /* end coursesOverview */
		
		/* chapterOverview 
		 * Die Funktion holt die Daten aller Chapter zum Kurs und bindet diese an den $scope.  
		 * author Benedict Ernst
		 * date 20. January 2014
		 */
		var chapterOverview = function() {
			
			/* $scope */
			$scope.course = {id:$routeParams.courseId};
			
			/* Accessing Chapter Data */
      $http.get('/rest/getchapter/' + $routeParams.chapterId)
        .success(function(data) {
          
					/* Variable */
					chapter = data;
					
					/* Bind Chapter Data to $scope */
					$scope.chapter = data;
					
					/* Accesing Modules Data */
					$http.get('/rest/getmodules/' + $routeParams.chapterId)
						.success(function (data) {
							modules = data;
							
							/* Bind Modules Data to $scope */ 
							$scope.modules = data;
						})
						.error(function (data) {
							alert(data);
						});
        })
        .error(function(data) {
          console.log(' Error: ' + JSON.stringify(data));
        });
			
		}; /* end chapterOverview */
		
		/* moduleView 
		 * Hier fehlt noch eine Beschreibung. 
		 * author Benedict Ernst
		 * date 20. January 2014
		 */
		var moduleView = function() {
			$scope.moduleView = $routeParams.view;
			$scope.courseId = $routeParams.courseId;
			
			$http.get('/rest/getchapters/' + $routeParams.courseId)
				.success(function (data) {
					$scope.chapters = data;
				})
				.error(function (data) {
					alert(data);
				});
			$http.get('/rest/getmodules/' + $routeParams.chapterId)
				.success(function (data) {
					$scope.modules = data;
					
					/* Current and Next Object */
					$scope.module 	= getObjects($scope.modules, 'id', $routeParams.modulId)[0];
					$scope.nextObj 	= $scope.modules[++$scope.module.index];
					$scope.prevObj	= $scope.modules[--$scope.module.index];

          $http.get('/rest/getmodule/'+$routeParams.modulId)
            .success(function(md) {
              $scope.moduleData = md;
              if ($scope.moduleData.module_type !== 'text') {
                $scope.test_complete = false;
              }
            })
              .error(function(md) {
                alert('e');
              })

					/* Create Next Link */
					if(typeof $scope.nextObj === 'undefined') { /* if Next Object isn't set then */
						$scope.currentChapter = getObjects($scope.chapters, 'id', $routeParams.chapterId)[0];
						$scope.nextChapter = $scope.chapters[++$scope.currentChapter.index];
						if(typeof $scope.nextChapter === 'undefined') { /* if Next Chapter isn't set then */
              $scope.chapter_completed = true;
							$scope.nextLink = null;
						} else {
              $scope.chapter_completed = true;
							$scope.nextLink = 'player/course/' + $routeParams.courseId;
						}
					} else {
						$scope.nextLink = 'player/' + $scope.nextObj.module_type+ '/' + $routeParams.courseId + '/' + $routeParams.chapterId + '/' + $scope.nextObj.id;
					}		
					/* Create Prev Link */
					if(typeof $scope.prevObj === 'undefined') { 
						$scope.currentChapter = getObjects($scope.chapters, 'id', $routeParams.chapterId)[0];
						$scope.prevChapter = $scope.chapters[--$scope.currentChapter.index];
						if(typeof $scope.prevChapter === 'undefined') {
							$scope.prevLink = 'A';
						} else {
							$scope.prevLink = 'B';
						}	
					} else {
						$scope.prevLink = 'player/chapter/' + $routeParams.courseId + '/' + $routeParams.chapterId;
					}
					
				})
				.error(function (data) {
					alert(data);
				});			
		}; /* end moduleView */
		
		
		/* Routing 
		 * Hier fehlt noch eine Beschreibung. 
		 * author Benedict Ernst
		 * date 20. January 2014
		 */
		init();
		switch($routeParams.view) {
			case 'course':
				coursesOverview();
				break;
			case 'chapter':
				chapterOverview();
				break;
			case 'quiz':
			case 'text':
				moduleView();
				break;
		} /* end switch */

    $scope.chapterFinished = function(courseId) {
      $('#chapter-completed').on('hide.bs.modal', function (e) {
        $('body').removeClass('modal-open');
        //alert($scope.nextLink);
        if (!$scope.nextLink) {
          $location.path('/course/completed/');
        } else {
          $location.path('/player/course/'+ $scope.courseId);
        }
      }).modal('hide');
    }
		
}); /* end Controller Funktion */