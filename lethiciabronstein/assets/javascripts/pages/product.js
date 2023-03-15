import Zoom from '../components/zoom.min.js';

import Shipping from '../components/shipping';
import setCarousel from '../components/carousel';
import GroupShop from '../components/groupShop.js';

import { updatePriceBlock } from '../components/utilities';

import Swiper, { Manipulation, Navigation, Thumbs, Lazy, Pagination } from 'swiper';
Swiper.use([Manipulation, Navigation, Thumbs, Lazy, Pagination]);

const Product = {
  mainSlider: {
    element: document.querySelector('[data-main-slider]'),
    swiper: false
  },
  thumbsSlider: {
    element: document.querySelector('[data-slider-thumbs]'),
    swiper: false
  },
  sectionProduct: document.querySelector('[data-section-product]'),
  imagesWithoutSkus: [],
  thumbsWithoutSkus: [],
  imagesWithSkus: {},
  thumbsWithSkus: {},

  setImages: function () {
    const mainProdId = window.mainProduct;
    const variants = window.productVariants[mainProdId];
    let skus = []
    if (variants) skus = variants.map(variant => variant.sku)

    // Armazena os slides de imagens com e sem SKU
    Product.setImagesWithSkus(skus);
    Product.setImagesWithoutSkus();

    // Altera as imagens conforme troca de SKU selecionado
    Product.sectionProduct.addEventListener('vnda:sku-change', event => {
      Product.updateImages(event.detail.sku);
    })

    // Exibe as imagens do SKU da primeira variante
    const sku = Product.sectionProduct.querySelector('[data-product-purchase] [name="sku"]').value
    Product.updateImages(sku)
  },

  setImagesWithoutSkus: function() {
    const thumbsElement = Product.thumbsSlider.element;
    const mainElement = Product.mainSlider.element;

    if (thumbsElement)
      Product.thumbsWithoutSkus = thumbsElement.querySelectorAll('[data-without-sku]')
    
    if (mainElement)
      Product.imagesWithoutSkus = mainElement.querySelectorAll('[data-without-sku]')
  },

  setImagesWithSkus: function(skus) {
    const thumbsElement = Product.thumbsSlider.element;
    const mainElement = Product.mainSlider.element;

    // Busca todas as imagens marcadas com SKU
    const images = [
      ...thumbsElement.querySelectorAll('[data-with-sku]'),
      ...mainElement.querySelectorAll('[data-with-sku]')
    ]

    // Separa as imagens dentro por SKU, dentro de Thumbs e Main
    skus.forEach(sku => {

      Product.imagesWithSkus[sku] = [];
      Product.thumbsWithSkus[sku] = [];

      images.forEach(image => {
        const imageSkus = image.getAttribute('data-skus');
        let type = 'main';
        if (image.getAttribute('data-image-thumb') != null) type = 'thumb';

        if (imageSkus.includes(sku)) {
          (type == 'main') ?
            Product.imagesWithSkus[sku].push(image) :
            Product.thumbsWithSkus[sku].push(image)
        }
      })
    })
  },

  updateImages: function (sku) {
    const thumbs = Product.thumbsSlider.swiper;
    const main = Product.mainSlider.swiper;
    const skuThumbs = Product.thumbsWithSkus[sku];
    const skuImages = Product.imagesWithSkus[sku];

    // Adiciona/Remove imagens do swiper thumbs
    // de acordo com sku selecionado
    thumbs.removeAllSlides();
    thumbs.appendSlide(Product.thumbsWithoutSkus);
    if (skuThumbs) thumbs.appendSlide(skuThumbs);

    // Adiciona/Remove imagens do swiper principal
    // de acordo com sku selecionado
    main.removeAllSlides();
    main.appendSlide(Product.imagesWithoutSkus);
    if (skuImages) main.appendSlide(skuImages);

    // Atualiza o swiper após a remoção/adicão de slides
    thumbs.update();
    main.update();
    main.thumbs.update();
    thumbs.lazy.load();
    main.lazy.load();

    // Muda para o primeiro slide
    thumbs.slideTo(0);
    main.slideTo(0);
  },

  setGallery: function () {
    const thumbs = new Swiper(Product.thumbsSlider.element, {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 10,
      speed: 1000,
      autoHeight: true,
      preloadImages: false,
      lazy: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      watchOverflow: true,
      navigation: {
        nextEl: '[data-slider-thumbs] .swiper-button-next',
        prevEl: '[data-slider-thumbs] .swiper-button-prev',
      },
    });

    const main = new Swiper(Product.mainSlider.element, {
      direction: 'horizontal',
      slidesPerView: 1,
      speed: 1000,
      simulateTouch: false,
      watchOverflow: true,
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
      }
    });

    Product.thumbsSlider.swiper = thumbs;
    Product.mainSlider.swiper = main;
  },

  setProductTabs: function () {
    const sections = document.querySelectorAll('.secondary-infos');

    sections.forEach((section) => {
      const tabs = section.querySelectorAll('.tabs .titulo');
      const contentsWrapper = section.querySelector('.contents');
      const contents = section.querySelectorAll('.content');

      tabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
          event.preventDefault();

          const id = tab.getAttribute('data-content');
          const content = contentsWrapper.querySelector(id);

          // remove o active de todas as tabs
          tabs.forEach((checkTab) => checkTab.classList.remove('-active'));
          contents.forEach((checkContent) => checkContent.classList.remove('-active'));

          // adiciona active na tab clicada
          tab.classList.add('-active');
          content.classList.add('-active');
        });
      });
    });
  },

  init: function () {
    const _this = this;

    _this.setGallery();
    _this.setImages();
    _this.setProductTabs();

    Shipping.init();

    setCarousel();
    updatePriceBlock();

    // Inicializa o compre junto apenas após o load
    window.addEventListener('load', () => {
      GroupShop.init();
    });
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Product.init();
})
