$(document).ready(function() {
	$('.back-to-top-button').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

});
