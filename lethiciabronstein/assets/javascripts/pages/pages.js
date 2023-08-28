import { slideToggle, slideDown } from '../components/utilities';
import Swiper, { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Lazy, Autoplay]);

const Page = {
  accordionsFaq: function () {
    var collapseWrapper;
    var contentWrapper;
    var content;

    // No primeiro load verifica se tem o id do collapse na url e abre ela
    console.log(document.location.hash);

    let urlCollapseId = document.location.hash;

    if (urlCollapseId) {
      collapseWrapper = document.querySelector(urlCollapseId);
      contentWrapper = collapseWrapper.querySelector('.content-wrapper');
      content = collapseWrapper.querySelector('.content');

      // Da scroll na página até o collapse
      window.scrollTo({
        top: contentWrapper.offsetTop - 300,
        behavior: 'smooth',
      });

      // Abre o collapse
      slideDown(contentWrapper, content, 300);
    }

    // Lida com o clique nos collapses
    var collapseButtons = document.querySelectorAll('[open-collapse]');

    collapseButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        collapseWrapper = button.closest('[data-collapse]');
        contentWrapper = collapseWrapper.querySelector('.content-wrapper');
        content = collapseWrapper.querySelector('.content');

        collapseWrapper.classList.toggle('-open');

        slideToggle(contentWrapper, content, 300);
      });
    });
  },
  setSpecialBanner: () => {
    console.log("funcionei")
    const specialbanners = document.querySelectorAll('[data-special-banner]');

    // Remove o fullbanner que não é da resolução do dispositivo

    specialbanners.forEach((section) => {
      const carousel = section.querySelector('.swiper');
      const next = section.querySelector('.swiper-button-next');
      const prev = section.querySelector('.swiper-button-prev');

      new Swiper(carousel, {
        slidesPerView: 'auto',
        watchOverflow: true,
        preloadImages: false,
        speed: 1000,
        spaceBetween: 20,
        lazy: {
          checkInView: true,
          loadPrevNext: false,
          loadOnTransitionStart: true,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      });
    });
    console.log("terminei")
  },
  setAppearsSections: () => {
    var value = 1;
    window.addEventListener("scroll", (event) => {
      console.log(window.pageYOffset)
      if(window.pageYOffset%3000 == 0) {
        document.querySelector(`.special-projects__texts div[id='s${value++}']`).classList.add("active");
      }
    });
  },
  init: function () {
    var _this = this;

    _this.accordionsFaq();
    // _this.setAppearsSections();
    _this.setSpecialBanner();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Page.init()
})
