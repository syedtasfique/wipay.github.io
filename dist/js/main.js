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


//scroll to top

$("a[href='#top']").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});


$('.go-to-top').hide();
$(window).on('scroll', function () {
    var scrollToTop = $(window).scrollTop();
    if (scrollToTop >= 100) {
        $('.go-to-top').show();
    } else {
        $('.go-to-top').hide();
    }
});


// type js

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


//lazy load image
$('.image').on('load', function () {
    // $("div").removeClass("linear-background");
    console.log("image loaded");

});

//button

/* -----------------------------------------------------
  Material Design Buttons
  https://codepen.io/rkchauhan/pen/NNKgJY
  By: Ravikumar Chauhan
  Find me on -
  Twitter: https://twitter.com/rkchauhan01
  Facebook: https://www.facebook.com/ravi032chauhan
  GitHub: https://github.com/rkchauhan
  CodePen: https://codepen.io/rkchauhan
-------------------------------------------------------- */
$(document).ready(function () {
    $('.ripple-effect').rkmd_rippleEffect();
});

(function ($) {
    $.fn.rkmd_rippleEffect = function () {
        var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;

        btn = $(this).not('[disabled], .disabled');

        btn.on('mousedown', function (e) {
            self = $(this);

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            if (self.find('.ripple').length === 0) {
                self.prepend('<span class="ripple"></span>');
            }
            ripple = self.find('.ripple');
            ripple.removeClass('animated');

            eWidth = self.outerWidth();
            eHeight = self.outerHeight();
            size = Math.max(eWidth, eHeight);
            ripple.css({ 'width': size, 'height': size });

            rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
            rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);

            ripple.css({ 'top': rippleY + 'px', 'left': rippleX + 'px' }).addClass('animated');

            setTimeout(function () {
                ripple.remove();
            }, 800);

        });
    };
}(jQuery));

//wimdows inner width and height fix banner and footer

let window_height = $(window).height();
let window_width = $(window).width();

$('.full-screen').css('height', window_height);

//navbar collapse

$('[data-toggle="slide-collapse"]').on('click', function () {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({
        'width': 'toggle'
    }, 350);


});
$(".menu-overlay").click(function (event) {
    $(".navbar-toggler").trigger("click");
    $(".menu-overlay").toggleClass('show');
    console.log("clicked");
});
$('.navbar-toggler, .menu-overlay').on('click', function () {
    $(".menu-overlay").toggleClass('show');
});