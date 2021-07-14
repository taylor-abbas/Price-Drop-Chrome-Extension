const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const user = require("./routes/user");
const db = require("./routes/db");
const InitiateMongoServer = require("./config/db");
const app = express();


// command for mongo shell to connect to db 'mongo "mongodb+srv://cluster0.whhd7.mongodb.net/Trial1" --username taylor_abbas';
// const mongoDB = 'mongodb+srv://taylor_abbas:mongodb123@cluster0.whhd7.mongodb.net/Trial1';
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//     ()=>{
//         console.log("Database is connected!");
//     },
//     (err)=>{
//         console.log("Error in mongoose.connect : ", err);
//     }
// );
// var db = mongoose.connection;

InitiateMongoServer();

// PORT
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use("/user", user);
app.use("/db", db);

// Access the parse results as request.body
// app.post('/', (req, res)=>{
//     res.send("this message is from server.js - post request is recieved");
//     console.log("post request is recieved");
//     console.log(req.body);
// });

app.get('/', (req, res) => {
    res.send("this message is from server.js - get request is recieved");
    console.log("get request is recieved");
})

app.listen(PORT, () => {
    console.log("Server has started listening at :" , PORT);
})
