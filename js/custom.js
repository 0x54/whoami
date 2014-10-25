

(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

	
	$(".slide .content").lazyload({
	    effect : "fadeIn",
	    threshold : $(window).height()
	});
	$(".container_slider").css('height', ($(window).height()*0.9));
	$(".slide").css('height', ($(window).height()*0.9));
	$(window).on('resize',function(){
		$(".container_slider").css('height', ($(window).height()*0.9));
		$(".slide").css('height', ($(window).height()*0.9));
	});
	window.slider = $('.container_slider ul').bxSlider({
		slideMargin: 0,
		pager: false,
		maxSlides: 1,
		minSlides: 1,
		infiniteLoop: false,
		hideControlOnEnd: true,
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$(window).trigger('scroll');
		}
	});
	


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			if($anchor.hasClass('dropdown-toggle')){
				return;
			}
			if(!$anchor.hasClass('redirect')){
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				event.preventDefault();
				$('.navbar-toggle').trigger('click');
			}
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
