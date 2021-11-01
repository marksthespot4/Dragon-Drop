const express = require("express");
const router = express.Router();

var clientConnection; // shoul equal the return of mongo.connection.getClient(), since thats what we use in record.js

router.route("/add").post(function (req, response) {
    let myobj = {
        email: req.body.email,
        password: req.body.password,
        pagecount: req.body.pagecount,
    };
    clientConnection.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});