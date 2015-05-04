$(document).ready(function() {
  keyPlay();

  $digi1 = document.getElementById("didgi4");

  var started;

  $(".record").on("click", function() {
    if(started == undefined){
      $('#stopwatch').timer();
      playSymphony();
    }

    $(this).toggleClass("rotate");

    if($(this).hasClass("rotate")){
      $('#stopwatch').timer('resume');
      playSymphony();
      started = true;
    }
    else{
      started = false;
      $('#stopwatch').timer('pause');
      pauseTracks();
    }

  });
});


function playTrack(track, startTime, startVolume, endVolume, fadeStart, fadeEnd){
  var audio = document.getElementById(track);
  audio.currentTime = startTime;

  if(fadeStart){
    audio.volume = startVolume;
    $(audio).animate({volume: endVolume}, fadeStart);
    $(audio).animate({volume: startVolume}, fadeEnd);
  }
  audio.play();
}

function pauseTracks(){
  $('audio').each(function(){
    this.pause();
  });
}

function pauseTrack(track){
  var audio = document.getElementById(track);
  audio.pause();
}


function playSymphony(){

  playTrack('drums5', 0, 0, 1, 5000, 3000);
  setTimeout(function(){ playTrack('annoy', 0, 1); }, 7000);
  setTimeout(function(){
    playTrack('didgi1', 0, 0, 1, 8500, 40000);
    playTrack('didgi3', 0, 0, 1, 11500, 60000);
    playTrack('entertain', 0, 0, 1, 9500, 14500);
    playTrack('drums6', 0, 0, 1, 13500, 20000);
  }, 8500);

  setTimeout(function(){
    playTrack('didgi2', 0, 0, 1, 16000, 21000);
    playTrack('drums2', 0, 0, 1, 16500, 60000);
  }, 16000);
}


function keyPlay(){
  $(this).on('keydown', function(event){
    switch(event.which) {
    case 65:
        playTrack('drums1', 0, 1);
        break;
    case 66:
      playTrack('drums2', 0, 1);
        break;
    case 67:
      playTrack('drums3', 0, 1);
        break;
    case 68:
      playTrack('drums4', 0, 1);
        break;
    case 69:
      playTrack('drums5', 0, 1);
        break;
    case 70:
      playTrack('drums6', 0, 1);
        break;
    case 71:
      playTrack('didgi1', 0, 1);
        break;
    case 72:
      playTrack('didgi2', 0, 1);
        break;
    case 73:
      playTrack('didgi3', 0, 1);
        break;
    case 74:
      playTrack('didgi4', 0, 1);
        break;
    case 75:
      playTrack('entertain', 0, 1);
        break;
    case 76:
      playTrack('annoy', 0, 1);
        break;
    }
  });
}
