var courseEditorConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'CoursesController',
            templateUrl: 'js/views/course/show.html'
        })
        .when('/chapter/:chapterId', {
            controller: 'ChaptersController',
            templateUrl: 'js/views/chapter/show.html'
        })
        .when('/addchapter', {
            controller: 'ChapterAddController',
            templateUrl: 'js/views/chapter/edit.html'
        })
        .when('/deletechapter/:chapterId', {
            controller: 'ChapterDeleteController',
            templateUrl: 'js/views/course/show.html'
         })
        .otherwise({
            redirectTo:'/'
        });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute'])
    .config(courseEditorConfig)
    .run(function($rootScope, ChapterModel) {
        $rootScope.courseId = "999";
    });
