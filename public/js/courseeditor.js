var courseEditorConfig = function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'CoursesController',
            templateUrl: 'partials/courseEntry.html'
        })
        .when('/chapter/:chapterId', {
            controller: 'ChaptersController',
            templateUrl: 'partials/chapterOverview.html'
        })
        .when('/addchapter', {
            controller: 'ChapterAddController',
            templateUrl: 'partials/chapterEditor.html'
        })
        .when('/deletechapter/:chapterId', {
            controller: 'ChapterDeleteController'
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
