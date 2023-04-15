import Swiper, { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy, Autoplay]);

const Header = {
  lastScrollTop: -1,
  scrollTop: window.pageYOffset,
  header: document.querySelector('#header'),

  setScroll: function (scrollTop, lastScrollTop) {
    const _this = this;

    if (scrollTop <= 0) {
      _this.header.classList.add('scroll-up');
      _this.header.classList.remove('scroll-down');
      _this.header.classList.add('on-top');
    } else {
      if (_this.header.classList.contains('on-top')) {
        _this.header.classList.remove('on-top');
      }
      if (scrollTop > lastScrollTop) {
        _this.header.classList.add('scroll-down');
        _this.header.classList.remove('scroll-up');
      } else {
        _this.header.classList.add('scroll-up');
        _this.header.classList.remove('scroll-down');
      }
    }
  },
  setTopbarSwiper: () => {
    const swiper = new Swiper('.top-bar .swiper', {
      // Optional parameters
      slidesPerView: 1,
      preloadImages: false,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      spaceBetween: 0,
      lazy: {
        checkInView: false,
        loadPrevNext: true,
        loadOnTransitionStart: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    
      // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    
    });
  },

  init: function () {
    const _this = this;
    const { lastScrollTop, scrollTop } = _this;

    _this.setScroll(scrollTop, lastScrollTop);
    _this.setTopbarSwiper();

    // cuida quando a página scrolla pra atualizar o header
    window.addEventListener('scroll', function () {
      const newSt = window.pageYOffset;

      _this.setScroll(newSt, lastScrollTop);
      _this.lastScrollTop = newSt;
    });
  },
};

export default Header;
