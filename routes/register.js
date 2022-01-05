const router = require('express').Router();

router.post('/', (req, res)=>{
    res.send('Registration view');
});

module.exports = router;