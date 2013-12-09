CourseEditor.controller('CoursesController',
    function ($scope, $location, $routeParams, ChapterModel) {
        $scope.chapters = ChapterModel.getChapters($scope.courseId);

        $scope.onDelete = function(chapterId) {
            var confirmDelete = confirm('Are you sure, you want to delete this chapter?');

            if (confirmDelete) {
                $location.path('deletechapter/' + chapterId)
            }
        }

    }
);