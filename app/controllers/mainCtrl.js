(function(){
  
  //controller starts
  var mainCtrl = function($scope, $interval, timerFactory){
    
    var count = 0;

    $scope.breakSeconds = 0;
    $scope.breakMinutes = 0;
    $scope.breakCounter = 0;

    $scope.mainSeconds = 0;
    $scope.mainMinutes = 0;
    $scope.mainCounter = 0;
      
    
    var breakTimer = undefined;
    $scope.startBreakTimer = function(){
        breakTimer = $interval(function () { 
          timerFactory.secondsToMinutes($scope, 'breakSeconds', 'breakMinutes', 'breakCounter', 5) }, 100, 300);
      };


    //$scope.startBreakTimer = timerFactory.startBreakTimer($scope, 'breakSeconds', 'breakMinutes', 'breakCounter');

    $scope.stopBreakTimer = function(){
        $interval.cancel(breakTimer);
      };

    $scope.resetBreakTimer = function(){
        $interval.cancel(breakTimer);
        $scope.breakSeconds = 0;
        $scope.breakMinutes = 0;
      };


    var mainTimer = undefined;
    $scope.startMainTimer = function(){
      mainTimer = $interval(function () { 
        timerFactory.secondsToMinutes($scope, 'mainSeconds', 'mainMinutes', 'mainCounter', 25) }, 100, 1500);
      };

    $scope.stopMainTimer = function(){
        $interval.cancel(mainTimer);
      };

    $scope.resetMainTimer = function(){
        $interval.cancel(mainTimer);
        $scope.mainSeconds = 0;
        $scope.mainMinutes = 0;
      };

    };

  mainCtrl.$inject = ['$scope', '$interval', 'timerFactory'];

  angular.module('pomodoroApp')
    .controller('mainCtrl', mainCtrl);

}());