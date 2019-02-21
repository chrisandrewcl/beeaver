import path from 'path';
import fs from 'fs';

let routes = [];

fs.readdirSync(__dirname).forEach(function (file) {
  if (file === 'index.js' || file === 'AuthConfig.js') return;
  routes = routes.concat(require(path.join(__dirname, file)));
});

module.exports = routes;
