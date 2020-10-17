require('module-alias/register');
require('dotenv').config();
require('@config/index');
const Nconf = require('nconf')

const express = require('express');

const PORT = Nconf.get().PORT || 5000;

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/api', routes);

const displayObj = {}
Object.entries(Nconf.get()).forEach((obj)=>{
    if(obj[0].length>=3 && obj[0].substring(0,3)!=='npm'){
        displayObj[obj[0]]=obj[1];
    }
})

app.listen(PORT, () => { console.log(displayObj) });

module.exports = app;
