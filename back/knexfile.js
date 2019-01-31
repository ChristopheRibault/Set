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
    client: 'pg',
    connection: {
      host: 'ec2-54-228-212-134.eu-west-1.compute.amazonaws.com',
      database: 'd2brm1hebdiviq',
      user:     'wskyglevrpwdlm',
      port:     5432,
      password: '7465188c2d189112cfd1abba113a493ec85995ecdb2cd190a61d21732db499ef',
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  }

};
