const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();

mongoose.connect(`mongodb+srv://story:${process.env.PASSWORD}@cluster0.ocuowsl.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connexion mongoDb réussie'))
.catch(() => console.log('connexion à mongoDb échouée !'));

module.exports = app