import MmenuLight from 'mmenu-light';

const MenuMobile = {
  setMenuMobile: function () {
    const mmenuWrapper = document.querySelector('#mm-menu-mobile');
    const mmenu = new MmenuLight(mmenuWrapper);

    //precisa do navigation e do drawer
    const navigator = mmenu.navigation({
      title: 'Menu',
    });

    const drawer = mmenu.offcanvas();

    document
      .querySelector('[data-action="open-menu-mobile"]')
      .addEventListener('click', (e) => {
        e.preventDefault();

        drawer.open();
      });

    document
      .querySelector('[data-action="close-menu-mobile"]')
      .addEventListener('click', (e) => {
        e.preventDefault();

        drawer.close();
      });

    window.mmenu = drawer;
  },
  init: function () {
    const _this = this;

    _this.setMenuMobile();
  },
};

export default MenuMobile;
