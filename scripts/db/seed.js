import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import config from '../../lib/ConfigLoader';

const ENV = process.env.NODE_ENV || "development";

const seedsPath = path.join(process.cwd(), 'seed');
const seedHistoryFile = path.join(process.cwd(), 'seed', '.seedHistory');

const seed = async () => {

  await mongoose.connect(config[ENV].database.url);

  let seedHistory = [];

  if( !fs.existsSync(seedsPath) ) {
    return "nothing to do";
  } else {
    if(fs.existsSync(seedHistoryFile))
      seedHistory = JSON.parse( fs.readFileSync(seedHistoryFile) );
    else seedHistory = [];
  }

  fs.readdirSync(seedsPath).forEach( (file) => {
      if (file === '.seedHistory') return;
      let collection = file.replace(".json", "");
      if(!seedHistory.includes(collection)){

        let seeds = JSON.parse(fs.readFileSync(path.join(seedsPath, file)));
        let created;
        if(!mongoose.connection.db.collection(collection))
          mongoose.connection.db.createCollection(collection);
        mongoose.connection.db.collection(collection).insertMany(seeds);
        seedHistory.push(collection);
      }
      fs.writeFileSync(seedHistoryFile, JSON.stringify(seedHistory));
  });
  mongoose.connection.close();
}

seed();
