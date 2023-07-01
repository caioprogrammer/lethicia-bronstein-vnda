import { setLogin } from '../components/vndaComponents';

const LoginPage = {
  init: function () {
    setLogin();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  LoginPage.init();
})
