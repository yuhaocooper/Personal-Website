const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userModel = require("./models");

const app = express();
const port = 4000;

app.use(cors());

const options = {
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 5000 // Close sockets after 5 seconds of inactivity
};

mongoose.connect('mongodb://127.0.0.1:27017', options).then(() => {
    console.log("Connected successfully")
}, err => {
    console.log("error", console.error.bind(console, "connection error: "))
})

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/details', async (req, res) => {
    // const user = await userModel.findOne({id: 123});
    const user = await userModel.find({});
    res.send(user);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))