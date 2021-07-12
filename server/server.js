const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const user = require("./routes/user");

const app = express();

// const mongoDB = "mongodb+srv://cluster0.whhd7.mongodb.net/Trial_1";
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//     ()=>{
//         console.log("Database is connected!");
//     },
//     (err)=>{
//         console.log("Error in mongoose.connect : ", err);
//     }
// );
// var db = mongoose.connection;

// PORT
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded());

// Access the parse results as request.body
app.post('/post', (req, res)=>{
    res.send("this message is from server.js - post request is recieved");
    console.log("post request is recieved");
    console.log(req.body);
});

app.get('/post', (req, res) => {
    res.send("this message is from server.js - get request is recieved");
    console.log("get request is recieved");
})

app.listen(PORT, () => {
    console.log("Server has started listening at :" , PORT);
})
