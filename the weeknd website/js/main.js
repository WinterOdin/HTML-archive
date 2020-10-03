

	(function($) {
		"use strict"
	
		$('body').scrollspy({
			target: '#nav',
			offset: $(window).height() / 2
		});
	
		$('#nav .nav-collapse').on('click', function() {
			$('#nav').toggleClass('open');
		});
		$('.has-dropdown a').on('click', function() {
			$(this).parent().toggleClass('open-drop');
		});
		$(window).on('scroll', function() {
			var wScroll = $(this).scrollTop();
			wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
			wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
		});
		$('.click_advance').click(function() {
		$('.display_advance').toggle('1000');
		$("i", this).toggleClass("icon-up-circled icon-down-circled ");
	});
	
//popup
$(document).ready(function() {
            $(".js-popup-toggle").on('click', function() {
                $("body").toggleClass("popup-active");
            });

            $(".cta").on('click', function() {
                $(this).removeClass("newsletter-attention");
            });


            $(".popup-dismiss").on('click', function() {
                $(".popup").css("display", "none");
            });
        });
})(jQuery);
