const express = require('express');
const router = express.Router();

//importing routes
const loginRoute = require('../routes/login');
const registerRoute = require('../routes/register');
const leagueRoute = require('../routes/league');

router.get('/', (req, res) =>{
    res.send('Welcome to your league!');
});
//Route Middlewares
router.use('/login', loginRoute);
router.use('/register', registerRoute);
router.use('/league', leagueRoute);

module.exports = router;