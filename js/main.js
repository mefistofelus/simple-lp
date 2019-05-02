$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
    
    $(".btn__burger").on("click", function(){
        var target = $(this).data("target");
        $(target).toggleClass('show');
    });
  });