import Swiper, { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy, Autoplay]);

export default function setCarousel() {
  const productsCarousel = document.querySelectorAll(
    '[data-products-carousel="true"]'
  );

  productsCarousel.forEach((section) => {
    const carousel = section.querySelector('.swiper');
    const pagination = section.querySelector('.swiper-pagination');
    const next = section.querySelector('.swiper-button-next');
    const prev = section.querySelector('.swiper-button-prev');

    if (carousel) {
      new Swiper(carousel, {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 6,
        navigation: false,
        watchOverflow: true,
        speed: 1000,
        autoplay: true,
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
            slidesPerView: 2,
            spaceBetween: 0,
            autoplay: true
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: true
          },
        },
        // pagination: {
        //   el: pagination,
        //   type: 'bullets',
        //   clickable: true,

        // },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      });
    }
  });
}
