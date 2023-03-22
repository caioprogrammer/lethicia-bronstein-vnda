import { addAsset } from "../components/utilities";

const CartDrawer = {
  root: document.querySelector('#component-cart-drawer-root'),
  buttons: document.querySelectorAll('[data-toggle-cart]'),
  countWrapper: document.querySelector('[data-cart-count]'),
  settings: window.cartDrawerSettings || false,
  instance: false,

  setCartDrawer: function() {
    const { settings, root } = CartDrawer;

    if (!root || !settings) return;
  
    // Define frete grátis
    let disableShippingCalculation = true
    if (settings.freShippingValue > 1) disableShippingCalculation = false

    // Inicia o componente
    const componentCartDrawer = new Vnda.Component.CartDrawer({
      anchor: 'right',
      display: 'list',
      startOpen: false,
      titleCart: 'Carrinho de compras',
      suggestedProductsTag: 'home-produtos-listagem',
      titleSuggested: 'Produtos sugeridos',
      disableShippingCalculation,
      freeShipping: settings.freeShippingValue || 0
    });

    // Renderiza o componente
    componentCartDrawer.render(root);

    // Salva instância em propriedade local
    CartDrawer.instance = componentCartDrawer;

    // dispara evento de carregamento, escutado por CartDrawer.show()
    root.dispatchEvent(new Event('vnda:cart-drawer-loaded'))
  },

  loadComponent: function() {
    const { settings } = CartDrawer;
    addAsset(settings.script, CartDrawer.setCartDrawer);
    addAsset(settings.styles);
  },

  handleCartButton: function(button) {
    // Evita múltiplos cliques caso o carrinho precisa ser instanciado primeiro
    if (button.classList.contains('-loading')) {
      return;
    }

    // Abre o cart drawer
    button.classList.add('-loading');
    CartDrawer.show(() => { button.classList.remove('-loading') })
  },

  show: function (callback) {

    const { root } = CartDrawer;

    // No mobile, fecha o menu primeiro
    if (window.mmenu) window.mmenu.close()

    // Instancia o componente, caso ainda não exista
    if (!CartDrawer.instance) CartDrawer.loadComponent();

    // Observa criação da instância inicial, caso não tenha
    if (CartDrawer.instance === false) {
      root.addEventListener('vnda:cart-drawer-loaded', () => {
        CartDrawer.instance.open()
        if (typeof callback === 'function') callback()
      })
    } else {
      // Já possui cart drawer instanciado, retorna abertura
      CartDrawer.instance.open();
      if (typeof callback === 'function') callback()
    }
  },

  getCartItens: async function () {
    try {
      const response = await fetch('/carrinho/itens');
      const itens = await response.json()
      return itens;

    } catch (error) {
      console.error('Erro ao buscar a quantidade de produtos do carrinho');
      console.error(error);
    }
  },

  updateCartCount: async function (_itemsCount = null) {
    let items = _itemsCount;
    if (_itemsCount == null) items = await CartDrawer.getCartItens();

    this.countWrapper.innerHTML = items;
  },

  init: function () {
    const _this = this;
    const { buttons } = _this;

    // Atualiza o contador de itens do carrinho
    _this.updateCartCount();

    if (buttons.length > 0) buttons.forEach(button => {
      button.addEventListener('click', () => {
        _this.handleCartButton(button)
      })
    })
  },
};

export default CartDrawer;
