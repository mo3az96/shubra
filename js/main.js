
$(window).on('load', function () {
    $('#loaderSvgWrapper').fadeOut(500);
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arr-top").slideDown(500) : $(".arr-top").slideUp(500);
    });
    $(".arr-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
    });
    /////////specials Slider/////////
    $('.specials .Product-slider').owlCarousel({
        autoplay: false,
        margin: 13,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3
            },
            1450: {
                items: 4
            }
        }
    });
    /////////bestseller Slider/////////
    $('.bestseller .Product-slider').owlCarousel({
        autoplay: false,
        margin: 13,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            1450: {
                items: 2
            },
        }
    });
    /////////cats Slider/////////
    $('.cats').owlCarousel({
        autoplay: false,
        margin: 16,
        stagePadding: 5,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            },
            1450: {
                items: 5
            }
        }
    });
    /////////reg Slider/////////
    $('.reg-slider .Product-slider').owlCarousel({
        autoplay: false,
        items: 5,
        margin: 14,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1450: {
                items: 5
            }
        }
    });
    //////
    $('.cats-btn').click(function () {
        $(".cats-dispaly").slideToggle("500");
        $(".mo-overlay").fadeToggle(500);
        if ($(window).width() <= 767) {
            $(".mo-overlay").hide();
            $('body').addClass("overflow");
        }
    });
    $('.mo-overlay').click(function () {
        $(".cats-dispaly").slideUp("500");
        $(".mo-overlay").fadeOut(500);
    });
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }

    if ($(window).width() <= 1200) {
        $('.sub-body').unwrap();
        $('.sub-cats-ul').unwrap();
        $('.sub-head').remove();
        $(".level-2-link").addClass("mo-accordion");
        $(".sub-cats-ul").addClass("mo-panel");
        $('.log-li').click(function () {
            $(".xs-log").slideToggle(400);
        });
        /////////////////////////////////////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        /////////////////////////////////////////////////
        $('.mo-search-icon').click(function () {
            // $(".search-cont").addClass("search-in");
            $(".search-cont").fadeIn(400);
            $(".mo-overlay").fadeIn(300);
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.mo-overlay').click(function () {
            $("body").removeClass("overflow");
            // $(".search-cont").removeClass("search-in");
            $(".search-cont").fadeOut(400);
            $(".mo-overlay").fadeOut(300);
        });
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});