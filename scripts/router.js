import ejs from 'ejs';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

let controllersPath = path.join(process.cwd(), 'src', 'controllers');
let templatePath = path.join(process.cwd(), 'templates', 'routes.ejs');
let template;
if( fs.existsSync(templatePath) ){
  template = fs.readFileSync(templatePath, 'utf8');
}

console.log(fs.readdirSync(controllersPath));

fs.readdirSync(controllersPath).forEach( (controller) => {
  if(controller == 'index.js')
    return;
  controller = controller.replace('.js', '');
  let model = controller.replace('Controller', '');
  let key = '_id';
  let targetPath = path.join(process.cwd(), 'src', 'router', model+'Routes.js');
  let compiled = ejs.render(template, {
    controller: controller,
    key: key,
    model: model
  });
  console.log(compiled);
  fs.writeFileSync(targetPath, compiled)

});
