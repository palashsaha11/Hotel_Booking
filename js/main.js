$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:2
        }
    }
})
