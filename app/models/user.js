const sequelize = require('../db');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING
  });

module.exports = User;
  