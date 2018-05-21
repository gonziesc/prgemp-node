const express = require('express'),
    bodyParser = require('body-parser'),
    sequelize = require('./app/db'),
    routes = require('./app/routes'),
    config = require('./config'),
    models = require('./app/models'),
    User = require('./app/models/user'),
    Job = require('./app/models/job');

const app = express();
routes.init(app);
return sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return models.init().then(() => {
           return User.create({
                firstName: 'Gonza',
                lastName: 'Esc',
                username: 'gonziesc'
            }).then(user => {
                return Job.create({ name: 'trabajo', value: 5, userId: user.dataValues.id }).then(job => {
                    app.listen(8080);
                }
                );
            });
            app.listen(8080);

        })
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
