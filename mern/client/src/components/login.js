const express = require("express");
const userRoutes = express.Router();
const bcrypt = require("bcyrptjs");
let db = require("mongodb");

db_connect
    .collection("users")
    .findOne({  user: }) //add username from login
        .then(user => {
            console.log("User from login", user)
            if (!user) resizeBy.sendStatus(204);
            else {
                bcrypt.compare(password, user.password) //add password from login
                    .then(passwordMatch => passwordMatch ? res)
            }
        })