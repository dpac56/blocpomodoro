(function(){
  
  //controller starts
  var mainCtrl = function($scope, $interval){
    var alertSound = new Audio('Buzz.mp3')

    $scope.breakSeconds = 0;
    $scope.breakMinutes = 0;

    $scope.mainSeconds = 0;
    $scope.mainMinutes = 0;

    $scope.playAudio = function(){
      alertSound.play();
    };

    var secondsToMinutes = function(seconds, minutes){
          if ($scope[seconds] == 60){
            $scope[seconds] = 0;
            $scope[minutes]++;
            //alertSound.play();
          }
          $scope[seconds]++;
      };

    var breakTimer = undefined;
    $scope.startBreakTimer = function(){
        breakTimer = $interval(function () { secondsToMinutes('breakSeconds', 'breakMinutes') }, 1000, 300);
      };

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
      mainTimer = $interval(function () { secondsToMinutes('mainSeconds', 'mainMinutes') }, 1000, 1500);
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