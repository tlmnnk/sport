//= ../../../node_modules/slick-carousel/slick/slick.js

$(document).ready(function(){
    $(".header__hamburger").click(function(){
        $(".nav-menu").toggleClass('nav-menu--open');
        $(this).toggleClass('header__hamburger-span--active');
    });
});
