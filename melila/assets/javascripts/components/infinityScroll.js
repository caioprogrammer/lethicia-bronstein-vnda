const InfinityScroll = {
  params: window._pagination,
  priceProds: {
    selector: '[data-update-price]',
    attr: 'update-price',
  },
  productsWrapper: document.querySelectorAll('.section-list-products')[0],
  productWrapper: document.querySelectorAll('.list-products')[0],
  button: document.querySelector('[data-load-more]'),
  stopLoading: function () {
    const button = this.button;

    if (button != null) button.parentElement.removeChild(button);
  },
  setCurrentPage: function (_number) {
    const totalPages = this.params.totalPages;

    if (_number <= totalPages) {
      this.params.currentPage = _number;

      if (this.params.currentPage >= totalPages) this.stopLoading();

      if (_number < totalPages) return (this.params.nextUrl = this.params.pages[_number].url);
    }
  },

  setScript: function (script) {
    const newScript = document.createElement('script');
    newScript.innerText = script.innerText;
    return document.body.appendChild(newScript);
  },

  loadProducts: async function () {
    const nextUrl = this.params.nextUrl;
    const response = await fetch(nextUrl);
    const data = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const script = doc.querySelector('[data-product-variants]');

    // Busca por scripts para compra rápida
    const scripts = doc.querySelectorAll('[data-variants-script]');
    if (scripts.length > 0)
      scripts.forEach((script) => {
        InfinityScroll.setScript(script);
      });

    return doc.querySelectorAll('.product-block');
  },
  updatePrice: function () {
    window.Vnda.Component.Price.update();
  },
  getNextPage: async function () {
    const currentPage = this.params.currentPage;
    const wrapper = this.productsWrapper;
    const productWrapper = this.productWrapper;

    if (!wrapper.classList.contains('-searching')) {
      this.productsWrapper.classList.add('-searching');
      this.button.classList.add('-searching');

      const newProducts = await this.loadProducts();

      newProducts.forEach((product) => {
        productWrapper.appendChild(product);
      });

      this.setCurrentPage(currentPage + 1);

      window.ProductPurchase.init(true);
      lazyLoadInstance.update();
      this.updatePrice();

      wrapper.classList.remove('-searching');
      this.button.classList.remove('-searching');
    }
  },

  init: function () {
    const button = this.button;

    if (typeof this.params != undefined) {
      if (button != null) {
        button.addEventListener(
          'click',
          () => {
            this.getNextPage();
          },
          { passive: true }
        );
      }
    }
  },
};

export default InfinityScroll;
