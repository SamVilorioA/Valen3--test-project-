const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//Importing routes
const appRoutes = require('./routes/appRoutes');
//const leagueRouter = require('./routes/league');


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log('Connected to DB'));

//Middleware for responses
app.use(express.json());

//Route middleware
app.use('/', appRoutes);

//Setting the port
app.listen(3000, () => console.log('Valen3 is up!'));