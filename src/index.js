require('dotenv').config();
require('module-alias/register');
const express = require('express');

const PORT = process.env.PORT || 5000;

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => { console.log('Server listening on port', PORT); });

module.exports = app;
