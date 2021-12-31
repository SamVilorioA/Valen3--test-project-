const router = require('express').Router();
const League = require('../models/League');

//ROUTES
    router.get('/', (req, res) => {
        res.send('This is your League!');
    });
    //Register league
    router.post('/create', (req, res) =>{
        res.send('This is the create route');
    });
    //Update league info
    router.get('/update', (req, res) =>{
        res.send('This is the update route');
    });
    //Delete league
    router.put('/delete', (req, res) =>{
        res.send('This is the delete route');
    });


module.exports = router;