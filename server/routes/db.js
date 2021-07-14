const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");


async function update(item, req){
    const filter = { email: "req.body.email" };
    const options = { upsert: true };
    // create a document that sets the plot of the movie
    const mail = req.body.email;
    let user = await User.findOne({
        mail
    });
    const query = { email: mail };
    const updateDocument = {
      $push: {"products": item }
    };
    const result = await user.updateOne(query, updateDocument);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    return
}

router.post("/insert" , function(req,res,next){
    var item = {
        name : req.body.name,
        price : req.body.price,
        item_n : req.body.itemNumber,
    }
    let result = update(item , req);
    return result;
});
