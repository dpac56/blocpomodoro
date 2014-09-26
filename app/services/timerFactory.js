(function(){
  var timerFactory = function($interval){
 
    var factory = {};

    factory.breakSeconds = 0;
    factory.breakMinutes = 0;
    factory.breakCounter = 0;

    factory.mainSeconds = 0;
    factory.mainMinutes = 0;
    factory.mainCounter = 0;


    factory.secondsToMinutes = function(seconds, minutes, counter, duration){
        var alertSound = new Audio('Buzz.mp3');
        factory[seconds]++;
        if (factory[seconds] == 60){
          factory[seconds] = 0;
          factory[minutes]++;
          factory[counter] += 1;
          if (factory[counter] == duration){
            alertSound.play();factory
            factory[counter] = 0;
          };
        }
    };
      
    var breakTimer = undefined;
    factory.startBreakTimer = function(){
        breakTimer = $interval(function () { 
          factory.secondsToMinutes('breakSeconds', 'breakMinutes', 'breakCounter', 5) }, 1000, 300);
      };

    factory.stopBreakTimer = function(){
        $interval.cancel(breakTimer);
      };

    factory.resetBreakTimer = function(){
        $interval.cancel(breakTimer);
        factory.breakSeconds = 0;
        factory.breakMinutes = 0;
      };


    var mainTimer = undefined;
    factory.startMainTimer = function(){
      mainTimer = $interval(function () { 
        factory.secondsToMinutes('mainSeconds', 'mainMinutes', 'mainCounter', 25) }, 1000, 1500);
      };

    factory.stopMainTimer = function(){
        $interval.cancel(mainTimer);
      };

    factory.resetMainTimer = function(){
        $interval.cancel(mainTimer);
        factory.mainSeconds = 0;
        factory.mainMinutes = 0;
      };

      return factory;
  };

  timerFactory.$inject = ['$interval'];

  angular.module('pomodoroApp').factory('timerFactory', timerFactory);

}());