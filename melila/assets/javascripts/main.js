import CartDrawer from './common/cartDrawer';
import Footer from './common/footer';
import Header from './common/header';
import MenuMobile from './common/menuMobile';
import Popup from './components/popup';
import Webforms from './common/webforms';
import ProductPurchase from './components/productPurchase';
import { NewsletterComponent, PriceComponent } from './components/vndaComponents.js';

let threshold = 700;
if (window.innerWidth < 768) threshold = 400

window.lazyLoadOptions = {
  elements_selector: ".lazy",
  threshold
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
  CartDrawer.init();
  Header.init();
  Footer.init();
  Popup.init();
  ProductPurchase.init();
  PriceComponent.init();
  Webforms.init();
  NewsletterComponent.init();
  if (window.innerWidth < 992) MenuMobile.init();
});
