const User = require('./user'),
    Job = require('./job');

exports.init = () => User.sync({ force: true }).then(Job.sync({ force: true }))