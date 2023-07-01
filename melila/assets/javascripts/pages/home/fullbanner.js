import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy]);

export default function setFullbanner() {
    const fullbanners = document.querySelectorAll('[data-fullbanner]');

    fullbanners.forEach(section => {
    const carousel = section.querySelector('.swiper');
    const pagination = section.querySelector('.swiper-pagination');
    const next = section.querySelector('.swiper-button-next');
    const prev = section.querySelector('.swiper-button-prev');

    new Swiper(carousel, {
        slidesPerView: 1,
        watchOverflow: true,
        preloadImages: false,
        speed: 1000,
        lazy: {
            checkInView: true,
            loadPrevNext: false,
            loadOnTransitionStart: true,
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
            disabledClass: '-disabled'
        },
        pagination: {
            el: pagination,
            type: 'bullets',
            clickable: true,
        },
    });
    });
}
