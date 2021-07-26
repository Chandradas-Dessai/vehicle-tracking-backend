const env = require('./env');
const Sequelize = require('sequelize');
// const sequelize = new Sequelize(env.db_name, env.db_username, env.db_password, {
//     host: env.db_host,
//     dialect: env.db_dialect,
//     define: {
//         charset: 'utf8',
//         collate: 'utf8_general_ci',
//         timestamps: true
//     },
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    "dialectOptions": {
          "ssl": true
        },
   
    pool: {
      max: env.max,
      min: env.pool.min,
      acquire: env.pool.acquire,
      idle: env.pool.idle
    }
  });

module.exports = sequelize;