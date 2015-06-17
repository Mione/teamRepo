(function ($) {
	'use strict';
	$(function () {
		var $jumbotron = $('.jumbotron');
		
		$jumbotron.offset().top = $jumbotron.offset().top - 100;
    $('.navbar-wrapper').affix({
					offset: {
						top: 235
					}
				});
		 });

			/* smooth scrolling sections */
	$('a[href*=#]:not([href=#])').click(function () {
		
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				debugger;
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 50
					}, 1000);
					return false;
				}
			}
		});
}(window.jQuery));