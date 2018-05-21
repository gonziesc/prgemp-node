const sequelize = require('../db');
const Sequelize = require('sequelize');
const Job = require('./job');

const User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING
  }, {
    classMethods:{
        associate:function(models){
            User.hasMany(models.Job, { foreignKey: 'userId'} );
        }
    }
});

module.exports = User;
  