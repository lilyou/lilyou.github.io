$(document).ready(function () {
    $(window).scroll(function(){
        console.log($(window).scrollTop());

        if($(window).scrollTop()> 150) {
            $('header').css('font-size', '20px');
        } else {
            $("header").css("font-size","75px");
        }
    });
})
