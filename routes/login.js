const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {validateLogin} = require('../validations/login');

router.post('/', (req, res) =>{
    const {error} = validateLogin(req.body);
    if(error) return res.status(400).send(error.details[0].message);
});
module.exports = router;