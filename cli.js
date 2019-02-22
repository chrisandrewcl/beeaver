import path from 'path';

const [,, command, ...args] = process.argv;
const scriptsRoot = path.resolve(__dirname, './scripts');

if (!command) {
  console.info(`
Usage: beeaver <command>

where <command> is one of:
  init
  start
  dev
  db:models
  db:seed
  controllers
  routes
  clear
  `);

  process.exit();
}

const namespacedCmd = path.join(scriptsRoot, ...command.split(':'));

import(namespacedCmd)
  .then((cmd) => {    
    if (!args.length) {
      try {
        cmd.default();
      } catch (err) {
        console.error(err);
      }
    }
    else {
      console.error(`${command} accept no arguments`);
    } 
  })
  .catch((err) => console.error(`beeaver: '${command}' is not a valid command.`));