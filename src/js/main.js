$(document).ready(function () {

    $(".header__nav-list-content-link").click(function () {
        $(this).next().slideToggle();
    });

});