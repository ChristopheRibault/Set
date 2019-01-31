// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : process.env.DB_PASS,
      database : 'Set'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'd2brm1hebdiviq',
      user:     'wskyglevrpwdlm',
      password: process.env.DB_PASS,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }

};
