const path = require('path');
const current_project = path.basename(__dirname);
const basePath = `../${ current_project }/node_modules`;

module.exports = {
  modules: [
    {'jquery': {
      'files': [
        `${basePath}/jquery/dist/jquery.min.js`,
      ]
    }},
    {'vue': {
      'files': [
        `${basePath}/vue/dist/vue.min.js`
      ]
    }},
    {'vanilla-lazyload': {
      'files': [
        `${basePath}/vanilla-lazyload/dist/lazyload.min.js`
      ]
    }}
  ]
}
