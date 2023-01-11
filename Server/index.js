const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userModel = require("./models");
const assert = require('assert')

const app = express();

app.use(cors({
    origin: ['http://yuhaocooper.com', 'https://yuhaocooper.com', 'http://letocommerce.com', 'https://letocommerce.com', 'http://localhost:3000'  ]
}));

// enables environment variables by
// parsing the .env file and assigning it to process.env
dotenv.config({
    path: "./.env",
  });

mongoose.connect(`mongodb://${process.env.apiBaseUrl}:${process.env.dbport}`).then(() => {
    console.log("Connected successfully")
}, err => {
    console.log("error", console.error.bind(console, "connection error: "))
})

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//############################################################## SERVER API #############################################################################
app.get('/api/test', async(req,res) => {
    res.send('log from api')
})

app.post('/api/email', async(req,res) => {
    //Post to Apps Script
    fetch(process.env.emailLink, { //Make sure .env file contains 'emailLink' of the Google Sheet webapp
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
})

//############################################################## CLIENT API #############################################################################

//Mongodb testing endpoint
app.get('/details', async (req, res) => {
    // const user = await userModel.findOne({id: 123});
    const user = await userModel.find({});
    res.send(user);
});
//############################################################## CLIENT API #############################################################################

app.listen(process.env.serverport, () => console.log(`Hello world app listening on port ${process.env.serverport}!`))