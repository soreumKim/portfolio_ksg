$(function() {
    $('.gnb > ul').on('mouseover focusin', function() {
        $('.bgGnb').stop().fadeIn();
        $('.gnb .depth2').stop().fadeIn();
    });
    $('.gnb').on('mouseleave', function() {
        $('.bgGnb').stop().fadeOut(300);
        $('.gnb .depth2').stop().fadeOut(300);
    });

    $('.contents').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: false,
        prevArrow: false,
        dots: false
      });

    $('button').on("click", function() {
        $('.click').css('display', 'block')
    })

    $('#close').on("click", function() {
        $('.click').css('display', 'none')
    })

    $('#searchBoxOpen').on("click", function() {
        $('body > form').stop().fadeIn();
    })

    $('#searchBoxClose').on("click", function() {
        $('body > form').stop().fadeOut();
    })

    $('#tab').on("click", function() {
        $(".mBgGnb").stop().fadeIn()
        $(".mGnb").addClass('active')
    })

    $('#mGnbClose').on("click", function() {
        $(".mGnb").removeClass('active')
        $(".mBgGnb").stop().fadeOut()
    })

    $('.brandList').slick({
        nextArrow: false,
        prevArrow: false,
    });
});