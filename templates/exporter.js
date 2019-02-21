import path from 'path';
import fs from 'fs';

let Module = {};

fs.readdirSync(__dirname)
.forEach( (file) => {
  if (file === 'index.js') return;
  let className = file.replace('.js', '');
  Module[className] = require(path.join(__dirname, file));
} );

module.exports = Module;
