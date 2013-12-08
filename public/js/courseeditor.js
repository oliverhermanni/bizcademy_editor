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
        .otherwise({
            redirectTo:'/'
        });
};


var CourseEditor = angular.module('CourseEditor', ['ngRoute'])
    .config(courseEditorConfig)
    .run(function($rootScope, ChapterModel) {
        chapters = ChapterModel.getChapters();
        $rootScope.chapters = chapters;
    });
