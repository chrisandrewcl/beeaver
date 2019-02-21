import Hapi from 'hapi';
import mongoose from 'mongoose';
import config from './lib/ConfigLoader';
import routes from './src/router'

const ENV = process.env.NODE_ENV || "development";

console.log("routes", routes);
mongoose.connect(config[ENV].database.url).catch( (err) => {
    throw err;
});

let hapi_conf;

if(ENV == "production"){
  hapi_conf = {
    port: config[ENV].host.port,
    routes: {
      cors:  {
        origin: ['*'],
        additionalHeaders: ['x-auth-token', 'x-auth-user']
      },
      timeout: {
        server: 99999
      }
    }
  };
} else {
  hapi_conf = {
    host: 'localhost',
    port: config[ENV].host.port,
    routes: {
      cors:  {
        origin: ['*'],
        additionalHeaders: ['x-auth-token', 'x-auth-user']
      },
      timeout: {
        server: 99999
      }
    }
  };
}

const server = Hapi.server(hapi_conf);

server.route(routes);

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};



start();
