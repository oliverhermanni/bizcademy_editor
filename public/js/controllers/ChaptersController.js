CourseEditor.controller('ChaptersController',
    function ($scope, $location, $routeParams, ChapterModel) {
      $scope.chapters = ChapterModel.getChapters($scope.courseId);
    }
);

CourseEditor.controller('ChapterAddController',
    function ($scope, $location, $routeParams, ChapterModel) {

        $scope.cancel = function() {
            $location.path('/');
        }

        $scope.createChapter = function() {

            ChapterModel.addChapter($scope.courseId, $scope.chapter.title, $scope.chapter.content);
            $location.path('/');
        }
    }
);

CourseEditor.controller('ChapterDeleteController',
    function ($scope, $location, $routeParams, ChapterModel) {
        var chapterId = $routeParams.chapterId;

        ChapterModel.deleteChapter($scope.courseId, chapterId);
        $location.path('/');
    }
);