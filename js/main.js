! function(e) {
    "use strict";
    e("select").niceSelect();
    var o = e(".search_wrp"),
        s = e(".search-trigger"),
        i = e("#search_close");
    e(".search-trigger").on("click", function(e) {
        e.preventDefault(), o.animate({
            opacity: "toggle"
        }, 500), s.add(i).addClass("open")
    }), e(".search_close").on("click", function(e) {
        e.preventDefault(), o.animate({
            opacity: "toggle"
        }, 500), s.add(i).removeClass("open")
    }), e(document.body).on("click", function(e) {
        o.fadeOut(200), s.add(i).removeClass("open")
    }), e(".search-trigger, .header-search-input").on("click", function(e) {
        e.stopPropagation()
    }), e(".siderbar_btn").on("click", function() {
        e(".menu_sidebar_info").addClass("info-opened"), e(".body-overlay").addClass("opened")
    }), e(".menu_info_close-btn").on("click", function() {
        e(".menu_sidebar_info").removeClass("info-opened"), e(".body-overlay").removeClass("opened")
    }), e(".body-overlay").on("click", function() {
        e(".menu_sidebar_info").removeClass("info-opened"), e(".body-overlay").removeClass("opened")
    }), e(window).on("load", function() {
        e("#preloader").fadeOut("slow", function() {
            e(this).remove()
        }), e(".slides__preload_wrapper").fadeOut(1500)
    }), e("#slider_owl").owlCarousel({
        items: 1,
        nav: !0,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 1e3,
        loop: !0,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        mouseDrag: !0,
        touchDrag: !0
    }), e("#slider_owl2").owlCarousel({
        items: 1,
        nav: !1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 4e3,
        smartSpeed: 1e3,
        loop: !0,
        navText: ["<i class='icon-glyph-205'></i>", "<i class='icon-glyph-204'></i>"],
        mouseDrag: !0,
        touchDrag: !0
    }), e(".search_icon").on("click", function() {
        e(".search_icon_inr").slideToggle()
    }), e(".slider_home").on("translate.owl.carousel", function() {
        e(".single_slider h2, .single_slider h5, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0"), e(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0")
    }), e(".slider_home").on("translated.owl.carousel", function() {
        e(".single_slider h2, .single_slider h5, .single_slider p").addClass("animated fadeInUp").css("opacity", "1"), e(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1")
    }), e("#service_cur").owlCarousel({
        autoPlay: 3e3,
        autoplay: !0,
        smartSpeed: 1e3,
        items: 2,
        loop: !0,
        margin: 30,
        singleItem: !1,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
        nav: !1,
        dots: !0,
        navText: ["<i class='icon-glyph-41'></i>", "<i class='icon-glyph-40'></i>"],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    }), e("#team_curs").owlCarousel({
        autoPlay: 3e3,
        autoplay: !0,
        smartSpeed: 1e3,
        items: 2,
        loop: !0,
        margin: 30,
        singleItem: !1,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
        nav: !1,
        dots: !0,
        navText: ["<i class='icon-glyph-41'></i>", "<i class='icon-glyph-40'></i>"],
        responsive: {
            1200: {
                items: 2
            },
            992: {
                items: 2
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    }), e("#testimonial").owlCarousel({
        autoPlay: 3e3,
        autoplay: !0,
        smartSpeed: 1e3,
        items: 3,
        loop: !0,
        margin: 30,
        singleItem: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !0,
        nav: !1,
        dots: !0,
        navText: ["<i class='icon-glyph-41'></i>", "<i class='icon-glyph-40'></i>"],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 1
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    }), e("#client").owlCarousel({
        autoPlay: 3e3,
        autoplay: !0,
        smartSpeed: 2e3,
        items: 5,
        loop: !0,
        touchDrag: !0,
        mouseDrag: !0,
        pagination: !1,
        dots: !1,
        nav: !1,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"],
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    }), e(".project_list_one").each(function() {
        e(".project_slider_one").slick({
            centerMode: !0,
            centerPadding: "300px",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            autoplay: !0,
            autoplaySpeed: 4e3,
            prevArrow: '<i class="icon-glyph-204"></i>',
            nextArrow: '<i class="icon-glyph-204"></i>',
            responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "80px",
                    centerMode: !0,
                    arrows: !1,
                    dots: !0
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px",
                    centerMode: !0,
                    arrows: !1,
                    dots: !0
                }
            }]
        }), e(".btn-left").on("click", function() {
            e(this).parents(".project_list_one").find(".project_slider_one").slick("slickPrev")
        }), e(".btn-right").on("click", function() {
            e(this).parents(".project_list_one").find(".project_slider_one").slick("slickNext")
        })
    }), e("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    }), new WOW({
        mobile: !1
    }).init(), e(".scrollup").on("click", function() {
        e("html,body").animate({
            scrollTop: 0
        }, 900)
    }), e(window).on("scroll", function() {
        e(window).scrollTop() >= 500 ? e(".scrollup").slideDown(450) : e(".scrollup").slideUp(450)
    })
}(jQuery);