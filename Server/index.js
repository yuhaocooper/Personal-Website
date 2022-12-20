const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userModel = require("./models");
const assert = require('assert')

const app = express();
const port = 4000;

app.use(cors());

// enables environment variables by
// parsing the .env file and assigning it to process.env
dotenv.config({
    path: "./.env",
  });

mongoose.connect(`mongodb://${process.env.environment}:${process.env.port}`).then(() => {
    console.log("Connected successfully")
}, err => {
    console.log("error", console.error.bind(console, "connection error: "))
})

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//############################################################## CLIENT API ############################################################################
app.get('/', async(req,res) =>{
    res.send("Welcome to yuhaocooper.com")
})

//Db testing endpoint
app.get('/details', async (req, res) => {
    // const user = await userModel.findOne({id: 123});
    const user = await userModel.find({});
    res.send(user);
});
//############################################################## CLIENT API ############################################################################

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))