const router = require('express').Router();
const League = require('../models/League');

router.get('/', (req, res) => {
    res.send('This is your League!');
});

module.exports = router;