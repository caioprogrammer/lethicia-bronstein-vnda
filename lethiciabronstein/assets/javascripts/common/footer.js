const Footer = {
  handleSubmenu: function () {
    // toggle menu footer nivel 1
    const menus = document.querySelectorAll(
      '[data-action="toggle-menu-footer"]'
    );

    menus.forEach((menu) => {
      menu.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
    });
  },
  init: function () {
    const _this = this;

    _this.handleSubmenu();
  },
};

export default Footer;
