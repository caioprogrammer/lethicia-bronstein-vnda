import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
import InfinityScroll from '../components/infinityScroll';
import setCarousel from '../components/carousel';
import { updatePriceBlock } from '../components/utilities';

Swiper.use([Navigation, Pagination, Lazy]);

const Home = {
  setFullbanner: () => {
    const fullbanners = document.querySelectorAll('[data-fullbanner]');

    let resolution = 'desktop';
    if (window.innerWidth > 767) resolution = 'mobile'

    // Remove o fullbanner que não é da resolução do dispositivo
    fullbanners.forEach(fullbanner => {
      if (fullbanner.classList.contains(`-${resolution}`)) {
        fullbanner.parentElement.removeChild(fullbanner)
      }
    })

    fullbanners.forEach((section) => {
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
        },
        pagination: {
          el: pagination,
          type: 'bullets',
          clickable: true,
        },
      });
    });
  },
  setCategoriesBanners: () => {
    const categoriesBanners = document.querySelectorAll('.section.categories');

    const swiper = new Swiper('.section.categories .swiper', {
      // Optional parameters
      slidesPerView: 2,
      preloadImages: false,
      loop: true,
      autoplay: true,
      lazy: {
        checkInView: true,
        loadPrevNext: false,
        loadOnTransitionStart: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  },
  setElasUsamBanners: () => {
    const elasUsamBanners = document.querySelectorAll('.section.elas-usam');

    const swiper = new Swiper('.section.elas-usam .swiper', {
      // Optional parameters
      slidesPerView: 4,
      preloadImages: false,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      speed: 1000,
      grabCursor: true,
      mousewheelControl: true,
      spaceBetween: 15,
      lazy: {
        checkInView: false,
        loadPrevNext: true,
        loadOnTransitionStart: false,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    });
  },
  setInstagramSwiper: function () {
    const instagramSwiper = new Swiper('[data-instagram-swiper]', {
      slidesPerView: 2.3,
      slidesPerGroup: 2,
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
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      },
      pagination: {
        el: '[data-instagram-swiper] .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  },
  init: function () {
    const _this = this;

    _this.setFullbanner();
    _this.setCategoriesBanners();
    _this.setElasUsamBanners();
    _this.setInstagramSwiper();

    setCarousel();
    updatePriceBlock();
    InfinityScroll.init();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Home.init();
})
