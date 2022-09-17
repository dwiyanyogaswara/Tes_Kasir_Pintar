const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const PORT = process.env.PORT || 8052;
const session = require('express-session');
const cors = require('cors');
const bodyparser = require('body-parser')
const routes = require('./routes/Routes')

app.use(cors());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.json())
app.use('/', routes)


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on http://localhost:"+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);