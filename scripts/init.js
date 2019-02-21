import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

let srcPath = path.join(process.cwd(), 'src');
let modelsPath = path.join(process.cwd(), 'src', 'models');
let controllersPath = path.join(process.cwd(), 'src', 'controllers');
let routerPath = path.join(process.cwd(), 'src', 'router');

let libPath = path.join(process.cwd(), 'lib');
let seedPath = path.join(process.cwd(), 'seed');

if( !fs.existsSync(srcPath) ){
  fs.mkdirSync(srcPath);
}

if( !fs.existsSync(modelsPath) ){
  fs.mkdirSync(modelsPath);
}

if( !fs.existsSync(controllersPath) ){
  fs.mkdirSync(controllersPath);
}

if( !fs.existsSync(routerPath) ){
  fs.mkdirSync(routerPath);
}

if( !fs.existsSync(libPath) ){
  fs.mkdirSync(libPath);
}

if( !fs.existsSync(seedPath) ){
  fs.mkdirSync(seedPath);
}

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'exporter.js'),
  path.join(process.cwd(), 'src', 'models', 'index.js')
);
fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'exporter.js'),
  path.join(process.cwd(), 'src', 'controllers', 'index.js')
);
fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'router.js'),
  path.join(process.cwd(), 'src', 'router', 'index.js')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'config.json'),
  path.join(process.cwd(), 'config.json')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'package.json'),
  path.join(process.cwd(), 'package.js')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', '.babelrc'),
  path.join(process.cwd(), '.babelrc ')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'index.js'),
  path.join(process.cwd(), 'index.js')
);


fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'lib', 'ConfigLoader.js'),
  path.join(process.cwd(), 'lib', 'ConfigLoader.js')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'lib', 'Controller.js'),
  path.join(process.cwd(), 'lib', 'Controller.js')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'lib', 'Model.js'),
  path.join(process.cwd(), 'lib', 'Model.js')
);

fs.copyFileSync(
  path.join(process.cwd(), 'templates', 'lib', 'Router.js'),
  path.join(process.cwd(), 'lib', 'Router.js')
);
