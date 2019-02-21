import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import ejs from 'ejs'
import config from '../../lib/ConfigLoader';

const ENV = process.env.NODE_ENV || "development";

let models = async () => {
  await mongoose.connect(config[ENV].database.url);
  let templatePath = path.join(process.cwd(), 'templates', 'model.ejs');
  let template;
  if( fs.existsSync(templatePath) ){
    template = fs.readFileSync(templatePath, 'utf8');
  }

  let collections = await mongoose.connection.db.listCollections().toArray();
  for (let i=0; i < collections.length; ++i ) {
    let one = await mongoose.connection.db.collection(collections[i].name).findOne();
    let schema = {};
    if(one){
      Object.keys(one).forEach((key) => {
        schema[key] = 'Schema.Types.Mixed';
      });
    }
    console.log(JSON.stringify(schema));
    let targetPath = path.join(process.cwd(), 'src', 'models', collections[i].name+'.js');
    let compiled = ejs.render(template, {
      name: collections[i].name,
      attributes: JSON.stringify(schema)
    });
    compiled = compiled.replace(/"/g, "").replace(/,/g, ",\n");
    fs.writeFileSync(targetPath, compiled)
  }
  mongoose.connection.close();
}

models()
