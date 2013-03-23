	$(document).ready(function() {
		 $("#plyr").fitVids();
	}); //end of doc ready
	function playStream() {
  try {
    var myaudio = new Audio('http://neon.wavestreamer.com:8047');
    myaudio.id = 'playerMyAdio';
    myaudio.play();
  } catch (e) {
    alert('no audio support!');
  } 
}



