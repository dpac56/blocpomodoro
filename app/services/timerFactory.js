(function(){
  var timerFactory = function($interval){
 
      var factory = {};

      factory.testingFactory = function(){
        return "hello world";
      };

      factory.secondsToMinutes = function(scope, seconds, minutes, counter, duration){
          var alertSound = new Audio('Buzz.mp3');
          scope[seconds]++;
          if (scope[seconds] == 60){
            scope[seconds] = 0;
            scope[minutes]++;
            scope[counter] += 1;
            if (scope[counter] == duration){
              alertSound.play();
              scope[counter] = 0;
            };
          }
      };

      //above this is working
      
      var breakTimer = undefined;
      factory.startBreakTimer = function(scope){
        breakTimer = $interval(function () { 
          timerFactory.secondsToMinutes(scope, 'breakSeconds', 'breakMinutes', 'breakCounter', 5) }, 10, 300);
      };

      return factory;
  };

  timerFactory.$inject = ['$interval'];

  angular.module('pomodoroApp').factory('timerFactory', timerFactory);

}());