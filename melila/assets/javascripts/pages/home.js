import setFullbanner from './home/fullbanner';
import setCarousel from '../components/carousel';
import setInstagram from './home/instagram';
//addImports

const Home = {
  init: function () {
    setFullbanner()
setCarousel();
setInstagram()
//calls
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Home.init()
})
