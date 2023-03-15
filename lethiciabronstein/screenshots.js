const captureWebsite = require('../cadastros/node_modules/capture-website');

const options = {
  fullPage: true,
  overwrite: true,
  timeout: 25,
  delay: 10,
  scaleFactor: 1,
  disableAnimations: true,
  hideElements: ['#component-popup-newsletter-root'],
  preloadFunction: 'setTimeout(() => lazyLoadInstance.loadAll(), 1500)',
  launchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
};

const storeUrl = 'https://template5.vnda.dev/';

const items = [
  [storeUrl, '01-geral'],
  [storeUrl, '02-home'],
  [storeUrl + 'produtos', '03-tag'],
  [storeUrl + 'produto/nome-do-produto-1-323', '04-produto'],
  [storeUrl + 'p/sobre-nos', '05-sobre'],
  [storeUrl + 'p/fale-conosco', '06-fale-conosco'],
  [storeUrl + 'p/onde-encontrar', '07-onde-encontrar'],
  [storeUrl + 'p/pagina-padrao', '08-pagina-padrao'],
];

(async () => {
  await Promise.all(
    items.map(([url, filename]) => {
      return captureWebsite.file(url, `./assets/images/prints/${filename}.png`, options);
    })
  );
})();
