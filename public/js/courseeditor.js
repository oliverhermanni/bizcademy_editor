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
        .otherwise({
            redirectTo:'/'
        });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute'])
    .config(courseEditorConfig)
    .run(function($rootScope, ChapterModel) {
        $rootScope.courseId = "999";
        $rootScope.chapters = ChapterModel.getChapters($rootScope.courseId);
    });
