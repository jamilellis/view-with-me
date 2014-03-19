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
         var vars = $scope.getUrlVars(),
             url = "http://dash.edgesuite.net/envivio/dashpr/clear/Manifest.mpd",
             video,
             context,
             player;

         if (vars && vars.hasOwnProperty("url")) {
             url = vars.url;
         }

         video = document.querySelector(".dash-video-player video");
         context = new Dash.di.DashContext();
         player = new MediaPlayer(context);

         player.startup();

         player.attachView(video);
         player.setAutoPlay(false);

         player.attachSource(url);
     };



        $scope.getUrlVars = function(){
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
            return vars;
        }






     $scope.init();

  });
