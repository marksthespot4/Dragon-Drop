const express = require('express')
const router = express.Router()
const User = require('../db/user')
const passport = require("passport")
const jwt = require("jsonwebtoken");
const keys = require("../db/keys");

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'],}))
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'http://localhost:3000/',
        session: false
    }),
    function(req, res) {
        const user = req.user;
        const payload = {
            id:user.id,
            email: user.email
        };
        res.redirect("http://localhost:3000/user_page/" + user._id);
    }
)

module.exports = router