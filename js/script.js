$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar").addClass("bg-old-lace");
        $(".navbar").addClass("nav-shadow");
        $(".logo-header").removeClass("invisible");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("bg-old-lace");
        $(".navbar").removeClass("nav-shadow");
        $(".logo-header").addClass("invisible");
    }
});