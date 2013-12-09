CourseEditor.controller('CoursesController',
    function ($scope, $location, $routeParams, ChapterModel) {
        $scope.chapters = ChapterModel.getChapters($scope.courseId);
    }
);