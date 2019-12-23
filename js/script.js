$(document).ready(function () {
    // $('#js-slider').on('init', function(event, slick){
    // 	$('.slider').fadeOut(0);
    // });
    slider = $('#js-slider').slick();
    height = $(window).height() - $('.menu').height() - $('.questions').position().top;
    $('.questions iframe').css('height',height);
    fadeTime = 300;
    $('[data-id="questionnaire"]').click(function () {
        clickMenu($(this));
        $('.questions').animate({opacity: 1}, fadeTime);
        $('.slider').animate({opacity: 0}, fadeTime);
    })
    $('[data-id="gallery"]').click(function () {
        clickMenu($(this));
        $('.questions').animate({opacity: 0}, fadeTime);
        $('.slider').animate({opacity: 1}, fadeTime);
    })

    function clickMenu(menuItem) {
        if ($(menuItem).hasClass('active'))
            return;
        $('.active').toggleClass('active');
        $(menuItem).toggleClass('active');
    }
});
