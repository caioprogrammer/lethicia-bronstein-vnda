import Swiper, { Manipulation, Navigation, Pagination, Lazy, Zoom, Thumbs } from 'swiper';
Swiper.use([Manipulation, Navigation, Pagination, Lazy, Zoom, Thumbs]);

export default function setGallery(Product) {
  const thumbs = new Swiper(Product.thumbsSlider.element, {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 1000,
    watchSlidesProgress: true,
    watchOverflow: true,
    preloadImages: false,
    lazy: {
      checkInView: true,
      loadOnTransitionStart: true,
      loadPrevNext: false
    }
  });

  const main = new Swiper(Product.mainSlider.element, {
    slidesPerView: 1,
    speed: 1000,
    watchOverflow: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: thumbs,
    },
    navigation: {
      nextEl: '[data-main-slider] .swiper-button-next',
      prevEl: '[data-main-slider] .swiper-button-prev',
    },
    pagination: {
      el: '.wrapper-slider .swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    preloadImages: false,
    lazy: {
      checkInView: true,
      loadOnTransitionStart: true
    },
    zoom: {
      maxRatio: 2,
      zoomedSlideClass: '-zoomed'
    }
  });

  Product.thumbsSlider.swiper = thumbs;
  Product.mainSlider.swiper = main;
}