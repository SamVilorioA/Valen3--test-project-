const router = require('express').Router();
const League = require('../models/League');
const {registerValidation} = require('../validations/league');

//ROUTES
    router.get('/', (req, res) => {
        res.send('This is your League!');
    });
    //Register league
    router.post('/register', async (req, res) =>{
        //Validate data
        const {error} = registerValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const emailExists = await League.findOne({ email: req.body.email});
        if(emailExists) return res.status(400).send('Email Already taken!')
        const league = new League({
            name: req.body.name,
            founder: req.body.founder,
            manager: req.body.manager,
            foundingDate: req.body.foundingDate,
            phone: req.body.phone,
            colors: req.body.colors,
            location: req.body.location,
            email: req.body.email
        });
        try {
            const saveLeague = await league.save();
        } catch (error) {
            res.json({message: error});
        }
    });
    //Update league info
    router.patch('/:leagueId', async (req, res) =>{
        try {
            const updateLeague = await League.updateOne({_id: req.params.leagueId},)
        } catch (error) {
            
        }
    });
    //Delete league
    router.put('/delete', (req, res) =>{
        res.send('This is the delete route');
    });


module.exports = router;