import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

let controllersPath = path.join(process.cwd(), 'src', 'models');
let templatePath = path.join(process.cwd(), 'templates', 'controller.ejs');
let template;
if( fs.existsSync(templatePath) ){
  template = fs.readFileSync(templatePath, 'utf8');
}


fs.readdirSync(controllersPath).forEach( (model) => {
  if(model == 'index.js')
    return;
  model = model.replace('.js', '');
  let targetPath = path.join(process.cwd(), 'src', 'controllers', model+'Controller.js');
  let compiled = ejs.render(template, {
    model: model
  });
  console.log(compiled);
  fs.writeFileSync(targetPath, compiled)

});
