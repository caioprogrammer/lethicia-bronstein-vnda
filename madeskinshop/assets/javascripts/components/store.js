import CartDrawer from '../common/cartDrawer';
import { urlencodeFormData } from './utilities';

const Store = {
  openCartDrawer: true,
  openCartDrawerMobile: true,

  addItem: async function (form, parent, callback) {
    const _this = this;
    const btnComprar = parent.querySelector('[data-action="add-cart"]');
    const urlAdd = '/carrinho/adicionar';
    const formData = urlencodeFormData(new FormData(form));
    const boxResponse = parent.querySelector(
      '[data-form-product] .msg-response:not(.resp-validate)'
    );

    // console.info('addItem');
    // console.info(formData);

    if (!btnComprar.classList.contains('-adding')) {
      btnComprar.classList.add('-adding');

      try {
        const response = await fetch(urlAdd, {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.0',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: formData,
        });

        const html = await response.text();

        console.log('success');

        if (typeof callback == 'function') {
          callback('produto-adicionado', html, boxResponse, form);
        } else {
          _this.addItemResult('produto-adicionado', html, boxResponse, form);
        }
      } catch (error) {
        console.log('error');
        console.error(error);

        if (typeof callback == 'function') {
          callback('erro-adicionar', error, boxResponse, form);
        } else {
          _this.addItemResult('erro-adicionar', error, boxResponse, form);
        }
      }

      btnComprar.classList.remove('-adding');
    }
  },
  deleteItem: async function (itemId, item, removeItemResult) {
    const _this = this;

    if (!item.classList.contains('-removing')) {
      item.classList.add('-removing');

      try {
        const response = await fetch('/carrinho', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _method: 'delete',
            item_id: itemId,
          }),
        });

        console.log('success');

        if (window.innerWidth > 768) {
          if (_this.openCartDrawer) {
            CartDrawer.updateCartCount();
          }
        } else {
          if (_this.openCartDrawerMobile) {
            CartDrawer.updateCartCount();
          }
        }

        if (typeof removeItemResult == 'function') {
          removeItemResult(item);
        }
      } catch (error) {
        console.log('Erro ao remover item do carrinho');
        console.log(error);
      }

      item.classList.remove('-removing');
    }
  },
  validateFormProduct: function (form) {
    // VALIDA O FORM DE PRODUTO PARA VER SE O PRODUTO PODE SER ADICIONADO
    var btnComprar = form.querySelector('[data-action="add-cart"]');
    var validated = true;
    var errors = [];

    if (btnComprar.dataset.available == 'false') {
      validated = false;
      errors.push('');
    } else {
      //  verifica se o sku foi selecionado
      if (form.querySelector('[name="sku"]').value == '') {
        validated = false;
        errors.push('Selecione um atributo para o produto');
      }

      //  verifica se a quantidade é válida
      if (form.querySelector('input[name="quantity"]').value <= 0) {
        validated = false;
        errors.push('Quantidade indisponível');
      }
    }

    return { validated, errors };
  },
  setRespValidateProduct: function (resp, form, boxResponse) {
    let htmlErrors = '';

    if (resp.validated) {
      boxResponse.innerHTML = '';
    } else {
      for (var i = resp.errors.length - 1; i >= 0; i--) {
        htmlErrors += '<span class="msg error">' + resp.errors[i] + '</span>';
      }
      boxResponse.innerHTML = htmlErrors;
    }
  },
  addItemResult: function (typeResult, result, boxResponse, form) {
    const _this = this;

    if (typeResult == 'produto-adicionado') {
      const btnComprar = form.querySelector('[data-action="add-cart"]');

      if (btnComprar) btnComprar.classList.add('success');

      setTimeout(function () {
        if (btnComprar) btnComprar.classList.remove('success');
        if (btnComprar) btnComprar.innerHTML = btnComprar.dataset.textAvailable;
      }, 3500);

      CartDrawer.updateCartCount();

      if (window.innerWidth > 768) {
        if (_this.openCartDrawer) {
          CartDrawer.show();
        } else {
          setTimeout(() => {
            window.location.href = urlCart;
          }, 150);
        }
      } else {
        if (_this.openCartDrawerMobile) {
          CartDrawer.show();
        } else {
          setTimeout(() => {
            window.location.href = urlCart;
          }, 150);
        }
      }

      // Verifica se há popup de compra rápida ativo. Se tiver, fecha ele, retirar ou comentar se não for utilizado
      const popupPurchase = document.querySelector('[data-popup-purchase]');
      if (popupPurchase != null) {
        if (popupPurchase.classList.contains('-active')) {
          popupPurchase.querySelector('[data-close-popup-purchase]').click();
        }
      }
    } else if (typeResult == 'erro-adicionar') {
      if (typeof boxResponse != 'undefined' && boxResponse.length > 0) {
        window.scrollTo({
          top: boxResponse.offsetTop,
          behavior: 'smooth',
        });

        boxResponse.classList.add('error');
        boxResponse.classList.remove('success');
        boxResponse.querySelector('span').innerHTML =
          'Ocorreu um erro, tente novamente.';
      }
    }
  },
};

export default Store;
