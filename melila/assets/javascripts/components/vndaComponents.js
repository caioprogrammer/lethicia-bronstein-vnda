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

  loadPopupNewsletter: function() {
    if (!NewsletterComponent.loaded) {
      const { settings } = NewsletterComponent;
      addAsset(settings.script, NewsletterComponent.setPopupNewsletter)
      addAsset(settings.styles)
    }
  },

  init: function() {
    const { root, settings } = this;

    if (!root || !settings) return;

    const eventType = (window.innerWidth <= 1024) ? 'scroll' : 'mousemove'
    window.addEventListener(eventType, () => {
      NewsletterComponent.loadPopupNewsletter()
    }, { once: true })
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
