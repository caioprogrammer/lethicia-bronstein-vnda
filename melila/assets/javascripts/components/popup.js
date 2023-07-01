// Javascript genérico para qualquer popup que precise ser criado na loja

const Popup = {
  togglePopup: function (popupType) {
    document
      .querySelector(`[data-popup="${popupType}"].popup`)
      .classList.toggle('-open');
  },
  init: function () {
    var _this = this;

    var toggleButtons = document.querySelectorAll(
      '[data-action="toggle-popup"]'
    );

    // toggle popup
    toggleButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        let popupType = button.dataset.popup;

        _this.togglePopup(popupType);
      });
    });
  },
};

export default Popup;
