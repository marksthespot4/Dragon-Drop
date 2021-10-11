const express = require("express");
const userRoutes = express.Router();
const bcrypt = require("bcyrptjs");
const dbo = require("../db/conn");

userRoutes.route("/login").post(function(req,res) {
    let db_connect = dbo.getDb();
    db_connect
        .collection("users")
        .findOne({  user: "lucycheng9@gmail.com"}) //add username from login
            .then(user => {
                console.log("User from login", user)
                if (!user) resizeBy.sendStatus(204);
                else {
                    bcrypt.compare(req.body.password, user.password) //add password from login
                        .then(passwordMatch => passwordMatch ? res.sendStatus(200): res.sendStatus(204));
                }
            });
});            