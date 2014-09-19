(function(){
  
  //controller starts
  var mainCtrl = function($scope, $interval){

    $scope.breakSeconds = 0;
    $scope.breakMinutes = 0;

    $scope.mainSeconds = 0;
    $scope.mainMinutes = 0;

    var secondsToMinutes = function(){
          if ($scope.breakSeconds == 60){
            $scope.breakSeconds = 0;
            $scope.breakMinutes++
          }
          $scope.breakSeconds++;
      };

    /*var secondsToMinutes = function(seconds, minutes){
          if (seconds == 60){
            seconds = 0;
            minutes++
          }
          seconds++;
      };*/

    $scope.startBreakTimer = function(){
        breakTimer = $interval(secondsToMinutes, 1000, 300);
      };

    $scope.stopBreakTimer = function(){
        $interval.cancel(breakTimer);
      };

    $scope.resetBreakTimer = function(){
        $interval.cancel(breakTimer);
        $scope.breakSeconds = 0;
        $scope.breakMinutes = 0;
      };



    $scope.startMainTimer = function(){
      mainTimer = $interval(function(){
          if ($scope.mainSeconds == 60){
            $scope.mainSeconds = 0;
            $scope.mainMinutes++
          }
          $scope.mainSeconds++;
        }, 1000, 1500);
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

  mainCtrl.$inject = ['$scope', '$interval'];

  angular.module('pomodoroApp')
    .controller('mainCtrl', mainCtrl);

}());