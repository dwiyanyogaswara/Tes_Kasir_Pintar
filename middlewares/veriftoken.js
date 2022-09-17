const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('auth-token')
    
    if(!token){
        return res.status(401).send('Access Denied!')
    }

    try {
        const verif = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verif
        next()

    } catch (error) {
        res.status(400).send('Invalid Token!')
    }
}

module.exports = auth