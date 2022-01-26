const jwt = require('jsonwebtoken')

module.exports = function authenticate(req, res, next){

    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access Denied')

    try{
        const verified = jwt.verify(token, process.env.Token_secret)
        req.User = verified
        next();

    }catch(err) {
        res.status(400).send('invalid token')
    }
} 