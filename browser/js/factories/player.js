
app.factory('PlayerFactory', function($q){
    // functionality

  var playerObj = {};

  playerObj.printThis = function(){
    console.log("Hello");
  }
  playerObj.pause = function () {
    audio.pause();
    $scope.playing = false;
  }
  // playerObj.play = function (event, song){
  //   // stop existing audio (e.g. other song) in any case
  //   pause();
  //   $scope.playing = true;
  //   // resume current song
  //   if (song === $scope.currentSong) return audio.play();
  //   // enable loading new song
  //   $scope.currentSong = song;
  //   audio.src = song.audioUrl;
  //   audio.load();
  //   audio.play();
  // }

  // // outgoing events (to Album)
  // playerObj.next = function(){ $rootScope.$broadcast('next'); };
  // playerObj.prev = function(){ $rootScope.$broadcast('prev'); };

  return playerObj;
});





