## Javascript Sound Board

The goal of this exercise is to create and use Higher Order Functions to deliver different functionality around playing audio from [HTML5 Audio Tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

Resources for sounds:

-  http://www.moviesoundclips.net/
-  https://www.freesound.org

### Setup

Clone this repository and open the file in google chrome. You can `open index.html` from the command line, or double click on the file in Finder.  

https://github.com/gSchool/js-audio-layering

You will see a left sidebar with a pre-loaded audio track. This track works by utilizing the HTML5 <audio> tag. Play the sample.


<!-- ### Iteration Zero: Poking Around 9:35 - 10:00

-  Spend some time getting familiar with the files.
<!-- -  When clicking the center of the record, add the `rotate` class to the element. If the record starts spinning, you are on the right track.
-  If the record is currently spinning, when clicking the center of the record, remove the `rotate` class. -->
<!-- -  When clicking to remove the `rotate` class, pause the timer. http://jquerytimer.com/ -->
<!-- -  Add a different picture to the record (gifs work too). -->
<!-- -  If you finish early, feel free to replace the record with a custom button or image. -->

### Iteration One: Playing Music 10:00 - 11:00

<!-- -  When clicking the center of the record, play a track from the sidebar using Javascript.
  -  To do this, define a function named playTrack. It should take an `<audio>` element, and call the `play()` function on it.
-  If a track is playing, and you click the center of the record, make all tracks stop playing. -->
  <!-- -  To do this, define a function named stopTracks. It should accept all `<audio>` elements, loop through each of them, and call the `pause()` function on each. -->
-  Bonus Points if instead of calling `pause()`, you can reset the audio sources to what they initialize as on page load.

#### Things to explore:

<!-- -  Play a track from a specific point in the file using Javascript. For example, start a track from 5 seconds into the track. -->
<!-- -  Play a track in a loop, either using Javascript or HTML5.
-  Change the volume of a track using Javascript. -->
<!-- -  Fade a track out, fade a track in, using Javascript. -->

### Iteration Two: Layering Audio 11:00 - Lunch

<!-- -  Add functionality so that a second audio track starts playing after a designated time period has elapsed.
  -  That is, the first track plays (after clicking the record), and a second track begins playing after two (x) seconds. Use `setTimeout` or `setInterval` to achieve this.
-  Both tracks should be able to play at the same time.
 -->
### Lunch. It's beautiful outside!

### Iteration Three: Fluid Noise 1:00 - 3:00

<!-- -  Add additional layers of audio so that after clicking the record, a symphony of audio files come together to produce a _beautiful_ and **intentional** set of sounds.
-  Define and invoke a function named `playSymphony` to produce said chain of sounds.

 -->
### Iteration Four: Keyboard Piano 3:00 - 4:00

-  While keeping the current functionality, map each of your tracks to a button on your keyboard.
  -  ie: When pushing the "A" letter, play the first track.


### Stretch Goal

Become a composer. Instead of having the record start the "syphony" on a click, have the record prompt the user when to invoke each sound. Think Dance Dance Revolution style, where the user must press a key to start a given track at an appropriate time.
