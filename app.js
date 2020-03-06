const express = require('express');
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const fs = require('fs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const app = express();

app.use((request, response) => {
    response.json({ message: 'Hey! This is your server response!' });  
});

module.exports = app;