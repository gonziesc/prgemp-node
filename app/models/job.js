const sequelize = require('../db');
const Sequelize = require('sequelize');

const Job = sequelize.define('job', {
    name: Sequelize.STRING,
    value: Sequelize.INTEGER
  },
  {
    classMethods:{
        associate:function(models){
          Job.belongsTo(models.User, { foreignKey:'userId'} );
        }
    }
});
  

module.exports = Job;