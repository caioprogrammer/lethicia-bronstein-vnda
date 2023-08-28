import { serializeArray } from '../components/utilities';

const Webforms = {
  submitWebForm: async function (form, email) {
    const formData = serializeArray(form);
    const textBtnDefault = form.querySelector('.action').innerHTML;

    if (typeof email == 'undefined' || email == '') {
      email = form.querySelector('[name="email"]').value;
    }

    form.querySelector('[name="reply_to"]').value = email;

    if (!form.classList.contains('sending')) {

      form.classList.add('sending');
      form.classList.remove('error');
      form.querySelector('.action').innerHTML = 'Enviando';

      try {
        const response = await fetch('/webform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: formData
        })

        if (response.ok) {
          console.info('Formulário enviado com sucesso');
          form.classList.add('sent');
          form.querySelector('.msg-success').classList.add('-visible');
          form.querySelector('.action').innerHTML = 'Enviado';
          form.reset();

          setTimeout(function () {
            form.classList.remove('sent');
            form.querySelector('.msg-success').classList.remove('-visible');
            form.querySelector('.action').innerHTML = textBtnDefault;
          }, 3500);
        } else {

          const text = await response.text();

          console.error(`Ocorreu um erro no envio do formulário. Erro ${response.status}`);
          console.error(text);

          form.classList.add('error');
          form.querySelector('.msg-error').classList.add('-visible');
          form.querySelector('.action').innerHTML = 'Falha ao enviar';

          setTimeout(function () {
            form.classList.remove('error');
            form.querySelector('.msg-error').classList.remove('-visible');
            form.querySelector('.action').innerHTML = textBtnDefault;
          }, 3500);

        }

      } catch (error) {
        console.error('Erro ao enviar o webform');
        console.error(error);

        form.classList.add('error');
        form.querySelector('.msg-error').classList.add('-visible');
        form.querySelector('.action').innerHTML = 'Falha ao enviar';

        setTimeout(function () {
          form.classList.remove('error');
          form.querySelector('.msg-error').classList.remove('-visible');
          form.querySelector('.action').innerHTML = textBtnDefault;
        }, 3500);
      }

      form.classList.remove('sending');
    }
  },
  submitNotify: async function (form) {
    const formData = serializeArray(form);
    const btnTextDefault = form.querySelector('.action').innerHTML;

    if (!form.classList.contains('sending')) {

      form.classList.remove('error');
      form.classList.add('sending');
      form.querySelector('.action').innerHTML = 'Enviando';

      try {

        const response = await fetch('/lista_de_espera', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: formData
        })

        if (response.ok) {
          form.classList.remove('sending');
          
          // Envia um webform de aviso de cadastro
          console.log('Lista de espera enviada com sucesso');
          Webforms.submitWebForm(form);

        } else {
          const text = await response.text();
          console.error(`Ocorreu um erro ao enviar o formulário de Lista de Espera. Erro ${response.status}`)
          console.error(text);

          form.classList.add('error');
          form.querySelector('.msg-error').classList.add('-visible');
          form.querySelector('.action').innerHTML = 'Falha ao enviar';

          setTimeout(() => {
            form.classList.remove('error');
            form.querySelector('.msg-error').classList.remove('-visible');
            form.querySelector('.action').innerHTML = btnTextDefault;
          }, 3500);
        }

      } catch (error) {
        console.error('Falha ao enviar lista de espera. Verificar integração.');
        console.error(error);

        form.classList.add('error');
        form.querySelector('.msg-error').classList.add('-visible');
        form.querySelector('.action').innerHTML = 'Falha ao enviar';

        setTimeout(() => {
          form.classList.remove('error');
          form.querySelector('.msg-error').classList.remove('-visible');
          form.querySelector('.action').innerHTML = btnTextDefault;
        }, 3500);
      }

      form.classList.remove('sending');
    }
  },
  showMessage: function (input, form) {
    const alertMessage = form.querySelector('[data-msg]');

    alertMessage.classList.add('-visible');
    alertMessage.innerText = 'Preencha os campos obrigatórios';

    input.classList.add('-emphasis')

    setTimeout(() => {

      alertMessage.classList.remove('-visible');
      alertMessage.innerText = '';

      input.classList.remove('-emphasis')

    }, 2000)

  },
  validateForm: function (vndaInput, form) {
    let submitAllowed = true;

    // Permite o envio se o input vnda estiver vazio
    if (vndaInput.value == '') {
      vndaInput.setAttribute('required', false);

      // Valida se os campos obrigatórios estão preenchidos
      const requiredFields = form.querySelectorAll('[required]:not([required=false])');
      requiredFields.forEach(input => {

        if (input.value == '') {
          submitAllowed = false;
          Webforms.showMessage(input, form);
        }

        if (input.type == 'checkbox' && input.checked == false) {
          submitAllowed = false;
          Webforms.showMessage(input, form);
        }

      })

      if (submitAllowed) form.id == 'form-notify' ? Webforms.submitNotify(form) : Webforms.submitWebForm(form)
    }
  },
  setWebForms: function () {
    const webForms = document.querySelectorAll('[data-webform]');

    webForms.length > 0 && webForms.forEach(form => {

      const button = form.querySelector('button');
      const fieldset = form.querySelector('fieldset');

      // Desabilita os campos do formulário, através do fieldset, quando o input vnda recebe algum valor 
      let vndaInput = form.querySelector('input[name="vnda"]');
      vndaInput.addEventListener('input', () => fieldset.setAttribute('disabled', true))

      // Realiza o envio através do clique e da tecla enter sobre o botão do formulário
      button && button.addEventListener('click', () => Webforms.validateForm(vndaInput, form));
      button && button.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') Webforms.validateForm(vndaInput, form);
      })

    })
  },
  init: function () {
    const _this = this;
    _this.setWebForms();
  },
};

export default Webforms;
