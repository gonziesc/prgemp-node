const sequelize = require('../db');
const Sequelize = require('sequelize');

const Job = sequelize.define('job', {
    name: Sequelize.STRING,
    value: Sequelize.INTEGER
  });
  

module.exports = JOb;