var courseEditor = angular.module('courseEditor', ['ngRoute']);

courseEditor.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'courseOverview',
				templateUrl: 'partials/courseEntry.html'
			})
            .when('/chapterOverview/:chapterId', {
                controller: 'chapterOverview',
                templateUrl: 'partials/chapterOverview.html'
            })
			.otherwise({
				redirectTo:'/'
		});
	})
	.controller('courseOverview', function($scope) {
    })
    .controller('chapterOverview', function($scope, $routeParams) {
        $scope.courseId = $routeParams.chapterId;
    });

	