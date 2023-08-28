// ===============================================================
// ADIÇÃO MANUAL DE ASSET
// ===============================================================
// Usado para incluir assets no código de forma manual, conforme a necessidade
export function addAsset(source, onloadCallback) {

  if (!source || source === '') return console.error(`addAsset: caminho não definido.`)

  if (source.includes('.js')) {
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('src', source);

    if (onloadCallback && typeof onloadCallback === 'function') {
      scriptTag.onload = onloadCallback
    }

    return document.body.appendChild(scriptTag)

  } else if (source.includes('.css')) {
    const linkTag = document.createElement('link')
    linkTag.setAttribute('rel', 'stylesheet')
    linkTag.setAttribute('type', 'text/css')
    linkTag.setAttribute('href', source)
    return document.head.appendChild(linkTag)

  } else {
    const error = `addAsset: Erro ao criar o asset. Tipo de script não definido, ou não possui tratamento para este tipo de asset.`
    return console.error(error, source)
  }
}

// ===============================================================
// BUSCA O CARRINHO ATIVO
// ===============================================================
export async function getCart() {
  try {
    const response = await fetch('/carrinho');
    const cart = await response.json();
    return cart;
  } catch (error) {
    console.error('Erro ao buscar os dados do carrinho');
    console.error(error);
  }
}

// ===============================================================
// SERIALIZE ARRAY
// ===============================================================
export function serializeArray(form) {

  const formData = new FormData(form);
  const data = {};

  for (const [name, value] of formData) {
    data[name] = value
  }

  const formBody = [];

  for (const key in data) {
    const encodeKey = encodeURIComponent(key)
    const encodeValue = encodeURIComponent(data[key])
    formBody.push(`${encodeKey}=${encodeValue}`)
  }

  return formBody = formBody.join('&')
  
}

// ===============================================================
// URL ENCODE FORM DATA
// ===============================================================
export function urlencodeFormData(formData) {
  let string = '';

  function encode(s) {
    return encodeURIComponent(s).replace(/%20/g, '+');
  }

  for (const pair of formData.entries()) {
    if (typeof pair[1] == 'string') {
      string += (string ? '&' : '') + encode(pair[0]) + '=' + encode(pair[1]);
    }
  }
  return string;
}

// ===============================================================
// SLIDE TOGGLE
// ===============================================================
export function slideToggle(contentWrapper, content, duration = 500) {
  let initialHeight = window.getComputedStyle(contentWrapper).height;

  if (initialHeight == '0px') {
    return slideDown(contentWrapper, content, duration);
  } else {
    return slideUp(contentWrapper, duration);
  }
}

// ===============================================================
// SLIDE UP
// ===============================================================
export function slideUp(contentWrapper, duration = 500) {
  contentWrapper.style.height = '0px';
  contentWrapper.style.transition = `height ${duration} ease`;
}

// ===============================================================
// SLIDE DOWN
// ===============================================================
export function slideDown(contentWrapper, content, duration = 500) {
  let innerHeight = content.clientHeight;

  contentWrapper.style.height = `${innerHeight}px`;
  contentWrapper.style.transition = `height ${duration} ease`;
}

// ===============================================================
// UPDATE DISCOUNT IN PRODUCT BLOCK
// ===============================================================
export function updatePriceBlock() {
  const priceEls = document.querySelectorAll('[data-init-price]');

  if (priceEls == null) return;

  priceEls.forEach((priceEl) => {
    const discount = priceEl.dataset.discountPercent;

    priceEl.dispatchEvent(new Event('change'));

    // discount
    if (discount != '0') {
      priceEl.style.setProperty('--discount', `'-${discount}%'`);
    }
  });
}

// ===============================================================
// PREÇO POR AJAX
// ===============================================================
export function getPriceProd() {
  var selectors = document.querySelectorAll('[data-update-price]');
  var attr = 'update-price';

  if (selectors.length() > 0) {
    selectors.forEach((selector) => {
      var prodId = selector.dataset(attr);
      var url = '/produto/preco/' + prodId;

      if (prodId != '' && prodId != null) {
        $.ajax({
          url: url,
          type: 'GET',
        })
          .done((resp) => {
            selector.innerHTML = resp;
          })
          .fail((resp) => {
            console.error(resp);
          });
      }
    });
  }
}

// ===============================================================
// DEBOUNCE
// ===============================================================
/*
  Debounce retorna uma função que enquanto continuar sendo chamada não é executada
  A função só será executada quando para de ser chamada por N milisegundos
  Útil para melhorar a performance de códigos que são executados muitas vezes por segundo, como o $(window).resize()

  Ex:
  
  $(window).resize(debounce(function() {
    // código a ser executado
  }, 500))
  
  No exemplo acima a função só será executada 500ms depois do último resize
  Abra o link abaixo e redimensione a janela branca e acompanhe o output do console
  Exemplo codepen: https://codepen.io/valkervieira/pen/oNgqyWY

  Um caso comum de uso é em lojas onde a seleção de um filtro na página de tag recarrega automáticamente a página
  Com o debounce o usuário pode escolher vários filtros rapidamente e a página só recarrega quando parar de escolher
*/

export function debounce(func, wait, immediate) {
  var timeout;
  immediate || (immediate = true);

  return function () {
    var context = this,
      args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

// ===============================================================
// THROTTLE
// ===============================================================
/*
  Throttle diminui a frequencia que uma função é executada
  Enquanto no debounce a função só é executada quando para de ser chamada, no throttle ela
  continua sendo executada só que em um intervalo mínimo de N milisegundos (default = 250)

  Ex:

  $(window).resize(throttle() {
    // código a ser executado
  }, 500)

  No exemplo acima a função resize é chamada várias vezes por segundo mas só é executada 1 vez a cada 500ms
  Abra o link abaixo, redimensione a janela branca e acompanhe o console
  Exemplo codepen: https://codepen.io/valkervieira/pen/yLyKEPW

  Um caso comum de uso é checar se o scroll passou de um determinado ponto, para fixar um header ou alterar algum elemento do DOM
*/
export function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
      args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// ===============================================================
// FORMAT MONEY
// ===============================================================
export function formatMoney(value) {
  // FORMATA UM VALOR
  return (
    'R$ ' +
    value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
  );
}

// ===============================================================
// FORMAT VALUE
// ===============================================================

export const formatValue = function (value = '') {
  let parsedValue = value;
  if (typeof value === 'number') {
    parsedValue = value.toFixed(2).toString();
  }
  return parsedValue.replace('.', ',');
};

// ===============================================================
// VALIDA QUANTIDADE
// ===============================================================
export function validateQuantity(_val) {
  // VALIDA SE A QUANTIDADE INFORMADA É UM NÚMERO
  if (!isNaN(_val)) {
    if (parseInt(_val) > 0) {
      return true;
    }
  }

  return false;
}

// ===============================================================
// CLEAR NUMBER
// ===============================================================
export function getClearNumber(_val) {
  // RETORNA UM NÚMERO LIMPO COMO INT
  if (!isNaN(_val)) {
    var clearNumber = parseInt(_val);

    return clearNumber;
  }

  return false;
}
