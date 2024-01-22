(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/* Sticky Header */ 
$(function() {
	var header = $("#header"),
		yOffset = 0,
		triggerPoint = 80;
	$(window).on('scroll', function() {
		yOffset = $(window).scrollTop();

		if (yOffset >= triggerPoint) {
			header.addClass("navbar-fixed-top");
			header.find('.brand').addClass("scrolled"); 
		} else {
			header.removeClass("navbar-fixed-top");
			header.find('.brand').removeClass("scrolled"); 
		}

	});
});

/* Initialize smoothscroll plugin */
smoothScroll.init({
	offset: 60
});

			 
/* Initialize smoothscroll plugin */
	smoothScroll.init({
		offset: 60
	});

/* Active venobox */
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
             
/* Active Tooltip */
	$('[data-toggle="tooltip"]').tooltip();
				 
/* Scroll To Top */ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

})(jQuery);
