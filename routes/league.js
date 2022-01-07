const router = require('express').Router();
const League = require('../models/League');

//ROUTES
    router.get('/', (req, res) => {
        res.send('This is your League!');
    });
    //Register league
    router.post('/create', async (req, res) =>{
        const league = new League({
            name: req.body.name,
            founder: [req.body.founder],
            manager: [req.body.manager],
            foundingDate: req.body.foundingDate,
            phone: req.body.phone,
            colors: [req.body.colors],
            location: req.body.location,
            email: req.body.email
        });
        try {
            const savedLeague = await league.save();
        } catch (error) {
            res.json({message: error});
        }
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