const express = require('express'),
    bodyParser = require('body-parser'),
    sequelize = require('./app/db'),
    dotenv = require('dotenv').config(),
    routes = require('./app/routes'),
    config = require('./config');

const app = express();
routes.init(app);
return sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(8080);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
