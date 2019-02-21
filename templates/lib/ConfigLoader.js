import fs from 'fs';
import path from 'path';

let configFile = path.join(process.cwd(), 'config.json');
let config = {};

if( fs.existsSync(configFile) ){
  config =  JSON.parse( fs.readFileSync(configFile, 'utf8') );
} else {
  throw new Error('no config file found');
}

export default config;
