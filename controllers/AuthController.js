const AuthModel = require("../models/AuthModel")
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const query = "SELECT * FROM Users WHERE username='"+req.body.username+"' AND password='"+req.body.password+"'"
        AuthModel.get(query,(err,data) => {
            if(err === 1){
                res.status(500)
                res.json(data)
            } else {

                const token = jwt.sign({_username:data[0].username,
                                        exp: Math.floor(Date.now() / 1000) + (60 * 10)}, 
                                        process.env.SECRET_TOKEN)

                res.header('auth-token', token)
                res.status(200)
                res.send('Login success!')
            }
        })

        
    } catch (error) {
        res.status(400).send("Error!")
    }
}
module.exports.login = login
