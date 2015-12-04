app.factory('PlayerFactory', function($rootScope){
    var audio = document.createElement('audio');

    var playerObj = {};

    var playing = false;
    var currentSong = null;
    var songList;

    var previousIndex;
    var currentIndex;
    var nextIndex;

    var progress = 0;

    playerObj.pause = function () {
      audio.pause();
      playing = false;
    }

    playerObj.start = function (song, songs){
      // stop existing audio (e.g. other song) in any case
      playerObj.pause();
      playing = true;
      // resume current song
      if (song === currentSong) {
        return audio.play();
      }
      // enable loading new song
      currentSong = song;
      audio.src = song.audioUrl;
      audio.load();
      audio.play();
      songList = songs;
    }

    playerObj.resume = function () {
      playing = true;
      audio.play();
    }

    playerObj.isPlaying = function () {
      return playing;
    }

    playerObj.getCurrentSong = function () {
      return currentSong;
    }

    playerObj.next = function () {
      currentIndex = songList.songs.indexOf(currentSong);
      nextIndex = currentIndex + 1;
      if (currentIndex >= songList.songs.length-1) {
        nextIndex = 0;
      }
      currentSong = songList.songs[nextIndex];
      playerObj.start(currentSong);
    };

    playerObj.previous = function () {
      currentIndex = songList.songs.indexOf(currentSong);
      previousIndex = currentIndex - 1;
      if (previousIndex < 0) {
        currentIndex = songList.songs.length-1;
        currentSong = songList.songs[currentIndex];
      }
      else{
        currentSong = songList.songs[previousIndex];
      }
      playerObj.start(currentSong);
    };

    playerObj.getProgress = function () {
      console.log(progress);
      return progress;
    };

    return playerObj;

});