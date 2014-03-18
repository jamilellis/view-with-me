'use strict';

angular.module('viewWithMeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.init = function () {

         $scope.setupSocketIO();
         $scope.setupVideo();
     };

     $scope.setupSocketIO = function (){
         var socket = io.connect('http://localhost');
         socket.on('news', function (data) {
             console.log(data);
             socket.emit('my other event', { my: 'data' });
         });
     };

     $scope.setupVideo = function(){

     };

     $scope.init();

  });
