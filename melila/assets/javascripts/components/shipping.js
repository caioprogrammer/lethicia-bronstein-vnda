import { formatMoney, urlencodeFormData } from '../components/utilities';

const Shipping = {
  handleShipping: async function (form) {
    const sku = document.querySelector('[data-product-box] [name="sku"]').value;
    const quantity = document.querySelector(
      '[data-product-box] [name="quantity"]'
    ).value;
    const zip = form.querySelector('.input').value.replace('-', '');
    const buttonSubmit = form.querySelector('.action');

    if (zip.length != 8) {
      form.classList.add('error');
      form.querySelector('.msg-error').classList.add('-visible');
      form.querySelector('.msg-error').innerHTML = 'Formato de CEP inválido';
    } else {
      const formData = new FormData();

      formData.set('sku', sku);
      formData.set('quantity', quantity);
      formData.set('zip', zip);

      if (!form.classList.contains('-sending')) {
        form.classList.remove('-error');
        form.classList.add('-sending');
        buttonSubmit.classList.add('-sending');

        try {
          const response = await fetch('/frete_produto', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlencodeFormData(formData),
          });

          const data = await response.json();

          if (data.error) {
            console.error('Ocorreu um erro ao consultar o frete');
            console.error(data.error);

            form.classList.add('error');
            form.querySelector('.msg-error').classList.add('-visible');
            form.querySelector('.msg-error').innerHTML =
              'Ocorreu um erro ao calcular o frete, favor verifique seu cep.';

            setTimeout(function () {
              form.classList.remove('-error');
              form.querySelector('.msg-error').classList.remove('-visible');
              buttonSubmit.classList.remove('-sending');
            }, 3500);
          } else {
            const methods = JSON.parse(data.methods);
            const address = data.address_details;

            let result = `<h4 class="street">${address.street_name}, ${address.neighborhood} - ${address.city}/${address.state}</h4>`;

            result += '<ul class="shipping-list">';

            methods.forEach((method) => {
              let price = method.price;
              price = price == 0 ? 'Grátis' : formatMoney(price);

              result += `
                <li class="shipping-list-item">
                  <div class="method">
                    <p class="type">${method.name}</p>
                    <p class="price">${price}</p>
                  </div>
                  <span class="prazo">${method.description}</span>
                </li>
              `;
            });

            result += '</ul>';

            document.querySelector('[data-list-shipping]').innerHTML = result;
          }
        } catch (error) {
          console.error('Erro ao enviar dados para consulta de frete');
          console.error(error);
          form.classList.add('error');
          form.querySelector('.msg-error').classList.add('-visible');
          form.querySelector('.msg-error').innerHTML =
            'Ocorreu um erro ao calcular o frete, favor verifique seu cep.';
          buttonSubmit.classList.remove('-sending');
        }

        form.classList.remove('-sending');
        buttonSubmit.classList.remove('-sending');
      }
    }
  },

  init: function () {
    const _this = this;

    const form = document.querySelector('[name="shipping-form"]');
    const inputValue = form.querySelector('.input');

    inputValue.addEventListener('input', (event) => {
      const x = event.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,5})(\d{0,3})/);
      event.target.value = !x[2] ? x[1] : x[1] + '-' + x[2];
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      _this.handleShipping(form);
    });
  },
};

export default Shipping;
