const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

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
// app.get('/post', (req, res) =>{
//     // res.write("written stuff <3");
//     console.log(res);
//     res.send("Dattebayo!");
// });
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/post', (req, res)=>{
    res.send("post request is recieved");
    console.log("post request is recieved");
    console.log(req.body);
});
app.get('/post', (req, res) => {
    res.send("get request is recieved");
    console.log("get request is recieved");
})

app.listen(8000, () => {
    console.log("This is logged stuff");
})
