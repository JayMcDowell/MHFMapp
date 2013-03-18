	$(document).ready(function() {
  		$('.holder').hide();
	$('h1').click(function() {
  			$(this).toggleClass('close').next().slideToggle("slow");
  		});//end of hide
	}); //end of doc ready