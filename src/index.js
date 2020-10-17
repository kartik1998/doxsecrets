require('module-alias/register');
require('dotenv').config();
require('@config/index');
const {ignoreDisplay} = require('@config/defaults');
const Nconf = require('nconf');

const express = require('express');

const PORT = Nconf.get().PORT || 5000;

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/api', routes);

const displayObj = {};
Object.entries(Nconf.get()).forEach((obj) => {
  const key = obj[0], value=obj[1];
  if (key.length >= 3 && key.substring(0, 3) !== 'npm' && !ignoreDisplay.includes(key)) {
    displayObj[key] = value;
  }
});

app.listen(PORT, () => { console.log(displayObj); });

module.exports = app;
