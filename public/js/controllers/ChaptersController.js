CourseEditor.controller('ChaptersController',
    function ($scope, $location, $routeParams, ChapterModel) {
    }
);

CourseEditor.controller('ChapterAddController',
    function ($scope, $location, $routeParams, ChapterModel) {
        var courseId = $scope.courseId;
        console.log('test');

        $scope.cancel = function() {
            $location.path('/');
        }

        $scope.createChapter = function() {

            ChapterModel.addChapter($scope.courseId, $scope.chapter.title, $scope.chapter.content);
            $location.path('/');
        }
    }
);