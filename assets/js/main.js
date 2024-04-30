(function($) {
    "use strict";
    jQuery(window).on("load", function() {
        $(".preloader").delay(1600).fadeOut("slow");
    });
    $(".sidebar-btn").on("click", function() {
        $(".sidebar-area").addClass("active");
    });
    $(".sidebar-menu-close").on("click", function() {
        $(".sidebar-area").removeClass("active");
    });
    jQuery(".dropdown-icon").on("click", function() {
        jQuery(this).toggleClass("active").next("ul").slideToggle();
        jQuery(this).parent().siblings().children("ul").slideUp();
        jQuery(this).parent().siblings().children(".active").removeClass("active");
    });
    jQuery(".dropdown-icon2").on("click", function() {
        jQuery(this).toggleClass("active").next(".submenu-list").slideToggle();
        jQuery(this).parent().siblings().children(".submenu-list").slideUp();
        jQuery(this).parent().siblings().children(".active").removeClass("active");
    });
    jQuery(".home4-services-area .services-hover").on("mouseenter", function() {
        $(this).toggleClass("active");
        $(this).find(".service-bottom-wrap").slideToggle();
    });
    jQuery(".home4-services-area .services-hover").on("mouseleave", function() {
        jQuery(this).find(".service-bottom-wrap").slideUp();
        jQuery(this).siblings().removeClass("active");
    });
    document.querySelectorAll(".main-menu > li > a").forEach((button) => (button.innerHTML = '<div class="menu-text"><span>' +
        button.textContent.split("").join("</span><span>") +
        "</span></div>"));
    setTimeout(() => {
        var menu_text = document.querySelectorAll(".menu-text span");
        menu_text.forEach((item) => {
            var font_sizes = window.getComputedStyle(item, null);
            let font_size = font_sizes.getPropertyValue("font-size");
            let size_in_number = parseInt(font_size.replace("px", ""), 10);
            let new_size = parseInt(size_in_number / 3, 10);
            new_size = new_size + "px";
            if (item.innerHTML === " ") {
                item.style.width = new_size;
            }
        });
    }, 1000);
    let splitTitleLines = gsap.utils.toArray(".text-animation");
    splitTitleLines.forEach((splitTextLine) => {
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });
        const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines"
        });
        gsap.set(splitTextLine, {
            perspective: 400
        });
        itemSplitted.split({
            type: "lines"
        });
        tl2.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
    let splitTextLines = gsap.utils.toArray(".text-animation p");
    splitTextLines.forEach((splitTextLine) => {
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });
        const itemSplitted = new SplitText(splitTextLine, {
            type: "lines"
        });
        gsap.set(splitTextLine, {
            perspective: 400
        });
        itemSplitted.split({
            type: "lines"
        });
        tl3.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
    let arr1 = gsap.utils.toArray("#btn_wrapper");
    let arr2 = gsap.utils.toArray(".btn_wrapper");
    const all_buttons = arr1.concat(arr2);
    all_buttons.forEach((btn) => {
        if (!btn.classList.contains("banner-btn")) {
            gsap.from(btn, {
                scrollTrigger: {
                    trigger: btn,
                    start: "top center+=150",
                    markers: false,
                },
                opacity: 0,
                y: -70,
                ease: "bounce",
                duration: 1.5,
            });
        }
    });
    let imageTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".animet-images",
            start: "top bottom",
            markers: false,
            scrub: 1,
            end: "bottom center",
        },
    });
    imageTl.to(".animet-images img", {
        scale: 1.2,
        duration: 1,
    });
    $(".counter").counterUp({
        delay: 10,
        time: 1500,
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: ["close"],
        loop: false,
        protect: true,
    });
    $(".video-player").fancybox({
        buttons: ["close"],
        loop: false,
        protect: true,
    });
    $("select").niceSelect();
    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".franctional-pagi1",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-1",
            prevEl: ".prev-1",
        },
    });
    var swiper = new Swiper(".home2-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".franctional-pagi2",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-2",
            prevEl: ".prev-2",
        },
    });
    var swiper = new Swiper(".home3-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".franctional-pagi3",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-3",
            prevEl: ".prev-3",
        },
    });
    var swiper = new Swiper(".home3-team-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-4",
            prevEl: ".prev-4",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });
    var swiper = new Swiper(".gallery-slider", {
        speed: 1500,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });
    var swiper = new Swiper(".home3-pricing-slider", {
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 25,
        navigation: {
            nextEl: ".next-5",
            prevEl: ".prev-5",
        },
    });
    var swiper = new Swiper(".home4-award-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".franctional-pagi6",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-1",
            prevEl: ".prev-1",
        },
    });
    var swiper = new Swiper(".home4-work-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        mousewheel: {
            invert: false,
        },
        pagination: {
            el: ".work-fractional-pagi",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next-6",
            prevEl: ".prev-6",
        },
    });
    var swiper = new Swiper(".home6-testimonial-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        navigation: {
            nextEl: ".next-1",
            prevEl: ".prev-1",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".home6-performance-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-2",
            prevEl: ".prev-2",
        },
        pagination: {
            el: ".pagination1",
            clickable: "true",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".home6-blog-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-3",
            prevEl: ".prev-3",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".work-card-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-1",
            prevEl: ".prev-1",
        },
    });
    var swiper = new Swiper(".pf-showcase-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        mousewheel: {
            invert: false,
        },
        navigation: {
            nextEl: ".next-16",
            prevEl: ".prev-16",
        },
    });
    var swiper = new Swiper(".service-post-thumb-slider", {
        slidesPerView: 1,
        speed: 1500,
        spaceBetween: 25,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-5",
            prevEl: ".prev-5",
        },
    });
    var swiper = new Swiper(".career-img-slider", {
        speed: 1500,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: ".career-pagination",
            clickable: "true",
        },
    });
    var swiper = new Swiper(".recent-post-slider", {
        speed: 1500,
        spaceBetween: 24,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-5",
            prevEl: ".prev-5",
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            420: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 4,
            },
        },
    });
    document.addEventListener("DOMContentLoaded", function(event) {
        let offset = 50;
        let circleContainer = document.querySelector(".circle-container");
        let circlePath = document.querySelector(".circle-container path");
        let pathLength = circlePath.getTotalLength();
        circlePath.style.transition = circlePath.style.WebkitTransition = "none";
        circlePath.style.strokeDasharray = pathLength;
        circlePath.style.strokeDashoffset = pathLength;
        circlePath.getBoundingClientRect();
        circlePath.style.transition = circlePath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
        let updateLoader = () => {
            let scrollTop = window.scrollY;
            let docHeight = document.body.offsetHeight;
            let winHeight = window.innerHeight;
            let height = docHeight - winHeight;
            let progress = pathLength - (scrollTop * pathLength) / height;
            circlePath.style.strokeDashoffset = progress;
            if (scrollTop > offset) {
                circleContainer.classList.add("active");
            } else {
                circleContainer.classList.remove("active");
            }
        };
        circleContainer.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        window.onscroll = () => {
            updateLoader();
        };
        updateLoader();
    });
    $(document).ready(function() {
        $(window).on("scroll", function() {
            if ($("body").width() > 992) {
                if ($(".dashboard-img-section").length > 0) {
                    animLoaded();
                }
            }
        });

        function animLoaded() {
            let get_win_scroll = $(window).scrollTop();
            let platform_scr_top = $(".dashboard-img-section").offset().top / 2 - 85;
            if (get_win_scroll >= platform_scr_top && $(".dashboard-img-section").hasClass("notActiv")) {
                $(".dashboard-img-section .dashboard-img").css("animation", "animLoaded 1.4s 0.4s ease both");
                $(".dashboard-img-section").removeClass("notActiv");
            }
        }
    });
    const serviceImgItem = document.querySelectorAll(".sevices-wrap .single-services ");

    function followImageCursor(event, serviceImgItem) {
        const contentBox = serviceImgItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    serviceImgItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 100);
        });
    });
    const workImgItem = document.querySelectorAll(".portfolio-showcase-horizental .single-work");

    function followImageCursor(event, workImgItem) {
        const contentBox = workImgItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        workImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    workImgItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 100);
        });
    });
    const interactiveImgItem = document.querySelectorAll(".single-interactive-link");

    function followImagesCursor(event, interactiveImgItem) {
        const contentBox = interactiveImgItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        interactiveImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    interactiveImgItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImagesCursor(event, item), 100);
        });
    });
    const infoflow1TextItem = document.querySelectorAll(".single-shocase-carosule");

    function followImageCursor(event, infoflow1TextItem) {
        const contentBox = infoflow1TextItem.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        infoflow1TextItem.children[2].style.transform = `translate(${dx}px, ${dy}px)`;
    }
    infoflow1TextItem.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 100);
        });
    });
    $(".qty-btn").on("click", function(e) {
        e.stopPropagation();
        $(this).next(".quantity-area").toggleClass("active");
        $(".quantity-area").not($(this).next(".quantity-area")).removeClass("active");
    });
    $(document).on("click", function(e) {
        if (!$(e.target).closest(".quantity-area").length) {
            $(".quantity-area").removeClass("active");
        }
    });
    $(".quantity__minus").on("click", function(e) {
        e.preventDefault();
        var input = $(this).siblings(".quantity__input");
        var value = parseInt(input.val(), 10);
        if (value > 1) {
            value--;
        }
        input.val(value.toString().padStart(2, "0"));
    });
    $(".quantity__plus").on("click", function(e) {
        e.preventDefault();
        var input = $(this).siblings(".quantity__input");
        var value = parseInt(input.val(), 10);
        value++;
        input.val(value.toString().padStart(2, "0"));
    });
    $(function() {
        $(".choose-payment-method ul li").on("click", function() {
            $(".choose-payment-method ul li").removeClass("active");
            if ($(this).hasClass("stripe")) {
                $("#StripePayment").show();
                $("#OfflinePayment").hide();
                $(this).addClass("active");
            } else if ($(this).hasClass("paypal")) {
                $("#OfflinePayment").hide();
                $("#StripePayment").hide();
                $(this).addClass("active");
            } else if ($(this).hasClass("offline")) {
                $("#OfflinePayment").show();
                $("#StripePayment").hide();
                $(this).addClass("active");
            } else {
                $("#StripePayment").hide();
                $("#OfflinePayment").hide();
            }
        });
    });
    if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
        if ($(window).width() > 1024) {
            gsap.config({
                nullTargetWarn: false,
                trialWarn: false,
            });
            $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
            if ($("a.magnetic-item").length) {
                $("a.magnetic-item").addClass("not-hide-cursor");
            }
            var $mouse = {
                x: 0,
                y: 0
            };
            var $pos = {
                x: 0,
                y: 0
            };
            var $ratio = 0.15;
            var $active = false;
            var $ball = $("#ball");
            var $ballWidth = 36;
            var $ballHeight = 36;
            var $ballOpacity = 0.5;
            var $ballBorderWidth = 2;
            gsap.set($ball, {
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity,
            });
            document.addEventListener("mousemove", mouseMove);

            function mouseMove(e) {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            }
            gsap.ticker.add(updatePosition);

            function updatePosition() {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;
                    gsap.set($ball, {
                        x: $pos.x,
                        y: $pos.y
                    });
                }
            }
            $(".magnetic-wrap").mousemove(function(e) {
                parallaxCursor(e, this, 2);
                callParallax(e, this);
            });

            function callParallax(e, parent) {
                parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25);
            }

            function parallaxIt(e, parent, target, movement) {
                var boundingRect = parent.getBoundingClientRect();
                var relX = e.clientX - boundingRect.left;
                var relY = e.clientY - boundingRect.top;
                gsap.to(target, {
                    duration: 0.3,
                    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
                    y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
                    ease: Power2.easeOut,
                });
            }

            function parallaxCursor(e, parent, movement) {
                var rect = parent.getBoundingClientRect();
                var relX = e.clientX - rect.left;
                var relY = e.clientY - rect.top;
                $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                gsap.to($ball, {
                    duration: 0.3,
                    x: $pos.x,
                    y: $pos.y
                });
            }
            $(".magnetic-wrap").on("mouseenter mouseover", function(e) {
                $ball.addClass("magnetic-active");
                gsap.to($ball, {
                    duration: 0.3,
                    width: 70,
                    height: 70,
                    opacity: 1
                });
                $active = true;
            }).on("mouseleave", function(e) {
                $ball.removeClass("magnetic-active");
                gsap.to($ball, {
                    duration: 0.3,
                    width: $ballWidth,
                    height: $ballHeight,
                    opacity: $ballOpacity,
                });
                gsap.to(this.querySelector(".magnetic-item"), {
                    duration: 0.3,
                    x: 0,
                    y: 0,
                    clearProps: "all",
                });
                $active = false;
            });
            $(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a").not(".magnetic-item").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    borderWidth: 0,
                    opacity: 0.2,
                    backgroundColor: "#CCC",
                    width: "100px",
                    height: "100px",
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    borderWidth: $ballBorderWidth,
                    opacity: $ballOpacity,
                    backgroundColor: "transparent",
                    width: $ballWidth,
                    height: $ballHeight,
                    clearProps: "backgroundColor",
                });
            });
            $(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 0.6,
                    borderWidth: 3
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1,
                    borderWidth: $ballBorderWidth,
                });
            });
            $("[data-cursor]").each(function() {
                $(this).on("mouseenter", function() {
                    $ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
                    $(".ball-view-inner").append($(this).attr("data-cursor"));
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -75,
                        width: 95,
                        height: 95,
                        opacity: 1,
                        borderWidth: 0,
                    });
                    gsap.to(".ball-view-inner", {
                        duration: 0.3,
                        scale: 1,
                        autoAlpha: 1,
                    });
                }).on("mouseleave", function() {
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                        borderWidth: $ballBorderWidth,
                    });
                    $ball.removeClass("ball-view").find(".ball-view-inner").remove();
                });
                $(this).addClass("not-hide-cursor");
            });
            $(".swiper").each(function() {
                if ($(this).parent().attr("data-simulate-touch") === "true") {
                    if ($(this).parent().hasClass("cursor-drag")) {
                        $(this).on("mouseenter", function() {
                            $ball.append('<div class="ball-drag"></div>');
                            gsap.to($ball, {
                                duration: 0.3,
                                width: 60,
                                height: 60,
                                opacity: 1,
                            });
                        }).on("mouseleave", function() {
                            $ball.find(".ball-drag").remove();
                            gsap.to($ball, {
                                duration: 0.3,
                                width: $ballWidth,
                                height: $ballHeight,
                                opacity: $ballOpacity,
                            });
                        });
                        $(this).addClass("not-hide-cursor");
                        $(this).find("[data-cursor]").on("mouseenter mouseover", function() {
                            $ball.find(".ball-drag").remove();
                            return false;
                        }).on("mouseleave", function() {
                            $ball.append('<div class="ball-drag"></div>');
                            gsap.to($ball, {
                                duration: 0.3,
                                width: 60,
                                height: 60,
                                opacity: 1,
                            });
                        });
                    }
                }
            });
            $(".swiper").each(function() {
                if ($(this).parent().attr("data-simulate-touch") === "true") {
                    if ($(this).parent().hasClass("cursor-drag-mouse-down")) {
                        $(this).on("mousedown pointerdown", function(e) {
                            if (e.which === 1) {
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: 60,
                                    height: 60,
                                    opacity: 1,
                                });
                                $ball.append('<div class="ball-drag"></div>');
                            }
                        }).on("mouseup pointerup", function() {
                            $ball.find(".ball-drag").remove();
                            if ($(this).find("[data-cursor]:hover").length) {} else {
                                gsap.to($ball, {
                                    duration: 0.2,
                                    width: $ballWidth,
                                    height: $ballHeight,
                                    opacity: $ballOpacity,
                                });
                            }
                        }).on("mouseleave", function() {
                            $ball.find(".ball-drag").remove();
                            gsap.to($ball, {
                                duration: 0.2,
                                width: $ballWidth,
                                height: $ballHeight,
                                opacity: $ballOpacity,
                            });
                        });
                        $(this).find("[data-cursor]").on("mousedown pointerdown", function() {
                            return false;
                        });
                        $(this).find("[data-cursor]").on("mouseenter mouseover", function() {
                            $ball.find(".ball-drag").remove();
                            return false;
                        });
                    }
                }
            });
            $(".cursor-close").each(function() {
                $(this).addClass("ball-close-enabled");
                $(this).on("mouseenter", function() {
                    $ball.addClass("ball-close-enabled");
                    $ball.append('<div class="ball-close">Close</div>');
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -75,
                        width: 80,
                        height: 80,
                        opacity: 1,
                    });
                    gsap.from(".ball-close", {
                        duration: 0.3,
                        scale: 0,
                        autoAlpha: 0
                    });
                }).on("mouseleave click", function() {
                    $ball.removeClass("ball-close-enabled");
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                    });
                    $ball.find(".ball-close").remove();
                });
                $(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor").not(".not-hide-cursor").on("mouseenter", function() {
                    $ball.removeClass("ball-close-enabled");
                }).on("mouseleave", function() {
                    $ball.addClass("ball-close-enabled");
                });
            });
            $(".blog-interactive-item").each(function() {
                var $biItem = $(this);
                if ($biItem.find(".bi-item-image").length) {
                    $biItem.find(".bi-item-title a").on("mouseenter mouseover", function() {
                        $("#magic-cursor").addClass("blog-interactive-hover-on");
                        $biItem.find(".bi-item-image").appendTo($ball);
                        gsap.to($ball, {
                            duration: 0.3,
                            width: "20vw",
                            height: "20vw",
                            opacity: 1,
                        });
                    }).on("mouseleave", function() {
                        $("#magic-cursor").removeClass("blog-interactive-hover-on");
                        $ball.find(".bi-item-image").appendTo($biItem);
                        gsap.to($ball, {
                            duration: 0.3,
                            width: $ballWidth,
                            height: $ballHeight,
                            opacity: $ballOpacity,
                        });
                    });
                    $biItem.find(".bi-item-title a").addClass("not-hide-cursor");
                    $biItem.addClass("bi-item-image-on");
                }
            });
            $('a[href^="#"]').not('[href$="#"]').not('[href$="#0"]').on("click", function() {
                var target = this.hash;
                if ($("#tt-header").hasClass("tt-header-fixed")) {
                    var $offset = $("#tt-header").height();
                } else {
                    var $offset = 0;
                }
                if ($(this).data("offset") != undefined)
                    $offset = $(this).data("offset");
                return false;
            });
            $("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor").not(".not-hide-cursor").not(".cursor-alter").not(".tt-main-menu-list > li > a").not(".tt-main-menu-list > li > .tt-submenu-trigger > a").on("mouseenter", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 0,
                    opacity: 0
                });
            }).on("mouseleave", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1,
                    opacity: $ballOpacity
                });
            });
            $("a").not('[target="_blank"]').not('[href^="#"]').not('[href^="mailto"]').not('[href^="tel"]').not(".lg-trigger").not(".tt-btn-disabled").on("click", function() {
                gsap.to($ball, {
                    duration: 0.3,
                    scale: 1.3,
                    autoAlpha: 0
                });
            });
            $(document).on("mouseleave", function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 0
                });
            }).on("mouseenter", function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
            $(document).mousemove(function() {
                gsap.to("#magic-cursor", {
                    duration: 0.3,
                    autoAlpha: 1
                });
            });
        }
    }
    $(".btn-hover").on("mouseenter", function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
            top: 0,
            left: 0
        });
        $(this).find("span").css({
            top: relY,
            left: relX
        });
    }).on("mouseout", function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find("span").css({
            top: 0,
            left: 0
        });
        $(this).find("span").css({
            top: relY,
            left: relX
        });
    });
    const dayNight = document.querySelector(".tt-style-switch");
    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("bi-brightness-low-fill");
        dayNight.querySelector("i").classList.toggle("bi-moon");
        document.body.classList.toggle("dark");
        var value = document.getElementById("body").className;
        var str = value;
        var last = str.split(" ").slice(-1)[0];
        if (last === "dark") {
            localStorage.setItem("Axleo_theme", last);
        } else {
            localStorage.setItem("Axleo_theme", "");
        }
        window.addEventListener("load", () => {
            if (document.body.classList.contains("dark")) {
                jQuery(".tt-style-switch i").addClass("bi bi-brightness-low-fill");
            } else {
                jQuery(".tt-style-switch i").addClass("bi bi-moon");
            }
        });
    });
    var Axleo_theme = localStorage.getItem("Axleo_theme");
    if (Axleo_theme === "dark") {
        $("body").addClass("dark");
    }
    $(".home1-solution-section .accordion-flush .accordion-item").on("click", function(e) {
        var index = $(this).index();
        $(".solution-img-wrapper li").removeClass("active");
        $(".solution-img-wrapper li:eq(" + index + ")").addClass("active");
    });
    $(".award-table tbody tr").on("mouseenter", function(e) {
        var index = $(this).index();
        $(".award-img-group li").removeClass("active");
        $(".award-img-group li:eq(" + index + ")").addClass("active");
    });
    const buttons = document.querySelectorAll(".interactive-list .ineteractive-single-item");
    const stage = document.querySelector("#background-panel");
    buttons.forEach((button) => {
        button.onmouseover = function() {
            document.querySelector(button.dataset.show).style.opacity = 1;
            jQuery(button.dataset.show).addClass("active");
        };
        button.onmouseout = function() {
            document.querySelector(button.dataset.show).style.opacity = 0;
            jQuery(button.dataset.show).removeClass("active");
        };
    });
    const scScrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-sec-title",
            start: "top center",
            endTrigger: ".scroll-sec-title-end",
            end: "bottom top",
            toggleActions: "restart pause reverse pause",
            scrub: 1,
        },
    });
    scScrollTl.to(".scroll-sec-title", {
        y: 1500,
        duration: 10,
        opacity: 0,
    });
    const slider2 = jQuery(".work-flow-group");
    slider2.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    });
    slider2.on("wheel", function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick("slickPrev");
        } else {
            $(this).slick("slickNext");
        }
    });
    $(".pf-shocase-carosule-group .single-shocase-carosule:nth-child(2)").addClass("active");
    $(".pf-shocase-carosule-group").mouseenter(function() {
        $(".pf-shocase-carosule-group .single-shocase-carosule:not(:nth-child(2))").removeClass("active");
    });
    $(".pf-shocase-carosule-group").mouseleave(function() {
        $(".pf-shocase-carosule-group .single-shocase-carosule:not(:nth-child(2))").removeClass("active");
        $(".pf-shocase-carosule-group .single-shocase-carosule:nth-child(2)").addClass("active");
    });
    $(".pf-shocase-carosule-group .single-shocase-carosule").mouseenter(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: 1,
        }
    });
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });
    $(".filter-button-group").on("click", "li", function() {
        var filterValue = $(this).attr("data-filter");
        $(".grid").isotope({
            filter: filterValue,
        });
        $(".filter-button-group li").removeClass("active");
        $(this).addClass("active");
    });
    gsap.registerPlugin(ScrollTrigger);
    let drawLine = gsap.timeline();
    ScrollTrigger.create({
        trigger: "#trigger-route-1",
        animation: drawLine,
        start: "-10% 0",
        end: "120% 100%",
        scrub: 4,
    });
    drawLine.fromTo("#route-1", {
        drawSVG: "0%"
    }, {
        duration: 6,
        drawSVG: "100%"
    });
    let drawLine2 = gsap.timeline();
    ScrollTrigger.create({
        trigger: "#solution-section",
        animation: drawLine2,
        start: "-10% 0",
        end: "120% 100%",
        scrub: 4,
    });
    drawLine2.fromTo("#route-2", {
        drawSVG: "0%"
    }, {
        duration: 6,
        drawSVG: "100%"
    });
    let drawLine3 = gsap.timeline();
    ScrollTrigger.create({
        trigger: "#trigger-route-3",
        animation: drawLine3,
        start: "-10% 0",
        end: "105% 100%",
        scrub: 4,
    });
    drawLine3.fromTo("#route-3", {
        drawSVG: "0%"
    }, {
        duration: 1,
        drawSVG: "100%"
    });
    const allProcesses = document.querySelectorAll(".home2-process-wrapper .single-process-static");
    if (allProcesses.length > 0) {
        const allButLastProcess = Array.from(allProcesses).slice(0, -1);
        const totalProcesses = allProcesses.length;
        const radius = 150;
        const circumference = 2 * Math.PI * radius;
        const progressBar = document.querySelector(".progress-bar");
        const pct = document.querySelector(".pct");
        progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
        progressBar.style.strokeDashoffset = circumference;
        const pageIndicator = document.getElementById("pageIndicator");
        if (pageIndicator) pageIndicator.textContent = `1/${totalProcesses}`;
        const actl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home2-process-wrapper",
                start: "top 250px",
                scrub: 1,
                ease: "linear",
                markers: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const offset = circumference - progress * circumference;
                    progressBar.style.strokeDashoffset = offset;
                    pct.textContent = `${Math.round(progress*100)}%`;
                    const currentPage = Math.min(Math.ceil(progress * totalProcesses), totalProcesses);
                    if (pageIndicator)
                        pageIndicator.textContent = `${currentPage}/${totalProcesses}`;
                },
            },
        });
        gsap.to(".progress-bar", {
            strokeDashoffset: 0,
            duration: 5,
            ease: "linear",
        });
    }
})(jQuery);