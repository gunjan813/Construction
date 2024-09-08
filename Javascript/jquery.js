$(document).ready(function(){
    $('.my-slider').owlCarousel({
        loop:true,
        center:true,
        // margin:60,
        nav:true,
        
        items:1,
        autoplay:true,
        nav:false,
        animateOut:'fadeOut'
    });
    $('.count-it').counterUp({
        delay:80,
        time:3000
    });
});