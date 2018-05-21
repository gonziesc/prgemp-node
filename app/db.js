const Sequelize = require('sequelize'),
  db = require('../config').database;

const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host,
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  });

module.exports = sequelize;