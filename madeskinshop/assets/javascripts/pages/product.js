import Shipping from '../components/shipping';
import GroupShop from '../components/groupShop.js';

import setGallery from './product/setGallery';
import setProductTabs from './product/setProductTabs';
//addImports

import { updatePriceBlock } from '../components/utilities';

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
        const imageSkus = image.getAttribute('data-skus').split(',');

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

  setZoom: function() {

    const gallery = Product.mainSlider.swiper;

    // Adiciona acompanhamento do mouse ao zoom do Swiper, no Desktop
    if (window.innerWidth > 991) {

      // Zoom sem clique - descomentar caso precise de zoom no hover, e não no clique
      // Product.mainSlider.element.classList.add('-hover-zoom');
      // Product.mainSlider.element.addEventListener('mouseenter', () => { gallery.zoom.in() })
      // Product.mainSlider.element.addEventListener('mouseleave', () => { gallery.zoom.out() })

      // Ao trocar de slide, remove o zoom de qualquer slide que possa ter ele
      gallery.on('slideChangeTransitionEnd', () => {
        gallery.zoom.out();
        gallery.slides.forEach(slide => { slide.classList.remove('-zoomed') })
      })

      // Ação que acompanha o movimento do mouse por cima do slide
      gallery.slides.forEach(slide => {
        slide.addEventListener('mousemove', event => {
          if (slide.classList.contains('-zoomed')) {
            const swiperEl = document.querySelector('[data-main-slider]');
            const zoomContainer = slide.querySelector('.swiper-zoom-container');
            const zoomedImage = slide.querySelector('.swiper-zoom-target');

            // Utiliza o container pra calcular o percentual de moviento do mouse na superfície do swiper
            // z=0 y=0 é o centro, o máximo que cada eixo movimenta é até 50%
            const middleX = zoomContainer.clientWidth / 2;
            const middleY = zoomContainer.clientHeight / 2;
            const mouseX = (event.clientX - swiperEl.getBoundingClientRect().left) - middleX;
            const mouseY = (event.clientY - swiperEl.getBoundingClientRect().top) - middleY;
            const percentX = (mouseX * 100 / middleX) / 2;
            const percentY = (mouseY * 100 / middleY) / 2;

            // Com o percentual, calcula qual é o valor dele em pixels, com base na imagem ampliada.
            // Este valor é usado, inicialmente, para mover a imagem conforme o mouse move
            const imagePixelsX = zoomedImage.getBoundingClientRect().width * percentX / 100;
            const imagePixelsY = zoomedImage.getBoundingClientRect().height * percentY / 100;
            let moveX = imagePixelsX;
            let moveY = imagePixelsY;

            // Limitador, não deixa a imagem passar da área máxima dela fora do container
            const limitX = (zoomedImage.getBoundingClientRect().width - zoomContainer.clientWidth) / 2;
            const limitY = (zoomedImage.getBoundingClientRect().height - zoomContainer.clientHeight) / 2;

            if (moveX > limitX) moveX = limitX;
            if (moveX < limitX * -1) moveX = limitX * -1;

            if (moveY > limitY) moveY = limitY;
            if (moveY < limitY * -1) moveY = limitY * -1;

            // Modifica a direção do trajeto, com base na posição do mouse
            //direção esquerda/topo == negativo || direção direita/baixo = positivo
            if (mouseX < middleX) moveX = moveX * -1;
            if (mouseY < middleY) moveY = moveY * -1;

            zoomContainer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`
          }
        })
      })
    }
  },

  init: function () {
    const _this = this;

    setGallery(Product)
setProductTabs()
//calls

    _this.setImages();
    _this.setZoom();
    Shipping.init();
    updatePriceBlock();
    GroupShop.init();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Product.init();
})
