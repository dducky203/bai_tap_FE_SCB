$(document).ready(function() {
    $(".a-title").click(function() {
        $(this).parent().toggleClass("active");
        $(this).find("i").toggleClass("fa-plus fa-minus");
        $(this).next(".a-content").slideToggle();
        $(".a-title").not(this).find("i").removeClass("fa-minus").addClass("fa-plus");
        $(".a-title").not(this).next(".a-content").slideUp();
    });
});