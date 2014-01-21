 var courseEditorConfig = function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'js/views/home/index.html'
      })
      .when('/courses', {
        controller: 'CoursesController',
        templateUrl: 'js/views/course/index.html'
      })
      .when('/course/add', {
        controller: 'CourseAddController',
        templateUrl: 'js/views/course/edit.html'
      })
      .when('/course/edit/:courseId', {
        controller: 'CourseEditController',
        templateUrl: 'js/views/course/edit.html'
      })
      .when('/course/completed', {
        controller: 'CoursesController',
        templateUrl: 'js/views/course/completed.html'
      })
      .when('/course/:courseId', {
        controller: 'CoursesController',
        templateUrl: 'js/views/course/show.html'
      })
      .when('/course/:courseId/chapter/add', {
        controller: 'ChapterAddController',
        templateUrl: 'js/views/chapter/edit.html'
      })
      .when('/chapter/edit/:chapterId', {
        controller: 'ChapterEditController',
        templateUrl: 'js/views/chapter/edit.html'
      })
      .when('/course/:courseId/chapter/:chapterId/module/:moduleId', {
        controller: 'ModuleController',
        templateUrl: '/js/views/modules/show.html'
      })
      .when('/course/:courseId/chapter/:chapterId/module/delete/:moduleId', {
        controller: 'ModuleDeleteController',
        templateUrl: 'js/views/course/show.html'
      })
      .when('/course/:courseId/chapter/:chapterId/module/text/add', {
        controller: 'TextModuleAddController',
        templateUrl: '/js/views/modules/text/edit.html'
      })
      .when('/chapter/:chapterId/module/text/edit/:moduleId', {
        controller: 'TextModuleEditController',
        templateUrl: '/js/views/modules/text/edit.html'
      })
      .when('/course/:courseId/chapter/:chapterId/module/quiz/add', {
        controller: 'QuizModuleAddController',
        templateUrl: '/js/views/modules/quiz/edit.html'
      })
      .when('/chapter/:chapterId/module/quiz/edit/:moduleId', {
        controller: 'QuizModuleEditController',
        templateUrl: '/js/views/modules/quiz/edit.html'
      })
      .when('/course/:courseId/chapter/delete/:chapterId', {
        controller: 'ChapterDeleteController',
        templateUrl: 'js/views/course/show.html'
      })
      .when('/course/:courseId/chapter/:chapterId', {
        controller: 'ChaptersController',
        templateUrl: 'js/views/chapter/show.html'
      })
      .when('/quiz', {
        controller: 'QuizController',
        templateUrl: 'js/views/quiz/show.html'
      })
      .when('/player/:view?/:courseId?/:chapterId?/:modulId?', {
        controller: 'PlayerController',
        templateUrl: function(params) {
        	/* 
					if(params.view === undefined) { 
        		params.view = 'index';
        	} else if(params.view === 'quiz' || params.view === 'text') {
						params.view = 'modules/'+ params.view +'/show';
					}
					return 'js/views/course/index.html';
					return 'js/views/player/'+ params.view +'.html';
					*/
					switch (params.view) {
						case 'course': 
							return 'js/views/course/show.html';
							break;
						case 'chapter':
							return 'js/views/chapter/show.html';
							break;
						case 'text':
							return 'js/views/modules/show.html';
							break;
						case 'quiz':
							return 'js/views/modules/show.html';
							break;
						default: 
							return 'js/views/course/index.html';
					}
        }
      })
      .otherwise({
        redirectTo: '/'
      });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute', 'ngSanitize'],
  function($locationProvider) {
    $locationProvider.hashPrefix('');
  })
  .config(courseEditorConfig)
  .run(function($rootScope, $sce) {

    $rootScope.to_trusted = function(textData)  {
      return $sce.trustAsHtml(textData);
    }
  });

var CM = new cloudmine.WebService({
  appid: '2f4c31f6e49949af914f3cafb631c8ad',
  apikey: '607934529e644200ae5668dd78bf3a7d'
});

CourseEditor.directive('richTextEditor', function() {
  return {
    restrict: 'A',
    replace: true,
    link: function ($scope, elem, attrs) {

      $scope.editor = $(elem).summernote({
        height: 300,
        toolbar: [
            //['style', ['style']], // no style button , 'clear'
            ['style', ['bold', 'italic', 'underline']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['picture']], // no insert buttons , 'link'
            //['table', ['table']], // no table button
            //['help', ['help']] //no help button
          ]
      });

      $scope.$parent.$watch( $attrs.content, function( newValue, oldValue ) {
        $scope.editor.code(newValue);
      });
    }
  }
});
