(function($) {
    "use strict"

    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });
    $("#nav .main-nav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
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


$(".open").hide();
$('.faqQuestions ').click(function(){
    $(this).next().slideToggle();
});

$('.click_advance').click(function(){
    $('.number').addClass('.numberColor');
});



})(jQuery);
