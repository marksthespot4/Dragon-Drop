const crypto = require("crypto");   

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../db/keys")

const User = require("../db/user.js")
const ObjectId = require("mongodb").ObjectId;
const nodemailer = require('nodemailer');

/* Mark's comments
This is where user routes are made. Due to using mongoose models for users,
you'll have to do research to figure out the appropriate calls when doing
CRUD operations. Good luck!
 */

// @route POST /routes/users/register
// @desc Register user
// @access Public

router.get('/reset/', (req, res, next) => {
    // User.findOne({
    //     where: {
    //         resetPasswordToken: req.query.resetPasswordToken,
    //         resetPasswordExpires: {
    //         $gt: Date.now(),
    //         },
    //     },
    // }).then((user) => {
    User.findOne({resetPasswordToken: req.query.resetPasswordToken}).then((user) => {

        if (user == null) {
            res.status(200).send({
                // username: user.username,
                message: 'invalid-link',
            });
            // console.error('password reset link is invalid or has expired');
            // res.status(403).send({message: 'password reset link is invalid or has expired'});
        } else {
            if(user.resetPasswordExpires > Date.now()) {
                res.status(200).send({
                    username: user.email,
                    message: 'valid-link',
                });
            }
            else {
                res.status(200).send({
                    // username: user.username,
                    message: 'invalid-link',
                });
                // console.error('password reset link is invalid or has expired');
                // res.status(403).send({message: 'password reset link is invalid or has expired'});
            }

        }
    });
});

router.post("/forgotPassword", (req, res) =>
{
    User.findOne({email: req.body.email}).then((user) => {

        if(user) {
            //generate a unique hash token
            const token = crypto.randomBytes(20).toString('hex');

            //update the user with the token and set it to expire in 10 minutes

            // user.update({
            //     resetPasswordToken: token,
            //     resetPasswordExpires: Date.now() + 600000,
            // });

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 600000;
            user.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));

            const transporter = nodemailer.createTransport({
                service: 'gmail',

                //put credentials into an .env file later and include it in .gitignore
                // user: `${process.env.EMAIL_ADDRESSS}`,
                // pass: `${process.env.EMAIL_PASSWORD}`,
                auth: {
                    user: "dragonDropDoNotReply@gmail.com",
                    pass: "Dragondrop@2021",
                }
            });

            const mailOptions = {
                from: `dragonDropDoNotReply@gmail.com`,
                to: req.body.email,
                subject: `Password Reset Link`,
                text: `click the link below to change your password:\n\nhttp://localhost:3000/reset/${token}`,
            };

            transporter.sendMail(mailOptions, (err, response) => {
                if(err) {
                    //error
                }
                else {
                    //sent
                    console.log("email sent");
                }
            });
        }
        else {
            return res.status(403).json({email: "Email doesn't exist."});
        }
    })
    
});

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
                    console.log("NO ERROR IN REGISTER");
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
router.get("/get/email/:email", (req, res) =>
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

//get a single user.
router.get("/get/id/:id", (req, res) => {
    let myquery =  ObjectId( req.params.id );
    User.findById(myquery, function (err, user) {
        if (err) throw err;
        res.json(user);
        console.log(user);
    });
});

//update user.
router.post("/update/:email", (req, res) =>
{
    User.findOne({email: req.params.email}).then(user => {
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found."});
        }
        else {
            user.email = req.body.email;
            user.password = req.body.password;
            user.pagecount = req.body.pagecount;
            user.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
        }
    })
})

//update user by id instead
router.post("/update/id/:id", (req, res) =>
{
    let myquery =  ObjectId( req.params.id );
    User.findByIdAndUpdate(myquery).then(user => {
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found."});
        }
        else {
            user.email = req.body.email;
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