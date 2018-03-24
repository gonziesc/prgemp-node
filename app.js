const express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./app/routes');

const app = express();
routes.init(app);
app.listen(8080);
