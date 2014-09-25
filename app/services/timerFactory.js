(function(){
  var timerFactory = function($interval){
 
      var factory = {};

      factory.testingFactory = function(){
        return "hello world";
      };


      return factory;
  };

  timerFactory.$inject = ['$interval'];

  angular.module('pomodoroApp').factory('timerFactory', timerFactory);

}());