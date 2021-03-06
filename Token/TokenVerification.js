const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.header("Auth-Token");
    if(token) return res.status(401).send("Access Denied");
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}