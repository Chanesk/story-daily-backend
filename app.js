const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config()
const app = express();
const userRoutes = require('./routes/user');

mongoose.connect(`${process.env.CONNEXION_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connexion mongoDb réussie'))
.catch((error) => console.log(error.message));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

module.exports = app