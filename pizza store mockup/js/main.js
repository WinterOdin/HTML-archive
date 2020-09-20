
$(function(){
    var activateHamburger = function(event) {
        var el = $(this);
        if (el.hasClass('active')){
            el.addClass('active-end');
            el.one('transitionend', function(){
                el.removeClass('active active-end')
            });
        } else {
            el.addClass('active');
        }
    };
    $('.hamburger').click(activateHamburger);
    $('.nav-toggle').on('click', function(){
      $('.menu-popup').toggleClass('open');

    });


const wrapper = document.querySelector(".input-wrapper"),
      textInput = document.querySelector("input[type='text']");

textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);

});
});
