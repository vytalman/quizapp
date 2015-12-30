$(document).ready(function() {
	function changeTvImage(tvImage) {
		document.getElementById("tv").src = tvImage;
	}
	
	function startGame() {
		$('.hide-after-start').fadeOut('slow');
		$('.start-hidden').delay(900).fadeIn('slow');
	}
	
	$("#nesStartButton").click(function() {
		startGame();
	});
});