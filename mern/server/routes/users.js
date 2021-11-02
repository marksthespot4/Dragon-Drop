const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../db/keys")

const User = require("../db/user.js")

// @route POST /routes/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) =>
{
    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({email: "Email already exists."});
        }
        else {
            const newUser = new User({
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })

        }
    })
});

//get a single user.
router.get("/get/:email", (req, res) =>
{
    User.findOne({email: req.params.email}).then(user => {
        if (user) {
            res.json(user);
        }
        else {
            return res.status(404).json({emailnotfound: "Email not found."});
        }
    })
});

//update user.
router.post("/update/:email", (req, res) =>
{
    User.findOne({email: req.params.email}).then(user => {
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found."});
        }
        else {
            user.email = req.body.email.toLowerCase();
            user.password = req.body.password;
            user.pagecount = req.body.pagecount;
            user.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        }
    })
})


// @route POST api/users/login
// @desc Login user and return JWT Token
// @access public
router.post("/login", (req, res) =>
{
    const email = req.body.email;
    const pw = req.body.password;

    User.findOne({ email }).then(user =>
    {
        if (!user)
        {
            return res.status(404).json({emailnotfound: "Email not found."});
        }
        else {
            bcrypt.compare(pw, user.password).then(isMatch => {
                if (isMatch)
                {
                    const payload = {
                    id:user.id,
                    name: user.name
                };

                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn:31556926
                        },
                        (err, token) =>
                        {
                            res.json({
                                success:true,
                                token: "Bearer " + token
                            });
                        }
                    );
                }
                else
                {
                    return res.status(400).json({passwordincorrect: "Pw incorrect"});
                }
            });

        }
    })
})

module.exports = router;