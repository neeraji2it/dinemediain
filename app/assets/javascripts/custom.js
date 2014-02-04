// JavaScript Document

$(window).scroll(function() {
    $('#carousel').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('#carousel-1').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('#carousel-2').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.footer-top .animation').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.icon-comma').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.commentBox').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.footer-bottom .row').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.footer-bottom .bor-social').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    $('.content-aboutUs').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 800) {
            $(this).addClass("ae-animation-fade animated fade");
        }
    });

    if (navigator.appVersion.indexOf("Mac") != -1) {
        //alert('Mac');
    } else {
        $('.list-webDesign').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 700) {
                $(this).addClass("ae-animation-fade animated fade");
            }
        });
    }
});

$(function() {
    //	Scrolled by user interaction
    $('#carousel').carouFredSel({
        prev: '#carousel-prev',
        next: '#carousel-next',
        pagination: "#pager",
        auto: false
    });

    $('#carousel-1').carouFredSel({
        prev: '#carousel-prev-1',
        next: '#carousel-next-1',
        pagination: "#pager-1",
        auto: false
    });

    $('#carousel-2').carouFredSel({
        prev: '#carousel-prev-2',
        next: '#carousel-next-2',
        pagination: "#pager-2",
        auto: false
    });

    $('#carousel-3').carouFredSel({
        prev: '#carousel-prev-3',
        next: '#carousel-next-3',
        pagination: "#pager-3",
        auto: false
    });
});

$(function() {
    cbpBGSlideshow.init();
});

$(document).ready(function() {
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

$(window).load(function() {
    $('.slider').fractionSlider({
        'fullWidth': true,
        'controls': true,
        //'pager': 				true,
        'responsive': true,
        'dimensions': "1000,400",
        'increase': false,
        //'pauseOnHover': 		true,
    });

});

/*if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)){
 alert('asd');
 }*/


if (navigator.appVersion.indexOf("Win") != -1)
{
    $('body').list - webDesign('visibility', 'hidden');
} else {
    $('body').list - webDesign('', ''); // this will style body for other OS (Linux/Mac)
}
function go2url(url) {
    window.location.href = url;
}	