import { addAsset } from "./utilities";

// ===============================================================
// NEWSLETTER POPUP
// ===============================================================
export const NewsletterComponent = {
  root: document.querySelector('#component-popup-newsletter-root'),
  settings: window.popupNewsletterSettings || false,
  loaded: false,

  setPopupNewsletter: function() {

    const { settings, root } = NewsletterComponent

    // Define propriedades do componente
    let maxWidth = settings.maxWidth;
    let imageUrl = settings.imageUrl;
    let title = settings.title;
    let description = settings.description;
    let subdomain = settings.subdomain;
    let successMessage = settings.success;

    // Inicia o componente
    const componentNewsletterPopup = new Vnda.Component.NewsletterPopup({
      maxWidth: maxWidth,
      maxHeight: 500,
      imageUrl: imageUrl,
      imagePosition: 'left',
      popupPosition: 'center',
      title: title,
      description: description,
      textBtnSubmit: 'Enviar',
      classBtnSubmit: 'button-newsletter',
      formKey: `${subdomain}-newsletter`,
      hasNameField: false,
      hasLastNameField: false,
      hasDateOfBirthField: false,
      hasPhoneField: false,
      successMessage: successMessage,
      delay: 500,
      frequency: '7',
      language: 'pt-BR',
    });

    // Renderiza o componente e marca como carregado
    componentNewsletterPopup.render(root);
    NewsletterComponent.loaded = true
  },

  loadPopupNewsletter: function(eventType) {
    if (!NewsletterComponent.loaded) {
      const { settings } = NewsletterComponent;
      addAsset(settings.script, NewsletterComponent.setPopupNewsletter)
      addAsset(settings.styles)
      // remove listener após setar assets
      window.removeEventListener(eventType, NewsletterComponent.loadPopupNewsletter)
    }
  },

  init: function() {
    const { root, settings } = this;

    if (!root || !settings) return;

    const eventType = (window.innerWidth <= 1024) ? 'scroll' : 'mousemove'
    window.addEventListener(eventType, () => {
      NewsletterComponent.loadPopupNewsletter(eventType)
    })
  }
}
// ===============================================================
// FILTROS
// ===============================================================
export const FilterComponent = {
  root: document.querySelector('#component-products-filter-root'),
  mobileButton: document.querySelector('#open-filter-mobile'),
  settings: window.filterSettings || false,
  showPriceSlider: false,
  instance: false,

  setTagTypes: function() {
    const { settings } = FilterComponent;
    const tags = [];

    if (settings.aggregations) {
      const aggregations = settings.aggregations

      // Filtro de categoria
      if (aggregations.types.categoria) tags.push({
        title: 'Categoria',
        type: 'categoria',
        style: 'list',
        options: aggregations.types.categoria
      })
    }

    return tags
  },

  setPropeties: function() {
    const { settings } = FilterComponent;
    const properties = [];

    if (settings.aggregations) {
      const aggregations = settings.aggregations

      // Filtros Atributo 1
      if (aggregations.properties.property1.length > 0) properties.push({
        title: 'Cor',
        property: 'property1',
        style: 'colors',
        colorsProps: {
          showTitle: true,
          showColor: true,
        },
        options: aggregations.properties.property1,
      })

      // Filtros Atributo 2
      if (aggregations.properties.property2.length > 0) properties.push({
        title: 'Tamanho',
        property: 'property2',
        style: 'list',
        options: aggregations.properties.property2,
      });

      // Filtros Atributo 3
      if (aggregations.properties.property3.length > 0) properties.push({
        title: 'Fragrância',
        property: 'property3',
        style: 'list',
        options: aggregations.properties.property3,
      });

    }

    return properties
  },

  setPricesRanges: function() {
    const { settings, showPriceSlider } = FilterComponent
    let priceSettings = {
      price: false,
      priceProps: false
    }

    // Exibe o slider de preço. Caso tenha faixas de preço,
    // preferência fica para as faixas (abaixo)
    if (showPriceSlider) {
      priceSettings.price = [
        settings.aggregations.min_price,
        settings.aggregations.max_price
      ]
    }

    // Exibe as opções de faixa de preço
    if (settings.prices_range.length > 0) {
      priceSettings.priceProps = {
        mode: 'options',
        options: settings.prices_range
      }
      priceSettings.price = [
        settings.aggregations.min_price,
        settings.aggregations.max_price
      ]
    }

    return priceSettings
  },

  setFilters: function() {
    const { root } = FilterComponent;
    const tags = FilterComponent.setTagTypes()
    const properties = FilterComponent.setPropeties()
    const priceSettings = FilterComponent.setPricesRanges()
    const mode = (window.innerWidth <= 1024) ? 'drawer' : 'vertical'

    const componentFilters = new Vnda.Component.ProductsFilter({
      mode,
      hasSort: true,
      filterOnClick: false,
      resetMode: 'all',
      tags,
      properties,
      price: priceSettings.price,
      priceProps: priceSettings.priceProps
    });

    // Renderiza o componente
    componentFilters.render(root);
    FilterComponent.instance = componentFilters
    root.dispatchEvent(new Event('vnda:filter-component-loaded'))
  },

  loadFilters: function() {
    const { settings } = FilterComponent;
    if (!settings) return;
    addAsset(settings.script, FilterComponent.setFilters)
    addAsset(settings.styles)
  },

  show: function() {
    const { root } = FilterComponent;

    if (!FilterComponent.instance) {
      FilterComponent.loadFilters()
      root.addEventListener('vnda:filter-component-loaded', () => {
        FilterComponent.instance.toggle()
      })
    } else {
      FilterComponent.instance.toggle()
    }
  },

  init: function() {

    const { root, mobileButton } = FilterComponent

    if (!root) return

    // mobile: monta ao clicar no botão
    // desktop: monta ao carregar a página
    if (window.innerWidth <= 1024) {
      if (mobileButton) mobileButton.addEventListener('click', () => {
        FilterComponent.show()
      })

    } else {
      FilterComponent.loadFilters()
    }
  }
}

// ===============================================================
// LOGIN
// ===============================================================
export function setLogin() {
  // Seleciona o elemento
  const root = document.querySelector('#component-login-static-root');

  // Define link para o Facebook
  let facebook_connect_url = root.getAttribute('data-facebook');

  // Inicia o componente
  window.componentLogin = {};
  window.componentLogin['static'] = new Vnda.Component.Login({
    mode: 'static',
    formProps: {
      login: {
        buttons: {
          facebook: {
            link: facebook_connect_url,
          },
        },
        hasFacebook: false,
      },
      register: {
        buttons: {
          facebook: {
            link: facebook_connect_url,
          },
        },
        hasFacebook: false,
      },
    },
  });

  // Renderiza o componente
  componentLogin['static'].render(root);
}

// ===============================================================
// PREÇO
// ===============================================================
// Carrega o componente de preço quando um product-block ou product-infos entra em tela
export const PriceComponent = {
  script: window.priceComponent || false,
  loaded: false,

  init: function() {

    if (!PriceComponent.script) return;

    const productContainers = document.querySelectorAll('[data-product-box]');

    if (productContainers.length === 0) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!PriceComponent.loaded) {
          addAsset(PriceComponent.script)
          PriceComponent.loaded = true
        }        
        observer.disconnect()
      }
    }, { threshold: 0.1 });

    productContainers.forEach(product => {
      observer.observe(product)
    })
  }

}
