// "productVariants" é inicializado em layout.liquid, e todos os arquivos liquid que montam
// product_block populam este objeto com as variantes dos produtos em tela
import Store from './store';

const ProductPurchase = {
  productVariants,
  products: document.querySelectorAll('[data-product-purchase]'),

  // Verifica as combinações possíveis entre os atributos, com base no atributo que foi clicado
  checkCombinations: function (currentProduct, selectedAttribute) {
    const productId = currentProduct.getAttribute('data-product-id');
    const selectedAttr = Number(selectedAttribute.getAttribute('data-attribute-index'));
    const variants = ProductPurchase.productVariants[`${productId}`];

    // Busca todos os atributos do produto
    const attributes = {
      attr1: [...currentProduct.querySelectorAll('[data-attribute-index="1"]')],
      attr2: [...currentProduct.querySelectorAll('[data-attribute-index="2"]')],
      attr3: [...currentProduct.querySelectorAll('[data-attribute-index="3"]')],
    };

    // Busca os atuais atributos selecionados
    const selectedAttributes = {
      attr1: currentProduct.querySelector('[data-attribute="1"] input:checked + label'),
      attr2: currentProduct.querySelector('[data-attribute="2"] input:checked + label'),
      attr3: currentProduct.querySelector('[data-attribute="3"] input:checked + label'),
    };

    // Altera o selected para o atributo que foi clicado
    selectedAttributes[`attr${selectedAttr}`] = selectedAttribute;

    // Atualiza as classes dos atributos disponíveis/indisponíveis
    // Ao clicar em uma opção de attr1, atualiza os attrs 2 e 3
    switch (selectedAttr) {
      case 1:
        ProductPurchase.markAttributes([...attributes.attr2], 2, variants, selectedAttributes, currentProduct);
        ProductPurchase.markAttributes([...attributes.attr3], 3, variants, selectedAttributes, currentProduct);
        break;

      case 2:
        ProductPurchase.markAttributes([...attributes.attr3], 3, variants, selectedAttributes, currentProduct);
        break;

      case 3:
        break;
    }
  },

  // Marca os atributos como disponiveis/indisponiveis com base nas combinações do checkCombinations
  markAttributes: function (attributes, index, variants, selectedAttributes, currentProduct) {
    if (attributes != null && attributes.length > 0) {
      // Remove os atributos já selecionados que não devem ser analizados,
      // com base no index do atributo que está sendo analizado. Usado para filtrar
      // as variantes e diminuir o número de possíveis combinações que definem como disponível/indisponível
      switch (index) {
        case 1:
          selectedAttributes.attr2 = null;
          selectedAttributes.attr3 = null;
          break;

        case 2:
          selectedAttributes.attr3 = null;
          break;

        case 3:
          break;
      }

      attributes.forEach((attr) => {
        const value = attr.getAttribute('data-attribute-value');
        const property = `property${index}`;
        let available = false;

        // Adiciona o atributo iterado nos atributos usados para buscar variantes válidas
        const attrsToCheck = {
          ...selectedAttributes,
          [`attr${index}`]: attr,
        };

        // Filtra as variantes para somente as que possuem a combinação de atributos válida
        const validVariants = variants.filter((variant) => {
          const properties = variant.properties;
          let validAttr1 = false;
          let validAttr2 = false;
          let validAttr3 = false;

          if (attrsToCheck.attr1 == null) validAttr1 = true;
          if (attrsToCheck.attr2 == null) validAttr2 = true;
          if (attrsToCheck.attr3 == null) validAttr3 = true;

          if (properties.property1 == null) validAttr1 = true;
          if (properties.property2 == null) validAttr2 = true;
          if (properties.property3 == null) validAttr3 = true;

          if (validAttr1 == false) {
            const valueToCheck = attrsToCheck.attr1.getAttribute('data-attribute-value');
            if (properties.property1.value == valueToCheck) validAttr1 = true;
          }

          if (validAttr2 == false) {
            const valueToCheck = attrsToCheck.attr2.getAttribute('data-attribute-value');
            if (properties.property2.value == valueToCheck) validAttr2 = true;
          }

          if (validAttr3 == false) {
            const valueToCheck = attrsToCheck.attr3.getAttribute('data-attribute-value');
            if (properties.property3.value == valueToCheck) validAttr3 = true;
          }

          if (validAttr1 && validAttr2 && validAttr3) return variant;
        });

        attr.classList.remove('-available');
        attr.classList.remove('-unavailable');
        attr.classList.remove('-disabled');

        if (validVariants.length > 0) {
          // Encontrou variantes, marca como disponível/indisponível com base nas variantes
          validVariants.forEach((variant) => {
            if (variant.properties[property]) {
              if (variant.properties[property].value == value) {
                variant.available == false ? (available = false) : (available = true);
              }
            } else {
              available = false;
            }
          });

          available ? attr.classList.add('-available') : attr.classList.add('-unavailable');
        } else if (validVariants.length === 0) {
          // Não encontrou nenhuma variante, então desabilita a opção.
          // Se esta opção estava selecionada, clica na primeira opção disponível entre os demais
          attr.classList.add('-disabled');
          const value = attr.getAttribute('data-attribute-value');
          const input = currentProduct.querySelector(`[data-attribute="${index}"] input[value="${value}"]`);
          if (input.checked) {
            input.checked = false;
            setTimeout(() => {
              const firstAvailable = currentProduct.querySelector(
                `label[data-attribute-index="${index}"]:not(.-disabled)`
              );
              if (firstAvailable) firstAvailable.click();
            }, 50);
          }
        }
      });
    }
  },

  // Procura por SKU válido dentre os atributos escolhidos
  checkSelection: function (currentProduct) {
    const productId = currentProduct.getAttribute('data-product-id');
    const variants = ProductPurchase.productVariants[`${productId}`];

    const selectedAttrs = {
      attr1: currentProduct.querySelector('[data-attribute="1"] input:checked'),
      attr2: currentProduct.querySelector('[data-attribute="2"] input:checked'),
      attr3: currentProduct.querySelector('[data-attribute="3"] input:checked'),
    };

    let available = false;

    for (let index = 0; index < variants.length; index++) {
      const variant = variants[index];
      let attr1 = false;
      let attr2 = false;
      let attr3 = false;
      let attr1Value = null;
      let attr2Value = null;
      let attr3Value = null;

      // Verifica se algum dos atributos é inexistente no cadastro
      if (variant.properties.property1 == null) attr1 = true;
      if (variant.properties.property2 == null) attr2 = true;
      if (variant.properties.property3 == null) attr3 = true;

      //Salva o valor de cada um dos atributos/propriedes da própria variante em questão
      if (variant.properties.property1) attr1Value = variant.properties.property1.value;
      if (variant.properties.property2) attr2Value = variant.properties.property2.value;
      if (variant.properties.property3) attr3Value = variant.properties.property3.value;

      // Verifica se a variante possui os atributos selecionados
      if (!attr1 && attr1Value != null && selectedAttrs.attr1 != null) {
        if (attr1Value == selectedAttrs.attr1.value) attr1 = true;
      }

      if (!attr2 && attr2Value != null && selectedAttrs.attr2 != null) {
        if (attr2Value == selectedAttrs.attr2.value) attr2 = true;
      }

      if (!attr3 && attr3Value != null && selectedAttrs.attr3 != null) {
        if (attr3Value == selectedAttrs.attr3.value) attr3 = true;
      }

      // Se achou variante compatível com os atributos selecionados, atualiza
      if (attr1 && attr2 && attr3) {
        available = true;
        const event = new CustomEvent('vnda:sku-change', { detail: { sku: variant.sku }})
        const productContainer = currentProduct.closest('[data-product-box]');

        currentProduct.querySelector('[name="sku"]').value = variant.sku;
        currentProduct.dispatchEvent(event);
        if (productContainer) productContainer.dispatchEvent(event);

        // Reinicializa o input de quantidade para 1
        currentProduct.querySelector('[name="quantity"]').value = 1;

        // Remove a mensagem de quantidade máxima quando altera a variante
        if (currentProduct.querySelector('.msg-response .msg-error').classList.contains('-visible')) {
          currentProduct.querySelector('.msg-response .msg-error').innerHTML = '';
          currentProduct.querySelector('.msg-response .msg-error').classList.remove('-visible');
        }

        // Configura a quantidade máxima do input conforme a variante selecionada
        currentProduct.querySelector('[name="quantity"]').setAttribute('data-available-quantity', variant.quantity);
        // Configura produto disponível/indisponível
        if (variant.available) {
          ProductPurchase.setAvailable(currentProduct);
        } else {
          ProductPurchase.setUnavailable(currentProduct, true, variant.sku);
        }

        // Atualiza as últimas quantidades disponíveis
        ProductPurchase.setLastUnits(currentProduct, variant);

        // Atualiza o preço do componente
        ProductPurchase.updatePrice(currentProduct, variant);
        break;
      }
    }

    // Quando não encontra variante
    if (!available) ProductPurchase.setUnavailable(currentProduct, false);
  },

  // Define produto como disponível pra compra
  setAvailable: function (currentProduct) {
    const addButton = currentProduct.querySelector('[data-action="add-cart"]');
    const currentProductWrapper = currentProduct.closest('[data-product-box]');
    let formNotify = null;

    if (currentProductWrapper) {
      formNotify = currentProductWrapper.querySelector('[data-form-notify]');
    }

    if (addButton) {
      // addButton.setAttribute('data-available', true);
      addButton.classList.add('-available');
      addButton.classList.remove('-unavailable');
      addButton.innerHTML = addButton.getAttribute('data-text-available');
    }

    if (formNotify) formNotify.classList.remove('-active');
  },

  // Define produto como indisponível pra compra
  setUnavailable: function (currentProduct, showNotify, sku) {
    const addButton = currentProduct.querySelector('[data-action="add-cart"]');
    const currentProductWrapper = currentProduct.closest('[data-product-box]');
    const showFormNotify = showNotify || false;
    let formNotify = null;

    if (currentProductWrapper) {
      formNotify = currentProductWrapper.querySelector('[data-form-notify]');
    }

    if (addButton) {
      // addButton.setAttribute('data-available', false);
      addButton.classList.remove('-available');
      addButton.classList.add('-unavailable');
      addButton.innerHTML = addButton.getAttribute('data-text-unavailable');
    }

    if (formNotify) {
      if (showFormNotify && sku != undefined && sku != null) {
        formNotify.classList.add('-active');
        formNotify.querySelector('[name="sku"]').value = sku;
      } else {
        formNotify.classList.remove('-active');
      }
    }
  },

  // Atualiza o componente de preço do produto
  updatePrice: function (currentProduct, variant) {
    const productMainContainer = currentProduct.closest('[data-product-box]');

    if (productMainContainer == null) return;

    const priceEl = productMainContainer.querySelector('[data-init-price]');

    if (priceEl == null) return;

    const groupShop = productMainContainer.getAttribute('data-prod-group-shop');

    priceEl.setAttribute('data-sku', variant.sku);
    priceEl.setAttribute('data-price', variant.price);
    priceEl.dispatchEvent(new Event('change'));

    const discount = priceEl.dataset.discountPercent;

    // Coloca a porcentagem de desconto no produto
    if (discount != '0') {
      priceEl.style.setProperty('--discount', `'-${discount}%'`);
    }

    // atualiza preço final do compre junto se existir
    if (groupShop != null) {
      productMainContainer.setAttribute('data-price', variant.price);
      productMainContainer.setAttribute('data-sale-price', variant.sale_price);
      productMainContainer.setAttribute('data-available', variant.available);
      productMainContainer.dispatchEvent(new Event('vnda:group-shop-price-update'));
    }
  },

  // Marca o primeiro atributo como disponível/indisponível, e seleciona os atributos
  // da primeira variante disponível
  markFirstVariant: function (currentProduct) {
    const productId = currentProduct.getAttribute('data-product-id');
    const variants = [...ProductPurchase.productVariants[`${productId}`]];

    if (variants.length === 1) {
      // possui somente uma variante e não possui atributos,
      // define como disponível/indisponível com base na variante em si
      if (currentProduct.querySelectorAll('.prod-option').length === 0) {

        // Atualiza as últimas quantidades disponíveis
        ProductPurchase.setLastUnits(currentProduct, variants[0]);
        
        return variants[0].available
          ? ProductPurchase.setAvailable(currentProduct)
          : ProductPurchase.setUnavailable(currentProduct, true, variants[0].sku);
      }
    } else if (variants.length === 0) {
      // Produto não possui variantes, define como indisponível
      return ProductPurchase.setUnavailable(currentProduct);
    }

    if (variants.length > 0) {
      const allAttr1 = [...currentProduct.querySelectorAll('[data-attribute="1"] [data-attribute-value]')];
      const allAttr2 = [...currentProduct.querySelectorAll('[data-attribute="2"] [data-attribute-value]')];
      const allAttr3 = [...currentProduct.querySelectorAll('[data-attribute="3"] [data-attribute-value]')];

      // Prepara para caso o atributo 1 não esteja em uso, scout por outros
      let attrToCheck = { index: false, options: [] };

      if (allAttr3.length > 0) attrToCheck = { index: 'property3', options: allAttr3 };
      if (allAttr2.length > 0) attrToCheck = { index: 'property2', options: allAttr2 };
      if (allAttr1.length > 0) attrToCheck = { index: 'property1', options: allAttr1 };

      // Baseado na ordem dos atributos, busca por variantes válidas
      if (attrToCheck.options.length > 0) {
        for (let index = 0; index < attrToCheck.options.length; index++) {
          const attribute = attrToCheck.options[index];
          const value = attribute.getAttribute('data-attribute-value');
          const availableVariants = ProductPurchase.productVariants[`${productId}`].filter((variant) => {
            if (variant.properties[attrToCheck.index].value == value && variant.available) return variant;
          });

          if (availableVariants.length > 0) {
            attribute.classList.add('-available');
          } else {
            // O produto não tem variantes disponíveis
            attribute.classList.add('-unavailable');
          }
        }

        // Marca os atributos da primeira variante disponível,
        //com base na ordem que os atributos se apresentam na tela
        let hasFirstAvailable = false;

        for (const attribute of attrToCheck.options) {
          if (attribute.classList.contains('-available')) {
            attribute.click();
            hasFirstAvailable = true;

            if (attrToCheck.index == 'property1') {
              for (const attr2 of allAttr2) {
                if (attr2.classList.contains('-available')) {
                  attr2.click();
                  break;
                }
              }

              for (const attr3 of allAttr3) {
                if (attr3.classList.contains('-available')) {
                  attr3.click();
                  break;
                }
              }
            }

            if (attrToCheck.index == 'property2') {
              for (const attr3 of allAttr3) {
                if (attr3.classList.contains('-available')) {
                  attr3.click();
                  break;
                }
              }
            }

            break;
          }
        }

        // Quando não há nenhuma first variant com estoque, marca a primeira
        //opção indisponível, para exibir como indisponível
        if (!hasFirstAvailable) {
          attrToCheck.options[0].click();
          if (attrToCheck.index == 'property1') {
            if (allAttr2.length > 0) allAttr2[0].click();
            if (allAttr3.length > 0) allAttr3[0].click();
          }

          if (attrToCheck.index == 'property2') {
            if (allAttr3.length > 0) allAttr3[0].click();
          }
        }
      }
    }
  },

  // Configura a mesagem de ultimas unidades disponíveis
  setLastUnits: function (currentProduct, variant) {
    const lastUnitsWrapper = currentProduct.querySelector('.last-units');
    const availableQuantity = variant.quantity;

    if (availableQuantity <= 5) {
      if (!availableQuantity) {
        lastUnitsWrapper.innerHTML = '';
        lastUnitsWrapper.classList.remove('-visible');
      } else if (availableQuantity > 1) {
        lastUnitsWrapper.innerHTML = `Últimas ${availableQuantity} unidades disponíveis`;
        lastUnitsWrapper.classList.add('-visible');
      } else {
        lastUnitsWrapper.innerHTML = 'Última unidade disponível';
        lastUnitsWrapper.classList.add('-visible');
      }
    } else {
      lastUnitsWrapper.innerHTML = '';
      lastUnitsWrapper.classList.remove('-visible');
    }
  },

  // Configura o seletor de quantidade e suas mensagens
  setQuantitySelector: function (currentProduct) {
    const error = currentProduct.querySelector('.msg-response .msg-error');
    const buttonPlus = currentProduct.querySelector('[data-qtd-plus]');
    const buttonMinus = currentProduct.querySelector('[data-qtd-minus]');
    const input = currentProduct.querySelector('[name="quantity"]');

    if (buttonPlus != null && buttonMinus != null) {
      buttonPlus.addEventListener('click', () => {
        const current = Number(input.value) + 1;
        const availableQuantity = Number(input.dataset.availableQuantity);

        if (!availableQuantity) {
          error.innerHTML = 'Produto em falta no estoque';
          error.classList.add('-visible');
        } else if (current > availableQuantity) {
          // Se o produto atingiu a quantidade máxima em estoque mostra uma mensagem
          error.innerHTML = 'Quantidade máxima em estoque.';
          error.classList.add('-visible');
        } else {
          input.value = current;
          input.setAttribute('value', current);
        }
      });

      buttonMinus.addEventListener('click', () => {
        const current = Number(input.value) - 1;

        if (current > 0) {
          input.value = current;
          input.setAttribute('value', current);

          // Se está mostrando a mensagem de quantidade máxima, remove ela
          if (error.classList.contains('-visible')) {
            error.classList.remove('-visible');
          }
        }
      });
    }
  },

  // Envia o formulário de compra
  submitForm: function (currentProduct) {
    currentProduct.addEventListener('submit', (event) => {
      event.preventDefault();

      const groupShop = currentProduct.closest('[data-product-box]').getAttribute('data-prod-group-shop');

      if (groupShop == null) {
        // Adição normal de produto - Compre Junto é controlado em outro componente
        const form = currentProduct;
        const parent = form.closest('[data-product-box]');

        const respValidated = Store.validateFormProduct(form);
        const boxResponse = parent.querySelector('.msg-response');

        if (respValidated.validated) {
          Store.addItem(form, parent);
        } else {
          //console.info('não foi');
          Store.setRespValidateProduct(respValidated, form, boxResponse);
        }
      }
    });
  },

  // Lida com popup de compra rápida, retirar ou comentar caso não for utilizado
  popupPurchase: {
    popupEl: document.querySelector('[data-popup-purchase]'),
    currentOpenProduct: false,

    open: function (productBox) {
      // Salva o produto atual para referência futura
      ProductPurchase.popupPurchase.currentOpenProduct = productBox;

      // Clona elementos do produto e referencia o form de compra dele
      const clonedImages = productBox.querySelector('.images').cloneNode(true);
      const clonedName = productBox.querySelector('.name').cloneNode(true);
      const clonedPrice = productBox.querySelector('.price').cloneNode();
      const purchaseForm = productBox.querySelector('[data-product-purchase]');

      // Joga os elementos do produto dentro do popup
      const contentBox = this.popupEl.querySelector('.product');
      const leftBox = document.createElement('div');
      const rightBox = document.createElement('div');

      const moreLink = document.createElement('a')
      moreLink.classList.add('more-link')
      moreLink.innerText = 'Mais detalhes'
      moreLink.setAttribute('href', productBox.querySelector('a').getAttribute('href'))

      let priceWrapper = document.createElement('div');
      priceWrapper.classList.add('price-wrapper');
      priceWrapper.appendChild(clonedPrice);

      leftBox.appendChild(clonedImages);
      rightBox.appendChild(clonedName);
      rightBox.appendChild(priceWrapper);
      rightBox.appendChild(purchaseForm);
      rightBox.appendChild(moreLink)

      contentBox.appendChild(leftBox);
      contentBox.appendChild(rightBox);

      // Atualiza o componente de preço dentro do popup e exibe
      clonedPrice.setAttribute('data-was-processed', false);
      window.Vnda.Component.Price.update();

      this.popupEl.classList.add('-active');
    },

    close: function () {
      // CHAMAR UMA ÚNICA VEZ
      // Instancia funcionamento ao clicar no botão de fechar o popup
      const popup = this.popupEl;
      const closeButtons = popup.querySelectorAll('[data-close-popup-purchase]');

      closeButtons.forEach((button) => {
        if (button.getAttribute('data-processed') == 'false') {
          button.addEventListener('click', () => {
            popup.classList.remove('-active');

            setTimeout(() => {
              // Retorna o formulário para o produto correspondente
              const purchaseForm = popup.querySelector('[data-product-purchase]');
              ProductPurchase.popupPurchase.currentOpenProduct.appendChild(purchaseForm);
              ProductPurchase.popupPurchase.currentOpenProduct = false;

              // Limpa os dados do produto do popup
              const popupProductEl = popup.querySelector('.product');
              while (popupProductEl.firstChild) {
                popupProductEl.removeChild(popupProductEl.firstChild);
              }
            }, 300);
          });
          button.setAttribute('data-processed', true);
        }
      });
    },
  },

  init: function (update) {
    const triggerUpdate = update || false;
    if (triggerUpdate) {
      this.products = document.querySelectorAll('[data-product-purchase]');
      this.productVariants = productVariants;
    }

    const { products, checkCombinations, checkSelection, markFirstVariant, submitForm, setQuantitySelector } = this;

    // Instancia funcionamento de fechar o popup de compra rápida, retirar ou comentar caso não for utilizado
    ProductPurchase.popupPurchase.close();

    if (products.length > 0)
      products.forEach((product) => {
        if (product.getAttribute('data-processed') == 'false') {
          const attrOptions = product.querySelectorAll('[data-attribute-value]');
          const attrInputs = product.querySelectorAll('input');

          // Remarca demais atributos ao clicar em uma opção
          attrOptions.forEach((attr) => {
            attr.addEventListener('click', () => {
              checkCombinations(product, attr);
            });
          });

          // Verifica variante para combinação de atributos selecionados
          attrInputs.forEach((input) => {
            input.addEventListener('change', () => {
              checkSelection(product);
            });
          });

          setQuantitySelector(product);
          markFirstVariant(product);
          submitForm(product);
          product.setAttribute('data-processed', true);

          // Abre o popup de compra rápida, retirar ou comentar caso não for utilizado
          const openPopupPurchaseButton = product.parentElement.querySelector('[data-open-popup-purchase]');
          if (openPopupPurchaseButton != null) {
            openPopupPurchaseButton.addEventListener('click', () => {
              ProductPurchase.popupPurchase.open(product.parentElement);
            });
          }
        }
      });

      window.ProductPurchase = ProductPurchase
  },
};

export default ProductPurchase;
