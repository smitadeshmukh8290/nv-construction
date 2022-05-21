$.fn.cndkbeforeafter = function(e) {
    var t = $.extend({
            mode: "hover",
            showText: !0,
            beforeText: "BEFORE",
            beforeTextPosition: "bottom-left",
            afterText: "AFTER",
            afterTextPosition: "bottom-right",
            seperatorWidth: "4px",
            seperatorOpacity: "0.8",
            theme: "light",
            autoSliding: !1,
            autoSlidingStopOnHover: !0,
            hoverEffect: !0,
            enterAnimation: !1
        }, e),
        r = this,
        f = new Image;
    f.src = $(this).find(">div").eq(0).find('div[data-type="before"] img').attr("src"), f.onload = function() {
        ! function(e) {
            e.each(function() {
                var r = $(this).find(">div>div").length;
                r <= 1 && console.log("(cndk.beforeafter.js) Error ->Â No before-after images found."), e.addClass("cndkbeforeafter-theme-" + t.theme);
                var f = $(this);
                if (f.addClass("cndkbeforeafter cndkbeforeafter-root"), f.append("<div class='cndkbeforeafter-seperator' style='width:" + t.seperatorWidth + ";opacity:" + t.seperatorOpacity + "'></div>"), f.append("<div class='cndkbeforeafter-container'></div>"), 1 == t.hoverEffect && f.addClass("cndkbeforeafter-hover"), 1 == t.showText) {
                    var a = null == $(this).find(">div").eq(0).find('div[data-type="before"]').attr("data-title") ? t.beforeText : $(this).find(">div").eq(0).find('div[data-type="before"]').attr("data-title"),
                        d = null == $(this).find(">div").eq(0).find('div[data-type="after"]').attr("data-title") ? t.afterText : $(this).find(">div").eq(0).find('div[data-type="after"]').attr("data-title");
                    f.append("<div class='cndkbeforeafter-item-before-text cndkbeforeafter-" + t.beforeTextPosition + "'>" + a + "</div>"), f.append("<div class='cndkbeforeafter-item-after-text cndkbeforeafter-" + t.afterTextPosition + "'>" + d + "</div>")
                }
                for (i = 0; i < r; i++) {
                    var n = $(this).find(">div").eq(i).find('div[data-type="before"]'),
                        o = $(this).find(">div").eq(i).find('div[data-type="before"] img');
                    o.addClass("cndkbeforeafter-item-before"), n.addClass("cndkbeforeafter-item-before-c"), n.css("overflow", "hidden"), n.css("z-index", "2");
                    var s = $(this).find(">div").eq(i).find('div[data-type="after"]'),
                        c = $(this).find(">div").eq(i).find('div[data-type="after"] img');
                    c.addClass("cndkbeforeafter-item-after"), s.addClass("cndkbeforeafter-item-after-c"), s.css("z-index", "1");
                    var b = o.width(),
                        h = o.height(),
                        m = $(this).parent().width();
                    m < b && (h /= b / m, b = m, o.css("width", b + "px"), c.css("width", b + "px")), $(this).find(">div").eq(0).addClass("cndkbeforeafter-item"), $(this).find(">div").eq(0).css("height", h + "px"), b < 200 && ($(this).find(".cndkbeforeafter-item-after-text").addClass("cndkbeforeafter-extra-small-text cndkbeforeafter-extra-small-text-after"), $(this).find(".cndkbeforeafter-item-before-text").addClass("cndkbeforeafter-extra-small-text cndkbeforeafter-extra-small-text-before")), n.css("width", "50%"), s.css("width", "50%"), $(".cndkbeforeafter-seperator").css("left", "50%"), f.css("width", b + "px"), f.css("height", h + "px")
                }
                if ("hover" == t.mode) $(f).find(".cndkbeforeafter-seperator, .cndkbeforeafter-item > div").addClass("cndkbeforeafter-hover-transition"), $(f).mousemove(function(e) {
                    var t = $(this).offset(),
                        r = parseInt(e.pageX - t.left),
                        a = 100 * r / parseInt(f.width());
                    $(this).find(".cndkbeforeafter-item-before-c").css("width", a + "%"), $(this).find(".cndkbeforeafter-item-after-c").css("width", 100 - a + "%"), $(this).find(".cndkbeforeafter-seperator").css("left", a + "%")
                }).mouseleave(function() {
                    $(this).find(".cndkbeforeafter-item-after-c").css("width", "50%"), $(this).find(".cndkbeforeafter-item-before-c").css("width", "50%"), $(this).find(".cndkbeforeafter-seperator").css("left", "50%")
                });
                else if ("drag" == t.mode) {
                    $(f).find(".cndkbeforeafter-seperator, .cndkbeforeafter-item > div").addClass("cndkbeforeafter-drag-transition"), $(f).click(function(e) {
                        var t = $(this).offset(),
                            r = parseInt(e.pageX - t.left),
                            a = 100 * r / parseInt(f.width());
                        $(this).find(".cndkbeforeafter-item-before-c").css("width", a + "%"), $(this).find(".cndkbeforeafter-item-after-c").css("width", 100 - a + "%"), $(this).find(".cndkbeforeafter-seperator").css("left", a + "%")
                    });
                    var k = !1,
                        l = f;
                    l.find(".cndkbeforeafter-seperator").on("mousedown", function(e) {
                        k = !0, l.find(".cndkbeforeafter-seperator, .cndkbeforeafter-item > div").removeClass("cndkbeforeafter-drag-transition"), l.mousemove(function(e) {
                            if (k) {
                                var t = l.offset(),
                                    r = parseInt(e.pageX - t.left),
                                    a = 100 * r / parseInt(f.width());
                                l.find(".cndkbeforeafter-item-before-c").css("width", a + "%"), l.find(".cndkbeforeafter-item-after-c").css("width", 100 - a + "%"), l.find(".cndkbeforeafter-seperator").css("left", a + "%")
                            }
                        })
                    }), l.find(".cndkbeforeafter-seperator").on("mouseup", function(e) {
                        k = !1, l.find(".cndkbeforeafter-seperator, .cndkbeforeafter-item > div").addClass("cndkbeforeafter-drag-transition")
                    }), l.find(".cndkbeforeafter-seperator").on("touchstart", function(e) {
                        k = !0, l.find(".cndkbeforeafter-seperator, .cndkbeforeafter-item > div").removeClass("cndkbeforeafter-drag-transition"), l.on("touchmove", function(e) {
                            var t = l.offset(),
                                r = parseInt(e.originalEvent.touches[0].pageX - t.left),
                                a = 100 * r / parseInt(f.width());
                            l.find(".cndkbeforeafter-item-before-c").css("width", a + "%"), l.find(".cndkbeforeafter-item-after-c").css("width", 100 - a + "%"), l.find(".cndkbeforeafter-seperator").css("left", a + "%")
                        })
                    }), l.find(".cndkbeforeafter-seperator").append("<div><span></span></div>")
                }
                t.enterAnimation && $(this).addClass("cndkbeforeafter-animation"), t.autoSliding && ($(this).attr("auto-sliding", "true"), $(this).find(".cndkbeforeafter-item-before-c").addClass("cndkbeforeafter-animation-item-1"), $(this).find(".cndkbeforeafter-item-after-c").addClass("cndkbeforeafter-animation-item-2"), $(this).find(".cndkbeforeafter-seperator").addClass("cndkbeforeafter-animation-seperator"), t.autoSlidingStopOnHover && ($(this).on("mouseenter", function() {
                    $(this).find(".cndkbeforeafter-item-before-c").removeClass("cndkbeforeafter-animation-item-1"), $(this).find(".cndkbeforeafter-item-after-c").removeClass("cndkbeforeafter-animation-item-2"), $(this).find(".cndkbeforeafter-seperator").removeClass("cndkbeforeafter-animation-seperator")
                }), $(this).on("mouseleave", function() {
                    $(this).find(".cndkbeforeafter-item-before-c").addClass("cndkbeforeafter-animation-item-1"), $(this).find(".cndkbeforeafter-item-after-c").addClass("cndkbeforeafter-animation-item-2"), $(this).find(".cndkbeforeafter-seperator").addClass("cndkbeforeafter-animation-seperator")
                }))), $(window).resize(function() {})
            })
        }(r)
    }
}, $(".beforeafterdefault").cndkbeforeafter({
    mode: "drag",
    showText: !1
});