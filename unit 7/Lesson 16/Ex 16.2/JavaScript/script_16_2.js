$(document).ready(function () {
    $('#toggle').click (function(){
        $(this).css('background-color','gray')
        $('#header').css('background-color','unset');
        $(this).find("i").toggleClass("fa-bars fa-x");
        $('nav').slideToggle(250);
    });
    

    /*
   $('.support').hover(function () {
        $('.sub-menu').slideDown(500);
        
    }, function () {
        // out
        $('.sub-menu').slideUp(500);
    }
   ); */
});