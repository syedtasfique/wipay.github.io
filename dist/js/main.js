// Nav Bar animation
var navbar = $('.navbar');
$(window).on("scroll", () => {
    if ($(document).scrollTop() > 100) {
        navbar.addClass("scroll-nav");
    } else {
        navbar.removeClass("scroll-nav");
    }
});


new WOW().init();