# beeaver

A boilerplate that helps build RESTful APIs fastly and
with a easily to custom project.
Powered by node+hapi+mongoose.

## What is done

For now we have a collection of scripts and base classes that are used to create
the initial API structure.
To see how it works you just need to clone the repository and run the following commands to check
how the project is built step-by-step:
- **npm install**: install the dependencies packages.
- **npm run init**: create the initial directory structure and copy the base files to run the server.
- **npm run db:seed**: scan the `/seed` directory and for each .json file inside this directory it
seeds the database collection with the elements from the file.
- **npm run db:models**: scan the database and create a model file for each collection from the
database. It fills the schema with the attributes of an element randomly selected with `findOne()` command.
- **npm run controllers**: create a base controller with CRUD operations for each model file.
- **npm run routes**: create a router with routes for each CRUD operation for each controller file.


## TODO

The intention is to move the base files to a package and the scripts as a cli tool.
The cli tool features will be:

### beeaver create <project_name>
Creates the main project dir structure and main files with configurations
and integrations for the builders.

*TODO based on current npm init script*
- migrate to cli
- get <project_name> param
- get port, database_url and other config params

### beeaver new option <name>
Generates a new file of the tipe option with name <name>.
The options that can be generated are:
- seed
- model
- controller
- router

*TODO*
- everything to be done

### beaver db:seed
Creates and populate mongo collections based on seed files.

*TODO based on current npm db:seed*
- migrate to cli


### beaver db:models
Generates models files based on data from mongo collections.
The schema is generated based on one element from the collection and it may
be not conscicious if this element is not the best.

*TODO based on current npm db:models*
- migrate to cli


### beaver controllers
Generates controllers based on models from directory `src/models`

*TODO based on current npm controllers*
- migrate to cli


### beaver routes
Generates routes based on controllers from directory `src/controllers`

*TODO based on current npm routes*
- migrate to cli


### other interesting features

-[] base authentication
-[] base logger
