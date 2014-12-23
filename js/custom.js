

(function ($) {

	new WOW().init();

	jQuery(window).load(function() {
       // $("body").css("overflow", "hidden");
/*        jQuery("#menubar").delay(0).hide();
        jQuery("fb-root").delay(0).hide();
        jQuery(".page-scroll a").delay(0).hide();*/
		jQuery(".cube1, .cube2").delay(100).fadeOut("slow", function(){
            jQuery(".slogan h2, .slogan h4").css('z-index', 1030);
            jQuery("#wwho").addClass("wwho");
            jQuery("#wam").addClass("wam");
            jQuery("#wi").addClass("wi");
            jQuery(".intro .slogan h2 sub").addClass("subanim");
            jQuery(".slogan h4").addClass("h4anim");
        
        
        
      //  jQuery(".slogan h2").css('visibility', 'hidden');
       
       // jQuery(".slogan h2, .slogan h4").delay(10000).css('visibility', 'visible');
       // jQuery(".slogan h4").delay(100).css('z-index', 1030);
     //   jQuery("#wwho").addClass('wwho');
        //jQuery(".slogan h2").css('visibility', 'visible');
        
      jQuery("#preloader").delay(4000).fadeOut(4000);
     setTimeout(
        function() 
        {
            jQuery(".slogan h2").css("visibility", "visible");
        }, 3000);
        });        
     /*   jQuery("#menubar").delay(6000).fadeIn('slow');
        jQuery("fb-root").delay(6000).fadeIn('slow');
        jQuery(".page-scroll a").delay(6000).fadeIn('slow');*/
     // jQuery("body").delay(55000).css("overflow", "scroll");
      //jQuery(".slogan h2").delay(55000).css('visibility', 'visible');
     // jQuery(".navbar-fixed-top").delay(9000).css('z-index', 1030);
	});

	
	$(".slide .content").lazyload({
	    effect : "fadeIn",
	    threshold : $(window).height()
	});
	$(".container_slider").css('height', ($(window).height()*0.930));
	$(".slide").css('height', ($(window).height()*0.838));
	$(window).on('resize',function(){
		$(".container_slider").css('height', ($(window).height()*0.930));
		$(".slide").css('height', ($(window).height()*0.838));
	});
	window.slider = $('.container_slider ul').bxSlider({
		slideMargin: 0,
		pager: false,
		maxSlides: 1,
		minSlides: 1,
		infiniteLoop: false,
		hideControlOnEnd: true,
        easing: 'ease',
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$(window).trigger('scroll');
		}
	});
	


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 250) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$(".navbar-brand h1").css("visibility", "visible");
            $( "#navbarcustom" ).css( "background", "none" );
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			$(".navbar-brand h1").css("visibility", "hidden");
            //alert($(window).width() < 769);
            if ($("#menumobil").hasClass( "in" ) && ($(window).width() < 768) ){
                $( "#navbarcustom" ).css( "background", "#000" );
                $(".navbar-brand h1").css("visibility", "visible");
            }
            else{
              $( "#navbarcustom" ).css( "background", "none" );
            }
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


// email spam protection
jQuery(document).ready(function(){
		mailtoellements = jQuery("a[href^='mailto:']");
		mailtoellements.each(function(item){
			mailto = jQuery(this).attr('href');
			jQuery(this).attr('href',mailto.replace(/_\[\at\]\_/gi,"@"));
			email = jQuery(this).html(); jQuery(this).html(email.replace(/_\[\at\]\_/gi,"@"));
		});
	});


function mobilemenuON() {
    if (($(".navbar").offset().top <= 250) && ($(window).width() < 768)) {
        if( $("#navbarcustom" ).css('background-color') === "rgb(0, 0, 0)") {
            setTimeout(function(){
                $( "#navbarcustom" ).css( "background", "none" );
                $(".navbar-brand h1").css("visibility", "hidden");
            }, 350);
           
        }
        else{
            $( "#navbarcustom" ).css( "background", "#000" );
            $(".navbar-brand h1").css("visibility", "visible");
        }
    }
};

// The plugin code
(function($){
    $.fn.parallax = function(options){
        var $$ = $(this);
        offset = $$.offset();
        var defaults = {
            "start": 0,
            "stop": offset.top + $$.height(),
            "coeff": 0.95
        };
        
        var opts = $.extend(defaults, options);
        
        windowTop = $(window).scrollTop();
        newCoord = windowTop * opts.coeff;
        $$.css({
                        "background-position": "0 "+ newCoord + "px"
        });
        return this.each(function(){
            $(window).bind('scroll', function() {
                windowTop = $(window).scrollTop();
                if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
                    newCoord = windowTop * opts.coeff;
                    $$.css({
                        "background-position": "0 "+ newCoord + "px"
                    });
                }
            });
        });
    };
})(jQuery);

// call the plugin
$('.intro').parallax({ "coeff":-0.30 });
$('.slogan').parallax({ "coeff":1.5 });