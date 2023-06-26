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
  setSliderHome: function () {
    var sliderSectionHome = new Swiper('#swiper-section', {
      loop: false,
      slidesPerView: 1.7,
      spaceBetween: 15,
      watchOverflow: true,
      pagination: {
        el: '.swiper-pagination-section',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
      breakpoints: {
        640: {
          slidesPerView: 1.7,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.7,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3.3,
          spaceBetween: 40,
        },
      },
    });
  },
  swipersHome: function () {
    try {
      //Quando a página carrega seleciona o primeiro swiper da lista
      loadProductSwiper(1);

      //Adiciona evento Click nos links
      $('.swiper-master .links a').on('click', function (e) {
        e.preventDefault();
        $('.swiper-master .links a').removeClass('title');
        $(this).addClass('title');
        var tag = $(this).attr('href');
        $('.swiper-home-produtos').removeClass('active');
        $('[data-link="' + tag + '"]').addClass('active');
        var val = $(this).attr('value');

        //Instancia o swiper de acordo com o index selecionado
        loadProductSwiper(val);
      });

      //Instancia dinamicamente o swiper selecionado
      function loadProductSwiper(index) {
        var swiperHomeProdutos = new Swiper(`.swiper-home-produtos-${index}`, {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            navigation: {
              nextEl: '.home-produtos .swiper-button-next',
              prevEl: '.home-produtos .swiper-button-prev',
            },
            breakpoints: {
              '@0.75': {
                slidesPerView: 1,
              },
              '@1.00': {
                slidesPerView: 2,
              },
              '@1.20': {
                slidesPerView: 4,
              },
              '@1.50': {
                slidesPerView: 4,
              },
            },
          }
        );
      }
    } catch (error) {
      /*LOG DEV  */
      //console.log(`${error}`);
      /*LOG PROD */
      //console.log(`ação inesperada em store home:swipersHome`);
    }
  },
  setInstagramSwiper: function () {
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
  },
  init: function () {
    const _this = this;

    _this.setFullbanner();
    _this.setSliderHome();
    _this.setInstagramSwiper();
    _this.swipersHome()

    setCarousel();
    updatePriceBlock();
    InfinityScroll.init();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Home.init();
})
