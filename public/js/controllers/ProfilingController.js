CourseEditor.controller('ProfilingController',
  function ($scope, $location, $routeParams) {
    $scope.$on('$viewContentLoaded', function(){
      
    });

    $scope.selectAnswer = function(e) {
      var elem = e.currentTarget;
  
      $(elem).parent().find('button').removeClass('selected');
      $(elem).toggleClass('selected');
    }    
    
    $scope.nextStep = function(nextStep, e) {
      var elem = e.currentTarget,
          thisStep = $(elem).closest('.step');
          nextStep = "." + nextStep;
      
      $(nextStep).css('left',thisStep.outerWidth());
      
      
      thisStep.animate({'opacity': 0, 'left': -thisStep.outerWidth()},500);
      $(nextStep).animate({'opacity': 1, 'left': '0px'},500);
    }
  }
);