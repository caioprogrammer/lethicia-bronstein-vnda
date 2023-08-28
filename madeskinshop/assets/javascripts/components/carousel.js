import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy]);

export default function setCarousel() {
  const productsCarousel = document.querySelectorAll(
    '[data-products-carousel]'
  );

  productsCarousel.forEach((section) => {
    const carousel = section.querySelector('.swiper');
    const pagination = section.querySelector('.swiper-pagination');
    const next = section.querySelector('.swiper-button-next');
    const prev = section.querySelector('.swiper-button-prev');

    if (carousel) {
      new Swiper(carousel, {
        slidesPerView: 2,
        spaceBetween: 6,
        watchOverflow: true,
        speed: 1000,
        //lazy load
        preloadImages: false,
        lazy: {
          checkInView: true,
          loadPrevNext: true,
          loadOnTransitionStart: true,
          loadPrevNextAmount: 1,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      });
    }
  });
}
