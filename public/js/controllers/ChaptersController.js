CourseEditor.controller('ChaptersController',
  function ($scope, $location, $routeParams, ChapterModel, $sce) {
    $scope.chapters = ChapterModel.getChapters($routeParams.courseId);

    if ($routeParams.chapterId) {
      $scope.chapter = ChapterModel.getChapterById($routeParams.courseId, $routeParams.chapterId);
    }

    $scope.to_trusted = function()  {
      return $sce.trustAsHtml($scope.chapter.summary);
    }

    $scope.onDelete = function(chapterId) {
      var confirmDelete = confirm('Are you sure, you want to delete this chapter?');

      if (confirmDelete) {
        $location.path('/course/' + $routeParams.courseId + '/chapter/delete/' + chapterId)
      }
    }

    // TODO: put this in GameTypeController
    $scope.createModule = function(moduleType) {
      switch(moduleType) {
        case 'text':
          $location.path('/course/' + $routeParams.courseId + '/chapter/' + $routeParams.chapterId + '/module/text/add');
          break;
        case 'quiz':
          break;
      }
    }
  }
);

CourseEditor.controller('ChapterAddController',
  function ($scope, $location, $routeParams, ChapterModel) {

    $scope.currentTask = "hinzufügen";

    $scope.cancel = function () {
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.createChapter = function () {
      ChapterModel.addChapter($routeParams.courseId, $scope.chapter, editor.html());
      $location.path('/course/' + $routeParams.courseId);
    }

    $scope.$on('$viewContentLoaded', function(){
      var owl = $("#achievements");

      owl.owlCarousel({
        items:              5,              // 10 items above 1200px browser width
        itemsDesktop:       [1200,5],       // 5 items between 1200px and 992px
        itemsDesktopSmall:  [991,3],        // betweem 991px and 768px
        itemsTablet:        [767,3],        // 3 items between 767 and 0
        itemsMobile:        false,          // itemsMobile disabled - inherit from itemsTablet option
        scrollPerPage:      false,
        pagination:         false,
        navigation:         false,
        rewindNav:          false,
        afterAction: function(el){
          //remove class active
          this.$owlItems.removeClass('active');

          //add class active
          this.$owlItems.eq(this.currentItem + 1).addClass('active');
        }
      });

      $(".next-item").click(function(){
        owl.trigger('owl.next');
      })

      $(".prev-item").click(function(){
        owl.trigger('owl.prev');
      })

      $('.achievement').on('click', function(event){
        var $this = $(this);
        $('.achievement.current').removeClass('current');
        $this.addClass('current');

      });
    });

  }
);

CourseEditor.controller('ChapterDeleteController',
  function ($scope, $location, $routeParams, ChapterModel) {
    ChapterModel.deleteChapter($routeParams.courseId, $routeParams.chapterId);
    $location.path('/course/' + $routeParams.courseId);
  }
);