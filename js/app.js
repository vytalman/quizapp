$(document).ready(function() {
	window.onload = loadStart;
	
	function loadStart() {
		changeTvImage(start.image);
		$('#counter').hide();
		$('#tv').hide();
		$('#play-container').hide();
	}
	
	function changeTvImage(tvImage) {
		document.getElementById("tv").src = tvImage;
	}
});