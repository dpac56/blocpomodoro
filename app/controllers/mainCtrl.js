(function(){
  
  //controller starts
  var mainCtrl = function($scope, timerFactory){

    $scope.$watch(function(){return timerFactory.breakSeconds}, function(){
      $scope.breakSeconds = timerFactory.breakSeconds;
      $scope.breakMinutes = timerFactory.breakMinutes;
    });

    $scope.$watch(function(){return timerFactory.mainSeconds}, function(){
      $scope.mainSeconds = timerFactory.mainSeconds;
      $scope.mainMinutes = timerFactory.mainMinutes;
    });


    $scope.startBreakTimer = function(){return timerFactory.startBreakTimer();};
    $scope.stopBreakTimer = function(){return timerFactory.stopBreakTimer();};
    $scope.resetBreakTimer = function(){return timerFactory.resetBreakTimer();};

    $scope.startMainTimer = function(){return timerFactory.startMainTimer();};
    $scope.stopMainTimer = function(){return timerFactory.stopMainTimer();};
    $scope.resetMainTimer = function(){return timerFactory.resetMainTimer();};


    };

  mainCtrl.$inject = ['$scope', 'timerFactory'];

  angular.module('pomodoroApp')
    .controller('mainCtrl', mainCtrl);

}());