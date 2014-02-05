// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require slider/jquery.fractionslider.min.js
//= require slider/modernizr.custom.js
//= require slider/jquery.imagesloaded.min.js
//= require slider/cbpBGSlideshow.min.js
//= require carouFred/jquery.carouFredSel-5.6.2.js
//= require carouFred/jquery.touchSwipe.js
//= require bootstrap/bootstrap.min.js
//= require slider/theme.js
//= require navjs/waypoints.min.js
//= require navjs/navbar.js
//= require custom.js
//= require jquery.validationEngine.js
//= require jquery.validationEngine-en.js
//= require slider/jquery.themepunch.plugins.min.js
//= require slider/jquery.themepunch.revolution.min.js
//= require html5.js

$(document).ready(function() {
    setTimeout(function() {
        $('#menu5 > li > a.expanded + ul').slideToggle('medium');
        $('#menu5 > li > a').click(function() {
            $('#menu5 > li > a.expanded').not(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
            $(this).toggleClass('expanded').toggleClass('collapsed').parent().find('> ul').slideToggle('medium');
        });
    }, 250);
    $(".new_contact").validationEngine();
});
