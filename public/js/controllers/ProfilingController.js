CourseEditor.controller('ProfilingController',
  function ($scope, $location, $routeParams) {
    $scope.$on('$viewContentLoaded', function(){
      
    });
    
    $scope.nextStep = function(step, e) {
      var elem = e.currentTarget,
          thisStep = $(elem).closest('.step'),
          nextStep = "." + step,
          thisStepClass = thisStep.attr('class').replace('step','').trim() + "-step";
          
          
      $('.profiling-steps').removeClass(thisStepClass).addClass(step + "-step");
      
      $(nextStep).css('left',thisStep.outerWidth());
      
      
      thisStep.animate({'opacity': 0, 'left': -thisStep.outerWidth()},500);
      $(nextStep).animate({'opacity': 1, 'left': '0px'},500);
    }
  }
);