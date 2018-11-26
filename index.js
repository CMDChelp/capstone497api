const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Router = require('./components/router');
const db = require('./components/db-connection');
const colors = require('colors');
require('./utils/error-logger');

//load files from either /build or /public folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({
    extended: true
}));

//allow json requests
app.use(bodyParser.json());

//allow access from any url - in production, lock this down to set number of origins
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//wait for database to start before launching API
db.start().then((con) => {

    //setup all API routes synchronously 
    Router.routes(app);

    //log that app has started up
    app.listen(8080, () => console.log(colors.bgCyan('Listening on port 8080!')));
});