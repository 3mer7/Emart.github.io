// side bar swiper 

var swiper = new Swiper(".slide-swipper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets:true,
        clickable:true
    },
    autoplay:{
        delay:2500,
    },
    loop:true
    })

    // side bar swiper 

var swiper = new Swiper(".slide_sec", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView:5,
    spaceBetween:30,

    autoplay:{
        delay: 2500
    },

    loop: true,

    breakpoints:{
        1600:{
            slidesPerView:5
        },
        1200:{
            slidesPerView:4,
            spaceBetween:30
        },
        700:{
            slidesPerView:3,
            spaceBetween:15
        },
        0:{
            slidesPerView:2,
            spaceBetween:10
        }
    }
    });

var swiper = new Swiper(".product_swip", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView:5,
    spaceBetween:30,
    breakpoints:{
        1600:{
            slidesPerView:5
        },
        1200:{
            slidesPerView:4,
            spaceBetween:30
        },
        700:{
            slidesPerView:3,
            spaceBetween:15
        },
        0:{
            slidesPerView:2,
            spaceBetween:10
        }
    }
    });

