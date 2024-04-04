document.addEventListener("DOMContentLoaded", function () {

    const slidesItemLength = document.querySelectorAll('.swiper-slide').length
    console.log(slidesItemLength);

    // Swiper
    const swiper = new Swiper('.swiper.chooseUsSlider', {
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
        speed: 1000,
        // Add responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            400: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 7,
            },
            1200: {
                slidesPerView: 8,
            }
        }
    });

})