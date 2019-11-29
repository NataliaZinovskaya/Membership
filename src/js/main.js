$(document).ready(function () {

    $(".header__nav-list-content-link").click(function () {
        $(this).next().slideToggle();
    });


    var show = true;
    var countbox = ".counter-box__numbers";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counter-box__numbers').css('opacity', '1');
            $('.counter-box__numbers').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });


    $('.companies-slider').slick({
        nextArrow: '<button type="button" class="btn-next"></button>',
        prevArrow: '<button type="button" class="btn-prev"></button>'
    });


    var $btnTop = $('.btn-top');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 250) {
            $btnTop.fadeIn();
        } else {
            $btnTop.fadeOut();
        }
    });

    $btnTop.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 900)
    });


    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 700, 'linear');
    });

});