import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy]);

export default function setInstagram() {
    const instagramSwiper = new Swiper('[data-instagram-swiper]', {
        slidesPerView: 2.3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        preloadImages: false,
        speed: 1000,
        lazy: {
            checkInView: true,
            loadPrevNext: true,
            loadOnTransitionStart: true,
            loadPrevNextAmount: 4,
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
        },
        pagination: {
            el: '[data-instagram-swiper] .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
}
