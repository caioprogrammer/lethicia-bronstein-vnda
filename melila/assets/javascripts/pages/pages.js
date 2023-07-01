import setFaq from './pages/setFaq';
//addImports

const Page = {
  init: function () {
    var _this = this;
    setFaq()
//calls
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Page.init()
})
