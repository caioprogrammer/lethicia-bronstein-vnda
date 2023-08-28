import Store from './store';

import { formatMoney } from '../components/utilities';

const GroupShop = {
  products: document.querySelectorAll('[data-prod-group-shop]'),
  selectedProducts: [],

  //Marca/desmarca o produto para adição
  handleSelection: function (currentProduct) {
    const { selectedProducts, addItemToBuy, removeItem } = GroupShop;

    if (selectedProducts.length > 0) {
      const match = selectedProducts.filter((product) => {
        return product.ref == currentProduct.getAttribute('data-prod-ref');
      });

      if (match.length == 0) {
        addItemToBuy(currentProduct);
      } else {
        removeItem(currentProduct);
      }
    } else {
      // Sem produto nenhum, adicionar normalmente o primeiro
      addItemToBuy(currentProduct);
    }
  },

  // Adiciona item na array para adição futura
  addItemToBuy: function (product) {
    const ref = product.getAttribute('data-prod-ref');

    const price = Number(product.getAttribute('data-price'));
    const salePrice = Number(product.getAttribute('data-sale-price'));
    const available = product.getAttribute('data-available');
    const discountPercent = product.getAttribute('data-discount-percent');

    // Muda sinalização do botão
    const button = product.querySelector('.add-to-group');
    if (button) button.classList.add('-group-selected');

    // Adiciona produto na array
    GroupShop.selectedProducts.push({
      productEl: product,
      ref,
      price,
      salePrice,
      available,
      discountPercent,
    });

    // Atualiza Preço
    GroupShop.updateFinalPrice();
  },

  // Remove item da array para adição futura
  removeItem: function (product) {
    for (let index = 0; index < GroupShop.selectedProducts.length; index++) {
      const selectedProduct = GroupShop.selectedProducts[index];

      if (selectedProduct.ref == product.getAttribute('data-prod-ref')) {
        // Muda sinalização do botão
        const button = product.querySelector('.add-to-group');
        if (button) button.classList.remove('-group-selected');

        // Remove produto da array de adição
        GroupShop.selectedProducts.splice(index, 1);
        break;
      }
    }

    // Atualiza Preço
    GroupShop.updateFinalPrice();
  },

  // Atualiza exibição de valores
  updateFinalPrice: function () {
    const { selectedProducts } = GroupShop;
    const purchaseWrapper = document.querySelector('.group-shop .purchase');

    if (selectedProducts.length == 0) {
      if (purchaseWrapper) purchaseWrapper.classList.add('-hidden');
    } else {
      document.querySelector('.group-shop .purchase').classList.remove('-hidden');

      let priceTotal = 0.0;
      let salePriceTotal = 0.0;
      let discountTotal = 0;
      let unavailableProducts = 0;

      // Soma os valores dos produtos selecionados, já considerando se tem desconto informado
      //e se a variante escolhida está disponível ou não

      selectedProducts.forEach((product) => {
        const prodPrice = parseFloat(product.productEl.getAttribute('data-price'));
        const salePrice = parseFloat(product.productEl.getAttribute('data-sale-price'));
        const available = product.productEl.getAttribute('data-available');

        if (available === 'false') {
          unavailableProducts++;
        } else {
          if (prodPrice != salePrice) {
            priceTotal = priceTotal + prodPrice;
            salePriceTotal = salePriceTotal + salePrice;
          } else {
            priceTotal = priceTotal + prodPrice;
            salePriceTotal = salePriceTotal + prodPrice;
          }
        }
      });

      if (priceTotal !== salePriceTotal) {
        discountTotal = 100 - (salePriceTotal * 100) / priceTotal;
      }

      // Exibe os valores finais calculados em tela
      const textEl = document.querySelector('.group-shop .purchase .text');
      const priceEl = document.querySelector('.group-shop .purchase .price-group');
      const totalProducts = selectedProducts.length - unavailableProducts;

      textEl.innerText = `Compre os ${totalProducts} produtos por`;
      priceEl.innerText = formatMoney(salePriceTotal);

      if (discountTotal != 0) {
        document.querySelector('.discount-wrapper').classList.remove('-hidden');

        const originalPriceEl = document.querySelector('.group-shop .purchase .original-price');
        const discountEl = document.querySelector('.group-shop .purchase .discount-percent');
        const warning = document.querySelector('.group-shop .purchase .warning');
        originalPriceEl.innerText = formatMoney(priceTotal);
        discountEl.innerText = `-${discountTotal.toFixed(2)}%`;

        if (unavailableProducts > 0) {
          warning.innerText = `Atenção! ${unavailableProducts} ${
            unavailableProducts > 1 ? 'produtos estão indisponíveis' : 'produto está indisponível'
          } `;
        } else {
          warning.innerText = '';
        }
      }
    }
  },

  // Adiciona os produtos selecionados e o produto principal
  addProducts: async function () {
    const btnComprar = document.querySelector('[data-group-shop-add]');
    const mainForm = document.querySelector('[data-form-product-group-shop]');

    let data = {
      items: [],
    };

    // Produtos selecionados no compre junto
    for (let index = 0; index < GroupShop.selectedProducts.length; index++) {
      const product = GroupShop.selectedProducts[index].productEl;
      const sku = product.querySelector('input[name="sku"]').value;
      const available = product.getAttribute('data-available');

      if (available === 'true') {
        data.items.push({
          sku: sku,
          quantity: 1,
        });
      }
    }

    const json_data = JSON.stringify(data);

    // Produto principal da página
    const purchaseWrapper = document.querySelector('.purchase');
    const boxResponse = purchaseWrapper.querySelector('.msg-response');

    if (!btnComprar.classList.contains('-adding')) {
      btnComprar.classList.add('-adding');

      try {
        const response = await fetch('/carrinho/adicionar/kit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: json_data,
        });

        if (response.ok) {
          console.log('success');
          const html = await response.text();
          Store.addItemResult('produto-adicionado', html, boxResponse, mainForm);
        } else {
          console.log('error');
          console.error(`Erro ao adicionar os produtos do compre junto. Status ${response.status}`);
          Store.addItemResult('erro-adicionar', null, boxResponse, mainForm);
        }
      } catch (error) {
        console.error('Erro ao enviar os produtos do compre junto.');
        console.error(error);
        Store.addItemResult('erro-adicionar', null, boxResponse, mainForm);
      }

      btnComprar.classList.remove('-adding');
    }
  },

  init: function () {
    const { products, handleSelection, addProducts } = GroupShop;

    if (products.length > 0) {
      products.forEach((product) => {
        // Adiciona todos os produtos no compre junto no load da loja
        handleSelection(product);

        // Lida com o clique no botão de adicionar/remover produto do compre junto
        const button = product.querySelector('.add-to-group');
        if (button) {
          button.addEventListener('click', () => {
            handleSelection(product);
          });
        }

        // Lida com o evento de atualização de preço
        product.addEventListener('vnda:group-shop-price-update', () => {
          GroupShop.updateFinalPrice();
        });
      });

      // Lida com o botão de adicionar os produtos do compre junto no carrinho
      document.querySelector('[data-group-shop-add]').addEventListener('click', () => {
        addProducts();
      });
    }
  },
};

export default GroupShop;
