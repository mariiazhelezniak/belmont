(function ($) {
    "use strict";

    const avg_settlement_val = 24211;
    const avg_cost_acquire = 2875;
    const rate = 0.66;
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });

    $("#form-borrowed, #form-fee").bind('keyup mouseup', function () {
        let amount_borrowed = $("#form-borrowed").val();
        let amount_fee = $("#form-fee").val();
        if (!amount_borrowed) amount_borrowed = 0;
        if (!amount_fee) amount_fee = 0;
        let total_settle_val = (parseFloat(amount_borrowed) / avg_cost_acquire) * avg_settlement_val;
        let take_home = total_settle_val * amount_fee;
        let gain = take_home * rate;
        $("#form-gain").val(gain.toFixed(2));
        console.log("amount_borrowed", amount_borrowed);
        console.log("total_settle_val", total_settle_val);
        console.log("amount_fee", amount_fee);
        console.log("take_home", take_home);
        console.log("gain", gain);
    });

})(jQuery);

