const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../db/keys");
const opts = {};

/* Mark's Comments
This is our passport.js, which handles the authtoken stuff.
We are using a JWTToken strategy. I'm really not sure what that means.

 */
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
    passport.serializeUser((user, done) => {
        console.log('=== serialize ... called ===')
        console.log(user) // the whole raw user object!
        console.log('---------')
        done(null, { _id: user._id })
    })

    passport.deserializeUser((id, done) => {
        console.log('DEserialize ... called')
        User.findOne(
            { _id: id },
            'firstName lastName photos local.username',
            (err, user) => {
                console.log('======= DESERILAIZE USER CALLED ======')
                console.log(user)
                console.log('--------------')
                done(null, user)
            }
        )
    })
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
    passport.use(
        new GoogleStrategy(
            {
                clientID:"420851960111-fhomo6kgo1enmke21ouqv1fdos9lm4jm.apps.googleusercontent.com",
                clientSecret: "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",
                callbackURL: 'http://localhost:5000/auth/google/callback',
            },
            function(token, tokenSecret, profile, done) {
                // testing
                console.log('===== GOOGLE PROFILE =======')
                console.log(profile)
                console.log('======== END ===========')
                // code
                const id = profile.id;
                const gmail = profile.emails[0].value;
                console.log(gmail)
                console.log(id)
                User.findOne({ 'googleId': id }, (err, userMatch) => {
                    // handle errors here:
                    if (err) {
                        console.log('Error!! trying to find user with googleId')
                        console.log(err)
                        return done(null, false)
                    }
                    // if there is already someone with that googleId
                    if (userMatch) {
                        return done(null, userMatch)
                    } else {
                        // if no user in our db, create a new user with that googleId
                        const newGoogleUser = new User({
                            googleId: id,
                            email: gmail,
                            password: "GOOGLE",
                            pagecount: 0
                        })
                        // save this user
                        newGoogleUser.save((err, savedUser) => {
                            if (err) {
                                console.log('Error!! saving the new google user')
                                console.log(err)
                                return done(null, false)
                            } else {
                                return done(null, savedUser)
                            }
                        }) // closes newGoogleUser.save
                    }
                }) // closes User.findONe
            }
        )
    )
};