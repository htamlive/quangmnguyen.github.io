/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
			parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

		};

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1800px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch?
	if (browser.mobile) {

		// Turn on touch mode.
		$body.addClass('is-touch');

		// Height fix (mostly for iOS).
		window.setTimeout(function () {
			$window.scrollTop($window.scrollTop() + 1);
		}, 0);

	}

	// Footer.
	breakpoints.on('<=medium', function () {
		$footer.insertAfter($main);
	});

	breakpoints.on('>medium', function () {
		$footer.appendTo($header);
	});

	// Header.

	// Parallax background.

	// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
	if (browser.name == 'ie'
		|| browser.mobile)
		settings.parallax = false;

	if (settings.parallax) {

		breakpoints.on('<=medium', function () {

			$window.off('scroll.strata_parallax');
			$header.css('background-position', '');

		});

		breakpoints.on('>medium', function () {

			$header.css('background-position', 'left 0px');

			$window.on('scroll.strata_parallax', function () {
				$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
			});

		});

		$window.on('load', function () {
			$window.triggerHandler('scroll');
		});

	}

	// Main Sections: Two.

	// Lightbox gallery.
	$window.on('load', function () {

		$('#two').poptrox({
			caption: function ($a) { return $a.next('h3').text(); },
			overlayColor: '#2c2c2c',
			overlayOpacity: 0.85,
			popupCloserText: '',
			popupLoaderText: '',
			selector: '.work-item a.image',
			usePopupCaption: true,
			usePopupDefaultStyling: false,
			usePopupEasyClose: false,
			usePopupNav: true,
			windowMargin: (breakpoints.active('<=small') ? 0 : 50)
		});

	});

	$window.on('load', function () {
		// Cache the slider element
		var $slider = $('.slider');

		// Initialize Fancybox for the main project cards
		$('#two .work-item a').fancybox({
			touch: false,
			animationEffect: "fade",
			transitionEffect: "fade",
			infobar: false,
			toolbar: false,
			buttons: ["close"],
			clickContent: function (current, event) {
				return current.type === "image" ? "close" : false;
			},
			afterLoad: function (current, previous) {
				// Use the cached slider variable
				$slider.slick({
					slidesToShow: 1,
					dots : true,
					variableWidth: true,
					swipe: true,
					swipeToSlide: true,
					touchThreshold: 10,
					centerMode: true,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 4000,
					pauseOnHover: true,
				});

				// Use the cached slider variable
				$slider.on('swipe', function (event, slick, direction) {
					if (direction === 'left') {
						$slider.slick('slickNext');
					} else if (direction === 'right') {
						$slider.slick('slickPrev');
					}
				});
			},
			beforeClose: function () {
				// Use the cached slider variable
				$slider.slick('unslick');
			}
		});
	});



})(jQuery);