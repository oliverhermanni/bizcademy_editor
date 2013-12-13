var courseEditorConfig = function($routeProvider) {
    $routeProvider
      .when('/', {
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
      .when('/course/:courseId/chapter/delete/:chapterId', {
        controller: 'ChapterDeleteController',
        templateUrl: 'js/views/course/show.html'
      })
      .when('/course/:courseId/chapter/:chapterId', {
        controller: 'ChaptersController',
        templateUrl: 'js/views/chapter/show.html'
      })
      .when('/chapter/:chapterId/module/text/add', {
        controller: 'TextModuleController',
        templateUrl: 'js/views/modules/text/edit.html'
      })
      .when('/quiz', {
        controller: 'QuizController',
        templateUrl: 'js/views/quiz/show.html'
      })
      .otherwise({
        redirectTo: '/'
      });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute'])
    .config(courseEditorConfig)
    .run(function($rootScope) {
    });

CourseEditor.directive('richTextEditor', function( $log, $location ) {

  var self = this;
  var directive = {
    restrict : "A",
    replace : true,
    transclude : true,
    scope : {

    },
    template :

      "<div>" +

        "<textarea id=\"richtexteditor-content\" style=\"height:300px;width:100%\"></textarea>"+

        "</div>",

    link : function( $scope, $element, $attrs ) {
      $scope.editor = $('#richtexteditor-content').wysihtml5();


//                        $scope.editor = new wysihtml5.Editor( "richtexteditor-content", {

     //                           toolbar : "richtexteditor-toolbar",
      //                              parserRules: wysihtml5ParserRules
      //                    });

      $scope.$parent.$watch( $attrs.content, function( newValue, oldValue ) {

        $scope.editor.innerHTML = newValue;
        $scope.editor.composer.setValue( newValue );
      });

      $scope.cancel = function() {
        $scope.$parent.cancel();
      }
      /* $scope.save = function() {
       var currentTemplateContent = $encryption.encodeHtml( $scope.editor.getValue() );
       $scope.$parent.currentTemplate.content = currentTemplateContent;
       $scope.$parent.save();
       }
       */
      $scope.isClean = function() {
        $scope.$parent.isClean();
      }
    }
  }
  return directive;
});