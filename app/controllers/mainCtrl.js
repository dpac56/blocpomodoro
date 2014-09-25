(function(){
  
  //controller starts
  var mainCtrl = function($scope, $interval, timerFactory){
    var alertSound = new Audio('Buzz.mp3')
    var count = 0;

    $scope.breakSeconds = 0;
    $scope.breakMinutes = 0;
    $scope.breakCounter = 0;

    $scope.mainSeconds = 0;
    $scope.mainMinutes = 0;
    $scope.mainCounter = 0;

    $scope.testingFactory = timerFactory.testingFactory();

    $scope.playAudio = function(){
      alertSound.play();
    };

    var secondsToMinutes = function(seconds, minutes, counter, duration){
          $scope[seconds]++;
          if ($scope[seconds] == 60){
            $scope[seconds] = 0;
            $scope[minutes]++;
            $scope[counter] += 1;
            if ($scope[counter] == duration){
              alertSound.play();
              $scope[counter] = 0;
            };
          }
      };
      

    var breakTimer = undefined;
    $scope.startBreakTimer = function(){
        breakTimer = $interval(function () { secondsToMinutes('breakSeconds', 'breakMinutes', 'breakCounter', 5) }, 100, 300);
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
      mainTimer = $interval(function () { secondsToMinutes('mainSeconds', 'mainMinutes', 'mainCounter', 25) }, 100, 1500);
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