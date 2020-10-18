require('module-alias/register');
require('dotenv').config();
require('@config/index');
const Nconf = require('nconf');
const { default: defaults } = require('@config/defaults');

const express = require('express');

const PORT = Nconf.get().PORT || 5000;

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => { console.log(defaults) });

module.exports = app;
