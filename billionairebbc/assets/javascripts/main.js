import CartDrawer from './common/cartDrawer';
import Footer from './common/footer';
import Header from './common/header';
import MenuMobile from './common/menuMobile';
import Popup from './components/popup';
import Webforms from './common/webforms';
import ProductPurchase from './components/productPurchase';
import { NewsletterComponent, PriceComponent } from './components/vndaComponents.js';
import { toggleSearch } from './components/utilities';

let threshold = 700;
if (window.innerWidth < 768) threshold = 400

window.lazyLoadOptions = {
  elements_selector: ".lazy",
  threshold,
  callback_loaded: (el) => {
    const element = el.closest('.MagicZoom');
    if (element && element.id) {
      MagicZoom && MagicZoom.refresh(element.id);
    }
  },
};

window.addEventListener("LazyLoad::Initialized", event => {
  window.lazyLoadInstance = event.detail.instance
}, { passive: true });

// ==========================================
// Inicialização
// ==========================================
console.log(
  '%cVnda - Tecnologia em Ecommerce',
  'color: #f88d5b; font-size: 15px; font-family: "Verdana", sans-serif; font-weight: bold;'
);

window.addEventListener('DOMContentLoaded', () => {
  CartDrawer.init()
  Header.init()
  Footer.init()
  Popup.init()
  PriceComponent.init()
  ProductPurchase.init()
  Webforms.init()
  toggleSearch()
  NewsletterComponent.init()
  AOS.init({
    once: true
  });
  
  if (window.innerWidth < 992) MenuMobile.init()
});
