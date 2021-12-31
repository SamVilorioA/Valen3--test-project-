const express = require('express');
const app = express();
const leagueRouter = require('./routes/league');

//Middleware for responses
app.use(express.json());

//Route middleware
app.use('/league', leagueRouter);

//Setting the port
app.listen(3000, () => console.log('Valen3 is up!'));