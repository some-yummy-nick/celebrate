$(document).ready(function () {
    // slider = $('#js-slider').slick();
    height = $(window).outerHeight() - $('.menu').outerHeight() - $('.happy-birthday-banner').outerHeight();
    $('.questions iframe').css('height', height);
    $('.slider').css('height', height);

    fadeTime = 300;
    $('[data-id="questionnaire"]').click(function () {
        clickMenu($(this));
        $('.questions').fadeIn(fadeTime);
        $('.slider').fadeOut(fadeTime);
    })
    $('[data-id="gallery"]').click(function () {
        clickMenu($(this));

        $('.questions').fadeOut(fadeTime);
        $('.slider').fadeIn(fadeTime);

        $('#js-slider').slick('setPosition');
    })

    function clickMenu(menuItem) {
        if ($(menuItem).hasClass('active'))
            return;
        $('.active').toggleClass('active');
        $(menuItem).toggleClass('active');
    }
});
