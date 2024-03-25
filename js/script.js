$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("invisible");
        $(".scroll-header").removeClass("invisible");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".scroll-header").addClass("invisible");
        $(".header").removeClass("invisible");
    }
});