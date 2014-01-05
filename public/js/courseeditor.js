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
      .when('/course/:courseId', {
        controller: 'CoursesController',
        templateUrl: 'js/views/course/show.html'
      })
      .when('/course/:courseId/chapter/add', {
        controller: 'ChapterAddController',
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
      .when('/course/:courseId/chapter/:chapterId/module/quiz/add', {
        controller: 'QuizModuleAddController',
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
        	if(params.view === undefined) { 
        		params.view = 'index';
        	}
        	return 'js/views/player/'+params.view+'.html';
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
    // TODO: make this a global function
    $rootScope.to_trusted = function(textData)  {
      return $sce.trustAsHtml(textData);
    }
  });

CourseEditor.directive('richTextEditor', function( $log, $location ) {
  var directive = {
    restrict : "A",
    replace : true,
    transclude : true,
    scope : {

    },
    template : '<div><textarea id="richtexteditor-content" style="height:300px;width:100%" ng-model="texteditor"></textarea></div>',

    link : function( $scope, $element, $attrs ) {
      $scope.editor = $('#richtexteditor-content').wysihtml5();
      $scope.$parent.$watch( $attrs.content, function( newValue, oldValue ) {

        $scope.editor.innerHTML = newValue;
        $scope.editor.composer.setValue( newValue );
      });

      $scope.isClean = function() {
        $scope.$parent.isClean();
      }
    }
  }
  return directive;
});
