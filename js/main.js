

$(document).ready(function(){

	var prevText;

/* Changes event section display on cursor hover */

	$('.features-button-events').hover(
		function(){

			var $h2 = $('.features-events > h2');
			prevText = $h2.text();

			$('.features-events').css('background-image', 'url(images/old-pro.jpg)');
			$h2.text('');
		}, 

	function(){
		var $h2 = $('.features-events > h2');

		$('.features-events').css('background-image', 'none');
		$h2.text(prevText);
		$(console).log;
	});

/* Changes featured brew section display on cursor hover */


	$('.features-button-brew').hover(
		function(){

			var $h2 = $('.features-brew > h2');
			prevText = $h2.text();

			$('.features-brew').css('background-image', 'url(images/old-pro.jpg)');
			$h2.text('');
		}, 

	function(){
		var $h2 = $('.features-brew > h2');

		$('.features-brew').css('background-image', 'none');
		$h2.text(prevText);
		$(console).log;
	});

/* Changes brewer profile section display on cursor hover */

	$('.features-button-profile').hover(
		function(){

			var $h2 = $('.features-profile > h2');
			prevText = $h2.text();

			$('.features-profile').css('background-image', 'url(images/old-pro.jpg)');
			$h2.text('');
		}, 

	function(){
		var $h2 = $('.features-profile > h2');

		$('.features-profile').css('background-image', 'none');
		$h2.text(prevText);
		$(console).log;
	});



/*
	$('.features-button').mouseover(function(){
		$('.features-brew').css('background-image', 'url(images/old-pro.jpg)');

	});

	$('.features-button').mouseleave(function(){
		$('.features-brew').css({
				'background-image' : 'none'

				 })
	});	

function clear_background() {
	$('features-box').css()

*/

});



/*

when the cursor hovers on the features-button:
	features-button background turns white
	features-box background shows the correct image */
