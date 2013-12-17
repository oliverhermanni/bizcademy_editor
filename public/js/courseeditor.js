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
      .otherwise({
        redirectTo: '/'
      });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute'])
    .config(courseEditorConfig)
    .run(function($rootScope) {
    });
