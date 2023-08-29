//addImports

const Page = {
  capturaDeLeads: function () {
    $('[data-webform]').on('submit', function (event) {      
      const form = $('[data-webform=leads]');

      event.preventDefault();
      
      const honeyPot = $(this).find('[name="vnda"]');

      if (honeyPot.length > 0) {
        if (honeyPot.val() != '') {
          console.info('ROBOT DETECTED');
          return false;
        }
      }
    });
  },
  init: function () {
    var _this = this;
    //calls
    _this.capturaDeLeads();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Page.init()
})
